<template>
  <div class="app">
    <b-navbar
      toggleable="lg"
      type="light"
      variant="white"
      class="w-100 topNav"
    >
      <div class="navOverlay" aria-hidden="true"></div>

      <b-container fluid class="navInner">
        <b-navbar-brand :to="withLang('/')" router class="brand">
          <img class="navLogo" :src="logo" alt="Silver Bullet" />
        </b-navbar-brand>

        <b-navbar-toggle target="sb-nav-collapse" class="mobileToggle" />

        <b-collapse id="sb-nav-collapse" is-nav v-model="mobileNavOpen">
          <div class="w-100 d-lg-flex align-items-lg-center">
            <b-navbar-nav class="mx-lg-auto justify-content-lg-center nav-center">
              <b-nav-item
                :to="withLang('/')"
                router
                exact
                @click="handleNavItemClick"
              >
                {{ $t("nav.home") }}
              </b-nav-item>

              <div
                class="navItem navItemDropdown"
                @mouseenter="!isMobileNav() && openProductsMenu()"
                @mouseleave="!isMobileNav() && closeProductsMenuDelayed()"
                @focusin="!isMobileNav() && openProductsMenu()"
                @focusout="!isMobileNav() && onProductsFocusOut()"
              >
                <router-link
                  class="nav-link productsLink"
                  :class="{
                    'router-link-exact-active': isProductsActive,
                    'router-link-active': isProductsActive
                  }"
                  :to="withLang('/products')"
                  @click="handleProductsClick"
                >
                  Products
                </router-link>

                <!-- PC端 hover 时显示；手机端菜单展开时始终显示 -->
                <div
                  v-show="productsMenuVisible"
                  class="productsDropdown  "
                  role="menu"
                  @mouseenter="!isMobileNav() && openProductsMenu()"
                  @mouseleave="!isMobileNav() && closeProductsMenuDelayed()"
                
                >
                  <div class="productsDropdownInner">
                    <router-link
                      class="ddItem"
                      :to="{ path: withLang('/products'), query: { line: 'soothing' } }"
                      @click="handleNavItemClick"
                    >
                      Soothing
                    </router-link>

                    <router-link
                      class="ddItem"
                      :to="{ path: withLang('/products'), query: { line: 'post-procedures' } }"
                      @click="handleNavItemClick"
                    >
                      Post-procedures
                    </router-link>

                    <router-link
                      class="ddItem"
                      :to="{ path: withLang('/products'), query: { line: 'anti-aging' } }"
                      @click="handleNavItemClick"
                    >
                      Anti-aging
                    </router-link>
                  </div>
                </div>
              </div>

              <b-nav-item
                :to="withLang('/contact')"
                router
                @click="handleNavItemClick"
              >
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
          <router-link class="footerLink" :to="withLang('/terms')">
            Terms &amp; Conditions
          </router-link>
          <router-link class="footerLink" :to="withLang('/privacy')">
            Privacy Policy
          </router-link>
        </div>

        <div class="footerCol footerRight">
          <div class="copyright">
            © 2026 Silver Bullet <sup>®</sup>. All rights reserved.
          </div>
          <div class="copyright">
            Owned by Floating Knight Biotech
          </div>

          <a
            class="footerInstagram"
            href="https://www.instagram.com/silverbullet.healthandbeauty/"
            target="_blank"
            rel="noopener"
            aria-label="Instagram"
          >
            <svg
              class="instagramIcon"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fill="currentColor"
                d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm8.9 1.15a.95.95 0 1 1 0 1.9.95.95 0 0 1 0-1.9ZM12 6.5A5.5 5.5 0 1 1 6.5 12 5.51 5.51 0 0 1 12 6.5Zm0 1.5A4 4 0 1 0 16 12a4 4 0 0 0-4-4Z"
              />
            </svg>
            <span>@silverbullet.healthandbeauty</span>
          </a>
        </div>
      </div>

      <div class="footerStick" aria-hidden="true"></div>
    </footer>
  </div>
</template>

<script>
import { setLocale } from "./i18n";
import logo from "@/assets/logo.svg";

