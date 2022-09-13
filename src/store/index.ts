import IProjeto from "@/interfaces/IProjeto";
import ITarefa from "@/interfaces/ITarefa";
import { InjectionKey } from "vue";
import { createStore, Store, useStore as vuexUseStore } from "vuex";
import { ADICIONA_PROJETO, ALTERA_PROJETO, EXCLUI_PROJETO, ADICIONA_TAREFA, ALTERA_TAREFA, EXCLUI_TAREFA} from "./tipo-mutacoes";

interface Estado {
    projetos: IProjeto[],
    tarefas: ITarefa[]
}

export const key: InjectionKey<Store<Estado>> = Symbol()

export const store = createStore<Estado>({
    state: {
        projetos: [],
        tarefas: []
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
        }
      
    }
      // [ALTERA_TAREFA](state, tarefa: ITarefa) {
        //     const index = state.tarefas.findIndex(proj => proj.id == projeto.id)
        //     state.tarefas[index] = tarefa
        // },
        // [EXCLUI_TAREFA](state, tarefa: ITarefa) {
        //     state.tarefas = state.tarefas.filter(proj => proj.id != id)
        // },
  
})

export function useStore(): Store<Estado> {
    return vuexUseStore(key)
}