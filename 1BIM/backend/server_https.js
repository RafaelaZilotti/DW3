import http from 'http'

http.createServer((req,res)=>{

    console.log("chegou requisição")

    res.end("olá! bao?")
}).listen(3000)
console.log("Servidor rodando ")