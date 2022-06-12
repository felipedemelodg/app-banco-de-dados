export function errosDb (request){
    request.onerror = e => console.log(`Erros: ${e}`)
}