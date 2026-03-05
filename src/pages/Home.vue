<template>
  <div v-if="cms" class="homeRoot" :class="{ isStatic: introMode === 'static' }">
    <section class="heroScreen" aria-label="Silver Bullet animation" :style="heroStyle">
      <div class="heroStage">
        <!-- Layer A: blue line (must be full-bleed, so keep preserveAspectRatio="none") -->
        <svg
          class="sbLine"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line class="blueLine" x1="0" y1="50" x2="8" y2="50" />
        </svg>

        <!-- Layer B: main layout canvas (keep none so rays/layout never break) -->
        <svg
          class="sbMain"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <!-- Logo box: positioned in main 0..100 coords, but internally uses meet => no stretching -->
          <svg
            class="logoBox"
            x="11.5"
            y="39"
            width="18"
            height="22"
            viewBox="0 0 196.56 98.85"
            preserveAspectRatio="xMidYMid meet"
          >
            <g class="sbLogoMain">
              <polygon
                points="191.5 39.83 191.5 47.2 100.81 47.2 100.81 32.55 95.75 32.55 95.75 47.2 5.06 47.2 5.06 39.83 0 39.83 0 59.64 5.06 59.64 5.06 52.27 95.75 52.27 95.75 66.92 100.81 66.92 100.81 52.27 191.5 52.27 191.5 59.64 196.56 59.64 196.56 39.83 191.5 39.83"
              />
              <path
                d="M33.78,70.98h-.39s-17.21,0-17.21,0v3.33c0,.96.77,1.73,1.73,1.73h.1v6.34h-1.83v3.33c0,.96.77,1.73,1.73,1.73h.1v6.34h-1.84l-1.17,5.06h18.39s.39,0,.39,0c4.54,0,8.23-3.69,8.23-8.23,0-2.21-.88-4.22-2.31-5.7,1.43-1.48,2.31-3.49,2.31-5.7,0-4.54-3.69-8.23-8.23-8.23ZM33.78,93.78h-.39s-10.31,0-10.31,0v-6.34h10.7c1.75,0,3.17,1.42,3.17,3.17s-1.42,3.17-3.17,3.17ZM33.78,82.38h-10.71v-6.34h10.7c1.75,0,3.17,1.42,3.17,3.17s-1.42,3.17-3.17,3.17Z"
              />
              <path
                d="M180.39,76.04l1.17-5.06h-28.12s0,3.54,0,3.54c0,.84.68,1.53,1.53,1.53h9.28v17.74h-1.25l-1.17,5.06h2.42s5.06,0,5.06,0h0s2.42,0,2.42,0v-3.33c0-.96-.77-1.73-1.73-1.73h-.69v-17.74h11.08Z"
              />
              <path
                d="M115.54,93.78h-14.74v-17.74h1.83l1.17-5.06h-9.9v3.33c0,.96.77,1.73,1.73,1.73h.1v17.74h-1.84l-1.17,5.06h24.53v-3.35c0-.95-.77-1.71-1.71-1.71Z"
              />
              <path
                d="M146.81,76.04l1.17-5.06h-25.49s-10.73,0-10.73,0l-1.17,5.06h13.73v6.34h-1.83v3.33c0,.96.77,1.73,1.73,1.73h.1v6.34h-1.84l-1.17,5.06h26.68v-3.33c0-.96-.77-1.73-1.73-1.73h-16.87v-6.34h15.32l1.17-5.06h-16.49v-6.34h17.42Z"
              />
              <path
                d="M88.93,93.78h-8.46v-17.74h1.83l1.17-5.06h-9.9v3.33c0,.96.77,1.73,1.73,1.73h.1v17.74h-1.84l-1.17,5.06h18.25v-3.35c0-.95-.77-1.71-1.71-1.71Z"
              />
              <path
                d="M56.43,70.98l1.17,5.06h7.81v15.7c0,1.69-3.75,2.04-6.06,2.04s-6.06-.35-6.06-2.04v-20.76h-11.28l1.17,5.06h5.05v16.09c0,4.13,4.67,6.72,11.12,6.72s11.13-2.69,11.13-6.72v-21.15h-14.05Z"
              />
              <polygon
                points="96.48 0 97.65 5.06 105.91 5.06 98.28 21.57 88.31 0 74.14 0 75.31 5.06 85.09 5.06 95.72 27.85 95.72 27.87 100.81 27.87 100.81 27.86 100.83 27.87 113.84 0 96.48 0"
              />
              <path
                d="M42.01,23.19v-3.87c0-2.51-1.65-4.71-4.06-5.41l-15.6-4.55c-.8-.23-1.35-.97-1.35-1.8v-1.15c0-.74.6-1.35,1.35-1.35h14.61v1.11c0,.93.64,1.74,1.55,1.95l3.51.81V0h-21.41c-2.58,0-4.67,2.09-4.67,4.67v3.86c0,2.5,1.68,4.72,4.08,5.42l15.58,4.5c.8.23,1.36.97,1.36,1.81v1.2c0,.74-.6,1.35-1.35,1.35h-14.61v-1.11c0-.93-.64-1.74-1.55-1.95l-3.51-.81v8.94h21.41c2.58,0,4.67-2.09,4.67-4.67Z"
              />
              <path
                d="M86.02,24.52c0-.95-.77-1.71-1.71-1.71h-14.74V5.06h1.83L72.58,0h-9.9s0,3.33,0,3.33c0,.96.77,1.73,1.73,1.73h.1v17.74h-1.84l-1.17,5.06h24.53v-3.35Z"
              />
              <path
                d="M154.45,22.8h-1.84l-1.17,5.06h9.9v-3.33c0-.96-.77-1.73-1.73-1.73h-.09v-6.34h5.25c5.01,11.06,14.35,11.4,15.44,11.4h.43v-5.05h-.38c-5.09-.17-8.3-3.79-9.94-6.35h2.47v-.02c4.36-.21,7.84-3.81,7.84-8.21s-3.69-8.23-8.23-8.23h-.39s-19.4,0-19.4,0v3.33c0,.96.77,1.73,1.73,1.73h.1v6.34h-6.28l-1.17,5.06h7.45v6.34ZM159.51,5.06h12.89c1.75,0,3.17,1.42,3.17,3.17s-1.42,3.17-3.17,3.17h-12.89v-6.34Z"
              />
              <path
                d="M57.15,24.53c0-.96-.77-1.73-1.73-1.73h-.09V5.06h1.83L58.33,0h-3.01s-5.06,0-5.06,0h-1.83v3.33c0,.96.77,1.73,1.73,1.73h.1v17.74h-5.05l-1.17,5.06h13.11s0-3.33,0-3.33Z"
              />
              <path
                d="M145.62,24.53c0-.96-.77-1.73-1.73-1.73h-16.87v-6.34h15.32s1.17-5.06,1.17-5.06h-16.49v-6.34h17.42L145.62,0h-25.49s0,3.33,0,3.33c0,.96.77,1.73,1.73,1.73h.1v6.34h-1.83v3.33c0,.96.77,1.73,1.73,1.73h.1v6.34h-1.84l-1.17,5.06h26.68v-3.33Z"
              />
            </g>

            <!-- ® mark: show after main logo fill -->
            <g class="sbReg">
              <path
                d="M192.16,9.61l-1.55-3.1h-1.39v3.1h-1.12V2.26h2.85c1.39,0,2.28.9,2.28,2.15,0,1.05-.64,1.72-1.47,1.95l1.69,3.25h-1.3ZM190.87,3.26h-1.65v2.3h1.65c.74,0,1.25-.42,1.25-1.15s-.51-1.16-1.25-1.16Z"
              />
              <path
                d="M190.54,12.06c-3.32,0-6.03-2.7-6.03-6.03s2.7-6.03,6.03-6.03,6.03,2.7,6.03,6.03-2.7,6.03-6.03,6.03ZM190.54.95c-2.8,0-5.08,2.28-5.08,5.08s2.28,5.08,5.08,5.08,5.08-2.28,5.08-5.08-2.28-5.08-5.08-5.08Z"
              />
            </g>
          </svg>

          <!-- Rays -->
          <g class="rays">
            <line class="ray r0" x1="38" y1="50" x2="38" y2="15" />
            <line class="ray r1" x1="38.5" y1="50" x2="48" y2="14.5" />
            <line class="ray r2" x1="38.5" y1="50" x2="62" y2="14.5" />
            <line class="ray r3" x1="38.5" y1="50" x2="94" y2="14.5" />
            <line class="ray r4" x1="38.5" y1="50" x2="100" y2="50" />
            <line class="ray r5" x1="38.5" y1="50" x2="94" y2="84" />
            <line class="ray r6" x1="38.5" y1="50" x2="62" y2="84" />
            <line class="ray r7" x1="38.5" y1="50" x2="48" y2="84" />
            <line class="ray r8" x1="38" y1="50" x2="38" y2="85" />
          </g>

          <!-- Slogan box: positioned in main coords, internally meet => no stretching -->
          <svg
            class="sloganBox"
            x="82"
            y="45.5"
            width="18"
            height="6"
            viewBox="0 0 280 40"
            preserveAspectRatio="xMinYMid meet"
          >
            <text class="sloganText" x="0" y="28">Speedy Comfort, Precise Renewal.</text>
          </svg>
        </svg>
      </div>

      <div class="scrollHint" v-show="canScroll && introMode === 'play'">
        <span>Scroll</span><span class="arrow">↓</span>
      </div>
    </section>

    <section class="contentScreen" :style="contentStyle">
      <section class="below">
        <div class="belowRow">
          <div class="left">
            <h3 class="ctaTitle">PRODUCTS</h3>
            <h1 class="brand">{{ t(cms.home.hero.title) }}<sup>®</sup></h1>
            <h2 class="headline" style="white-space: pre-line">
              {{ t(cms.home.hero.headline) }}
            </h2>
            <!-- <p class="subhead" style="white-space: pre-line">
              {{ t(cms.home.hero.subhead) }}
            </p> -->
            <div class="ctaRow">
              <router-link class="btnPrimary" :to="withLang('/products')">
                {{ t({ zh: "查看全部", en: "View all" }) }}
              </router-link>
            </div>
          </div>

          <div class="right">
            <div class="carouselFrame">
              <router-link
                class="imgLink"
                :to="withLang(`/eu/products/${active.slug}`)"
                v-if="active"
                aria-label="Go to product detail"
              >
                <img class="prodImg" :src="active.images?.[0]" :alt="t(active.name)" />
              </router-link>

              <div class="prodMeta" v-if="active">
                <div class="prodName">{{ t(active.name) }}</div>
              </div>

              <button class="navBtn prev" @click="prev" aria-label="Previous">‹</button>
              <button class="navBtn next" @click="next" aria-label="Next">›</button>

              <div class="dots" v-if="products.length">
                <button
                  v-for="(p, i) in products"
                  :key="p.slug"
                  class="dot"
                  :class="{ on: i === idx }"
                  @click="idx = i"
                  :aria-label="`Go to ${t(p.name)}`"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  </div>
