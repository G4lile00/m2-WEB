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

<div>GET - localhost:4000/getcompany - segura.</div>
<div>PUT - localhost:4000/createcompany - segura.</div>
<div>POST - localhost:4000/updatecompany - segura.</div>
<div>DELETE - localhost:4000/deletecompany - segura.</div>

<div>GET - localhost:4000/getlocation - segura.</div>
<div>GET - localhost:4000/getlocations - segura.</div>
<div>PUT - localhost:4000/createlocation - segura.</div>
<div>POST - localhost:4000/updatelocation - segura.</div>
<div>DELETE - localhost:4000/deletelocation - segura.</div>

<div>POST - localhost:4000/login</div>
<div>POST - localhost:4000/logout</div>

<div>GET - localhost:4000/getusers - segura.</div>
<div>PUT - localhost:4000/createuser - segura.</div>
<div>POST - localhost:4000/updateuser - segura.</div>
<div>DELETE - localhost:4000/deleteuser - segura.</div>

### executar o projeto.

basta apenas baixar e rodar o seguinte comando

`node .`

## Consideracao final.

A legibilidade e clareza do codigo pode ser afeta por ser uma compilacao.

o codigo original possui maior clareza.
