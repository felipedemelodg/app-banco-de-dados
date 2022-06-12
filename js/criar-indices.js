export function criarIndices(tabela, indice) {
  for(let i=0;i<indice.length; i++){
      tabela.createIndex(indice[i],indice[i],{unique:false})
  }
}
