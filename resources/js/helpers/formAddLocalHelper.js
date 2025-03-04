import { ref } from 'vue';
import { postLocal } from "../remote/locals"
export function data ($q) {
    return {
      nome: '',
      email: '',
      slug: '',
      city: '',
      state: '',
      $q: $q,
    };
  }
export function setup() {
    return {
        state: ref(null),
        local_id: ref(null),
        name: ref(''),
        confirmation: ref(false),
        options: [
        'Acre',
        'Alagoas',
        'Amapá',
        'Amazonas',
        'Bahia',
        'Ceará',
        'Distrito Federal',
        'Espirito Santo',
        'Goiás',
        'Maranhão',
        'Mato Grosso do Sul',
        'Mato Grosso',
        'Minas Gerais',
        'Pará',
        'Paraíba',
        'Paraná',
        'Pernambuco',
        'Piauí',
        'Rio de Janeiro',
        'Rio Grande do Norte',
        'Rio Grande do Sul',
        'Rondônia',
        'Roraima',
        'Santa Catarina',
        'São Paulo',
        'Sergipe',
        'Tocantins',
        ]
    };
}
export function resetForm(obj) {
    obj.name = '';
    obj.slug = '';
    obj.city = '';
    obj.state = '';
  }
export function autoFillSlug(event, obj) {
    obj.slug = event.target.value ?
      event.target.value
        .replace(/[`~!@#$%^&*()|+\=?;:'",.<>\{\}\[\]\\\/]/gi, '')
        .normalize('NFD').replace(/[\u0300-\u036f]/g, "")
        .replace(/\s+/g, '-')
        .toLowerCase() :
      '';
    return obj.slug;
  }
export async function enviarFormulario(obj) {
    if(
        obj.name == '' ||
        obj.slug == '' ||
        obj.city == '' ||
        obj.state == '') {
        obj.$q.notify({
        type: 'negative',
        message: 'Preencha todos os campos!',
        position: 'top'
        });
        return false;
    }
    
    const response = await postLocal(obj);
    if (response.ok) {
      obj.$q.notify({
        type: 'positive',
        message:  `Local "${obj.name}" adicionado com sucesso!`,
        position: 'top'
      });
      obj.$emit('fechar'); // Fecha o modal ao enviar
      obj.resetForm();
      location.reload();
    }

}