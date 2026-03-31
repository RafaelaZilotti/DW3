import fastify from "fastify";
const server = fastify()
const PORT = 3000;

const tarefas = [
    {id: 1, descricao:"fazer compras"},
    {id: 2, descricao:"lavar o carro"},
    {id: 3, descricao:"estudar fastify"}
]

server.get('/tarefas', async (request, reply) => {
    reply.send(tarefas)
})

server.post('/tarefas', async (request, reply) => {
    const tarefa = request.body

    const novoId = tarefas.length > 0 ? tarefas[tarefas.length -1] + 1 : 1
    const novaTarefa = { id: novoId, ...tarefa}

    tarefas.push(novaTarefa)
    return reply.status(201).send(novaTarefa)
})

server.get('/tarefas/:id', async (request, reply) => {

    const id = Number(request.params.id)

    const tarefa = tarefas.find(t => t.id === id)

    if (!tarefa) {
        return reply.status(404).send({ status: 'error', message: 'Tarefa não encontrada' })
    }

    return reply.send(tarefa)
})

//server.get('/tarefas', async (request, reply) => {
//    const concluido = request.query.concluido
//
//    if (concluido !== undefined) {
//        const tarefasFiltradas = tarefas.filter(t => String(t.concluido) === concluido)
//        return reply.send(tarefasFiltradas)
//    }
//
//    return reply.send(tarefas)
//});

server.patch('/tarefas/:id', async (request, reply) => {
    
    const id = Number(request.params.id)

    const index = tarefas.findIndex(t => t.id === id)

    if (index === -1) {
        return reply.status(404).send({ status: 'error', message: 'Tarefa não encontrada' })
    }

    const tarefaAtualizada = request.body

    tarefas[index] = { ...tarefas[index], ...tarefaAtualizada, id }

    return reply.send(tarefas[index])
})

server.delete('/tarefas/:id', async (request, reply) => {

    const id = Number(request.params.id)
    
    const index = tarefas.findIndex(t => t.id === id)

    if (index === -1) {
        return reply.status(404).send({ status: 'error', message: 'Tarefa não encontrada' })
    }

   tarefas.splice(index, 1) // 1 e a quantia de elementos a serem deletados.

    return reply.status(204).send()
})

server.setNotFoundHandler((request, reply) => {

  return reply.status(404).send({
    status: 'error',
    message: 'O recurso solicitado não existe nesta API.',
  })

})


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