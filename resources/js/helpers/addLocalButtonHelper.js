import { ref } from "vue";
export function data() {
    return { mostrarFormulario: ref(false) };
}
export function setup() {
    return {
        local_id: ref(null),
        mostrarFormulario: ref(false),
    };
}
export function abrirFormulario(obj) {
    obj.mostrarFormulario = true
}