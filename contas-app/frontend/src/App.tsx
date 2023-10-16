import './App.css'
import { Extrato } from './components/Extrato'
import { FormConta } from './components/FormConta'

function App() {
  return (
    <div>
    <h1 className="text-center text-3xl font-bold text-blue-800 p-4 flex-1"> App contas</h1>
    <FormConta/>
    <Extrato/>
    
    </div>
  )
}

export default App
