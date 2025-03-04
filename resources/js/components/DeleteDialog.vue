<template>
    <q-dialog v-model="dialogVisivel">
        <q-card>
            <q-card-section class="row items-center">
                <q-avatar
                    icon="delete_outline"
                    color="negative"
                    text-color="white"
                />
                <span class="q-ml-sm">
                    Deseja mesmo remover o local
                    <strong>ID {{ local_id }}</strong> da lista?
                    <br />
                    <sub
                        >(<span class="text-red">Essa ação é irreversível!</span
                        >)</sub
                    >
                </span>
            </q-card-section>

            <q-card-actions align="right">
                <q-btn label="Cancelar" color="primary" v-close-popup />
                <q-btn
                    label="Remover"
                    color="negative"
                    v-close-popup
                    @click="deleteLocal"
                />
            </q-card-actions>
        </q-card>
    </q-dialog>
</template>

<script>
import { computed } from "vue";
import { useQuasar } from "quasar";
import { deleteLocalHelper } from "../helpers/deleteDialogHelper";

export default {
    props: {
        modelValue: Boolean,
        local_id: String, // Recebe o local_id do pai
    },
    emits: ["update:modelValue", "confirm-delete"],
    setup(props, { emit }) {
        const $q = useQuasar();
        const dialogVisivel = computed({
            get: () => props.modelValue,
            set: (value) => emit("update:modelValue", value),
        });

        async function deleteLocal() {
            console.log("Removendo local ID:", props.local_id);
            emit("confirm-delete", props.local_id);
            deleteLocalHelper(props, $q);
        }

        return { dialogVisivel, deleteLocal };
    },
};
</script>
