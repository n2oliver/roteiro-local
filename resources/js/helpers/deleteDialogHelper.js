import { deleteLocal } from "../remote/locals";

export async function deleteLocalHelper(props, $q) {
    const response = await deleteLocal(props.local_id);
    if (response.ok) {
        // Remover o item da tabela
        const row = document
            .querySelector(`[data-local_id="${props.local_id}"]`)
            .closest("tr");
        if (row) row.remove();

        $q.notify({
            type: "positive",
            message: `Local ${props.local_id} removido com sucesso.`,
            position: "top",
        });
    } else {
        console.error("Erro ao excluir o local.");
    }
}
