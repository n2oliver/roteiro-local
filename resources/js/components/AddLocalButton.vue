<template>
    <div>
        <q-btn
            rounded
            class="q-ma-sm"
            icon="add"
            label="Adicionar local"
            color="blue"
            no-caps
            onclick="updateList()"
            @click="mostrarFormulario = true"
            />
        <form-add-local :mostrar="mostrarFormulario" @fechar="mostrarFormulario = false" :local_id="local_id" persistent></form-add-local>
    </div>
</template>
<script>
import { ref } from 'vue';
import FormAddLocal from './FormAddLocal.vue';
export default {
    components: { FormAddLocal },
    data() {
      return { mostrarFormulario: false };
    },
    setup() {
        return {
            local_id: ref(null),
        }
    }
}
</script>
