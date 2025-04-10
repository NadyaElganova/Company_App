import { createApp } from 'vue';
import App from './components/App.vue';
import router from './router';  // импорт маршрутов
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

createApp(App)
    .use(router)  // подключение маршрутов
    .mount('#app');