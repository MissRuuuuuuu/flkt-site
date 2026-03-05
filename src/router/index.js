import Vue from "vue";
import Router from "vue-router";

import Home from "../pages/Home.vue";
import About from "../pages/About.vue";
import FloatingKnight from "../pages/FloatingKnight.vue";
import Science from "../pages/Science.vue";
import MarketEU from "../pages/MarketEU.vue";
import ProductSoothingGel from "../pages/ProductSoothingGel.vue";
import MarketCN from "../pages/MarketCN.vue";
import Contact from "../pages/Contact.vue";
import Legal from "../pages/Legal.vue";
import Products from "../pages/Products.vue";

Vue.use(Router);

const langGuard = (to, from, next) => {
  const lang = to.params.lang;
  if (!["en", "zh"].includes(lang)) return next("/en");
  next();
};

const routes = [
  {
    path: "/:lang(en|zh)",
    beforeEnter: langGuard,
    component: { render: (h) => h("router-view") }, // simple layout wrapper
    children: [
      { path: "", name: "home", component: Home },
      { path: "about", name: "about", component: About },
      { path: "floating-knight", name: "floating", component: FloatingKnight },
      { path: "science", name: "science", component: Science },

      { path: "eu", name: "eu", component: MarketEU },
      { path: "eu/products/:slug", name: "eu-product", component: ProductSoothingGel },

      { path: "cn", name: "cn", component: MarketCN },
      { path: "contact", name: "contact", component: Contact },
      { path: "legal", name: "legal", component: Legal },
      { path: "products",name: "Products", component: Products,}
    ],
  },

  // root redirect → pick saved locale, default en
  {
    path: "/",
    redirect: () => {
      const saved = localStorage.getItem("sb_locale") || "en";
      return `/${saved}`;
    },
  },

  // fallback
  { path: "*", redirect: "/en" },
];

export default new Router({
  mode: "history",
  routes,
});
