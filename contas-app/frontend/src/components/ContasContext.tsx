import { createContext } from "react";

const conta = {descricao:'Teste', valor:0, tipo:'r'}
const ContasContext = createContext(conta);

export default ContasContext;