</template>

<script>
import { getCMS } from "../cms/cmsClient";

export default {
  name: "Home",
  data() {
    return {
      cms: null,
      idx: 0,
      canScroll: false,
      step: 0,
      wheelLock: false,
      introMode: "play",
    };
  },
  async created() {
    this.cms = await getCMS();
  },

  mounted() {
    const state = this.$router.app.__sb || (this.$router.app.__sb = {});
    const visitedHome = !!state.visitedHome;

    if (!visitedHome) {
      state.visitedHome = true;
      this.playIntro();
    } else {
      this.skipIntroButShowHero();
    }

    window.addEventListener("wheel", this.onWheel, { passive: false });

  },
  beforeDestroy() {
    window.removeEventListener("wheel", this.onWheel);
  },
  computed: {
    heroStyle() {
      const y = this.step === 0 ? 0 : this.step === 1 ? -30 : -60;
      const op = this.step === 0 ? 1 : this.step === 1 ? 0.35 : 0;
      return {
        transform: `translate3d(0, ${y}vh, 0)`,

        opacity: op,
        pointerEvents: this.step >= 2 ? "none" : "auto",
      };
    },
    contentStyle() {
      const y = this.step === 0 ? 100 : this.step === 1 ? 30 : 0;
      const op = this.step === 0 ? 0 : this.step === 1 ? 0.75 : 1;
      return {
        transform: `translate3d(0, ${y}vh, 0)`,
        opacity: op,
        pointerEvents: this.step === 0 ? "none" : "auto",
      };
    },
    products() {
      return this.cms?.eu?.products || [];
    },
    active() {
      return this.products[this.idx] || null;
    },
  },
  methods: {
    t(obj) {
      const lang = this.$i18n.locale;
      return obj?.[lang] || obj?.en || "";
    },
    withLang(path) {
      const lang = this.$route?.params?.lang || this.$i18n.locale || "en";
      const clean = path.startsWith("/") ? path : `/${path}`;
      return `/${lang}${clean}`;
    },
    scrollToTopNow() {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    },
    playIntro() {
      this.canScroll = false;
      this.step = 0;
      this.introMode = "play";
      window.setTimeout(() => {
        this.canScroll = true;
      }, 2300);
    },
    skipIntroButShowHero() {
      this.canScroll = true;
      this.introMode = "static";
      this.step = 0;
    },
    next() {
      if (!this.products.length) return;
      this.idx = (this.idx + 1) % this.products.length;
    },
    prev() {
      if (!this.products.length) return;
      this.idx = (this.idx - 1 + this.products.length) % this.products.length;
    },
    onWheel(e) {
      if (this.introMode === "play" && !this.canScroll) {
        e.preventDefault();
        return;
      }

      const delta = e.deltaY || 0;

      if (this.step === 2 && delta > 0) return;

      if (this.step === 2 && delta < 0) {
        e.preventDefault();
        if (window.scrollY > 0) {
          this.scrollToTopNow();
          return;
        }
        if (this.wheelLock) return;
        this.wheelLock = true;
        this.step = 1;
        window.setTimeout(() => {
          this.wheelLock = false;
        }, 520);
        return;
      }

      e.preventDefault();
      if (this.wheelLock) return;
      this.wheelLock = true;

      if (delta > 0) this.step = Math.min(2, this.step + 1);
      if (delta < 0) this.step = Math.max(0, this.step - 1);

      window.setTimeout(() => {
        this.wheelLock = false;
      }, 520);
    },
  },
};
</script>

