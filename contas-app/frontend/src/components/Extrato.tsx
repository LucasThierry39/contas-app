import { Conta } from "./Conta";


interface Conta {
  id: number;
  descricao: string;
  valor: number;
  tipo: 'pagar' | 'receber';
}
export function Extrato() {



const contas: Conta[] = [
  {id: 1, descricao: 'Salario Outubro', valor: 2500, tipo: 'receber'},
  {id: 2, descricao: 'Almoço', valor: 54.95, tipo: 'pagar'},
  {id: 3, descricao: 'Transporte', valor: 372.95, tipo: 'pagar'},
  {id: 4, descricao: 'Celular', valor: 199.90, tipo: 'pagar'},
  {id: 5, descricao: 'Aluguel Sala Comercial', valor: 900, tipo: 'receber'},
  {id: 6, descricao: 'Criação de Identidade Visual', valor: 500.00, tipo: 'receber'}

];

const totalPagar = contas.filter(conta => conta.tipo === 'pagar')
  .reduce((total, conta) => total + conta.valor, 0)
const totalReceber = contas.filter(conta => conta.tipo === 'receber')
  .reduce((total, conta) => total + conta.valor, 0)

const saldo = totalReceber - totalPagar;

return(
  <div>
    <h2>Extrato</h2>
    <table>
      <thead>
        <tr>
          <td>ID</td>
          <td>Descrição</td>
          <td>Valor</td>
          <td>Tipo</td>
          <td colSpan={2}>Ações</td>
        </tr>
      </thead>
      <tbody>
        {contas.map(conta=>(
          <tr>
            <td>{conta.id}</td>
            <td>{conta.descricao}</td>
            <td>{conta.valor}</td>
            <td>{conta.tipo}</td>
            <button>Editar</button>
            <button>Deletar</button>
          </tr>
        ))}
      </tbody>
    </table>


    <div>
      <p>Total a receber: R$ {totalReceber}</p>
      <p>Total a pagar: R$ {totalPagar}</p>
      <p>Saldo: R$ {saldo}</p>
    </div>
  </div>
)
}