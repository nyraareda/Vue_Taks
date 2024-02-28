import {createPinia} from 'pinia';
import { createApp } from 'vue';
const pinia = createPinia();
import profilecomponent from './components/profilecomponent.vue'

import mainwrapper from './mainwrapper.vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import '@fortawesome/fontawesome-free/css/all.css'
import router from './routes/routes';
// createApp(mainwrapper).use(router).use(pinia).mount('#app');
createApp(mainwrapper).use(router).use(pinia).mount('#app');