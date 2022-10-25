<template>
  <Modal :mostrar="tarefaSelecionada != null">
    <template v-slot:cabecalho>
      <p class="modal-card-title">Alterar tarefa</p>
      <button id="close" class="delete" aria-label="close" @click="fecharModal()"></button>
    </template>
    <template v-slot:corpo>
      <div class="column" role="form" aria-label="Formulário para criação de uma nova tarefa">
        <p class="control has-icons-left has-icons-right">
          <input id="nomeTarefa" type="text" class="input input-form" v-model="tarefaSelecionada.descricao" />
          <span class="icon is-small is-left">
            <i class="fa fa-tasks" aria-hidden="true"></i>
          </span>
        </p>
      </div>
    </template>
    <template v-slot:rodape>
      <button id="save" class="button is-success" @click="alterarTarefa()">Salvar</button>
      <button id="cancel" class="button is-danger" @click="fecharModal()">Cancelar</button>
    </template>
  </Modal>
  <Topo class="topo">Temporizador</Topo>
  <Formulario @aoSalvarTarefa="salvarTarefa" />
  <div class="lista">
    <div class="field">
      <p class="control has-icons-left">
        <input class="input" type="text" placeholder="Pesquisar" v-model="filtro">
        <span class="icon is-small is-left">
          <i class="fas fa-search"></i>
        </span>
      </p>
    </div>
    <Tarefa v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa">
      <div class="button is-danger " @click="excluir(tarefa.id)">
        <span class="icon is-small">
          <i class="fas fa-trash"></i>
        </span>
      </div>
      <div class="button is-info " @click="selecionarTarefa(tarefa)">
        <span class="icon is-small">
          <i class="fas fa-pencil"></i>
        </span>
      </div>
    </Tarefa>
  </div>
  <Card class="card" v-if="listaVazia">
    <h1>Até o momento não há tarefas registradas!</h1>
    <h2>Para registrar uma tarefa é bem simples! <br /> Insira o nome da tarefa no campo acima, selecione o projeto caso
      possua cadastrado, e em seguida clique em Play para iniciar o cronômetro. <br /> Em seguida poderá pausar, ou
      finalizar a contagem!</h2>
  </Card>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watchEffect } from 'vue'
import Formulario from '@/components/Formulario.vue'
import Tarefa from '@/components/Tarefa.vue'
import ITarefa from '@/interfaces/ITarefa'
import Card from '@/components/Card.vue'
import Modal from '@/components/Modal.vue'
import Topo from '@/components/Topo.vue'
import { useStore } from '@/store'
import { TipoNotificacao } from '@/interfaces/INotifcacao'
import useNotificador from '@/hooks/notificador'
import { ALTERAR_TAREFA, CADASTRAR_TAREFA, EXCLUIR_TAREFA, OBTER_PROJETOS, OBTER_TAREFAS } from '@/store/tipo-acoes'

export default defineComponent({
  name: "TimetrackerPage",
  components: {
    Formulario,
    Tarefa,
    Card,
    Topo,
    Modal
  },
  data() {
    return {
      modoEscuroAtivo: false,
      tarefaSelecionada: null as ITarefa | null
    }
  },
  computed: {
    listaVazia(): boolean {
      return this.tarefas.length === 0
    }
  },
  methods: {
    salvarTarefa(tarefa: ITarefa) {
      if (tarefa.descricao == "") {
        this.store.dispatch(CADASTRAR_TAREFA, tarefa)
          .then(() => {
            this.notificar(TipoNotificacao.ATENCAO, 'Atenção', 'A tarefa não possui descrição!')
          });
      } else {
        this.store.dispatch(CADASTRAR_TAREFA, tarefa)
          .then(() => {
            this.notificar(TipoNotificacao.SUCESSO, 'Sucesso', 'Tarefa adicionada com sucesso!')
          });
      }
    },

    excluir(id: number) {
      this.store.dispatch(EXCLUIR_TAREFA, id)
      this.notificar(TipoNotificacao.SUCESSO, 'Sucesso', 'Tarefa excluída com sucesso!')
    },

    selecionarTarefa(tarefa: ITarefa) {
      this.tarefaSelecionada = tarefa
    },
    fecharModal() {
      this.tarefaSelecionada = null;
    },
    alterarTarefa() {
      this.store.dispatch(ALTERAR_TAREFA, this.tarefaSelecionada)
        .then(() => {
          this.fecharModal()
          this.notificar(TipoNotificacao.SUCESSO, 'Sucesso', 'Tarefa alterada com sucesso!')
        })
    }

  },
  setup() {
    const store = useStore()
    store.dispatch(OBTER_PROJETOS)
    store.dispatch(OBTER_TAREFAS)


    const filtro = ref("");

    // const tarefas = computed(() => 
    //   store.state.tarefa.tarefas.filter(
    //     (t) => !filtro.value || t.descricao.includes(filtro.value)
    //   )
    // );

    watchEffect(() => {
      store.dispatch(OBTER_TAREFAS, filtro.value)
    })

    const { notificar } = useNotificador()

    return {
      tarefas: computed(() => store.state.tarefa.tarefas),
      store,
      notificar,
      filtro
    }
  }
});

</script>

<style scoped>
.lista {
  padding: 1.2rem;
}

h2 {
  margin-top: 20px;
  color: white;
}

.modal {
  height: 100vh;
}

.modal-card {

  margin-top: 15%
}
</style>