<style scoped>
.heroScreen {
  position: sticky;
  z-index: 1;
  top: 0;
  height: 100vh;
  width: 100%;
  background: transparent;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 520ms ease, opacity 520ms ease;
  will-change: transform, opacity;
}

.heroStage {
  position: relative;
  width: 100%;
  height: 100%;
}

/* Full-bleed SVG layers */
.sbLine,
.sbMain {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: block;
}

.sbLine {
  z-index: 1;
}
.sbMain {
  z-index: 2;
}

.homeRoot {
  position: relative;
  z-index: 0;
  --footer-h: 140px;
  --safe-gap: 120px;
  padding-bottom: calc(var(--footer-h) + var(--safe-gap));
}

/* Blue line */
.blueLine {
  stroke: #0a2bff;
  stroke-width: 2.2;
  stroke-linecap: square;
  stroke-dasharray: 30;
  stroke-dashoffset: 30;
  animation: drawLine 0.8s ease forwards;
}

@keyframes drawLine {
  to {
    stroke-dashoffset: 0;
  }
}

/* Logo draw -> fill (only affects the nested logoBox, so logo will never stretch) */
.logoBox .sbLogoMain path,
.logoBox .sbLogoMain polygon {
  fill: transparent;
  stroke: #2b211d;
  stroke-width: 1.2;
  stroke-linejoin: round;
  stroke-linecap: round;

  stroke-dasharray: 2000;
  stroke-dashoffset: 2000;
  animation: logoDraw 1.4s cubic-bezier(0.65, 0, 0.35, 1) forwards, logoFill 1.2s ease forwards;
  animation-delay: 0.35s, 1.55s;
}

