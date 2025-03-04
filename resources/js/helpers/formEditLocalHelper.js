import { putLocal } from "../remote/locals";

export async function atualizarLocal(obj, localId) {
    if (obj.name == "" || obj.slug == "" || obj.city == "" || obj.state == "") {
        obj.$q.notify({
            type: "negative",
            message: "Preencha todos os campos!",
            position: "top",
        });
        return false;
    }

    const response = await putLocal(obj, localId);
    if (response.ok) {
        obj.$q.notify({
            type: "positive",
            message: `Local "${obj.name}" editado com sucesso!`,
            position: "top",
        });
        obj.$emit("fechar"); // Fecha o modal ao enviar
        obj.resetForm();
        location.reload();
    }
}
