# 🏗 Architecture - InfraControl SaaS

## 📌 Visão Geral

O InfraControl é um sistema SaaS voltado para gestão de infraestrutura, clientes e operações técnicas, projetado com arquitetura moderna baseada em containers, separação de responsabilidades e deploy automatizado.

---

## 🎯 Objetivos da Arquitetura

- Escalabilidade horizontal
- Isolamento de serviços
- Facilidade de deploy
- Segurança básica
- Baixo custo operacional
- Pronto para evolução SaaS multi-tenant

---

## 🧱 Componentes da Arquitetura

### 🔹 Frontend
- Tecnologia: React
- Responsabilidade:
  - Interface do usuário
  - Consumo da API
  - Dashboard e interações

---

### 🔹 Backend
- Tecnologia: Node.js + Express
- Responsabilidade:
  - Regras de negócio
  - Autenticação (futuro: JWT)
  - Integração com banco de dados
  - API REST

---

### 🔹 Banco de Dados
- Tecnologia: PostgreSQL
- Responsabilidade:
  - Armazenamento persistente
  - Estrutura relacional
  - Base para multi-tenant futura

---

### 🔹 Proxy Reverso
- Tecnologia: Nginx
- Responsabilidade:
  - Entrada única (gateway)
  - Redirecionamento de requisições
  - HTTPS (futuro)
  - Segurança básica

---

### 🔹 Containerização
- Tecnologia: Docker + Docker Compose
- Responsabilidade:
  - Isolamento de serviços
  - Padronização de ambiente
  - Facilidade de deploy

---

## 🔄 Fluxo de Requisição

```text
Usuário → Nginx → Frontend → Backend → Banco de Dados → Backend → Frontend → Usuário
