import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router'
import "./assets/scss/index.scss";
import swal from 'sweetalert';
import Swal from 'sweetalert2'

const app = createApp(App);
app.use(router);
app.mount('#app');