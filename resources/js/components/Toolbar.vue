<template>
    <div class="sm:w-full md:w-full lg:w-2/3 m-auto">
        <q-toolbar class="bg-primary text-white">
            <q-avatar>
                <img src="/icons/pin.svg" />
            </q-avatar>

            <q-toolbar-title>Roteiro de Viagens</q-toolbar-title>
            <add-local-button></add-local-button>
        </q-toolbar>
    </div>
</template>
<script>
import { setup } from "../helpers/toolbarHelper";
export default {
    setup: setup,
};
</script>
