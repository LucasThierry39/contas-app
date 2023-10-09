import { useState } from "react";
import { Conta } from "./Conta";

interface Conta {
  id: number;
  descricao: string;
  valor: number;
  tipo: 'pagar' | 'receber';
}
export function FormConta(){
  
  const[conta, setConta] = useState<Conta>({
    id: 0, descricao: '', valor: 0, tipo: 'pagar'
  })

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>)
  {
    setConta({...conta, [event.target.name]: event.target.value})
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    alert("Done")
  }

  return(
    <div className="container-form">
      <form onSubmit={handleSubmit}>
        <input 
        type="text" 
        name="descricao"
        onChange={handleInputChange} />

        <input 
        type="number" 
        name="valor"
        onChange={handleInputChange} />

        <select name="tipo" onChange={handleInputChange}>
          <option value="pagar">Pagar</option>
          <option value="receber">Receber</option>
        </select>
        <button type="submit">Salvar</button>
        <Conta id={conta.id}
        descricao={conta.descricao}
        valor={conta.valor}
        tipo={conta.tipo} />
      </form>
    </div>
  )
}