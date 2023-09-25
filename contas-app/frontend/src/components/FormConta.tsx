import { useState, useContext, FormEvent } from "react";
import ContasContext from "./ContasContext";

export function FormConta() {
  const { adicionarConta } = useContext(ContasContext);
  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState(0);
  const [tipo, setTipo] = useState("receber");

  // Função para manipular o evento de envio do formulario
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    adicionarConta({ descricao, valor, tipo });
    setDescricao("");
    setValor(0);
    setTipo("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
      />
    </form>
  );
}
