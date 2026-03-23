import fastify from "fastify";

const server = Fastify()

server.get('/', async (request, reply) => {
    console.log("requisição feita")
    reply.send("oi")
})

server.get('/json', async (request, reply) => {
    console.log("requisição feita")
    reply.send({nome:'Rafaela'})
})

server.get('/html', async (request, reply) => {
    console.log("requisição feita")
    reply.type('text/html').send("<h1>Ola mundooo</h1>")
})



try {
    await server.listen({port:3000})
    console.log("porta 3000 rodando")
} catch (erro){

}