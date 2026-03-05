<template>
  <div class="app">
    <b-navbar
      toggleable="lg"
      type="light"
      variant="white"
      class="border-bottom w-100 topNav"
    >
      <b-container fluid>
        <!-- Left: Logo -->
        <b-navbar-brand :to="withLang('/')" router class="brand">
          SILVER BULLET®
        </b-navbar-brand>

        <!-- Mobile toggle -->
        <b-navbar-toggle target="sb-nav-collapse" />

        <!-- Collapse -->
        <b-collapse id="sb-nav-collapse" is-nav>
          <!-- Full-width row inside collapse -->
          <div class="w-100 d-lg-flex align-items-lg-center">
            <!-- Center: Nav links -->
            <b-navbar-nav class="mx-lg-auto justify-content-lg-center nav-center">
              <b-nav-item :to="withLang('/')" router exact>
                {{ $t("nav.home") }}
              </b-nav-item>

           <!-- Products Nav Item -->
<div
 class="navItem navItemDropdown"
  @mouseenter="openProductsMenu"
  @mouseleave="closeProductsMenuDelayed"
  @focusin="openProductsMenu"
  @focusout="onProductsFocusOut"
>
  <router-link
class="nav-link productsLink"
  :class="{ 'router-link-exact-active': isProductsActive, 'router-link-active': isProductsActive }"
  :to="withLang('/products')"
  @focus="openProductsMenu"
  @blur="closeProductsMenuDelayed"
>
  Products
</router-link>

  <!-- Dropdown -->
  <div
      v-show="productsMenuOpen"
  class="productsDropdown"
  role="menu"
  @mouseenter="openProductsMenu"
  @mouseleave="closeProductsMenuDelayed"
  >
    <div class="productsDropdownInner">
 <router-link
  class="ddItem"
  :to="{ path: withLang('/products'), query: { line: 'soothing' } }"
  @click.native="closeProductsMenu"
>
  Soothing
</router-link>

<router-link
  class="ddItem"
  :to="{ path: withLang('/products'), query: { line: 'post-procedures' } }"
  @click.native="closeProductsMenu"
>
  Post-procedures
</router-link>

<router-link
  class="ddItem"
  :to="{ path: withLang('/products'), query: { line: 'anti-aging' } }"
  @click.native="closeProductsMenu"
>
  Anti-aging
</router-link>
    </div>
  </div>
</div>

              <b-nav-item :to="withLang('/science')" router>
                {{ $t("nav.science") }}
              </b-nav-item>

              <b-nav-item :to="withLang('/contact')" router>
                {{ $t("nav.contact") }}
              </b-nav-item>

              <!-- <b-nav-item :to="withLang('/legal')" router>
                {{ $t("nav.legal") }}
              </b-nav-item> -->
            </b-navbar-nav>

            <!-- Right: Language -->
            <!-- <div class="lang-wrap ml-lg-auto mt-3 mt-lg-0">
              <span class="lang-label d-none d-lg-inline mr-2">
                {{ $t("ui.language") }}:
              </span> -->

              <!-- Desktop: two buttons -->
              <!-- <b-button-group class="d-none d-lg-inline-flex">
                <b-button
                  :variant="locale === 'zh' ? 'dark' : 'outline-secondary'"
                  size="sm"
                  @click="switchLang('zh')"
                >
                  {{ $t("ui.zh") }}
                </b-button>
                <b-button
                  :variant="locale === 'en' ? 'dark' : 'outline-secondary'"
                  size="sm"
                  @click="switchLang('en')"
                >
                  {{ $t("ui.en") }}
                </b-button>
              </b-button-group> -->

              <!-- Mobile: dropdown -->
              <!-- <b-dropdown
                class="d-lg-none"
                size="sm"
                variant="outline-secondary"
                right
                :text="locale === 'zh' ? $t('ui.zh') : $t('ui.en')"
              >
                <b-dropdown-item @click="switchLang('zh')">
                  {{ $t("ui.zh") }}
                </b-dropdown-item>
                <b-dropdown-item @click="switchLang('en')">
                  {{ $t("ui.en") }}
                </b-dropdown-item>
              </b-dropdown> -->
            <!-- </div> -->
          </div>
        </b-collapse>
      </b-container>
    </b-navbar>

    <main class="main">
      <router-view />
    </main>

    <!-- Footer -->
    <footer class="siteFooter">
  <div class="footerInner">
    <div class="footerCol">
      <div class="footerTitle">Company</div>
      <router-link class="footerLink" :to="withLang('/about')">About</router-link>
    </div>

    <div class="footerCol">
      <div class="footerTitle">Social</div>
      <a class="footerLink" href="https://facebook.com" target="_blank" rel="noopener">Facebook</a>
      <a class="footerLink" href="https://linkedin.com" target="_blank" rel="noopener">LinkedIn</a>
      <a class="footerLink" href="https://instagram.com" target="_blank" rel="noopener">Instagram</a>
      <a class="footerLink" href="https://x.com" target="_blank" rel="noopener">X</a>
    </div>

    <div class="footerCol footerRight">
      <div class="copyright">
        © 2025 Silver Bullet. All Rights Reserved.<br />
        Owned by Floating Knight
      </div>
    </div>
  </div>
