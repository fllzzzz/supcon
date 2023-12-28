import { createApp } from 'vue'
import App from './App.vue'

import '@/assets/styles/init.css';
import { HttpKey } from '@/symbols';
import store from '@/store';
import router from '@/router';
import errorHandler from '@/globalHandler/error';
import http from '@/http';

const app = createApp(App)

app.provide(HttpKey,http);

app.use(store)
.use(router)
.mount('#app')
