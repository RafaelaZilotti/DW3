import fastify from "fastify";
import cors from "@fastify/cors";

const server = fastify()
const PORT = 3000;

server.register(cors, {
    origin: '*',
    methods: ['GET', 'POST', 'PATCH', 'DELETE', 'OPTIONS']
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