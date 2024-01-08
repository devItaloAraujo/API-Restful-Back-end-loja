# Projeto API RESTFUL: TrybeSmith

## Contexto

Este projeto é uma API seguindo o padrão REST de back-end no formato CRUD. Trata-se de um app de admnistração simplificada dos itens de inventário de uma loja, seus pedidos e também login de usuários com autenticação com o banco de dados. É possível acessar endpoints para listar, adicionar e deletar pedidos e produtos.

Os dados da loja são salvos em um banco de dados SQL em um contâiner do docker enquanto o back-end para fornecer os endpoints ficam em outro, os dois são orquestrados pelo docker-compose e conectados pela biblioteca MySQL2 do Node.

Esse projeto explora a arquitetura de camadas, no caso, controllers, models e services. Foram desenvolvidos middlaweres de validação para garatir a inserção correta de dados no banco.

Testes unitários desenvolvidos utilizando as bibliotecas Node Sinon e Chai.


## Técnologias usadas
- Node
- TypeScript
- MySQL
- Bibliotecas MySQL2, jsonwebtoken, Express, bcryptjs do Node
- Docker, Docker-compose
- Testes com Sinon, Chai

## Iniciando o projeto localmente:

- Clone esse repositório em uma pasta.
- É necessário ter o docker-compose, execute o comando: **docker-compose up --build -d**
- O terminal irá indicar que os 2 containêres estão online.
- Use o comando **docker exec -it trybesmith_api bash** para entrar no container.
- Dentro do container use o comando: **npm run db:reset** para resetar e popular o banco de dados pelo Sequelize.
- A API está disponivel na porta **3001** do servidor local.

- Faça requisições para os endpoints (localhost:3001):
    1. POST /login: Essa rota recebe na requisição um corpo do seguinte formato:
    {  "username": "string",  "password": "string" } e faz as autenticações.
    2. POST /products: Essa rota recebe na requisição um corpo do seguinte formato:
    {
  "name": "Martelo de Thor",
  "price": "30 peças de ouro",
  "orderId": 4
    } e cadastra o produto no banco de dados.
   
    3. GET /products : lista os produtos
    4. GET /orders: lista os pedidos
    

## Testes

- Dentro do novo terminal do contâiner trybesmith_api utilize os testes com: **npm run test:local**







