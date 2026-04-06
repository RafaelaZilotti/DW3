# Como rodar um back-end com front end

## Utilize o CORS

## Passo a passo:

1. Entre na pasta do projeto no terminal
2. digite `npm install @fastify/cors`
3. Adicione em seu server.js as linhas: `
        import cors from '@fastify/cors'

        // Registramos o plugin de CORS para permitir que qualquer origem acesse nossa API
        server.register(cors, {
            origin: '*',
            methods: ['GET', 'POST', 'PATCH', 'DELETE', 'OPTIONS']
        })
`
4. Agora rode o html por meio de live server (botao direito e clique na opcao)
