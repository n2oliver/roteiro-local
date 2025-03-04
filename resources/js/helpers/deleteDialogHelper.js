export async function deleteLocalHelper(props, $q) {
    const response = await fetch(`/locals/${props.local_id}`, {
        method: "DELETE",
        headers: {
            "X-CSRF-TOKEN": document
                .querySelector('meta[name="csrf-token"]')
                .getAttribute("content"),
            "Content-Type": "application/json",
        },
    });
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
