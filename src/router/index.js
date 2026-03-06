import Vue from "vue";
import Router from "vue-router";

import Home from "../pages/Home.vue";
import About from "../pages/About.vue";
import FloatingKnight from "../pages/FloatingKnight.vue";
import Science from "../pages/Science.vue";
import ProductSoothingGel from "../pages/ProductDetail.vue";
import Contact from "../pages/Contact.vue";
import Products from "../pages/Products.vue";
import Terms from "../pages/Terms.vue";
import Privacy from "../pages/Privacy.vue";

Vue.use(Router);

const SUPPORTED_LOCALES = ["en", "zh"];

const getSavedLocale = () => {
  try {
    const saved = localStorage.getItem("sb_locale");
    return SUPPORTED_LOCALES.includes(saved) ? saved : "en";
  } catch (error) {
    return "en";
  }
};

const langGuard = (to, from, next) => {
  const { lang } = to.params;

  if (!SUPPORTED_LOCALES.includes(lang)) {
    return next(`/${getSavedLocale()}`);
  }

  try {
    localStorage.setItem("sb_locale", lang);
  } catch (error) {
    // ignore localStorage errors
  }

  return next();
};

const EmptyRouterView = {
  render(h) {
    return h("router-view");
  },
};

const routes = [
  {
    path: "/:lang(en|zh)",
    component: EmptyRouterView,
    beforeEnter: langGuard,
    children: [
      {
        path: "",
        name: "home",
        component: Home,
        meta: {
          title: "Home | silver bullet®",
        },
      },
      {
        path: "about",
        name: "about",
        component: About,
        meta: {
          title: "About | silver bullet®",
        },
      },
      {
        path: "floating-knight",
        name: "floating-knight",
        component: FloatingKnight,
        meta: {
          title: "Floating Knight Biotech | silver bullet®",
        },
      },
      {
        path: "science",
        name: "science",
        component: Science,
        meta: {
          title: "Science | silver bullet®",
        },
      },
      {
        path: "eu/products/:slug",
        name: "eu-product",
        component: ProductSoothingGel,
        meta: {
          title: "Product | silver bullet®",
        },
      },
      {
        path: "contact",
        name: "contact",
        component: Contact,
        meta: {
          title: "Contact Us | silver bullet®",
        },
      },
      {
        path: "products",
        name: "products",
        component: Products,
        meta: {
          title: "Products | silver bullet®",
        },
      },
      {
        path: "terms",
        name: "terms",
        component: Terms,
        meta: {
          title: "Terms & Conditions | silver bullet®",
        },
      },
      {
        path: "privacy",
        name: "privacy",
        component: Privacy,
        meta: {
          title: "Privacy Policy | silver bullet®",
        },
      },
    ],
  },

  {
    path: "/",
    redirect: () => `/${getSavedLocale()}`,
  },

  {
    path: "*",
    redirect: () => `/${getSavedLocale()}`,
  },
];

const router = new Router({
  mode: "history",
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ x: 0, y: 0 });
      }, 0);
    });
  },
});

router.afterEach((to) => {
  const defaultTitle = "silver bullet®";
  document.title = to.meta && to.meta.title ? to.meta.title : defaultTitle;
});

export default router;