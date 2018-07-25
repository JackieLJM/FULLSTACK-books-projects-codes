import Vue from 'vue';
import App from './app/app-complete';
import { router } from './app/app-complete';

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
