import { createApp } from 'vue'
import App from './App.vue'
import VueClipboard from 'vue3-clipboard'
import "@/assets/styles/main.css";
import store from './store'

createApp(App)
    .use(VueClipboard, {
        autoSetContainer: true,
        appendToBody: true,
    })
    .use(store)
    .mount('#app')
