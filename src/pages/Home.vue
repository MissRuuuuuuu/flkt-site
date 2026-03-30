<template>
  <div v-if="cms" class="homeRoot" :class="{ isStatic: introMode === 'static' }">
   <div class="fullScreenCenter">
      <div class="sectionInner sectionNarrow">
        <div class="eyebrow">Silver Bullet<sup>®</sup></div>
        <h1 class="brandHeadline">
          Under Construction
        </h1>
</div>

  </div></div>
</template>

<script>
import { getCMS } from "../cms/cmsClient";

export default {
  name: "Home",
  data() {
    return {
      cms: null,
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
  document.title = "Floating Knight | Silver Bullet®";
  this.scrollToTopNow();

  const state = this.$router.app.__sb || (this.$router.app.__sb = {});
  const visitedHome = !!state.visitedHome;

  if (!visitedHome) {
    state.visitedHome = true;
    this.playIntro();
  } else {
    this.skipIntroButShowHero();
  }
  },
 
  computed: {
  heroStyle() {
    return {
      transform: this.step === 0
        ? "translate3d(0, 0, 0)"
        : "translate3d(0, -8vh, 0)",
      opacity: this.step === 0 ? 1 : 0,
      pointerEvents: this.step === 0 ? "auto" : "none",
    };
  },

  contentStyle() {
    return {
      transform: this.step === 0
        ? "translate3d(0, 6vh, 0)"
        : "translate3d(0, 0, 0)",
      opacity: this.step === 0 ? 0 : 1,
      pointerEvents: this.step === 0 ? "none" : "auto",
    };
  },
  },
  methods: {

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
    this.step = 1;
  }, 4000);
},

