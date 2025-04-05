import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import '../css/app.css';
import {createApp} from 'vue'
import App from './App.vue'
import router from './router';

const app = createApp(App);

// Используем Vue Router
app.use(router);

// Монтируем приложение
app.mount('#app');

