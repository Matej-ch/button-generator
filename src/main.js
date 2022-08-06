import {createApp} from 'vue'
import App from './App.vue'
import {createPinia} from 'pinia'
import convertHexColor from "./plugins/convertHexColor";
import convertObjToCss from "./plugins/convertObjToCss";

createApp(App)
    .use(createPinia())
    .use(convertHexColor)
    .use(convertObjToCss)
    .mount('#app')