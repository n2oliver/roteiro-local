/**
 * Primeiro, carregaremos todas as dependências JavaScript deste projeto, 
 * incluindo o Vue e outras bibliotecas. Este é um ótimo ponto de partida 
 * para construir aplicações web robustas e poderosas usando Vue e Laravel.
 */

import './bootstrap';
import { createApp } from 'vue';
import { Quasar, Notify } from 'quasar';
import '@quasar/extras/material-icons/material-icons.css';
import 'quasar/src/css/index.sass';

/**
* Em seguida, criaremos uma nova instância do aplicativo Vue. Você pode então 
* começar a registrar componentes na instância do aplicativo para que eles 
* estejam prontos para uso nas views da sua aplicação. Um exemplo foi incluído para você.
*/

const app = createApp({});

import Toolbar from './components/Toolbar.vue';
import AddLocalButton from './components/AddLocalButton.vue';
import LocalList from './components/LocalList.vue';
import DeleteDialog from './components/DeleteDialog.vue';

app.use(Quasar, {
    plugins: {
        Notify
    }, // import Quasar plugins and add here
    config: {
        notify: {}/* look at QuasarConfOptions from the API card */
    },
  })
app.component('toolbar', Toolbar);
app.component('add-local-button', AddLocalButton);
app.component('local-list', LocalList);
app.component('delete-dialog', DeleteDialog);

/**
 * O bloco de código a seguir pode ser usado para registrar automaticamente 
 * seus componentes Vue. Ele fará uma varredura recursiva neste diretório 
 * em busca de componentes Vue e os registrará automaticamente usando seu "basename".
 *
 * Exemplo: ./components/LocalList.vue -> <local-list></local-list>
 */

// Object.entries(import.meta.glob('./**/*.vue', { eager: true })).forEach(([path, definition]) => {
//     app.component(path.split('/').pop().replace(/\.\w+$/, ''), definition.default);
// });

/**
 * Por fim, anexaremos a instância do aplicativo a um elemento HTML com 
 * um atributo "id" de "app". Este elemento é incluído com a estrutura de 
 * autenticação ("auth"). Caso contrário, você precisará adicionar um 
 * elemento manualmente.
 */

app.mount('#app');
