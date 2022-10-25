import http from "@/http"
import { Module } from "vuex";
import { Estado } from "@/store";
import IProjeto from "@/interfaces/IProjeto";
import { ALTERAR_PROJETO, CADASTRAR_PROJETO, EXCLUIR_PROJETO, OBTER_PROJETOS } from "@/store/tipo-acoes";
import { ADICIONA_PROJETO, DEFINIR_PROJETOS, EXCLUI_PROJETO } from "@/store/tipo-mutacoes";

export interface EstadoProjeto {
    projetos: IProjeto[]
}

export const projeto: Module<EstadoProjeto, Estado> = {
    mutations: {
        [DEFINIR_PROJETOS](state, projetos: IProjeto[]) {
            state.projetos = projetos
        },
        [ADICIONA_PROJETO](state, nomeDoProjeto: string) {
            const projeto = {
                id: new Date().toISOString(),
                nome: nomeDoProjeto
            } as IProjeto
            state.projetos.push(projeto)
        },
        [EXCLUI_PROJETO](state, id: string) {
            state.projetos = state.projetos.filter(proj => proj.id != id)
        },
    },
    actions: {
        [OBTER_PROJETOS]({ commit }) {
            http.get('projetos')
                .then(resposta => commit(DEFINIR_PROJETOS, resposta.data))
        },
        [CADASTRAR_PROJETO](contexto, nomeDoProjeto: string) {
            return http.post('/projetos', {
                nome: nomeDoProjeto
            })
        },
        [ALTERAR_PROJETO](contexto, projeto: IProjeto) {
            return http.put(`/projetos/${projeto.id}`, projeto)
        },
        [EXCLUIR_PROJETO]({ commit }, id: string) {
            return http.delete(`/projetos/${id}`)
                .then(() => commit(EXCLUI_PROJETO, id))
        },
    }
}