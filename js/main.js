import { utils } from "./utils.js";

const banco = utils.criarBanco("banco", 1);
const tabela = utils.criarTabela(banco, "clientes", "id");
const chaveUnica = utils.criarChaveUnica(banco,'clientes','id');

console.log(banco)
