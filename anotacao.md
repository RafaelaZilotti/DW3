# Modelo de Organzacao MVC

- **Model (Modelo)**: Esta camada é responsável pela lógica de negócio e pelos dados, incluindo as regras para manipular, acessar e persistir essas informações. É a única camada que "conversa" diretamente com o banco de dados.

- **View (Visão)** : É a camada de apresentação, responsável por exibir os dados ao usuário. Em uma API, a "visão" não é uma página HTML, mas sim a representação dos dados, geralmente em formato JSON, que é enviada como resposta ao cliente.

- **Controller (Controlador)**: Atua como o intermediário entre o Model e a View. Ele recebe as requisições do cliente, aciona as devidas atualizações no Model e, por fim, seleciona e envia a View (a resposta JSON) de volta.

---

- **Pasta `controllers`:** contém os arquivos responsáveis por lidar com a lógica de controle, ou seja, as funções que processam as requisições e interagem com os modelos para obter ou modificar os dados.

- **Pasta `models`:** contém os arquivos que definem a estrutura dos dados e as regras de negócio, incluindo as funções para acessar e manipular os dados.

- **Pasta `routes`:** contém os arquivos que definem as rotas da aplicação, ou seja, os endpoints que os clientes podem acessar para interagir com a API.

- **Arquivo `server.js`:** é o ponto de entrada da aplicação, onde o servidor é configurado e as rotas são registradas.

--- 
## controler:
 responsáveis por lidar com a lógica de controle, funções que processam as requisições e interagem com os modelos para obter ou modificar os dados


## routes
 definem as rotas da aplicação, endpoints que os clientes podem acessar para interagir com a API.

- definir as rotas (quais endpoints a API terá e como eles serão acessados);
- processar as requisições (o que deve ser feito quando uma requisição chegar em um determinado endpoint);
- manipular os dados (como os dados devem ser acessados, criados, modificados ou removidos durante o processamento das requisições).

## models
 definem a estrutura dos dados e as regras de negócio, incluindo as funções para acessar e manipular os dados.

