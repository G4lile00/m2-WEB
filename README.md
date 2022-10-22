# boathouse-backend

## Documentacao.

Explicacoes.

as rotas marcadas como SEGURAS nescessitam de um token. o mesmo pode ser passado atravez da do body da requisicao como parametro {token:"value"}

## Rotas

-- a documentacao via expressa ainda nao eh suportada para Typescript
-- modelos de daods a serem passados na requisao estarao nas colecoes disponibilizadas.

as colecoes apontam para a API Que esta disponivel na WEB.
nao tente executar todas as rotas no local host pois nao tera acesso ao banco de dados.

### company

GET - localhost:4000/getcompany - segura.
PUT - localhost:4000/createcompany - segura.
POST - localhost:4000/updatecompany - segura.
DELETE - localhost:4000/deletecompany - segura.

GET - localhost:4000/getlocation - segura.
GET - localhost:4000/getlocations - segura.
PUT - localhost:4000/createlocation - segura.
POST - localhost:4000/updatelocation - segura.
DELETE - localhost:4000/deletelocation - segura.

POST - localhost:4000/login
POST - localhost:4000/logout

GET - localhost:4000/getusers - segura.
PUT - localhost:4000/createuser - segura.
POST - localhost:4000/updateuser - segura.
DELETE - localhost:4000/deleteuser - segura.

### executar o projeto.

basta apenas baixar e rodar o seguinte comando

`node .`

## Consideracao final.

A legibilidade e clareza do codigo pode ser afeta por ser uma compilacao.

o codigo original possui maior clareza.
