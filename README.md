
# Notification Service

Um breve projeto para relembrar conceitos do Nest JS


## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar a seguinte variável de ambiente no seu .env (Para facilitar, copie o env-example e renomeie para `.env`)

`DATABASE_URL` = "file:./dev.db"

## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/vmarinho22/notification-service
```

Entre no diretório do projeto

```bash
  cd notification-service
```

Instale as dependências

```bash
  pnpm install
```

Inicie o generate do prisma

```bash
  npm prisma generate
```

Rode as `migrations` do projeto

```bash
  pnpm prisma migrate dev
```

Rode o projeto

```bash
  pnpm run start:dev
```
