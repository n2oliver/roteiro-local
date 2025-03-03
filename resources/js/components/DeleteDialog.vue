<template>
  <q-dialog v-model="dialogVisivel">
    <q-card>
      <q-card-section class="row items-center">
        <q-avatar icon="delete_outline" color="negative" text-color="white" />
        <span class="q-ml-sm">
          Deseja mesmo remover o local <strong>ID {{ local_id }}</strong> da lista?
          <br>
          <sub>(<span class="text-red">Essa ação é irreversível!</span>)</sub>
        </span>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn label="Cancelar" color="primary" v-close-popup />
        <q-btn label="Remover" color="negative" v-close-popup @click="removerLocal" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import { computed } from 'vue';
import { useQuasar } from 'quasar';
import { addEvents } from '../add_events';

export default {
  props: {
    modelValue: Boolean,
    local_id: String, // Recebe o local_id do pai
    update_list: Function,
  },
  emits: ['update:modelValue', 'confirm-delete'],
  setup(props, { emit }) {
    const $q = useQuasar();
    const dialogVisivel = computed({
      get: () => props.modelValue,
      set: (value) => emit('update:modelValue', value),
    });

    const removerLocal = async () => {
        console.log("Removendo local ID:", props.local_id);
        emit('confirm-delete', props.local_id);
        emit('confirm-delete', props.update_list);
        const response = await fetch(`/locals/${props.local_id}`, {
            method: 'DELETE',
            headers: {
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
                'Content-Type': 'application/json'
            }
        });
        if (response.ok) {
            // Remover o item da tabela
            const row = document.querySelector(`[data-local_id="${props.local_id}"]`).closest("tr");
            if (row) row.remove();

            $q.notify({
              type: 'positive',
              message: `Local ${props.local_id} removido com sucesso.`,
              position: 'top'
            });
            props.update_list(() => addEvents(props.local_id, dialogVisivel));
        } else {
            console.error("Erro ao excluir o local.");
        }
    };

    return { dialogVisivel, removerLocal };
  },
};
</script>
