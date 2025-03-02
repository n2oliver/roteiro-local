<template>
  <q-dialog :model-value="mostrar" @update:model-value="$emit('fechar')">
    <q-card style="width: 400px">
      <q-card-section>
        <div class="text-h6">Formulário</div>
      </q-card-section>

      <q-card-section>
        <q-form @submit.prevent="enviarFormulario">
          <q-input v-model="nome" label="Nome" filled />
          <q-input v-model="email" label="E-mail" filled type="email" />

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
export default {
  props: ['mostrar'],
  data() {
    return {
      nome: '',
      email: ''
    };
  },
  methods: {
    enviarFormulario() {
      console.log('Enviado:', this.nome, this.email);
      this.$emit('fechar'); // Fecha o modal ao enviar
    }
  }
};
</script>