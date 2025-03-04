<template>
    <div class="sm:w-full md:w-full lg:w-2/3 m-auto">
        <table
            border="1"
            class="local-list m-auto sm:w-full md:w-full lg:w-full"
        >
            <thead>
                <tr>
                    <th>Local</th>
                    <th>Slug</th>
                    <th>Cidade</th>
                    <th>Estado</th>
                    <th>Criado</th>
                    <th>Atualizado</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody ref="data" v-if="loaded && localList">
                <tr v-for="(local, index) in localList" :key="index">
                    <td>
                        {{ capitalizeFirstLetter(local.name) }}
                    </td>
                    <td>
                        {{ local.slug }}
                    </td>
                    <td>
                        {{ capitalizeFirstLetter(local.city) }}
                    </td>
                    <td>
                        {{ local.state }}
                    </td>
                    <td>
                        {{ new Date(local.created_at).toLocaleString() }}
                    </td>
                    <td>
                        {{ new Date(local.created_at).toLocaleString() }}
                    </td>
                    <td class="acoes">
                        <img
                            :data-local_id="local.local_id"
                            @click="
                                local_id = local.local_id.toString();
                                mostrarFormulario = true;
                            "
                            src="/icons/pen.svg"
                        />
                        <img
                            :data-local_id="local.local_id"
                            @click="
                                local_id = local.local_id.toString();
                                confirmation = true;
                            "
                            src="/icons/trash.svg"
                        />
                    </td>
                </tr>
            </tbody>
            <tbody ref="data" v-else>
                <tr>
                    <td>
                        <q-circular-progress
                            indeterminate
                            rounded
                            size="10px"
                            color="lime"
                            class="q-ma-xs"
                        />
                    </td>
                    <td>
                        <q-circular-progress
                            indeterminate
                            rounded
                            size="10px"
                            color="lime"
                            class="q-ma-xs"
                        />
                    </td>
                    <td>
                        <q-circular-progress
                            indeterminate
                            rounded
                            size="10px"
                            color="lime"
                            class="q-ma-xs"
                        />
                    </td>
                    <td>
                        <q-circular-progress
                            indeterminate
                            rounded
                            size="10px"
                            color="lime"
                            class="q-ma-xs"
                        />
                    </td>
                    <td>
                        <q-circular-progress
                            indeterminate
                            rounded
                            size="10px"
                            color="lime"
                            class="q-ma-xs"
                        />
                    </td>
                    <td>
                        <q-circular-progress
                            indeterminate
                            rounded
                            size="10px"
                            color="lime"
                            class="q-ma-xs"
                        />
                    </td>
                    <td>
                        <q-circular-progress
                            indeterminate
                            rounded
                            size="10px"
                            color="lime"
                            class="q-ma-xs"
                        />
                    </td>
                </tr>
            </tbody>
        </table>

        <div class="q-pa-md q-gutter-sm">
            <!-- Passando local_id como prop -->
            <form-add-local
                :mostrar="mostrarFormulario"
                @fechar="mostrarFormulario = false"
                :local_id="local_id"
                :editing="true"
                persistent
            ></form-add-local>
            <delete-local-dialog
                v-model="confirmation"
                :local_id="local_id"
                persistent
            ></delete-local-dialog>
        </div>
    </div>
</template>

<script>
import DeleteDialog from "./DeleteLocalDialog.vue";
import AddLocalButton from "./AddLocalButton.vue";
import FormAddLocal from "./FormAddLocal.vue";
import { data, listLocals, methods, setup } from "../helpers/localListHelper";
import { ref, onMounted } from 'vue';

export default {
    data: data,
    methods: methods,
    components: { DeleteDialog, AddLocalButton, FormAddLocal },
    setup: () => {
        const loaded = ref(false);
        const localList = ref(null);
        onMounted(() => {
            listLocals(loaded, localList);
        });
        return setup(loaded, localList);
    },
};
</script>