export default {
  name: "App",
  data() {
    return {
      logo,
      productsMenuOpen: false,
      productsMenuTimer: null,
      _rafId: null,
      _pendingY: null,
      _onScrollBound: null,
      mobileNavOpen: false,
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
 productsMenuVisible() {
  return this.isMobileNav() ? false : this.productsMenuOpen;
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

    isMobileNav() {
      return window.innerWidth < 992;
    },

  collapseMobileNav() {
  if (this.isMobileNav()) {
    this.mobileNavOpen = false;
  }
},

    handleNavItemClick() {
      this.closeProductsMenu();
      this.collapseMobileNav();
    },

    handleProductsClick() {
      if (this.isMobileNav()) {
        this.closeProductsMenu();
        this.collapseMobileNav();
      } else {
        this.closeProductsMenu();
      }
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

    applyShine() {
      this._rafId = null;
      if (this._pendingY == null) return;
      document.documentElement.style.setProperty("--shineY", `${this._pendingY}%`);
    },

    updateShineFromScroll() {
      const doc = document.documentElement;
      const scrollTop = window.scrollY || doc.scrollTop || 0;
      const maxScroll = Math.max(1, (doc.scrollHeight - window.innerHeight));
      const t = Math.min(1, Math.max(0, scrollTop / maxScroll));
      const base = 44;
      const amp = 4;
      const eased = t * t * (3 - 2 * t);

      this._pendingY = base + (eased - 0.5) * 2 * amp;

      if (this._rafId) return;
      this._rafId = window.requestAnimationFrame(this.applyShine);
    },
  },

  mounted() {
    window.addEventListener("keydown", this.onNavKeydown);
    document.documentElement.style.setProperty("--shineY", "44%");
    this._onScrollBound = this.updateShineFromScroll.bind(this);
    window.addEventListener("scroll", this._onScrollBound, { passive: true });
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
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  --shineY: 44%;
  background: linear-gradient(
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
  font-family: "Pluto", system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
}

.main {
  flex: 1;
}

.topNav {
  position: sticky;
  top: 0;
  z-index: 9999;
  background: linear-gradient(
    180deg,
    rgba(0, 30, 230, 0.55) 0%,
    rgba(0, 30, 230, 0.18) 55%,
    rgba(0, 30, 230, 0) 100%
  ) !important;
  backdrop-filter: saturate(140%) blur(6px);
  -webkit-backdrop-filter: saturate(140%) blur(6px);
}

.navOverlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 180px;
  z-index: 0;
  pointer-events: none;
  background: linear-gradient(
    180deg,
    rgba(0, 30, 230, 0.95) 0%,
    rgba(0, 30, 230, 0.6) 22%,
    rgba(0, 30, 230, 0.22) 48%,
    rgba(0, 30, 230, 0) 78%
  );
}

.navInner {
  position: relative;
  z-index: 1;
}

::v-deep .navbar {
  padding-top: 10px;
  padding-bottom: 8px;
}

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
  text-shadow: 0 1px 0 rgba(0,0,0,0.1);
}

::v-deep .navbar-brand {
  color: rgba(255,255,255,0.92) !important;
  font-weight: 700;
  letter-spacing: 0.02em;
  text-shadow: 0 1px 0 rgba(0,0,0,0.12);
}

::v-deep .navbar-nav .nav-link::after {
  content: "";
  position: absolute;
  left: 50%;
  right: 50%;
  bottom: 2px;
  height: 3px;
  background: rgba(255,255,255,0.95);
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

.navItemDropdown {
  position: relative;
}

.productsDropdown {
  position: absolute;
  top: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%);
  min-width: 280px;
  pointer-events: auto;
  background: rgba(255, 255, 255, 0.72);
  border: 1px solid rgba(255, 255, 255, 0.34);
  border-radius: 18px;
  box-shadow:
    0 18px 44px rgba(0, 0, 0, 0.10),
    0 1px 0 rgba(255, 255, 255, 0.28) inset;
  backdrop-filter: blur(18px) saturate(135%);
  -webkit-backdrop-filter: blur(18px) saturate(135%);
  padding: 12px;
  z-index: 999;
}

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
  padding: 12px 14px;
  border-radius: 12px;
  text-decoration: none;
  color: #111;
  font-weight: 600;
  text-align: center;
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.35);
  transition: background 0.18s ease, color 0.18s ease, opacity 0.18s ease;
}

.ddItem:hover {
  background: rgba(255, 255, 255, 0.46);
  color: #111;
  text-decoration: none;
}

.productsLink {
  display: inline-flex;
  align-items: center;
  line-height: 1.5;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.siteFooter {
  position: relative;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
  background: transparent;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  padding: 18px 0 30px;
}

.footerInner {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 16px;
  display: flex;
  gap: 28px;
  align-items: flex-start;
}

.footerCol {
  min-width: 150px;
}

.footerLink {
  display: block;
  color: #222;
  text-decoration: none;
  margin: 5px 0;
  font-size: 13px;
  line-height: 1.5;
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
  line-height: 1.5;
  font-size: 12px;
}

.footerInstagram {
  margin-top: 10px;
  display: inline-flex;
  align-items: center;
  justify-content: flex-end;
  gap: 3px;
  color: #111;
  text-decoration: none;
  font-size: 12px;
  line-height: 1.4;
  font-weight: 300;
  letter-spacing: 0.01em;
}

.footerInstagram:hover {
  text-decoration: underline;
  opacity: 0.75;
}

.instagramIcon {
  width: 18px;
  height: 18px;
  flex: 0 0 auto;
}

.footerStick {
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  width: 30px;
  height: 100px;
  background: #001EE6;
  pointer-events: none;
}

@media (max-width: 991.98px) {
  .mobileToggle {
    border-color: rgba(255, 255, 255, 0.18) !important;
    background: rgba(0, 30, 230, 0.08);
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.08);
  }

  ::v-deep .navbar-light .navbar-toggler {
    border-color: rgba(255, 255, 255, 0.18) !important;
  }

  ::v-deep .navbar-light .navbar-toggler-icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255,255,255,0.96)' stroke-width='2.4' stroke-linecap='round' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E") !important;
  }

  ::v-deep .navbar-collapse {
    margin-top: 14px;
    padding: 14px 12px;
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.14);
    backdrop-filter: blur(16px) saturate(130%);
    -webkit-backdrop-filter: blur(16px) saturate(130%);
    box-shadow: 0 14px 34px rgba(0, 0, 0, 0.10);
  }

  .nav-center {
    width: 100%;
    gap: 6px;
  }

  ::v-deep .navbar-nav {
    align-items: center;
    text-align: center;
  }

  ::v-deep .navbar-nav .nav-link {
    width: 100%;
    text-align: center;
    text-shadow:
      0 1px 2px rgba(0, 0, 0, 0.18),
      0 1px 0 rgba(255, 255, 255, 0.12);
  }

  .productsDropdown {
    position: static;
    top: auto;
    left: auto;
    transform: none;
    width: 100%;
    min-width: 0;
    margin-top: 10px;
    background: rgba(255, 255, 255, 0.72);
    border: 1px solid rgba(255, 255, 255, 0.30);
    border-radius: 18px;
    box-shadow:
      0 12px 30px rgba(0, 0, 0, 0.10),
      0 1px 0 rgba(255, 255, 255, 0.24) inset;
    backdrop-filter: blur(18px) saturate(135%);
    -webkit-backdrop-filter: blur(18px) saturate(135%);
    padding: 10px;
  }

  .productsDropdownInner {
    gap: 8px;
  }

  .ddItem {
    border-radius: 12px;
    padding: 12px 14px;
    font-weight: 600;
    letter-spacing: 0.01em;
    text-align: center;
    font-size: 1.05rem;
  }

  .ddItem:hover {
    background: rgba(255, 255, 255, 0.12);
  }

  .siteFooter {
    padding-bottom: 60px;
  }

  .footerInner {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }

  .footerRight {
    grid-column: 1 / -1;
    text-align: left;
    margin-top: 10px;
    width: 100%;
  }

  .footerInstagram {
    justify-content: flex-start;
    margin-top: 6px;
    display: flex;
    align-items: center;
    gap: 3px;
  }

  .footerStick {
    width: 18px;
    height: 54px;
  }
}
</style>