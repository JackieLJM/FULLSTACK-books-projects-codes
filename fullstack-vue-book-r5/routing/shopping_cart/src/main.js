import Vue from 'vue';
import App from './app-complete/App.vue';
import store from './app-complete/store';
import router from './app-complete/router';

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
});
