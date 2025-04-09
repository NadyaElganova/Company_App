import { createApp } from 'vue';
import App from './components/App.vue';
import router from './router';  // импорт маршрутов


createApp(App)
    .use(router)  // подключение маршрутов
    .mount('#app');