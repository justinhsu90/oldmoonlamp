import Vue from "vue";
import App from "./App.vue";
import "./plugins/element.js";
import "./core/axios";

import "./assets/scss/index.scss";
Vue.config.productionTip = false;

new Vue({
  render: h => {
    return h(App);
  }
}).$mount("#app");
