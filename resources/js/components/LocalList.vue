<template>
    <div class="sm:w-full md:w-2/3 lg:w-2/3 m-auto">
      <table border="1" class="local-list sm:w-full md:w-full lg:w-full">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Slug</th>
            <th>Cidade</th>
            <th>Estado</th>
            <th>Criado em</th>
            <th>Atualizado em</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody ref="data">
          <tr>
            <td>--</td>
            <td>--</td>
            <td>--</td>
            <td>--</td>
            <td>--</td>
            <td>--</td>
            <td>--</td>
          </tr>
        </tbody>
      </table>
  
      <div class="q-pa-md q-gutter-sm">
        <!-- Passando local_id como prop -->
        <delete-dialog v-model="confirm" :local_id="local_id" persistent  :update_list="update_list"></delete-dialog>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import DeleteDialog from './DeleteDialog.vue';
import AddLocalButton from './AddLocalButton.vue';
  
  export default {
    data() {
      return { mostrarFormulario: false };
    },
    components: { DeleteDialog, AddLocalButton },
    setup() {
      const confirm = ref(false);
      const local_id = ref(null);
      const update_list = ref(() => {
        let tbody = document.querySelector(".local-list tbody");
        tbody.innerHTML += "<tr>"+
          "<td>Carregando...</td>" +
          "<td>Carregando...</td>" +
          "<td>Carregando...</td>" +
          "<td>Carregando...</td>" +
          "<td>Carregando...</td>" +
          "<td>Carregando...</td>" +
          "<td>Carregando...</td>" +
        "</tr>";
  
        fetch('/locals')
          .then(response => response.json())
          .then(locals => {
            tbody.innerHTML = ""; // Limpa a tabela
            if(locals.length == 0) {
                tbody.innerHTML += "<tr>"+
                        "<td>--</td>" +
                        "<td>--</td>" +
                        "<td>--</td>" +
                        "<td>--</td>" +
                        "<td>--</td>" +
                        "<td>--</td>" +
                        "<td>--</td>" +
                    "</tr>";
                return;
            }
            locals.forEach(local => {
              tbody.innerHTML +=
                `<tr>
                  <td>${local.name}</td>
                  <td>${local.slug}</td>
                  <td>${local.city}</td>
                  <td>${local.state}</td>
                  <td>${new Date(local.created_at).toLocaleString()}</td>
                  <td>${new Date(local.updated_at).toLocaleString()}</td>
                  <td><img class="delete" data-local_id="${local.local_id}" src="/icons/trash.svg"></td>
                </tr>`;
            });
  
            addEvents();
          })
          .catch(error => console.error('Erro:', error));
      });
      const addEvents = () => {
        const botoes = document.querySelectorAll(".delete");
        botoes.forEach(botao => {
          botao.addEventListener("click", (event) => {
            confirm.value = true;
            local_id.value = event.target.dataset.local_id;
            console.log("Local ID selecionado:", local_id.value);
          });
        });
      };
  
      onMounted(() => {
        update_list.value();
      });
  
      return { confirm, local_id, update_list };
    }
  };
  </script>
  