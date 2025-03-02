<template>
    <div>
        <q-btn
            rounded
            class="q-ma-sm"
            icon="add"
            label="Adicionar local"
            color="blue"
            no-caps
            @click="mostrarFormulario = true"
            />
        <form-add-local :mostrar="mostrarFormulario" @fechar="mostrarFormulario = false" :local_id="local_id" persistent  :update_list="update_list"></form-add-local>
    </div>
</template>
<script>
import FormAddLocal from './FormAddLocal.vue';
export default {
    components: { FormAddLocal },
    data() {
      return { mostrarFormulario: false };
    },
}
</script>
