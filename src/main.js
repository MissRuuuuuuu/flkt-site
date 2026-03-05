import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import i18n, { setLocale } from "./i18n";
import LangMixin from "./mixins/lang";

import BootstrapVue from "bootstrap-vue";
import "./assets/app.css";
import "@/assets/fonts.css";


// ✅ 引入 Bootstrap & BootstrapVue 样式
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.mixin(LangMixin);
Vue.use(BootstrapVue);
Vue.config.productionTip = false;

// --- hreflang helper (no extra libs) ---
function setHreflangLinks() {
  // remove old hreflang links we manage
  document.querySelectorAll('link[data-sb-hreflang="1"]').forEach((n) => n.remove());

  const { origin, pathname } = window.location;
  // pathname like /en/xxx or /zh/xxx
  const rest = pathname.replace(/^\/(en|zh)/, "") || "";
  const enUrl = `${origin}/en${rest}`;
  const zhUrl = `${origin}/zh${rest}`;

  const make = (hreflang, href) => {
    const link = document.createElement("link");
    link.setAttribute("rel", "alternate");
    link.setAttribute("hreflang", hreflang);
    link.setAttribute("href", href);
    link.setAttribute("data-sb-hreflang", "1");
    document.head.appendChild(link);
  };

  make("en", enUrl);
  make("zh", zhUrl);
  make("x-default", enUrl);
}

router.beforeEach((to, from, next) => {
  const lang = to.params.lang;
  if (lang && lang !== i18n.locale) setLocale(lang);
  next();
});

router.afterEach(() => {
  document.documentElement.setAttribute("lang", i18n.locale);
  setHreflangLinks();
});

new Vue({
  router,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
