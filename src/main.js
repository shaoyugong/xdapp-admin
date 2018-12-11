import Vue from "vue";
import Element from "element-ui";
import "./assets/css/element-variables.scss";
import i18n from "./config/i18n";
import router from "./config/router";
import store from "./config/store";
import App from "./App.vue";

Vue.use(Element, {
  i18n: (key, value) => i18n.t(key, value) // element加入多语言
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
