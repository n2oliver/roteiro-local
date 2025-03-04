import { ref } from "vue";

export function setup() {
    const modal_form_add_local = ref(false);
    return {
        modal_form_add_local,
    };
}
