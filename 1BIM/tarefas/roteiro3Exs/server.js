import fastify from "fastify";
import cors from "@fastify/cors";

const server = fastify()
const PORT = 3000;

server.register(cors, {
    origin: '*',
    methods: ['GET', 'POST', 'PATCH', 'DELETE', 'OPTIONS']
})

const tarefas = [
    {id: 1, descricao:"fazer compras"},
    {id: 2, descricao:"lavar o carro"},
    {id: 3, descricao:"estudar fastify"},
    {id: 4, descricao:"fazer o codigo funcionar"},
]

// --------------------------------------------------------------------------------------

//Filtros Combinados na rota de listagem

server.get('/tarefas', async (request, reply) => {
    const busca = request.query.busca 
    const concluido = request.query.concluido
    let resultado = tarefas

    if (busca){
        const tarefasFiltradas = resultado.filter(t => t.descricao.toLowerCase().includes(busca.toLowerCase()))
        return reply.send(tarefasFiltradas)
    } else if (concluido !== undefined) {
        const tarefasFiltradas = resultado.filter(tarefa => String(tarefa.concluido) === concluido)
        return reply.send(tarefasFiltradas)
    }

    return reply.send(resultado)

})

// Validacao no post

server.post('/tarefas', async (request, reply) => {
    const tarefa = request.body
    const descricao = request.body.descricao

    if (!descricao || typeof descricao !== 'string' || descricao.trim() === '') {
        return reply.status(400).send({ status: 'error', message: 'Descricao obrigatria e deve ser uma string não vazia' })
    }

    const novoId = tarefas.length > 0 ? tarefas[tarefas.length -1].id + 1 : 1
    const novaTarefa = { id: novoId, ...tarefa}

    tarefas.push(novaTarefa)
    return reply.status(201).send(novaTarefa)

})

// Rota de "Toggle" Concluir (PATCH)

server.patch('/tarefas/:id/concluir', async (request,reply) => {
    const id = Number(request.params.id)

    const index = tarefas.findIndex(t => t.id === id)

    if (index === -1) {
        return reply.status(404).send({status: 'error', message:'Tarefa não encontrada'})
    }

    tarefas[index].concluido = !Boolean(tarefas[index].concluido)

    return reply.send(tarefas[index])
})

// Rota de Estatísticas/Resumo (GET)

server.get ('/tarefas/resumo', async (request, reply) => {
    const total = tarefas.length
    const concluidas = tarefas.filter(t => t.concluido).length
    const pendentes = total - concluidas

    const resumo = {
        "total": total,
        "concluidas": concluidas,
        "pendentes": pendentes
    }

    return reply.send(resumo)
})

// --------------------------------------------------------------------------------------

const start = async ()=> {

    try{
        await server.listen({ port: PORT})
        console.log(`Rodando o servidor em http://localhost:${PORT}`)
    } catch (err) {
        server.log.error(err)
        process.exit(1)
    }

}

start() 