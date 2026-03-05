<template>
  <div class="app">
    <b-navbar
      toggleable="lg"
      type="light"
      variant="white"
      class="w-100 topNav"
    >
      <!-- 顶部蓝色渐变遮罩：视觉上“盖在银光背景上”，底部透明渐隐 -->
      <div class="navOverlay" aria-hidden="true"></div>

      <b-container fluid class="navInner">
        <!-- Left: Logo -->
        <b-navbar-brand :to="withLang('/')" router class="brand">
  <img class="navLogo" :src="logo" alt="Silver Bullet" />
</b-navbar-brand>

        <b-navbar-toggle target="sb-nav-collapse" />

        <b-collapse id="sb-nav-collapse" is-nav>
          <div class="w-100 d-lg-flex align-items-lg-center">
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
                  :class="{
                    'router-link-exact-active': isProductsActive,
                    'router-link-active': isProductsActive
                  }"
                  :to="withLang('/products')"
                  @focus="openProductsMenu"
                  @blur="closeProductsMenuDelayed"
                >
                  Products
                </router-link>

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
            </b-navbar-nav>
          </div>
        </b-collapse>
      </b-container>
    </b-navbar>

    <main class="main">
      <router-view />
    </main>


    <footer class="siteFooter">
      <div class="footerInner">
        <div class="footerCol">
          <div class="footerTitle">Company</div>
          <router-link class="footerLink" :to="withLang('/about')">About</router-link>
        </div>

        <div class="footerCol">
          <div class="footerTitle">Social</div>
          <a class="footerLink" href="https://instagram.com" target="_blank" rel="noopener">Instagram</a>
        </div>

        <div class="footerCol footerRight">
          <div class="copyright">
            © 2026 Silver Bullet. All Rights Reserved.<br />
            Owned by Floating Knight
          </div>
          <div class="copyright">Terms & Conditions</div>
        </div>
      </div>
      <div class="footerStick" aria-hidden="true"></div>
    </footer>
  </div>
</template>

<script>
import { setLocale } from "./i18n";
import logo from "@/assets/svbt_logo.png";
export default {
  name: "App",
  data() {
    return {
      logo,
      productsMenuOpen: false,
      productsMenuTimer: null,
      
      // ====== Metal shine parallax ======
      _rafId: null,
      _pendingY: null,
      _onScrollBound: null,
    };
  },
  computed: {
    locale() {
      return this.$i18n.locale;
    },
    isProductsActive() {
      const p = this.$route.path || "";
      return p.includes("/products") || p.includes("/eu/products") || p.includes("/zh/products");
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
      }, 120);
    },
    onProductsFocusOut() {
      window.setTimeout(() => {
        const root = this.$el.querySelector(".navItemDropdown");
        if (!root) return;
        if (!root.contains(document.activeElement)) this.closeProductsMenu();
      }, 0);
    },
    onNavKeydown(e) {
      if (e.key === "Escape") this.closeProductsMenu();
    },


// ====== Shine parallax: scroll -> CSS var --shineY ======
    applyShine() {
      this._rafId = null;
      if (this._pendingY == null) return;
      document.documentElement.style.setProperty("--shineY", `${this._pendingY}%`);
    },
    updateShineFromScroll() {
      const doc = document.documentElement;
      const scrollTop = window.scrollY || doc.scrollTop || 0;
      const maxScroll = Math.max(1, (doc.scrollHeight - window.innerHeight));

      // 0..1
      const t = Math.min(1, Math.max(0, scrollTop / maxScroll));
      const base = 44;
      const amp = 4;

      // 用 ease 让变化更顺滑
      const eased = t * t * (3 - 2 * t);

      this._pendingY = base + (eased - 0.5) * 2 * amp;

      if (this._rafId) return;
      this._rafId = window.requestAnimationFrame(this.applyShine);
    },

  },
  mounted() {
    window.addEventListener("keydown", this.onNavKeydown);
    // 初始化亮带位置
    document.documentElement.style.setProperty("--shineY", "44%");

    // 绑定滚动监听（RAF 节流）
    this._onScrollBound = this.updateShineFromScroll.bind(this);
    window.addEventListener("scroll", this._onScrollBound, { passive: true });
    // 进入页面先跑一次
    this.updateShineFromScroll();
  },
  beforeDestroy() {
    window.removeEventListener("keydown", this.onNavKeydown);
    if (this.productsMenuTimer) clearTimeout(this.productsMenuTimer);

    if (this._onScrollBound) window.removeEventListener("scroll", this._onScrollBound);
    if (this._rafId) window.cancelAnimationFrame(this._rafId);
  },
};
</script>

