import moment from "moment";
import { ref, onMounted } from "vue";

export const methods = {
    moment: () => {
        return moment();
    },
};
export function data() {
    return {
        mostrarFormulario: false,
    };
}
export function setup() {
    const confirmation = ref(false);
    const local_id = ref(null);
    const loaded = ref(false);
    const localList = ref(null);

    onMounted(() => {
        fetch("/locals")
            .then((response) => response.json())
            .then((locals) => {
                loaded.value = true;
                localList.value = locals;
            })
            .catch((error) => console.error("Erro:", error));
    });
    return { loaded, localList, confirmation, local_id };
}
