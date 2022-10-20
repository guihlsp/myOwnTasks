import INotificacao from "@/interfaces/INotifcacao";
import IProjeto from "@/interfaces/IProjeto";
import ITarefa from "@/interfaces/ITarefa";
import { InjectionKey } from "vue";
import { createStore, Store, useStore as vuexUseStore } from "vuex";
import { ALTERAR_PROJETO, CADASTRAR_PROJETO, EXCLUIR_PROJETO, OBTER_PROJETOS } from "./tipo-acoes";
import { ADICIONA_TAREFA, EXCLUI_TAREFA, NOTIFICAR, FECHA_NOTIFICACAO, DEFINIR_PROJETOS, EXCLUI_PROJETO} from "./tipo-mutacoes";
import http from "@/http"


interface Estado {
    projetos: IProjeto[],
    tarefas: ITarefa[],
    notificacoes: INotificacao[]
}

export const key: InjectionKey<Store<Estado>> = Symbol()

export const store = createStore<Estado>({
    state: {
        projetos: [],
        tarefas: [],
        notificacoes: []
    },
    mutations: {
        [EXCLUI_PROJETO](state, id: string) {
            state.projetos = state.projetos.filter(proj => proj.id != id)
        },
        [DEFINIR_PROJETOS](state, projetos: IProjeto[]) {
            state.projetos = projetos
        },

        [ADICIONA_TAREFA](state, tarefa: ITarefa) {
            state.tarefas.push(tarefa)
        },
        [EXCLUI_TAREFA](state, idTarefa: number) {
            state.tarefas = state.tarefas.filter(taref => taref.idTarefa != idTarefa)
        },
        [NOTIFICAR](state, novaNotificacao: INotificacao) {
            novaNotificacao.id = Math.random()
            state.notificacoes.push(novaNotificacao)

            setTimeout(() => {
                state.notificacoes = state.notificacoes.filter(notificacao => notificacao.id != novaNotificacao.id)
            },2500)
        },
        [FECHA_NOTIFICACAO](state, id: number){
            state.notificacoes = state.notificacoes.filter(notifi => notifi.id != id)
        }
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
        [EXCLUIR_PROJETO]({commit}, id: string) {
            return http.delete(`/projetos/${id}`)
                .then(() => commit(EXCLUI_PROJETO, id))
        },
    }
    
})

export function useStore(): Store<Estado> {
    return vuexUseStore(key)
}