</footer>

  </div>
</template>

<script>
import { setLocale } from "./i18n";

export default {
  name: "App",
  data() {
  return {
    productsMenuOpen: false,
    productsMenuTimer: null,
  };
},
  computed: {
    locale() {
      return this.$i18n.locale;
    },
    // 可选：让 Products 在 products 相关路由时高亮
  isProductsActive() {
   const p = this.$route.path || "";
  return (
    p.includes("/products") ||        // 产品列表（含 query）
    p.includes("/eu/products")  ||        // 产品详情页
    p.includes("/zh/products")       // 产品详情页
  );
  },
  },
  methods: {
    withLang(path) {
      const lang =
        (this.$route && this.$route.params && this.$route.params.lang) ||
        this.$i18n.locale ||
        "en";
      const p = path.startsWith("/") ? path : `/${path}`;
      if (p === "/") return `/${lang}`;
      return `/${lang}${p}`;
    },
    switchLang(next) {
      const rest = this.$route.fullPath.replace(/^\/(en|zh)/, "");
      setLocale(next);
      this.$router.push(`/${next}${rest || ""}`);
    },
    openProductsMenu() {
    if (this.productsMenuTimer) {
      clearTimeout(this.productsMenuTimer);
      this.productsMenuTimer = null;
    }
    this.productsMenuOpen = true;
  },

  closeProductsMenu() {
    if (this.productsMenuTimer) {
      clearTimeout(this.productsMenuTimer);
      this.productsMenuTimer = null;
    }
    this.productsMenuOpen = false;
  },

  closeProductsMenuDelayed() {
    if (this.productsMenuTimer) clearTimeout(this.productsMenuTimer);
    this.productsMenuTimer = setTimeout(() => {
      this.productsMenuOpen = false;
      this.productsMenuTimer = null;
    }, 120); // 你可以调成 80~200
  },
    onProductsFocusOut(e) {
    // focus 离开 dropdown 容器时关闭（给个微小延迟，避免点 link 时闪）
    window.setTimeout(() => {
      const root = this.$el.querySelector(".navItemDropdown");
      if (!root) return;
      if (!root.contains(document.activeElement)) this.closeProductsMenu();
    }, 0);
    },
    onNavKeydown(e) {
    if (e.key === "Escape") this.closeProductsMenu();
    },
  },
mounted() {
  window.addEventListener("keydown", this.onNavKeydown);
},
beforeDestroy() {
   window.removeEventListener("keydown", this.onNavKeydown);
  if (this.productsMenuTimer) clearTimeout(this.productsMenuTimer);
},

};
</script>

<style scoped>
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.main {
  flex: 1;
}

/* Logo */
.brand {
  font-weight: 900;
  letter-spacing: 0.6px;
}

/* Keep nav centered visually */
.nav-center {
  gap: 10px;
}
/* nav 容器必须 relative，dropdown 才能贴住 nav 底边 */
.navBar {
  position: sticky; /* 你之前要滚动也可点击 nav，这里建议 sticky */
  top: 0;
  z-index: 50;
  background: #fff;
}

/* dropdown 包裹 */
.navItemDropdown {
  position: relative;
}

