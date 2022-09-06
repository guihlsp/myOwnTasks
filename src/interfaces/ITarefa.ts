import IProjeto from "./IProjeto"

export default interface ITarefa {
    duracaoEmSegundos: Number,
    descricao:  String,
    projeto: IProjeto
}