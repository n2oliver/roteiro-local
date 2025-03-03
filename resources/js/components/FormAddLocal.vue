<template>
  <q-dialog :model-value="mostrar" @update:model-value="$emit('fechar')">
    <q-card style="width: 400px">
      <q-card-section>
        <div class="text-h6">Adicionar local</div>
        <hr class="text-grey" />
      </q-card-section>

      <q-card-section>
        <q-form @submit.prevent="enviarFormulario">
          <q-input v-model="name" label="Nome do local" class="q-mb-sm" filled @keyup="autoFillSlug" />
          <q-input v-model="slug" label="Nome Simplificado" class="q-mb-sm" filled disable ref="slug" readonly/>
          <q-input v-model="city" label="Cidade" class="q-mb-sm" filled />
          <q-select v-model="state" label="Estado" class="q-mb-sm" filled :options="options" />

          <div class="q-mt-md">
            <q-btn type="submit" label="Enviar" color="primary" />
            <q-btn label="Cancelar" color="red" flat @click="$emit('fechar'); resetForm()" class="q-ml-md" />
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
import { ref } from 'vue';
import { useQuasar } from 'quasar';
import { updateList } from '../update_list';
import { addEvents } from '../add_events';

export default {
  props: ['mostrar'],
  data() {
    return {
      nome: '',
      email: '',
      slug: '',
      city: '',
      state: '',
      $q: useQuasar()
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
    resetForm() {
      this.name = '';
      this.slug = '';
      this.city = '';
      this.state = '';
    },
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
    async enviarFormulario() {
      if(
      this.name == '' ||
      this.slug == '' ||
      this.city == '' ||
      this.state == '') {
        this.$q.notify({
          type: 'negative',
          message: 'Preencha todos os campos!',
          position: 'top'
        });
        return false;
      }

      const response = await fetch(`/locals`, {
            method: 'POST',
            body: JSON.stringify({
              name: this.name,
              slug: this.slug,
              city: this.city,
              state: this.state,
            }),
            headers: {
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
                'Content-Type': 'application/json'
            }
        });
        if (response.ok) {
          this.$q.notify({
            type: 'positive',
            message:  `Local "${this.name}" adicionado com sucesso!`,
            position: 'top'
          });
          this.$emit('fechar'); // Fecha o modal ao enviar
          this.resetForm();
          const local_id = ref(null);
          updateList(() => addEvents(local_id));
        }
    }
  }
};
</script>