@keyframes logoDraw {
  to {
    stroke-dashoffset: 0;
  }
}

@keyframes logoFill {
  from {
    fill: transparent;
  }
  to {
    fill: #2b211d;
    stroke: #2b211d;
  }
}

/* ® mark appears after fill */
.logoBox .sbReg {
  opacity: 0;
  animation: regShow 0.9s linear forwards;
  animation-delay: 1.85s;
}

@keyframes regShow {
  to {
    opacity: 1;
  }
}

/* Rays */
.ray {
  stroke: #b5b5b6;
  stroke-width: 1.2;
  stroke-linecap: square;
  stroke-dasharray: 120;
  stroke-dashoffset: 120;
  animation: rayOut 0.55s ease forwards;
}

@keyframes rayOut {
  to {
    stroke-dashoffset: 0;
  }
}

.r0 {
  animation-delay: 0.9s;
}
.r1 {
  animation-delay: 1s;
}
.r2 {
  animation-delay: 1.1s;
}
.r3 {
  animation-delay: 1.2s;
}
.r4 {
  animation-delay: 1.3s;
}
.r5 {
  animation-delay: 1.4s;
}
.r6 {
  animation-delay: 1.5s;
}
.r7 {
  animation-delay: 1.6s;
}
.r8 {
  animation-delay: 1.7s;
}