<style scoped>
/* =========================
   Global layout
   ========================= */
.app {
 min-height: 100vh;
  display: flex;
  flex-direction: column;
 /* 默认值（JS 会实时更新） */
  --shineY: 44%;
  background:
    /* subtle metal grain */
    repeating-linear-gradient(
      180deg,
      rgba(255,255,255,0.05) 0px,
      rgba(255,255,255,0.05) 1px,
      rgba(0,0,0,0.03) 2px,
      rgba(0,0,0,0.03) 3px
    ),

    /* sharp highlight band */
 /* 锐利金属反光带（使用 calc() 将亮带锚定到 --shineY） */
    linear-gradient(
      180deg,
      #bdbdbd 0%,
      #cfcfcf calc(var(--shineY) - 26%),
      #e3e3e3 calc(var(--shineY) - 10%),

      #ffffff calc(var(--shineY) - 1.2%),
      #ffffff var(--shineY),
      #ffffff calc(var(--shineY) + 1.2%),

      #e3e3e3 calc(var(--shineY) + 10%),
      #cfcfcf calc(var(--shineY) + 26%),
      #bdbdbd 100%
    );

  background-blend-mode: overlay, normal;
}

.main {
  flex: 1;
}

/* 你原本写在 body 的 font-family 放这里更稳（scoped 不会影响 body） */
.app {
  font-family: "Pluto", system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
}


.topNav {
  position: sticky;
  top: 0;
  z-index: 9999;
 /* 关键：不要纯白底，改为“蓝渐变盖在金属上” */
  background: linear-gradient(
    180deg,
    rgba(0, 30, 230, 0.55) 0%,
    rgba(0, 30, 230, 0.18) 55%,
    rgba(0, 30, 230, 0.00) 100%
  ) !important;

  /* 让金属底透出来 */
  backdrop-filter: saturate(140%) blur(6px);
  -webkit-backdrop-filter: saturate(140%) blur(6px);

  /* border-bottom: 1px solid rgba(0,0,0,0.06) !important; */
}

/* overlay 是蓝色渐变，底部透明渐隐 */
.navOverlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 180px;   
  z-index: 0;
  pointer-events: none;

  /* 蓝色从顶往下淡出到透明，像“盖上去” */
  background: linear-gradient(
    180deg,
    rgba(0, 30, 230, 0.95) 0%,
    rgba(0, 30, 230, 0.60) 22%,
    rgba(0, 30, 230, 0.22) 48%,
    rgba(0, 30, 230, 0.00) 78%
  );

  /* 微微柔化边缘，让它更像光 */
  filter: saturate(110%) blur(0px);
}

/* nav 内容要盖在 overlay 上面 */
.navInner {
  position: relative;
  z-index: 1;
}

/* 给 navbar 留一个“视觉高度”，避免 overlay 看起来太薄 */
::v-deep .navbar {
  padding-top: 10px;
  padding-bottom: 8px;
}

/* =========================
   Nav links styling on blue
   ========================= */
.nav-center {
  gap: 10px;
}

