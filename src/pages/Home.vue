<template>
  <div v-if="cms" class="homeRoot" :class="{ isStatic: introMode === 'static' }">
    <!-- ===== Layer 1: Fullscreen Hero Animation ===== -->
    <section
      class="heroScreen"
      aria-label="Silver Bullet animation"
      :style="heroStyle"
    >
      <svg
        class="sbSvg"
        viewBox="0 0 1400 400"
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line class="blueLine" x1="80" y1="200" x2="360" y2="200" />
        <text class="sbText" x="400" y="214">SILVER BULLET</text>
        <line class="centerStem" x1="820" y1="70" x2="820" y2="330" />

        <g class="rays">
          <line class="ray r0" x1="820" y1="200" x2="820" y2="60" />
          <line class="ray r1" x1="820" y1="200" x2="890" y2="70" />
          <line class="ray r2" x1="820" y1="200" x2="980" y2="95" />
          <line class="ray r3" x1="820" y1="200" x2="1110" y2="135" />
          <line class="ray r4" x1="820" y1="200" x2="1340" y2="200" />
          <line class="ray r5" x1="820" y1="200" x2="1110" y2="265" />
          <line class="ray r6" x1="820" y1="200" x2="980" y2="305" />
          <line class="ray r7" x1="820" y1="200" x2="890" y2="330" />
          <line class="ray r8" x1="820" y1="200" x2="820" y2="340" />
        </g>

        <text class="slogan" x="980" y="360">
          SPEEDY COMFORT, PRECISE REVIVAL.
        </text>
      </svg>

      <div class="scrollHint" v-show="canScroll && introMode === 'play'">
        <span>Scroll</span><span class="arrow">↓</span>
      </div>
    </section>

    <!-- ✅ Layer 2: bind contentStyle so it fades/moves with scroll -->
    <section class="contentScreen" :style="contentStyle">
      <section class="below">
        <div class="belowRow">
          <!-- LEFT: text -->
          <div class="left">
            <h3 class="ctaTitle">PRODUCTS</h3>

            <h1 class="brand">{{ t(cms.home.hero.title) }}</h1>

            <h2 class="headline" style="white-space:pre-line">
              {{ t(cms.home.hero.headline) }}
            </h2>

            <p class="subhead" style="white-space:pre-line">
              {{ t(cms.home.hero.subhead) }}
            </p>

            <div class="ctaRow">
              <router-link class="btnPrimary" :to="withLang('/products')">
                {{ t({ zh: "查看全部", en: "View all" }) }}
              </router-link>
            </div>
          </div>

          <!-- RIGHT: fixed carousel frame -->
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

const INTRO_KEY = "sb_home_intro_done";

