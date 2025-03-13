# 📌 Todo Node API

Uma API simples para gerenciamento de tarefas, utilizando **Node.js**, **Express** e **Prisma** com **MongoDB**.

## 🚀 Tecnologias Utilizadas
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Prisma](https://www.prisma.io/)
- [MongoDB](https://www.mongodb.com/)

## 📦 Instalação

1. Clone este repositório:
   ```sh
   git clone https://github.com/gabrielasantosfv/todo-node.git
   cd todo-node
   ```

2. Instale as dependências do projeto:

   ```sh
   npm install 
   ```

## 📌 Configuração do Banco de Dados

### 1. Crie um banco de dados no MongoDB
- Acesse o [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) ou outro serviço de sua preferência para criar um banco de dados MongoDB.
- Crie um **Cluster** (caso não tenha) e, em seguida, crie um banco de dados chamado **todo** ou com o nome que preferir.

### 2. Gere as credenciais de acesso
- Após criar o banco de dados, gere um **usuário** com permissão de leitura e escrita no banco.
- Copie a **String de Conexão** (Connection String) do MongoDB. Ela será algo como:
  ```txt
  mongodb+srv://usuario:senha@servidor.mongodb.net/todo?retryWrites=true&w=majority
  ```
  Substitua `usuario`, `senha` e `servidor` pelas suas credenciais e informações de cluster.

### 3. Configure o arquivo `.env`
- Crie um arquivo `.env` na raiz do projeto (se ainda não existir).
- Adicione a **String de Conexão** no arquivo `.env` da seguinte forma:
  ```env
  DATABASE_URL="mongodb+srv://usuario:senha@servidor.mongodb.net/todo?retryWrites=true&w=majority"
  ```

## ▶️ Executando o Servidor

1. Inicie o servidor:
   ```sh
   node index.js
   ```
2. O servidor será iniciado em `http://localhost:3000`.

## 📌 Rotas da API

### Criar uma nova tarefa
`POST /task`

**Body:**
```json
{
  "title": "Comprar mantimentos",
  "description": "Ir ao mercado e comprar pão, leite e ovos",
  "status": "PENDING",
  "priority": "HIGH",
  "date": "2024-03-14T15:00:00Z"
}
```
**Resposta:**
```json
{
  "id": "64b5f7f1a234567890",
  "title": "Fazer compras",
  "description": "Comprar pão e leite no mercado",
  "status": "PENDING",
  "priority": "HIGH",
  "date": "2024-03-13T18:00:00.000Z"
}
```

### Listar todas as tarefas
`GET /task`

**Resposta:**
```json
[
  {
    "id": "64b5f7f1a234567890",
    "title": "Fazer compras",
    "description": "Comprar pão e leite no mercado",
    "status": "PENDING",
    "priority": "HIGH",
    "date": "2024-03-15T14:00:00.000Z"
  }
]
```

### Atualizar uma tarefa
`PUT /task/:id`

**Body:**
```json
{
  "title": "Novo título",
  "description": "Nova descrição",
  "status": "COMPLETED",
  "priority": "NORMAL",
  "date": "2025-03-13T10:00:00.000Z"
}
```

**Retorno:**
```json
{
  "id": "64b5f7f1a234567890",
  "title": "Nova Tarefa",
  "description": "Atualizada com sucesso!",
  "status": "COMPLETED",
  "priority": "NORMAL",
  "date": "2025-03-13T10:00:00.000Z"
}
```

### Deletar uma tarefa
`DELETE /task/:id`

**Retorno:**
```json
{
  "message": "Task deleted successfully",
  "task": {
    "id": "64b5f7f1a234567890",
    "title": "Fazer compras",
    "description": "Comprar pão e leite no mercado",
    "status": "PENDING",
    "priority": "HIGH",
    "date": "2025-03-13T10:00:00.000Z"
  }
}
```