.navLogo {
  height: 36px;
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.navLogo:hover {
  opacity: 0.85;
}

::v-deep .navbar-nav .nav-link {
  position: relative;
  padding-bottom: 8px;
  color: rgba(255,255,255,0.92) !important;
  transition: opacity 0.15s ease, color 0.15s ease;
  text-shadow: 0 1px 0 rgba(0,0,0,0.10);
}

::v-deep .navbar-brand {
  color: rgba(255,255,255,0.92) !important;
  font-weight: 700;
  letter-spacing: 0.02em;
  text-shadow: 0 1px 0 rgba(0,0,0,0.12);
}

/* underline */
::v-deep .navbar-nav .nav-link::after {
  content: "";
  position: absolute;
  left: 50%;
  right: 50%;
  bottom: 2px;
  height: 3px;
  background: rgba(255,255,255,0.95); /* 白色下划线更像在蓝光上 */
  opacity: 0;
  transition: left 0.18s ease, right 0.18s ease, opacity 0.18s ease;
}

::v-deep .navbar-nav .nav-link:hover::after {
  left: 10%;
  right: 10%;
  opacity: 0.35;
}

::v-deep .navbar-nav .nav-link.router-link-exact-active {
  font-weight: 800;
  opacity: 1;
}

::v-deep .navbar-nav .nav-link.router-link-exact-active::after {
  left: 0;
  right: 0;
  opacity: 1;
}

::v-deep .navbar-nav .nav-link:not(.router-link-exact-active) {
  opacity: 0.86;
}

/* dropdown 包裹 */
.navItemDropdown {
  position: relative;
}

/* dropdown panel 仍然用白底，保证可读性 */
.productsDropdown {
  position: absolute;
  top: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%);
  min-width: 260px;
  pointer-events: auto;
  background: rgba(255,255,255,0.96);
  border: 1px solid rgba(0,0,0,0.06);
  border-radius: 14px;
  box-shadow: 0 12px 30px rgba(0,0,0,0.10);
  padding: 10px;
  z-index: 999;
}

/* ✅ 防止被 navbar 容器裁切 */
::v-deep .navbar-nav,
::v-deep .navbar-collapse,
::v-deep .navbar,
::v-deep .navbar .container-fluid {
  overflow: visible !important;
}

.productsDropdownInner {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

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

/* Products link alignment */
.productsLink {
  display: inline-flex;
  align-items: center;
  line-height: 1.5;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

/* =========================
   Footer: keep clean on silver
   ========================= */
.siteFooter {
  border-top: 1px solid rgba(0,0,0,0.08);
  background: transparent;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  padding: 22px 0;
}

.footerInner {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 16px;
  display: flex;
  gap: 24px;
}

.footerCol {
  min-width: 160px;
}
.footerTitle {
  font-weight: 800;
  margin-bottom: 10px;
}
.footerLink {
  display: block;
  color: #111;
  text-decoration: none;
  margin: 6px 0;
}
.footerLink:hover {
  text-decoration: underline;
}
.footerRight {
  margin-left: auto;
  text-align: right;
}
.copyright {
  color: #444;
  line-height: 1.6;
  font-size: 12px;
}

@media (max-width: 820px) {
  .footerInner {
    flex-direction: column;
  }
  .footerRight {
    margin-left: 0;
    text-align: left;
  }
}

.siteFooter {
  position: relative; /* ✅ 关键：让竖线 bottom:0 以 footer 为参考 */
  border-top: 1px solid rgba(0,0,0,0.08);
  background: transparent;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  padding: 22px 0; /* footer 内容可以有 padding，不影响竖线贴底 */
}

.footerStick {
  position: absolute;
  left: 50%;
  bottom: 0;                 /* ✅ 贴着 footer 最底部 */
  transform: translateX(-50%);
  width: 30px;               /* 你截图看起来挺粗：可改 40/48/56 */
  height: 100px;             /* 你之前提到 160px：这里就用 160 */
  background: #001EE6;
  pointer-events: none;
}
</style>