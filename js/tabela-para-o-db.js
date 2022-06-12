import { utils } from "./utils.js";
export function criarTabela(request, nomeDaTabela, chaveUnica) {
  let tabela;
  let db;
  request.onupgradeneeded = (e) => {
    db = e.target.result;
    tabela = db.createObjectStore(nomeDaTabela, { keyPath: chaveUnica });
    
  };
}
