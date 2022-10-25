import http from "@/http"
import { Module } from "vuex";
import { Estado } from "@/store";
import ITarefa from "@/interfaces/ITarefa";
import { ADICIONA_TAREFA, ALTERA_TAREFA, DEFINIR_TAREFAS, EXCLUI_TAREFA } from "@/store/tipo-mutacoes";
import { ALTERAR_TAREFA, CADASTRAR_TAREFA, EXCLUIR_TAREFA, OBTER_TAREFAS } from "@/store/tipo-acoes";

export interface EstadoTarefa {
    tarefas: ITarefa[]
}

export const tarefa: Module<EstadoTarefa, Estado> = {
    state: {
        tarefas: [],
    },
    mutations: {
        [ADICIONA_TAREFA](state, tarefa: ITarefa) {
            state.tarefas.push(tarefa)
        },
        [DEFINIR_TAREFAS](state, tarefas: ITarefa[]) {
            state.tarefas = tarefas
        },
        [ALTERA_TAREFA](state, tarefa: ITarefa){
            const index = state.tarefas.findIndex(t => t.id == tarefa.id)
            state.tarefas[index] = tarefa
        },
        [EXCLUI_TAREFA](state, id: number) {
            state.tarefas = state.tarefas.filter(taref => taref.id != id)
        }
    },
    actions: {
        [OBTER_TAREFAS]({ commit }) {
            http.get('tarefas')
                .then(resposta => commit(DEFINIR_TAREFAS, resposta.data))
        },
        [CADASTRAR_TAREFA]({commit}, tarefa: ITarefa) {
            return http.post('/tarefas', tarefa)
                .then(resposta => commit(ADICIONA_TAREFA, resposta.data))
        },
        [ALTERAR_TAREFA]({commit}, tarefa: ITarefa) {
            return http.put(`/tarefas/${tarefa.id}`, tarefa)
                .then(resposta => commit(ALTERA_TAREFA, tarefa))
        },
        [EXCLUIR_TAREFA]({commit}, id: string) {
            return http.delete(`/tarefas/${id}`)
                .then(() => commit(EXCLUI_TAREFA, id))
        },
    }
}