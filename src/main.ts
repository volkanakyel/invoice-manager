import Vue from "vue";
import Router from "vue-router";
import App from "./App.vue";
import "./registerServiceWorker";
import store from "./store";
import "./assets/scss/main.scss";
import router from "./router";

Vue.use(Router);

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
