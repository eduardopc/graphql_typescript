# GraphQL + Typescript

Para iniciar o projeto, baixar primeiro todas as dependências:

Com Yarn:

> yarn install

Com NPM:

> npm i

### Mongo

Para baixar/iniciar uma imagem Docker do Mongo, rodar o seguinte comando:

> docker run -d -t -p 27017:27017 --name mongo_graphql mongo

Após isso, renomear o arquivo __.env.example__ na raiz do projeto por __.env__ e  setar a URL de conexão junto ao Mongo, por exemplo:

> DB_CONNECTION_STRING=mongodb://localhost:27017/graphql

### Rodando o projeto

Uma vez que todas dependências foram baixadas e o passo a passo acima pra iniciar o Mongo foi executado com sucesso, podemos inicializar o projeto com o seguinte comando:

> npm run dev

