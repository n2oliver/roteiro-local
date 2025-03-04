export async function getLocals() {
    return await fetch("/locals")
        .then((response) => response.json())
        .catch((error) => console.error("Erro:", error))
}
export async function deleteLocal(localId) {
    return await fetch(`/locals/${localId}`, {
        method: "DELETE",
        headers: {
            "X-CSRF-TOKEN": document
                .querySelector('meta[name="csrf-token"]')
                .getAttribute("content"),
            "Content-Type": "application/json",
        },
    })
}
export async function postLocal(obj) {
    return await fetch(`/locals`, {
        method: 'POST',
        body: JSON.stringify({
          name: obj.name,
          slug: obj.slug,
          city: obj.city,
          state: obj.state,
        }),
        headers: {
            'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
            'Content-Type': 'application/json'
        }
    })
}
export default {
    deleteLocal,
}