/* Slogan (nested svg => no stretching) */
.sloganText {
  font-family: MatrixII, Helvetica, sans-serif;
  font-weight: 300;
  letter-spacing: 0em;
  font-size: 18px;
  fill: #2b211d;
  opacity: 0;
  animation: fadeIn 2.6s ease forwards;
  animation-delay: 2.4s;
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}

/* Static mode: stop animations and render final state */
.homeRoot.isStatic .blueLine,
.homeRoot.isStatic .ray,
.homeRoot.isStatic .logoBox .sbLogoMain path,
.homeRoot.isStatic .logoBox .sbLogoMain polygon,
.homeRoot.isStatic .logoBox .sbReg,
.homeRoot.isStatic .sloganText {
  animation: none !important;
  opacity: 1 !important;
  stroke-dashoffset: 0 !important;
}

.homeRoot.isStatic .logoBox .sbLogoMain path,
.homeRoot.isStatic .logoBox .sbLogoMain polygon {
  fill: #2b211d !important;
  stroke: #2b211d !important;
}

/* Content area (unchanged) */
.contentScreen {
  position: relative;
  z-index: 1;
  height: 50vh;
  width: 100%;
  background: transparent;
  transition: transform 520ms ease, opacity 520ms ease;
  will-change: transform, opacity;
  overflow: hidden;
}

.below {
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 18px 0 20px;
}

.belowRow {
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 16px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 24px;
}

.left {
  flex: 1 1 auto;
  min-width: 0;
  max-width: 560px;
}
.right {
  flex: 0 0 auto;
  display: flex;
  justify-content: flex-end;
}

.carouselFrame {
  width: 220px;
  height: 560px;
  border: 1px solid #eee;
  border-radius: 18px;
  background: #fff;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.imgLink {
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fafafa;
  text-decoration: none;
  padding: 14px;
  box-sizing: border-box;
}

.prodImg {
  height: 100%;
  width: auto;
  max-width: 100%;
  object-fit: contain;
  display: block;
}

.prodMeta {
  flex: 0 0 auto;
  padding: 12px 14px;
  border-top: 1px solid #eee;
}

.prodName {
  font-weight: 800;
  font-size: 14px;
  color: #111;
  line-height: 1.3;
}

.navBtn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 38px;
  height: 38px;
  border-radius: 999px;
  border: 1px solid #ddd;
  background: rgba(255, 255, 255, 0.9);
  cursor: pointer;
  font-size: 24px;
  line-height: 36px;
  padding: 0;
}

.navBtn.prev {
  left: 10px;
}
.navBtn.next {
  right: 10px;
}

.dots {
  position: absolute;
  bottom: 64px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 999px;
  border: none;
  background: #ddd;
  cursor: pointer;
}

.dot.on {
  background: #111;
}

.brand {
  font-weight: 900;
  letter-spacing:-0.05em;
  margin-bottom: 0;
}
.headline {
  font-weight: 400;
  font-size: 36px;
  line-height: 1.2;
  letter-spacing:-0.08em;
}
.subhead {
  font-weight: 300;
  margin-top: 12px;
  color: #444;
  line-height: 1.7;
  max-width: 520px;
}
.ctaTitle {
  font-weight: 500;
  font-size: 14px;
  color: #666;
  margin-bottom: 10px;
  letter-spacing:-0.05em;
}
.ctaRow {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 16px;
}
.btnPrimary {
  display: inline-block;
  padding: 10px 18px;
  border: 1px solid #111;
  border-radius: 14px;
  text-decoration: none;
  color: #111;
}

.scrollHint {
  position: absolute;
  bottom: 18px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 13px;
  color: #666;
  letter-spacing: 0.5px;
  display: flex;
  gap: 10px;
  align-items: center;
  user-select: none;
}

.arrow {
  display: inline-block;
  transform: translateY(-1px);
}

@media (max-width: 980px) {
  .below {
    align-items: flex-start;
    padding: 14px 0 var(--safe-gap);
  }
  .belowRow {
    flex-direction: column;
    align-items: stretch;
  }
  .left {
    max-width: none;
  }
  .carouselFrame {
    width: 100%;
    height: min(620px, 70vh);
  }
}
</style>