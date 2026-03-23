import fastify from "fastify";

const server = fastify()

const tarefas = [
    {id: 1, descricao:"fazer compras"},
    {id: 2, descricao:"lavar o carro"},
    {id: 3, descricao:"estudar fastify"}
]

server.get('/tarefas', async (request, reply) => {
    reply.send(tarefas)
})

server.post('/tarefas',async (request, reply) => {
    const tarefa = request.body
    tarefas.push(tarefa)
    reply.send(message:'tarefa adicionada com sucesso')
 
})




try {
    await server.listen({port:3000})
    console.log("porta 3000 rodando")
} catch (erro){

}