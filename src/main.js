import {createApp} from 'vue'
import App from './App.vue'
import {createPinia} from 'pinia'

createApp(App)
    .use(createPinia())
    .mount('#app')
/*
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.filter('convertToCss',function (obj) {
  Object.keys(obj).forEach((key) => (obj[key] === "") && delete obj[key]);
  return JSON.stringify(obj)
      .replace(/['"]+/g,'')
      .replace(/,+/g,'; ')
      .replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2')
      .toLowerCase();
})

new Vue({
  render: h => h(App),
}).$mount('#app')
*/

/*export const hexToRgbaMixin = {
  methods: {
    convertToRgbaString(hex,alpha) {
      let value = hex.match(/[A-Za-z0-9]{2}/g);

      value = value.map(function(v) { return parseInt(v, 16) });

      return "rgb(" + value.join(",") + ',' + alpha + ")";
    }
  }
}*/
