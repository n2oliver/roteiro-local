import moment from "moment";
import { ref, onMounted } from "vue";
import { getLocals } from "../remote/locals";

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

    onMounted(async () => {
        const locals = await getLocals();
        
        loaded.value = true;
        localList.value = locals;
    });
    return { loaded, localList, confirmation, local_id };
}
