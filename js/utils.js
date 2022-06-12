import { dados } from "./dados-dos-clientes.js";
import { elem } from "./elementos-html.js";
import { criarBanco } from "./criar-banco-de-dados.js";
import { errosDb } from "./erros-no-bando-de-dados.js";
import { adicionarDados } from "./adicionar-dados-no-db.js";
import { criarTabela } from "./tabela-para-o-db.js";
import { criarChaveUnica } from "./criar-chave-unica.js";
import { criarIndices } from "./criar-indices.js";
export const utils = {
  suporte: window.indexedDB ? true : false,
  dados,
  elem,
  criarBanco,
  errosDb,
  adicionarDados,
  criarTabela,
  criarChaveUnica,
  criarIndices,
};
