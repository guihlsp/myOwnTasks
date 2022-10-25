const projeto = {
    id: 1,
    descricao: 'My Own Tasks'
}

const proxy = new Proxy(projeto, {
    get(objetoOriginal, chave) {
        console.log(`Alguém pediu a chave ${chave} do projeto.`)
        return objetoOriginal[chave]
    },
    set(objetoOriginal, chave, valor) {
        console.log(`Alguém alterou a chave ${chave} do projeto para o valor ${valor}.`)
        objetoOriginal[chave] = valor
    }
})

proxy.descricao = 'Reatividade é mega bacana'

console.log(projeto.descricao)