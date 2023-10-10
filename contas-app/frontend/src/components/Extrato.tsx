import { Conta } from "./Conta";

interface Conta {
  id: number;
  descricao: string;
  valor: number;
  tipo: "pagar" | "receber";
}
export function Extrato() {
  const contas: Conta[] = [
    { id: 1, descricao: "Salario Outubro", valor: 2500, tipo: "receber" },
    { id: 2, descricao: "Almoço", valor: 54.95, tipo: "pagar" },
    { id: 3, descricao: "Transporte", valor: 372.95, tipo: "pagar" },
    { id: 4, descricao: "Celular", valor: 199.9, tipo: "pagar" },
    { id: 5, descricao: "Aluguel Sala Comercial", valor: 900, tipo: "receber" },
    {
      id: 6,
      descricao: "Criação de Identidade Visual",
      valor: 500.0,
      tipo: "receber",
    },
  ];

  const totalPagar = contas
    .filter((conta) => conta.tipo === "pagar")
    .reduce((total, conta) => total + conta.valor, 0);
  const totalReceber = contas
    .filter((conta) => conta.tipo === "receber")
    .reduce((total, conta) => total + conta.valor, 0);

  const saldo = totalReceber - totalPagar;

  return (
    <div>
      <h2>Extrato</h2>
      <table className="table-auto">
        <thead>
          <tr className="border border-blue-500 bg-blue-200 text-blue-800">
            <td className="px-4 py-2 border border-blue-800 font-semibold text-center">
              ID
            </td>
            <td className="px-4 py-2 border border-blue-800 font-semibold text-center">
              Descrição
            </td>
            <td className="px-4 py-2 border border-blue-800 font-semibold text-center">
              Valor
            </td>
            <td className="px-4 py-2 border border-blue-800 font-semibold text-center">
              Tipo
            </td>
            <td colSpan={2} className="px-4 py-2 font-semibold text-center">
              Ações
            </td>
          </tr>
        </thead>
        <tbody>
          {contas.map((conta) => (
            <tr className="border border-blue-500">
              <td className="border border-blue-500 px-4 py-2">{conta.id}</td>
              <td className="border border-blue-500 px-4 py-2">
                {conta.descricao}
              </td>
              <td className="border border-blue-500 px-4 py-2">
                {conta.valor}
              </td>
              <td className="border border-blue-500 px-4 py-2">{conta.tipo}</td>
              <button className="px-4 py-2 text-blue-300">Editar</button>
              <button className="px-4 py-2 text-blue-600">Deletar</button>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex space-x-4 mt-2">
        <div className="flex-col p-2 max-w-sm max-auto bg-gray-300 rounded-xl shadow-md flex items-center space-x-4 text-black">
          <h3 className="font-semibold text-2xl">Total a receber:</h3>
          <p className="font-semibold text-3xl text-gray-700">
            R${totalReceber}
          </p>
        </div>

        <div className="flex-col p-2 max-w-sm max-auto bg-red-300 rounded-xl shadow-md flex items-center space-x-4 text-black">
          <h3 className="font-semibold text-2xl">Total a pagar:</h3>
          <p className="font-semibold text-3xl text-red-700">R${totalPagar}</p>
        </div>

        <div className="flex-col p-2 max-w-sm max-auto bg-green-300 rounded-xl shadow-md flex items-center space-x-4 text-black">
          <h3 className="font-semibold text-2xl">Saldo:</h3>
          <p className="font-semibold text-3xl text-green-700">R${saldo}</p>
        </div>
      </div>
    </div>
  );
}
