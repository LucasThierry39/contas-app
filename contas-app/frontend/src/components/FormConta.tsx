import { useState } from "react";
import { Conta } from "./Conta";

interface Conta {
  id: number;
  descricao: string;
  valor: number;
  tipo: "pagar" | "receber";
}
export function FormConta() {
  const [conta, setConta] = useState<Conta>({
    id: 0,
    descricao: "",
    valor: 0,
    tipo: "pagar",
  });

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setConta({ ...conta, [event.target.name]: event.target.value });
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    alert("Done");
  }
  return (
    <div className="container-form flex-1 flex-col items-center jutsify-center bg-gray-800 p-4">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col space-y-4 bg-gray-600 p-4 rounded-lg"
      >
        <label htmlFor="descricao" 
        className="font-bold text-blue-400">
          Descrição
        </label>
        <br />
        <input type="text" 
        name="descricao" 
        onChange={handleInputChange} 
        className="border border-blue-500 p-2 rounded-lg"/>

        <label htmlFor="descricao"
        className="font-bold text-blue-400">
          Valor
        </label> <br />
        <input type="number" 
        name="valor" 
        onChange={handleInputChange} 
        className="border border-blue-500 p-2 rounded-lg"/>

        <label htmlFor="descricao"
         className="font-bold text-blue-400">
          Tipo
        </label>
        <select name="tipo" 
        onChange={handleInputChange}
        className="border border-blue-500 p-2 rounded-lg">
          
        <option value="pagar">Pagar</option>
        <option value="receber">Receber</option>
        </select>
        <button type="submit"
        className="p-2 rounded-lg text-gray-100 bg-blue-800 text-xl shadow-md">Salvar</button>
        <Conta
          id={conta.id}
          descricao={conta.descricao}
          valor={conta.valor}
          tipo={conta.tipo}
        />
      </form>
    </div>
  );
}
