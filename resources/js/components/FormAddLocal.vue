<template>
  <q-dialog :model-value="mostrar" @update:model-value="$emit('fechar')">
    <q-card style="width: 400px">
      <q-card-section>
        <div class="text-h6">Formulário</div>
      </q-card-section>

      <q-card-section>
        <q-form @submit.prevent="enviarFormulario">
          <q-input v-model="name" label="Nome do local" @keyup="autoFillSlug" filled />
          <q-input v-model="slug" ref="slug" label="slug" filled readonly/>
          <q-input v-model="city" label="Cidade" filled />
          <q-select filled v-model="state" :options="options" label="Estado" />

          <div class="q-mt-md">
            <q-btn type="submit" label="Enviar" color="primary" />
            <q-btn label="Cancelar" color="red" flat @click="$emit('fechar')" class="q-ml-md" />
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
import { ref } from 'vue';
export default {
  props: ['mostrar'],
  data() {
    return {
      nome: '',
      email: '',
      slug: '',
      city: '',
    };
  },
  setup() {
    return {
      state: ref(null),
      options: [
        'Acre',
        'Alagoas',
        'Amapá',
        'Amazonas',
        'Bahia',
        'Ceará',
        'Distrito Federal',
        'Espirito Santo',
        'Goiás',
        'Maranhão',
        'Mato Grosso do Sul',
        'Mato Grosso',
        'Minas Gerais',
        'Pará',
        'Paraíba',
        'Paraná',
        'Pernambuco',
        'Piauí',
        'Rio de Janeiro',
        'Rio Grande do Norte',
        'Rio Grande do Sul',
        'Rondônia',
        'Roraima',
        'Santa Catarina',
        'São Paulo',
        'Sergipe',
        'Tocantins',
      ]
    };
  },
  methods: {
    autoFillSlug(event) {
      this.slug = event.target.value ?
        event.target.value
          .replace(/[`~!@#$%^&*()|+\=?;:'",.<>\{\}\[\]\\\/]/gi, '')
          .normalize('NFD').replace(/[\u0300-\u036f]/g, "")
          .replace(/\s+/g, '-')
          .toLowerCase() :
        '';
      console.log(this.slug)
    },
    enviarFormulario() {
      console.log('Enviado:', this.nome, this.email);
      this.$emit('fechar'); // Fecha o modal ao enviar
    }
  }
};
</script>