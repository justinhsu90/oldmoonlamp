import Vue from "vue";
import App from "./App.vue";
import "./plugins/element.js";
import "./core/axios";
Vue.config.productionTip = false;

new Vue({
  render: h => {
    return h(App);
  }
}).$mount("#app");