skipIntroButShowHero() {
  this.canScroll = true;
  this.introMode = "static";
  this.step = 1;
  this.scrollToTopNow();
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
.homeRoot {
  position: relative;
  z-index: 0;
}

/* =========================
   Hero animation screen
   ========================= */

.heroScreen {
    position: fixed;
  inset: 0;
  z-index: 20;
  width: 100%;
  height: 100vh;
  background: transparent;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  transition:
    transform 2800ms cubic-bezier(0.22, 1, 0.36, 1),
    opacity 2800ms cubic-bezier(0.22, 1, 0.36, 1);
  will-change: transform, opacity;
}
.contentScreen {
   position: relative;
  z-index: 5;
  width: 100%;
  background: transparent;
  transition:
    transform 2800ms cubic-bezier(0.22, 1, 0.36, 1),
    opacity 2800ms cubic-bezier(0.22, 1, 0.36, 1);
  will-change: transform, opacity;
}

.heroStage {
 position: relative;
  width: 100vw;
  aspect-ratio: 1280 / 720;
  margin: 0 auto;
  transform: scale(1.5);
  transform-origin: center center;
}

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

.r0 { animation-delay: 0.9s; }
.r1 { animation-delay: 1s; }
.r2 { animation-delay: 1.1s; }
.r3 { animation-delay: 1.2s; }
.r4 { animation-delay: 1.3s; }
.r5 { animation-delay: 1.4s; }
.r6 { animation-delay: 1.5s; }
.r7 { animation-delay: 1.6s; }
.r8 { animation-delay: 1.7s; }

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

/* =========================
   Shared sections
   ========================= */
.homeSection {
  position: relative;
  z-index: 2;
}

.sectionInner {
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 16px;
}

.sectionNarrow {
  max-width: 980px;
}

.sectionKicker,
.eyebrow {
  font-size: 0.78rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #7b7a72;
  font-weight: 600;
}

.sectionTitle,
.centerTitle {
  margin: 0;
  font-size: 2.4rem;
  line-height: 1.02;
  letter-spacing: -0.04em;
  font-weight: 700;
  color: #1f201b;
}

.centerTitle {
  text-align: center;
}
.fullScreenCenter {
  display: flex;
  flex-direction: column;
  justify-content: center; /* 垂直居中 */
  align-items: center;     /* 水平居中 */
min-height: 60vh; /* 屏幕高度的 60%，不会太高 */
  max-height: calc(100vh - 100px); /* 留给 footer 的空间 */
  width: 100%;
  text-align: center;
}
/* =========================
   Brand statement
   ========================= */
.brandSection {
  padding: 110px 0 110px;
}

.brandHeadline {
  margin: 18px 0 0;
  font-size: 4rem;
  line-height: 1.08;
  letter-spacing: -0.06em;
  font-weight: 900;
  color: #201d1d;
}

/* =========================
   Series overview
   ========================= */
.seriesSection {
  padding: 30px 0 110px;
}

.seriesTop {
  margin-bottom: 48px;
}

.seriesIntro {
  max-width: 980px;
  margin: 18px auto 0;
  text-align: center;
  font-size: 1.28rem;
  line-height: 1.45;
  letter-spacing: -0.03em;
  color: #2e2a2a;
  font-weight: 400;
}

.seriesGrid {
  display: grid;
  grid-template-columns: 1fr 1.2fr 1fr;
  gap: 36px;
  align-items: end;
}

.seriesProductLink {
  text-decoration: none;
  color: inherit;
  display: block;
  transition: transform 0.22s ease, opacity 0.22s ease;
}

.seriesProductLink:hover {
  text-decoration: none;
  transform: translateY(-4px);
  opacity: 0.92;
}

.seriesProductImg {
  display: block;
  margin: 0 auto;
  object-fit: contain;
}

.bodyImg {
  max-height: 440px;
}

.faceImg {
  max-height: 360px;
}

.seriesProductName {
  margin-top: 20px;
  text-align: center;
  font-size: 0.92rem;
  line-height: 1.25;
  color: #222;
  font-weight: 500;
  letter-spacing: -0.02em;
}

.seriesCenter {
  text-align: center;
  align-self: center;
}

.seriesCenterBig {
  font-size: 5rem;
  line-height: 0.95;
  font-weight: 700;
  letter-spacing: -0.06em;
  color: #0d28f0;
}

.seriesCenterSub {
  margin-top: 8px;
  font-size: 1.6rem;
  line-height: 1.05;
  letter-spacing: -0.04em;
  font-weight: 700;
  color: #231f20;
}

.seriesCenterStack {
  margin-top: 38px;
  font-size: 1.2rem;
  line-height: 1.3;
  color: #231f20;
  font-weight: 600;
  letter-spacing: -0.03em;
}

.plusSign {
  margin: 14px 0;
  font-size: 4rem;
  line-height: 0.9;
  color: #0d28f0;
  font-weight: 700;
}

/* =========================
   Product teaser shared
   ========================= */
.productTeaser {
  padding: 90px 0;
}

.teaserBlue {
  background: #1328ef;
}

.teaserGrid {
  display: grid;
  grid-template-columns: 0.95fr 1.05fr;
  gap: 40px;
  align-items: center;
}

.reverseGrid {
  grid-template-columns: 1.05fr 0.95fr;
}

.teaserMedia {
  text-align: center;
}

.teaserImageLink {
  display: inline-block;
  text-decoration: none;
}

.teaserProductImg {
  display: block;
  margin: 0 auto;
  object-fit: contain;
}

.teaserBodyImg {
  max-height: 560px;
}

.teaserFaceImg {
  max-height: 430px;
}

.teaserPackSize {
  margin-top: 18px;
  font-size: 0.9rem;
  line-height: 1.35;
  color: rgba(255, 255, 255, 0.85);
  font-weight: 300;
}

.teaserContent {
  max-width: 640px;
}

.lightText {
  color: #fff;
}

.teaserTitle {
  margin: 0;
  font-size: 2.5rem;
  line-height: 0.98;
  letter-spacing: -0.05em;
  font-weight: 700;
  color: #fff;
}

.teaserTagline {
  margin: 14px 0 0;
  font-size: 1.22rem;
  line-height: 1.4;
  color: rgba(255, 255, 255, 0.92);
  font-weight: 400;
}

.teaserFeatureList,
.teaserSupportList {
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.teaserFeatureItem,
.supportItem {
  display: grid;
  grid-template-columns: 46px 1fr;
  gap: 18px;
  align-items: start;
}

.teaserFeatureNum {
  font-size: 2rem;
  line-height: 0.92;
  font-weight: 300;
  color: rgba(185, 185, 155, 0.8);
  letter-spacing: -0.05em;
}

.teaserFeatureText {
  font-size: 1.2rem;
  line-height: 1.24;
  color: #fff;
  font-weight: 600;
  letter-spacing: -0.03em;
}

.supportTitleRow {
  margin-top: 34px;
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 1.45rem;
  font-weight: 700;
  line-height: 1.2;
  color: #fff;
  letter-spacing: -0.03em;
}

.supportSquare {
  width: 14px;
  height: 14px;
  background: #fff;
  border-radius: 1px;
  flex: 0 0 auto;
}

.supportItemTitle {
  font-size: 1.2rem;
  line-height: 1.2;
  color: #fff;
  font-weight: 700;
  letter-spacing: -0.03em;
}

.supportItemText {
  margin-top: 4px;
  font-size: 1rem;
  line-height: 1.35;
  color: rgba(255, 255, 255, 0.92);
  font-weight: 400;
}

.ctaBtn {
  margin-top: 34px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  padding: 0 18px;
  border: 1.5px solid #20211c;
  border-radius: 999px;
  text-decoration: none;
  color: #20211c;
  background: transparent;
  font-size: 0.92rem;
  font-weight: 600;
  letter-spacing: 0.01em;
  transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease;
}

.ctaBtn:hover {
  background: #20211c;
  color: #fff;
  text-decoration: none;
}

.ctaBtnLight {
  border-color: rgba(255, 255, 255, 0.92);
  color: #fff;
}

.ctaBtnLight:hover {
  background: #fff;
  color: #1328ef;
  border-color: #fff;
}

/* =========================
   Contact CTA
   ========================= */
.contactCtaSection {
  padding: 110px 0 130px;
}

.centerCta {
  text-align: center;
}

.ctaText {
  max-width: 760px;
  margin: 16px auto 0;
  font-size: 1.02rem;
  line-height: 1.7;
  color: #65675f;
}

/* =========================
   Responsive
   ========================= */
@media (max-width: 1199.98px) {
  .brandHeadline {
    font-size: 3.45rem;
  }

  .teaserTitle {
    font-size: 3.4rem;
  }

  .seriesCenterBig {
    font-size: 4.2rem;
  }
}

@media (max-width: 991.98px) {
  .brandSection {
    padding: 90px 0 90px;
  }

  .seriesSection,
  .productTeaser,
  .contactCtaSection {
    padding-top: 80px;
    padding-bottom: 90px;
  }

  .brandHeadline {
    font-size: 2.75rem;
  }

  .sectionTitle,
  .centerTitle {
    font-size: 2rem;
  }

  .seriesIntro {
    font-size: 1.1rem;
  }

  .seriesGrid,
  .teaserGrid,
  .reverseGrid {
    grid-template-columns: 1fr;
  }


.seriesCenter {
  order: 0;
  max-width: 100%;
  margin: 0 auto;
  text-align: center;
}

.seriesProductLink {
  width: 100%;
  max-width: 180px;
  margin: 0 auto;
  text-align: center;
}

.bodyImg {
  max-height: 300px;
}

.faceImg {
  max-height: 240px;
}

.seriesProductName {
  margin-top: 12px;
  font-size: 0.82rem;
  line-height: 1.2;
  text-align: center;
}

.seriesCenterBig {
  font-size: 3.4rem;
  line-height: 0.92;
}

.seriesCenterSub {
  margin-top: 6px;
  font-size: 1.45rem;
  line-height: 1.02;
}

.seriesCenterStack {
  margin-top: 22px;
  font-size: 0.98rem;
  line-height: 1.22;
}

.plusSign {
  margin: 10px 0;
  font-size: 2.8rem;
}

  .teaserContent,
  .seriesCenter,
  .seriesProductLink {
    max-width: 720px;
    margin: 0 auto;
  }

  .teaserContent {
    text-align: left;
  }

  .teaserTitle {
    font-size: 2.8rem;
  }
}

@media (max-width: 575.98px) {
  .brandSection {
    padding: 72px 0 72px;
  }

  .seriesSection,
  .productTeaser,
  .contactCtaSection {
    padding-top: 68px;
    padding-bottom: 78px;
  }

  .brandHeadline {
    font-size: 2rem;
    line-height: 1.15;
  }

  .sectionTitle,
  .centerTitle {
    font-size: 1.7rem;
  }

  .seriesIntro {
    font-size: 1rem;
    line-height: 1.5;
  }

  .seriesCenterBig {
    font-size: 3rem;
  }

  .seriesCenterSub {
    font-size: 1.5rem;
  }

  .seriesCenterStack {
    font-size: 1rem;
  }

  .plusSign {
    font-size: 3rem;
  }

  .teaserTitle {
    font-size: 2.15rem;
  }

  .teaserTagline {
    font-size: 1rem;
  }

  .teaserFeatureText,
  .supportTitleRow {
    font-size: 1.1rem;
  }

  .supportItemTitle {
    font-size: 1.02rem;
  }

  .supportItemText,
  .ctaText {
    font-size: 0.94rem;
  }

  .teaserFeatureNum {
    font-size: 2.4rem;
  }

  .teaserFeatureItem,
  .supportItem {
    grid-template-columns: 34px 1fr;
    gap: 14px;
  }

  .teaserBodyImg {
    max-height: 420px;
  }

  .teaserFaceImg {
    max-height: 340px;
  }
}
</style>