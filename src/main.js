import {createApp} from 'vue'
import App from './App.vue'
import {createPinia} from 'pinia'

const app = createApp(App);

app.config.globalProperties.$filters = {
    hexToRgba(hex, alpha) {
        let value = hex.match(/[A-Za-z0-9]{2}/g);

        value = value.map(function (v) {
            return parseInt(v, 16)
        });

        return "rgb(" + value.join(",") + ',' + alpha + ")";
    },

    objToCss(obj) {
        Object.keys(obj).forEach((key) => (obj[key] === "") && delete obj[key]);
        return JSON.stringify(obj)
            .replace(/['"]+/g, '')
            .replace(/,+/g, '; ')
            .replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2')
            .toLowerCase();
    }
}

app.provide('hexToRgba', app.config.globalProperties.$filters.hexToRgba)
app.provide('objToCss', app.config.globalProperties.$filters.objToCss)

app
    .use(createPinia())
    .mount('#app')