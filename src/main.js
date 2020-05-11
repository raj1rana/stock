import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import {routes} from './routes';
import store from './store/store'
import VueResourse from 'vue-resource';
Vue.use(VueRouter);
Vue.use(VueResourse);

Vue.http.options.root = 'https://stocktraders-15c0b.firebaseio.com/'



const router  = new VueRouter({
  mode: "history",
  routes: routes
})

Vue.filter('currency', (value)=> {
  return '$' + value.toLocaleString();
})

new Vue({
  router: router,
  store: store,
  el: '#app',
  render: h => h(App)
})
