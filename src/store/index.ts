import INotificacao, { TipoNotificacao } from "@/interfaces/INotifcacao";
import IProjeto from "@/interfaces/IProjeto";
import ITarefa from "@/interfaces/ITarefa";
import { InjectionKey } from "vue";
import { createStore, Store, useStore as vuexUseStore } from "vuex";
import { ADICIONA_PROJETO, ALTERA_PROJETO, EXCLUI_PROJETO, ADICIONA_TAREFA, ALTERA_TAREFA, EXCLUI_TAREFA, NOTIFICAR, FECHA_NOTIFICACAO} from "./tipo-mutacoes";

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
        [ADICIONA_PROJETO](state, nomeDoProjeto: string) {
            const projeto = {
                id: new Date().toISOString(),
                nome: nomeDoProjeto
            } as IProjeto
            state.projetos.push(projeto)
            // window.localStorage.setItem('projetos', JSON.parse(projeto.nome));
        },
        [ALTERA_PROJETO](state, projeto: IProjeto) {
            const index = state.projetos.findIndex(proj => proj.id == projeto.id)
            state.projetos[index] = projeto
        },
        [EXCLUI_PROJETO](state, id: string) {
            state.projetos = state.projetos.filter(proj => proj.id != id)
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
    }
    // [ALTERA_TAREFA](state, tarefa: ITarefa) {
    //       const index = state.tarefas.findIndex(tarefa => tarefa.id == tarefa.id)
    //       state.tarefas[index] = tarefa
    // }

})

export function useStore(): Store<Estado> {
    return vuexUseStore(key)
}