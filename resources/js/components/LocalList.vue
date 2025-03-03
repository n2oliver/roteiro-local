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
        <tbody ref="data" v-if="loaded && localList" :key="recarregarKey">
          <tr v-for="(local, index) in localList" :key="index">
            <td>
              {{ local.name }}
            </td>
            <td>
              {{ local.slug }}
            </td>
            <td>
              {{ local.city }}
            </td>
            <td>
              {{ local.state }}
            </td>
            <td>
              {{ moment(String(local.created_at)).format('MM/DD/YYYY hh:mm') }}
            </td>
            <td>
              {{ moment(String(local.updated_at)).format('MM/DD/YYYY hh:mm') }}
            </td>
            <td>
              <img class="delete" :data-local_id="local.local_id" @click="local_id=local.local_id.toString(); confirmation=true" src="/icons/trash.svg">
            </td>
          </tr>
        </tbody>
        <tbody ref="data" v-else>
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
        <delete-dialog v-model="confirmation" :local_id="local_id" persistent></delete-dialog>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, onMounted, onBeforeUnmount } from 'vue';
  import moment from 'moment';
  import DeleteDialog from './DeleteDialog.vue';
  import AddLocalButton from './AddLocalButton.vue';
  
  export default {
    data() {
      return {
        mostrarFormulario: false,
      };
    },
    methods: {
      moment: () => {
        return moment();
      }
    },
    components: { DeleteDialog, AddLocalButton },
    setup() {
      const confirmation = ref(false);
      const local_id = ref(null);
      const loaded = ref(false);
      const localList = ref(null);
      const recarregarKey = ref(0);

      function updateList() {
        recarregarKey.value++; // Isso força o Vue a recriar o componente
      }
  
      onMounted(() => {
        window.addEventListener('atualizar-vue', updateList);
        fetch('/locals')
          .then(response => response.json())
          .then(locals => {
            loaded.value = true;
            localList.value = locals;
          })
          .catch(error => console.error('Erro:', error));
      });
      onBeforeUnmount(() => {
        window.removeEventListener('atualizar-vue', updateList);
      });
      return { loaded, localList, confirmation, local_id, updateList };
    }
  };
  </script>
  