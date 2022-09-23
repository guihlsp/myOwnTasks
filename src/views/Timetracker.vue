<template>
  <Topo class="topo">Temporizador</Topo>
  <Formulario @aoSalvarTarefa="salvarTarefa" />
  <div class="lista">
    <Tarefa v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa">
      <!-- <div class="button is-warning ">
        <span class="icon is-small">
          <i class="fas fa-pencil-alt"></i>
        </span>
      </div> -->
      <div class="button is-danger " @click="excluir(tarefa.idTarefa)">
        <span class="icon is-small">
          <i class="fas fa-trash"></i>
        </span>
      </div>
    </Tarefa>
  </div>
  <Card class="card" v-if="listaVazia">
    <h1>Até o momento não há tarefas registradas!</h1>
    <h2>Para registrar uma tarefa é bem simples! <br/> Insira o nome da tarefa no campo acima, selecione o projeto caso possua cadastrado, e em seguida clique em Play para iniciar o cronômetro. <br/> Em seguida poderá pausar, ou finalizar a contagem!</h2>
  </Card>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import Formulario from '@/components/Formulario.vue'
import Tarefa from '@/components/Tarefa.vue'
import ITarefa from '@/interfaces/ITarefa'
import Card from '@/components/Card.vue'
import Topo from '@/components/Topo.vue'
import { useStore } from '@/store'
import { ADICIONA_TAREFA, EXCLUI_TAREFA, NOTIFICAR } from '@/store/tipo-mutacoes'
import { TipoNotificacao } from '@/interfaces/INotifcacao'
import useNotificador from '@/hooks/notificador'

export default defineComponent({
  name: "TimetrackerPage",
  components: {
    Formulario,
    Tarefa,
    Card,
    Topo
  },
  data() {
    return {
      modoEscuroAtivo: false,
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
        this.store.commit(ADICIONA_TAREFA, tarefa)
        this.notificar(TipoNotificacao.ATENCAO, 'Atenção', 'A tarefa não possui descrição!')
        
      } else {
        this.store.commit(ADICIONA_TAREFA, tarefa)
        this.notificar(TipoNotificacao.SUCESSO, 'Sucesso', 'Tarefa adicionada com sucesso!')
      }
    },
    excluir(idTarefa: number) {
      this.store.commit(EXCLUI_TAREFA, idTarefa)
      this.notificar(TipoNotificacao.SUCESSO, 'Sucesso', 'Tarefa excluída com sucesso!')
    }
  },
  setup() {
    const store = useStore()
    const { notificar } = useNotificador()
    return {
      tarefas: computed(() => store.state.tarefas),
      store,
      notificar
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
</style>
