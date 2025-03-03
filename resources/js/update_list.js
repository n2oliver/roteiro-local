export function updateList(callback) {
    let tbody = document.querySelector(".local-list tbody");

    fetch('/locals')
      .then(response => response.json())
      .then(locals => {
        tbody.innerHTML = ""; // Limpa a tabela
        if(locals.length == 0) {
            tbody.innerHTML += "<tr>"+
                    "<td>--</td>" +
                    "<td>--</td>" +
                    "<td>--</td>" +
                    "<td>--</td>" +
                    "<td>--</td>" +
                    "<td>--</td>" +
                    "<td>--</td>" +
                "</tr>";
            return;
        }
        locals.forEach(local => {
          tbody.innerHTML +=
            `<tr>
              <td>${local.name}</td>
              <td>${local.slug}</td>
              <td>${local.city}</td>
              <td>${local.state}</td>
              <td>${new Date(local.created_at).toLocaleString()}</td>
              <td>${new Date(local.updated_at).toLocaleString()}</td>
              <td><img class="delete" data-local_id="${local.local_id}" src="/icons/trash.svg"></td>
            </tr>`;
        });

        if(callback) {
            callback();
        }
      })
      .catch(error => console.error('Erro:', error));
  }