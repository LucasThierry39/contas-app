interface ContasProps{
    id?: number;  
    descricao: string;
    valor: number;
    tipo: string;
}
export function Conta(props: ContasProps) {
  return (
    <div className={"container-conta"}>
      <h3>{props.descricao}</h3>
      <p><strong>Valor R$: </strong>{props.valor}</p>
      <p><strong>Tipo:</strong> {props.tipo}</p>
      <hr />
    </div>
  );
}
