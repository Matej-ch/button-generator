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
