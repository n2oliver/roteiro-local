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
        <form-add-local
            :mostrar="mostrarFormulario"
            @fechar="mostrarFormulario = false"
            :local_id="local_id"
            persistent
        ></form-add-local>
    </div>
</template>
<script>
import FormAddLocal from "./FormAddLocal.vue";
import { data, setup } from "../helpers/addLocalButtonHelper";

export default {
    components: { FormAddLocal },
    data: data,
    setup: setup,
};
</script>
