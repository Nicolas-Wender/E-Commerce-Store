# E-Commerce-Store

Este é um projeto desenvolvido com Next.js 13, que tem como objetivo mostrar o lado do cliente de um e-commerce, exibindo produtos, categorias e outros dados cadastrados previamente no painel de administração.

Este projeto foi desenvolvido juntamente com o projeto **[E-Commerce-Admin](https://github.com/Nicolas-Wender/E-Commerce-Admin)**, que por sua vez, é o painel de administração do e-commerce, sendo um CMS junto com um Dashboard para um E-Commerce, desenvolvido utilizando Next.js 13, App Router, Tailwind, Prisma, entre outras tecnologias.

### Pré-requisitos

Node versão 14

### Clonando o repositório

```
git clone https://github.com/Nicolas-Wender/E-Commerce-Admin.git
```

### Instalando dependências

```
npm i 
```

### Configurando .env file

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

DATABASE_URL=''
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=""
STRIPE_API_KEY=
FRONTEND_STORE_URL=http://localhost:3001
STRIPE_WEBHOOK_SECRET=
```

### Conectando PlanetScale e atualizando Prisma

```
npx prisma generate
npx prisma db push
```

### Iniciando a aplicação

```
npm run dev
```
