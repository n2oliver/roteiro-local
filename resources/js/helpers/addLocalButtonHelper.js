import { ref } from "vue";
export function data() {
    return { mostrarFormulario: false };
}
export function setup() {
    return {
        local_id: ref(null),
    };
}
