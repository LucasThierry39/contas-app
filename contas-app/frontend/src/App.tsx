import './App.css'
import {Conta} from './components/Conta'

function App() {
  return (
    <div>
      <h1>Contas a pagar e receber</h1>
      <Conta descricao='Salario'
      valor={2600.95}
      tipo='Receber'
      />
      <Conta
      descricao='Aluguel'
      valor={930.35}
      tipo='Pagar'
      
      />

    </div>
  )
}

export default App
