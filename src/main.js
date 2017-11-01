// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// import resource from './vue-resource'
import VueResource from 'vue-resource'

Vue.use(VueResource);

import store from './components/store'

Vue.config.productionTip = false

// Vue.url.options.root = "https://jsonplaceholder.typicode.com/posts"
// Vue.url.options.root = "http://localhost/test/php"
// Vue.url.options.root = "http://localhost:99" //off currnet
// Vue.url.options.root = "http://192.168.1.12:99/test/php"
// Vue.url.options.root = "https://vuejs.mikesprague.me/design-quotes/"
// Vue.url.options.root = "http://internal.game/test/php/"
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
    store,
  // resource,
  template: '<App/>',
  components: { App }
})