export default {
  name: "Home",
  data() {
    return {
      cms: null,
      idx: 0,
      canScroll: false,
      step: 0,
      wheelLock: false,
introMode: "play", // "play" | "static"
      // ✅ only show intro once per session
      showIntro: true,
    };
  },
  async created() {
    this.cms = await getCMS();
  },
  mounted() {
  // ✅ 用 router 的内存对象保存一次性标记：刷新会丢失，站内跳转保留
  const state = this.$router.app.__sb || (this.$router.app.__sb = {});
  const visitedHome = !!state.visitedHome;

  if (!visitedHome) {
    // 第一次进入 Home（本次页面加载周期）
    state.visitedHome = true;
    this.playIntro();
  } else {
    // 站内从其他页面回 Home：不播动画，但 Hero 静态显示
    this.skipIntroButShowHero();
  }

  window.addEventListener("wheel", this.onWheel, { passive: false });
  },
  beforeDestroy() {
    window.removeEventListener("wheel", this.onWheel);
  },
  computed: {
    heroStyle() {
      // showIntro=false 时不渲染 hero（v-show），但这里也保持安全
      const y = this.step === 0 ? 0 : this.step === 1 ? -30 : -60;
      const op = this.step === 0 ? 1 : this.step === 1 ? 0.35 : 0;
      return {
        transform: `translate3d(0, ${y}vh, 0)`,
        opacity: op,
        pointerEvents: this.step >= 2 ? "none" : "auto",
      };
    },

    contentStyle() {
      // ✅ 关键：内容与轮播随 step 从底部淡入，上滑淡出
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
  // 直接拉回顶部，确保 nav 立刻可见
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
},

    playIntro() {
  this.canScroll = false;
  this.step = 0;          // 从头开始
  this.introMode = "play"; // 播放模式
  window.setTimeout(() => {
    this.canScroll = true;
  }, 2300);
},

skipIntroButShowHero() {
  this.canScroll = true;
  this.introMode = "static"; // 静态模式（不播、但显示）
  this.step = 0;             // ✅ 关键：停在第一屏，这样 Hero 在
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
  // intro 播放未结束：锁滚轮
  if (this.introMode === "play" && !this.canScroll) {
    e.preventDefault();
    return;
  }

  const delta = e.deltaY || 0;

  // ✅ step=2：向下滚放行（让页面自然向下）
  if (this.step === 2 && delta > 0) {
    return;
  }

  // ✅ step=2：向上滚 —— 必须先把页面滚动拉回顶部，否则 nav 永远回不来
  if (this.step === 2 && delta < 0) {
    e.preventDefault();

    // 如果当前窗口不是在顶部，先回到顶部（让 nav 出来）
    if (window.scrollY > 0) {
      this.scrollToTopNow();
      return; // 这一滚先用于“回顶部”，下一次滚轮再开始 step 回退
    }

    // 已经在顶部了，再执行 step 回退
    if (this.wheelLock) return;
    this.wheelLock = true;

    this.step = 1; // 从 2 回到 1（下一次可回到 0）
    window.setTimeout(() => {
      this.wheelLock = false;
    }, 520);
    return;
  }

  // step 0/1 的过渡区间：我们拦截滚轮控制 step
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
/* footer reserve height (match App.vue footer height approx) */
:root {
  --footer-h: 140px;
  --safe-gap: 48px;
}

/* ===== Hero full screen ===== */
.heroScreen {
  position: sticky;
  z-index:1;
  top: 0;
  height: 100vh;
  width: 100%;
  background: #fff;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 520ms ease, opacity 520ms ease;
  will-change: transform, opacity;
}

.sbSvg { width: 100%; height: 100%; display: block; }

.homeRoot {
  position: relative;
  z-index:0;
  --footer-h: 140px;
  --safe-gap: 120px; /* ✅ 这里调大/调小就能控制红框距离 */
  padding-bottom: calc(var(--footer-h) + var(--safe-gap));
}
/* ===== Content layer ===== */
/* ✅ 预留 footer 高度，避免轮播被 footer 吃掉 */
.contentScreen {
position: relative;
z-index:1;
  height: 50vh; /* ✅ 关键：固定一屏（扣 footer） */
  width: 100%;
  background: #fff;
  transition: transform 520ms ease, opacity 520ms ease;
  will-change: transform, opacity;
  overflow: hidden; /* ✅ 防止 padding 把布局撑乱 */
}

/* ===== below layout ===== */
.below {
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;          /* ✅ 垂直居中 */
  justify-content: center;
  padding: 18px 0 20px; /* ✅ 顶更近；底留白但不再叠 footer */
}


.belowRow {
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;         /* ✅ 删掉 margin-top:16px 这种叠加 */
  padding: 0 16px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 24px;
}

.left { flex: 1 1 auto; min-width: 0; max-width: 560px; }
.right { flex: 0 0 auto; display: flex; justify-content: flex-end; }

/* ✅ 固定外框尺寸，但更适配竖图 + footer */
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

/* 图片区域 */
.imgLink {
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fafafa;
  text-decoration: none;
  padding: 14px; /* ✅ 给 contain 留边距，竖图更好看 */
  box-sizing: border-box;
}

/* ✅ 高对齐：height:100% + width:auto（防止变扁变宽） */
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
.prodName { font-weight: 800; font-size: 14px; color: #111; line-height: 1.3; }

/* controls / dots */
.navBtn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 38px;
  height: 38px;
  border-radius: 999px;
  border: 1px solid #ddd;
  background: rgba(255,255,255,0.9);
  cursor: pointer;
  font-size: 24px;
  line-height: 36px;
  padding: 0;
}
.navBtn.prev { left: 10px; }
.navBtn.next { right: 10px; }

.dots {
  position: absolute;
  bottom: 64px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
}
.dot { width: 8px; height: 8px; border-radius: 999px; border: none; background: #ddd; cursor: pointer; }
.dot.on { background: #111; }

/* typography */
.brand { font-weight: 900; letter-spacing: 1px; }
.headline { margin-top: 14px; font-size: 38px; line-height: 1.12; }
.subhead { margin-top: 12px; color: #444; line-height: 1.7; max-width: 520px; }
.ctaTitle { font-size: 14px; color: #666; margin-bottom: 10px; letter-spacing: 1px; }
.ctaRow { display:flex; gap:12px; flex-wrap:wrap; margin-top:16px; }
.btnPrimary { display:inline-block; padding:10px 18px; border:1px solid #111; border-radius:14px; text-decoration:none; color:#111; }

/* scroll hint */
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
.arrow { display: inline-block; transform: translateY(-1px); }
.homeRoot.isStatic .blueLine,
.homeRoot.isStatic .sbText,
.homeRoot.isStatic .ray,
.homeRoot.isStatic .slogan {
  animation: none !important;
  opacity: 1 !important;
  stroke-dashoffset: 0 !important;
  transform: none !important;
}
/* animations remain (你的原动画保持) */
.blueLine { stroke:#0a2bff; stroke-width:10; stroke-linecap:square; stroke-dasharray:350; stroke-dashoffset:350; animation: drawLine .8s ease forwards; }
.sbText { font-family:Arial, Helvetica, sans-serif; font-weight:800; font-size:44px; fill:#2b211d; opacity:0; transform:translateX(-10px); transform-origin:left center; animation:textIn .7s ease forwards; animation-delay:.35s; }
.centerStem { stroke:#6f6f6f; stroke-width:8; stroke-linecap:square; opacity:.85; }
.ray { stroke:#6f6f6f; stroke-width:8; stroke-linecap:square; stroke-dasharray:700; stroke-dashoffset:700; animation: rayOut .55s ease forwards; }
.r0{animation-delay:.9s} .r1{animation-delay:1.0s} .r2{animation-delay:1.1s} .r3{animation-delay:1.2s} .r4{animation-delay:1.3s}
.r5{animation-delay:1.4s} .r6{animation-delay:1.5s} .r7{animation-delay:1.6s} .r8{animation-delay:1.7s}
.slogan { font-family:Arial, Helvetica, sans-serif; font-size:18px; fill:#2b211d; opacity:0; animation: fadeIn 1.2s ease forwards; animation-delay:2s; }
@keyframes drawLine { to { stroke-dashoffset: 0; } }
@keyframes textIn { to { opacity: 1; transform: translateX(0); } }
@keyframes rayOut { to { stroke-dashoffset: 0; } }
@keyframes fadeIn { to { opacity: 1; } }

/* responsive */
@media (max-width: 980px) {
  .below {
    align-items: flex-start;
    padding: 14px 0 var(--safe-gap);
  }
  .belowRow {
    flex-direction: column;
    align-items: stretch;
  }
  .left { max-width: none; }
  .carouselFrame {
    width: 100%;
    height: min(620px, 70vh); /* ✅ 关键：小屏不爆 */
  }
}
</style>
