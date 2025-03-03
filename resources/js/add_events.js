export function addEvents(local_id, confirmation) {
    const botoes = document.querySelectorAll(".delete");
    botoes.forEach(botao => {
      botao.addEventListener("click", (event) => {
        confirmation.value = true;
        local_id.value = event.target.dataset.local_id;
        console.log("Local ID selecionado:", local_id.value);
      });
    });
}