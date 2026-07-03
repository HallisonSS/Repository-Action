import { useState } from "react"

function App() {
  const [nome, setNome] = useState("")

  const cadastrar = async () => {
    await fetch("http://localhost/api/client", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nome })
    })
    alert("Cliente cadastrado")
  }

  return (
    <div>
      <h1>InfraControl</h1>
      <input onChange={e => setNome(e.target.value)} />
      <button onClick={cadastrar}>Cadastrar</button>
    </div>
  )
}

export default App
