import { createStore, Store, useStore as vuexUseStore } from "vuex";
import { InjectionKey } from "vue";

import INotificacao from "@/interfaces/INotifcacao";
import { NOTIFICAR, FECHA_NOTIFICACAO } from "./tipo-mutacoes";

import { EstadoProjeto, projeto } from "./modules/projeto";
import { EstadoTarefa, tarefa } from "./modules/tarefa";
export interface Estado {
    notificacoes: INotificacao[],
    projeto: EstadoProjeto,
    tarefa: EstadoTarefa,
}

export const key: InjectionKey<Store<Estado>> = Symbol()

export const store = createStore<Estado>({
    state: {
        notificacoes: [],
        projeto: {
            projetos: []
        },
        tarefa: {
            tarefas: []
        }
    },
    mutations: {
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
    modules: {
        projeto,
        tarefa
    }
})

export function useStore(): Store<Estado> {
    return vuexUseStore(key)
}