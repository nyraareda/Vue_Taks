import { createApp } from 'vue'
// import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './components/formvalidation'
import wrappercomponent from './wrappercomponent.vue'

createApp(wrappercomponent).mount('#app')
