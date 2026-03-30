import fastify from "fastify";
const server = fastify()
const PORT = 3000;

const tarefas = [
    {id: 1, descricao:"fazer compras"},
    {id: 2, descricao:"lavar o carro"},
    {id: 3, descricao:"estudar fastify"},
    {id: 4, descricao:"fazer o codigo funcionar"}
]

server.get('/tarefas', async (request, reply) => {
    reply.send(tarefas)
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