<template>
    
    <div class="sm:w-full md:w-2/3 lg:w-2/3 m-auto">
        <h2 class="local-list-title">
            <span style="min-width: 260px; display: flex">
                <span style="padding-right: 8px">Roteiro de Viagens</span>
                <img class="h-8 w-8 text-red-500" src="/icons/pin.svg">
            </span> 
        </h2>

        <table border="1" class="local-list">
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
    </div>
    
  <q-page class="flex flex-center">
    <q-card class="q-pa-md">
      <q-card-section>
        <q-btn label="Chamar API" color="primary" @click="fetchData" />
      </q-card-section>
      <q-card-section v-if="message">
        <q-banner class="bg-green-2 text-black">{{ message }}</q-banner>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
        
    export default {
        
        methods: {
            addEvents() {
                // Captura todos os botões gerados dinamicamente
                const botoes = this.$refs.data.querySelectorAll(".delete");
                botoes.forEach(botao => {
                    botao.addEventListener("click", (event) => { this.say(); });
                });
            },
            say: function(message) {
                if(confirm("Deseja mesmo excluir este local?")) {
                    alert("Excluido!");
                }
            },
        },
        mounted() {
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
            fetch('/locals', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',  // Definir o tipo de conteúdo
                    'Authorization': 'Bearer seu-token-aqui',  // Autenticação, se necessário
                }
                })
                .then(response => response.json())  // Converter resposta para JSON
                .then(locals => {
                    this.$refs.data.innerHTML += "";
                    for(let local of locals) {
                        tbody.innerHTML = 
                            "<tr>" +
                                "<td>"+local.name+"</td>" +
                                "<td>"+local.slug+"</td>" +
                                "<td>"+local.city+"</td>" +
                                "<td>"+local.state+"</td>" +
                                "<td>"+new Date(local.created_at).toLocaleString()+"</td>" +
                                "<td>"+new Date(local.updated_at).toLocaleString()+"</td>" +
                                '<td><img class="delete" data-value="' + local.local_id+ '" src="/icons/trash.svg"></td>' +
                            "</tr>";
                    };
                    
                    this.addEvents();
                })  // Manipular dados retornados
                .catch(error => console.error('Erro:', error));  // Captura erros
            console.log('Component mounted.')
        }
    }
</script>
