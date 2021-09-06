# Desafio da Platanus

Este é um projeto que contém uma página para mostrar posts de pessoas.

É possivel criar um novo Post, editar, deletar e visualizar

## Crie o seu

Primeiramente crie sua variavel de ambiente, é necessário ter um banco de dados para isso, para esse projeto foi utilizado o [MongoDB](https://www.mongodb.com/pt-br)

## Como usar

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```bash
git clone https://github.com/Anderson-Soares-Martins/desafio-plathanus.git
```
Esse é um projeto já pronto mas com um assunto diferente, é necessário que você entenda sobre para que faça alterações e ainda continue funionando corretamente.


## Configuração

### Passo 1. Pegue a escrita de conexão do seu MongoDB 

No caso do mongo Atlas, esse é o formato:

```
mongodb+srv://<username>:<password>@my-project-abc123.mongodb.net/test?retryWrites=true&w=majority
```

Para mais detalhes, siga isto [MongoDB Guide](https://docs.mongodb.com/guides/server/drivers/) de como conectar no MongoDB.

### Passo 2. monte sua variuavel de ambiente

Crie um arquivo `.env.local`:

- `MONGODB_URI` deve ser a frase de conexão do passo 1

### Passo 3. Rode Next.js no modo desenvolvedor

```bash
npm install
npm run dev

# or

yarn install
yarn dev
```

Seu app será mostrado em [http://localhost:3000](http://localhost:3000)!

## Customizando

Para esse projeto foi utilizado o [MaterialUI](https://material-ui.com/pt/) para algumas customizações

```bash
npm install @material-ui/core

# or

yarn add @material-ui/core
```
## Por que usar o NEXT.JS?

Geração estática e que é a recomendada no documento oficial pois o HTML é gerado no momento da construção e será reutilizado em cada solicitação.
E também a Renderização do lado do servidor onde o HTML é gerado em cada solicitação .

E muitas outras vantagens

### Este é um projeto que ainda vai ser melhorado e que vai ser mais detalhado como fazer futuramente.
