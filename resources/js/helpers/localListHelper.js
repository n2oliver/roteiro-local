import moment from "moment";
import { ref, onMounted } from "vue";
import { getLocals } from "../remote/locals";

export const methods = {
    moment: () => {
        return moment();
    },
    capitalizeFirstLetter: (string) => {
        if (!string) return ""; // Evita erro com strings vazias ou undefined
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }
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
    const name = ref('');
    const slug = ref('');
    const city = ref('');
    const state = ref('');
    const confirmation = ref(false);
    const editing = ref(false);
    const local_id = ref(null);
    return { name, slug, city, state, loaded, localList, confirmation, local_id, editing };
}
export default {
    listLocals,
    methods,
    data,
}