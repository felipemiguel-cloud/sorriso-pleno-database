# Sorriso Pleno — Backend inicial

Este é o esqueleto inicial da API em Node.js + Express + PostgreSQL.

## 1. Pré-requisitos
- Node.js instalado
- PostgreSQL instalado e em execução
- Visual Studio Code

## 2. Instalar dependências
Abra o terminal nesta pasta e execute:

```bash
npm install
```

## 3. Configurar variáveis de ambiente
Copie `.env.example` para `.env` e preencha a senha do seu PostgreSQL. Não compartilhe o arquivo `.env` nem o envie ao GitHub.

## 4. Banco de dados
O arquivo `database/schema.sql` é apenas uma proposta inicial de tabelas. Como o restante do grupo também está desenvolvendo o sistema, confirme com eles os nomes e campos antes de executar esse script.

Depois do alinhamento, crie o banco `sorriso_pleno` no PostgreSQL e execute o SQL aprovado no banco.

## 5. Executar a API

```bash
npm run dev
```

Teste no navegador ou Postman:
- `http://localhost:3000/`
- `http://localhost:3000/api/health`

A rota de saúde deve retornar `database: connected` quando as credenciais e o banco estiverem corretos.
