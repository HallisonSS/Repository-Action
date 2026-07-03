require("dotenv").config()
const express = require("express")
const cors = require("cors")
const { Pool } = require("pg")

const app = express()
app.use(cors())
app.use(express.json())

const pool = new Pool({
  user: "postgres",
  host: "db",
  database: "infra",
  password: "postgres",
  port: 5432,
})

app.get("/api/health", (req, res) => {
  res.json({ status: "ok" })
})

app.post("/api/client", async (req, res) => {
  const { nome } = req.body
  await pool.query("INSERT INTO clientes(nome) VALUES($1)", [nome])
  res.json({ message: "Cliente criado" })
})

app.listen(3000, () => console.log("Backend rodando"))
