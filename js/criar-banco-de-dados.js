export function criarBanco(nome, versao) {
  let request = indexedDB.open(nome, versao);
  let nomeDaTabela;
  request.onsuccess = (e) => {
    nomeDaTabela = request.result.objectStoreNames[0];
    console.log(nomeDaTabela)
  };
  return {request,nomeDaTabela};
}
