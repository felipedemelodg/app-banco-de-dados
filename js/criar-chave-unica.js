import { utils } from "./utils.js";
export function criarChaveUnica(request, store, chaveUnica) {
  request.onupgradeneeded = (e) => {
    let db = e.target.result;
    let tabela = db.createObjectStore(store, { keyPath: chaveUnica });
    utils.criarIndices(tabela, ["id", "nome", "idade"]);
    
  };
}
