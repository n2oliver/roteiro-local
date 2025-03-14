<template>
    <div>
        <q-btn
            rounded
            class="q-ma-sm"
            icon="add"
            label="Adicionar local"
            color="blue"
            no-caps
            @click="abrirFormulario(this)"
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
import { data, setup, abrirFormulario } from "../helpers/addLocalButtonHelper";

export default {
    components: { FormAddLocal },
    methods: { abrirFormulario },
    data: data,
    setup: setup,
};
</script>
