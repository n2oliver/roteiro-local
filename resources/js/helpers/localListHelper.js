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
export async function listLocals(loaded, localList) {
    const locals = await getLocals();
    
    loaded.value = true;
    localList.value = locals;
    return locals;
}
export function setup(loaded, localList) {
    const confirmation = ref(false);
    const editing = ref(false);
    const local_id = ref(null);
    return { loaded, localList, confirmation, local_id, editing };
}
export default {
    listLocals
}