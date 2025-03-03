<template>
    <div class="sm:w-full md:w-full lg:w-2/3 m-auto">
      <table border="1" class="local-list m-auto sm:w-full md:w-full lg:w-full">
        <thead>
          <tr>
            <th>Local</th>
            <th>Slug</th>
            <th>Cidade</th>
            <th>Estado</th>
            <th>Criado</th>
            <th>Atualizado</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody ref="data">
          <tr>
            <td>
              <q-circular-progress
                indeterminate
                rounded
                size="10px"
                color="lime"
                class="q-ma-xs"
              />
            </td>
            <td>
              <q-circular-progress
                indeterminate
                rounded
                size="10px"
                color="lime"
                class="q-ma-xs"
              />
            </td>
            <td>
              <q-circular-progress
                indeterminate
                rounded
                size="10px"
                color="lime"
                class="q-ma-xs"
              />
            </td>
            <td>
              <q-circular-progress
                indeterminate
                rounded
                size="10px"
                color="lime"
                class="q-ma-xs"
              />
            </td>
            <td>
              <q-circular-progress
                indeterminate
                rounded
                size="10px"
                color="lime"
                class="q-ma-xs"
              />
            </td>
            <td>
              <q-circular-progress
                indeterminate
                rounded
                size="10px"
                color="lime"
                class="q-ma-xs"
              />
            </td>
            <td>
              <q-circular-progress
                indeterminate
                rounded
                size="10px"
                color="lime"
                class="q-ma-xs"
              />
            </td>
          </tr>
        </tbody>
      </table>
  
      <div class="q-pa-md q-gutter-sm">
        <!-- Passando local_id como prop -->
        <delete-dialog v-model="confirmation" :local_id="local_id" persistent  :update_list="update_list"></delete-dialog>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import DeleteDialog from './DeleteDialog.vue';
  import AddLocalButton from './AddLocalButton.vue';
  import { updateList } from '../update_list.js';
  import { addEvents } from '../add_events.js';
  
  export default {
    data() {
      return { mostrarFormulario: false };
    },
    methods: {
      addEvents
    },
    components: { DeleteDialog, AddLocalButton },
    setup() {
      const confirmation = ref(false);
      const local_id = ref(null);
      const update_list = ref(updateList);
  
      onMounted(() => {
        update_list.value(() => addEvents(local_id, confirmation));
      });
  
      return { confirmation, local_id, update_list };
    }
  };
  </script>
  