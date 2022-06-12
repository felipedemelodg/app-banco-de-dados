export function adicionarDados(
  request,
  nomeDaTabela,
  chaveUnica,
  modo,
  dadosDosClientes
) {

  request.onupgradeneeded = (e) => {
    let db = e.target.result;
    let tabela = db.createObjectStore(nomeDaTabela, { keyPath: chaveUnica });

    tabela.transaction.oncomplete = (e) => {
      let novaTabela = db
        .transaction(nomeDaTabela, modo)
        .objectStore(nomeDaTabela);
      for (let i in dadosDosClientes) {
        novaTabela.add(dadosDosClientes[i]);
      }
    };
  };
}
