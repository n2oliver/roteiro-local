<template>
    <div>
        <q-dialog :model-value="mostrar" @update:model-value="$emit('fechar')">
            <q-card style="width: 400px">
                <q-card-section>
                    <div class="text-h6">{{ editing ? "Editar" : "Adicionar" }} local</div>
                    <hr class="text-grey" />
                </q-card-section>

                <q-card-section>
                    <q-form v-if="editing" @submit.prevent="atualizarLocal(local_id)">
                        <q-input
                            v-model="name"
                            label="Nome do local"
                            class="q-mb-sm"
                            filled
                            @keyup="autoFillSlug"
                        />
                        <q-input
                            v-model="slug"
                            label="Nome Simplificado"
                            class="q-mb-sm"
                            filled
                            disable
                            ref="slug"
                            readonly
                        />
                        <q-input
                            v-model="city"
                            label="Cidade"
                            class="q-mb-sm"
                            filled
                        />
                        <q-select
                            v-model="state"
                            label="Estado"
                            class="q-mb-sm"
                            filled
                            :options="options"
                        />

                        <div class="q-mt-md">
                            <q-btn
                                type="submit"
                                label="Enviar"
                                color="primary"
                            />
                            <q-btn
                                label="Cancelar"
                                color="red"
                                flat
                                @click="
                                    $emit('fechar');
                                    resetForm();
                                "
                                class="q-ml-md"
                            />
                        </div>
                    </q-form>
                    <q-form v-else @submit.prevent="enviarFormulario">
                        <q-input
                            :model-value="name"
                            label="Nome do local"
                            class="q-mb-sm"
                            filled
                            @keyup="autoFillSlug"
                        />
                        <q-input
                            v-model="slug"
                            label="Nome Simplificado"
                            class="q-mb-sm"
                            filled
                            disable
                            ref="slug"
                            readonly
                        />
                        <q-input
                            v-model="city"
                            label="Cidade"
                            class="q-mb-sm"
                            filled
                        />
                        <q-select
                            v-model="state"
                            label="Estado"
                            class="q-mb-sm"
                            filled
                            :options="options"
                            @change="fillState"
                        />

                        <div class="q-mt-md">
                            <q-btn
                                type="submit"
                                label="Enviar"
                                color="primary"
                            />
                            <q-btn
                                label="Cancelar"
                                color="red"
                                flat
                                @click="
                                    $emit('fechar');
                                    resetForm();
                                "
                                class="q-ml-md"
                            />
                        </div>
                    </q-form>
                </q-card-section>
            </q-card>
        </q-dialog>
    </div>
</template>

<script>
import { useQuasar } from "quasar";
import {
    autoFillSlug,
    fillState,
    data,
    enviarFormulario,
    resetForm,
    setup,
} from "../helpers/formAddLocalHelper";
import { atualizarLocal } from "../helpers/formEditLocalHelper";
import { getLocalById } from '../remote/locals';
import { watch } from 'vue';

const $q = useQuasar();
async function atualizaCampos(newLocalId) {
    if (newLocalId) {
        // Busque os dados do local e atualize os campos
        const localData = await getLocalById(newLocalId);
        console.log(localData.name);
        console.log(localData.slug);
        console.log(localData.city);
        console.log(localData.state);
    }
}
export default {
    props: ["mostrar", "editing", "local_id"],
    data() {
        return data($q);
    },
    setup: (props, methods) => {
        watch(
            () => props.local_id,
            async (newLocalId) => {
                atualizaCampos(newLocalId);
            }
        );
        return setup();
    },
    methods: {
        atualizaCampos,
        fillState,
        resetForm() {
            resetForm(this);
        },
        autoFillSlug() {
            autoFillSlug(event, this);
        },
        async enviarFormulario() {
            enviarFormulario(this, $q);
        },
        async atualizarLocal(localId) {
            atualizarLocal(this, localId, ()=> { location.reload() });
        },
    },
};
</script>
