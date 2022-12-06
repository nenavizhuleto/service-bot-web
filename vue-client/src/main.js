import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import Vuex from 'vuex';
import store from './store';
import axios from 'axios';


axios.defaults.withCredentials = true
// axios.defaults.headers.common['Referrer-Policy'] = 'unsafe-url'
axios.defaults.baseURL = 'http://193.150.100.254:8050/service';


const app = createApp(App)
app.use(Vuex)
app.use(router)
app.use(store)

app.mount('#app')


    // store,
    // router,
    // render: h => h(App)