/* 下拉面板：紧贴 nav 下边 */
.productsDropdown {
  position: absolute;
  top: calc(100% + 8px); /* 如果你要“紧贴”，改成 0；想留一点缝就 8px */
  left: 50%;
  transform: translateX(-50%);
  min-width: 260px;
pointer-events: auto;
  background: #fff;
  border: 1px solid #eee;
  border-radius: 14px;
  box-shadow: 0 12px 30px rgba(0,0,0,0.10);
  padding: 10px;
  z-index: 999;
}
/* ✅ 关键：不要被 navbar 的容器裁切 */
::v-deep .navbar-nav,
::v-deep .navbar-collapse,
::v-deep .navbar,
::v-deep .navbar .container-fluid {
  overflow: visible !important;
}


/* 让它视觉上“贴住”nav：你要完全贴就用 top: 100% + border-top */
.productsDropdownInner {
  display: flex;
  flex-direction: column;
  gap: 6px;
}


/* 每个选项 */
.ddItem {
  display: block;
  padding: 10px 12px;
  border-radius: 12px;
  text-decoration: none;
  color: #111;
  font-weight: 600;
}

.ddItem:hover {
  background: #f6f6f6;
}
/* 所有导航项统一 */
.navLink {
  display: inline-flex;        /* ✅ 不会“偏高/偏低” */
  align-items: center;         /* ✅ 垂直居中 */
  /* gap: 6px; */
  padding: 12px 12px 6px;
  /* color: #111;            */
  text-decoration: none;       /* ✅ 去下划线 */
  /* font-weight: 500; */
  line-height: 1;              /* ✅ 防止基线不一致 */
  cursor: pointer;
}

/* 浏览器默认 a:link / a:visited 颜色也一起压掉 */
.navLink:link,
.navLink:visited {
  color: #111;
  text-decoration: none;
}

/* hover */
.navLink:hover {
  color: #111;
  text-decoration: none;
}

.productsLink {
  display: inline-flex;
  align-items: center;
  line-height: 1.5;     /* 和 Bootstrap nav-link 接近 */
  padding-top: 0.5rem;  /* 对齐 b-nav-item */
  padding-bottom: 0.5rem;
}

/* Language area */
.lang-wrap {
  display: flex;
  align-items: center;
}
.lang-label {
  font-size: 12px;
  color: #666;
}
.topNav {
  position: sticky;
  top: 0;
  z-index: 9999;
  background: #fff;
}
/* Footer */
.siteFooter {
  border-top: 1px solid #eee;
  background: #fff;
  padding: 22px 0;
}
.footerInner {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 16px;
  display: flex;
  gap: 24px;
}
.footerCol { min-width: 160px; }
.footerTitle { font-weight: 800; margin-bottom: 10px; }
.footerLink {
  display: block;
  color: #111;
  text-decoration: none;
  margin: 6px 0;
}
.footerLink:hover { text-decoration: underline; }
.footerRight { margin-left: auto; text-align: right; }
.copyright { color: #444; line-height: 1.6;font-size: 12px; }

@media (max-width: 820px) {
  .footerInner { flex-direction: column; }
  .footerRight { margin-left: 0; text-align: left; }
}

/* =========================
   Nav underline interactions
   ========================= */

/* Ensure we can draw underline per-link */
::v-deep .navbar-nav .nav-link {
  position: relative;
  padding-bottom: 8px;
  color: #111;
  transition: opacity 0.15s ease;
}

/* Hover (not active): subtle underline animation */
::v-deep .navbar-nav .nav-link::after {
  content: "";
  position: absolute;
  left: 50%;
  right: 50%;
  bottom: 2px;
  height: 3px;
  background: #001EE6;
  opacity: 0;
  transition: left 0.18s ease, right 0.18s ease, opacity 0.18s ease;
}

/* On hover, show underline */
::v-deep .navbar-nav .nav-link:hover::after {
  left: 10%;
  right: 10%;
  opacity: 0.35; /* subtle for hover */
}

/* Active: bold + full underline */
::v-deep .navbar-nav .nav-link.router-link-exact-active {
  font-weight: 800;
  opacity: 1;
}

/* Active underline stronger + full width */
::v-deep .navbar-nav .nav-link.router-link-exact-active::after {
  left: 0;
  right: 0;
  opacity: 1; /* strong for active */
}

/* Make inactive slightly softer */
::v-deep .navbar-nav .nav-link:not(.router-link-exact-active) {
  opacity: 0.82;
}
</style>
