import './bootstrap';
import { createApp } from 'vue';
import { Quasar, Notify } from 'quasar';
import '@quasar/extras/material-icons/material-icons.css';
import 'quasar/src/css/index.sass';

import Toolbar from './components/Toolbar.vue';
import AddLocalButton from './components/AddLocalButton.vue';
import LocalList from './components/LocalList.vue';
import DeleteDialog from './components/DeleteDialog.vue';

const app = createApp({});
app.use(Quasar, {
    plugins: {
        Notify
    },
    config: {
        notify: {}
    },
  })
app.component('toolbar', Toolbar);
app.component('add-local-button', AddLocalButton);
app.component('local-list', LocalList);
app.component('delete-dialog', DeleteDialog);

app.mount('#app');
