import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import BootstrapVue3 from 'bootstrap-vue-3';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { createPinia } from 'pinia';


import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';


const app = createApp(App);
const pinia = createPinia();

app.use(BootstrapVue3);
app.use(router);
app.use(pinia);

app.mount('#app');
