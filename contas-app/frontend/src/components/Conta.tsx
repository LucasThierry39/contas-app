interface ContasProps{
    descricao: string;
    valor: number;
    tipo: string;
}
export function Conta(props: ContasProps) {
  return (
    <div>
      <h3>{props.descricao}</h3>
      <p><strong>Valor R$: </strong>{props.valor}</p>
      <p><strong>Tipo:</strong> {props.tipo}</p>
      <hr />
    </div>
  );
}
