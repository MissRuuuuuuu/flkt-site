<template>
  <div v-if="cms" class="homeRoot" :class="{ isStatic: introMode === 'static' }">
    <!-- Hero animation screen -->
    <section class="heroScreen" aria-label="Silver Bullet animation" :style="heroStyle">
      <div class="heroStage">
        <!-- Layer A: blue line -->
        <svg
          class="sbLine"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid meet"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line class="blueLine" x1="0" y1="50" x2="8" y2="50" />
        </svg>

        <!-- Layer B: main layout canvas -->
        <svg
          class="sbMain"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid meet"
          xmlns="http://www.w3.org/2000/svg"
        >
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

            <g class="sbReg">
              <path
                d="M192.16,9.61l-1.55-3.1h-1.39v3.1h-1.12V2.26h2.85c1.39,0,2.28.9,2.28,2.15,0,1.05-.64,1.72-1.47,1.95l1.69,3.25h-1.3ZM190.87,3.26h-1.65v2.3h1.65c.74,0,1.25-.42,1.25-1.15s-.51-1.16-1.25-1.16Z"
              />
              <path
                d="M190.54,12.06c-3.32,0-6.03-2.7-6.03-6.03s2.7-6.03,6.03-6.03,6.03,2.7,6.03,6.03-2.7,6.03-6.03,6.03ZM190.54.95c-2.8,0-5.08,2.28-5.08,5.08s2.28,5.08,5.08,5.08,5.08-2.28,5.08-5.08-2.28-5.08-5.08-5.08Z"
              />
            </g>
          </svg>

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

      <!-- <div class="scrollHint" v-show="introMode === 'play' && step === 0">
        <span>Scroll</span><span class="arrow">↓</span>
      </div> -->
    </section>

    <div class="contentScreen" :style="contentStyle">
    <!-- Brand statement -->
    <section class="homeSection brandSection">
      <div class="sectionInner sectionNarrow">
        <div class="eyebrow">Silver Bullet<sup>®</sup></div>
        <h1 class="brandHeadline">
          In the fields of health &amp; beauty,<br />
          we solve difficult problems<br />
          in a simple way.
        </h1>
      </div>
    </section>

    <!-- Series overview -->
    <section class="homeSection seriesSection">
      <div class="sectionInner">
        <div class="seriesTop">
          <h2 class="sectionTitle centerTitle">INNOVATIVE SOOTHING SERIES</h2>

          <p class="seriesIntro">
            The Innovative Soothing Series delivers fast-acting &amp; precise soothing sensations
            to areas of skin experiencing stress, tightness or heat, while supporting the skin’s
            natural renewal process. Though applied to skin, its calming effect resonates beyond –
            creating a deep &amp; holistic sense of ease and balance.
          </p>
        </div>

        <div class="seriesGrid">
          <router-link
            class="seriesProductLink leftProduct"
            :to="withLang('/eu/products/soothing-gel')"
          >
            <img
              class="seriesProductImg bodyImg"
              src="/img/soothinggel.png"
              alt="Silver Bullet Innovative Soothing Gel"
            />
            <div class="seriesProductName">
              Silver Bullet<sup>®</sup><br />
              Innovative Soothing Gel
            </div>
          </router-link>

          <div class="seriesCenter">
            <div class="seriesCenterBig">1-5 mins</div>
            <div class="seriesCenterSub">Speedy Comfort</div>

            <div class="seriesCenterStack">
              <div>Proprietary Marine<br />Biotechnology</div>
              <div class="plusSign">+</div>
              <div>Precise Formulation<br />Systems</div>
            </div>
          </div>

          <router-link
            class="seriesProductLink rightProduct"
            :to="withLang('/eu/products/post-procedure-gel')"
          >
            <img
              class="seriesProductImg faceImg"
              src="/img/postproceduresgel.png"
              alt="Silver Bullet Innovative Soothing Hydration Face Gel"
            />
            <div class="seriesProductName">
              Silver Bullet<sup>®</sup><br />
              Innovative Soothing Hydration<br />
              Face Gel
            </div>
          </router-link>
        </div>
      </div>
    </section>

    <!-- Product teaser 1 -->
    <section class="homeSection productTeaser teaserBlue">
      <div class="sectionInner">
        <div class="teaserGrid">
          <div class="teaserMedia">
            <router-link :to="withLang('/eu/products/soothing-gel')" class="teaserImageLink">
              <img
                class="teaserProductImg teaserBodyImg"
                src="/img/soothinggel.png"
                alt="Innovative Soothing Gel"
              />
            </router-link>
            <div class="teaserPackSize">50mL / 1.7 fl.oz | 10mL / 0.34 fl.oz</div>
          </div>

          <div class="teaserContent lightText">
            <h2 class="teaserTitle">INNOVATIVE<br />SOOTHING GEL</h2>
            <p class="teaserTagline">Specifically designed for discomfort in joint areas</p>

            <div class="teaserFeatureList">
              <div class="teaserFeatureItem">
                <div class="teaserFeatureNum">1</div>
                <div class="teaserFeatureText">1–5 mins speedy comfort</div>
              </div>
              <div class="teaserFeatureItem">
                <div class="teaserFeatureNum">2</div>
                <div class="teaserFeatureText">Fragrance-free, natural aqua-based feel</div>
              </div>
              <div class="teaserFeatureItem">
                <div class="teaserFeatureNum">3</div>
                <div class="teaserFeatureText">Deep and long-lasting soothing effect</div>
              </div>
            </div>

            <router-link class="ctaBtn ctaBtnLight" :to="withLang('/eu/products/soothing-gel')">
              View Product Detail
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Product teaser 2 -->
    <section class="homeSection productTeaser teaserBlue">
      <div class="sectionInner">
        <div class="teaserGrid reverseGrid">
          <div class="teaserContent lightText">
            <h2 class="teaserTitle">INNOVATIVE SOOTHING<br />HYDRATION FACE GEL</h2>
            <p class="teaserTagline">Specifically designed for post-aesthetic care</p>

            <div class="supportTitleRow">
              <span class="supportSquare"></span>
              <span>4 Dimensions of skin support</span>
            </div>

            <div class="teaserSupportList">
              <div class="supportItem">
                <div class="teaserFeatureNum">1</div>
                <div>
                  <div class="supportItemTitle">Speedy soothing</div>
                  <div class="supportItemText">Instant soothing sensation in 1~5 minutes</div>
                </div>
              </div>

              <div class="supportItem">
                <div class="teaserFeatureNum">2</div>
                <div>
                  <div class="supportItemTitle">Moisture Balance</div>
                  <div class="supportItemText">Fast hydration and long-lasting moisture retention</div>
                </div>
              </div>

              <div class="supportItem">
                <div class="teaserFeatureNum">3</div>
                <div>
                  <div class="supportItemTitle">Barrier Support</div>
                  <div class="supportItemText">
                    Helps reinforce skin barrier function with continued use
                  </div>
                </div>
              </div>

              <div class="supportItem">
                <div class="teaserFeatureNum">4</div>
                <div>
                  <div class="supportItemTitle">Visible Refinement</div>
                  <div class="supportItemText">
                    Delivers a refined, healthy-looking appearance over time
                  </div>
                </div>
              </div>
            </div>

            <router-link
              class="ctaBtn ctaBtnLight"
              :to="withLang('/eu/products/post-procedure-gel')"
            >
              View Product Detail
            </router-link>
          </div>

          <div class="teaserMedia">
            <router-link
              :to="withLang('/eu/products/post-procedure-gel')"
              class="teaserImageLink"
            >
              <img
                class="teaserProductImg teaserFaceImg"
                src="/img/postproceduresgel.png"
                alt="Innovative Soothing Hydration Face Gel"
              />
            </router-link>
            <div class="teaserPackSize">50mL / 1.7 fl.oz | 15mL / 0.51 fl.oz</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact CTA -->
    <section class="homeSection contactCtaSection">
      <div class="sectionInner sectionNarrow centerCta">
        <div class="sectionKicker">CONTACT</div>
        <h2 class="sectionTitle">For partnership or product inquiries</h2>
        <p class="ctaText">
          Please contact us for further product information, distribution opportunities,
          or professional business inquiries.
        </p>
        <router-link class="ctaBtn" :to="withLang('/contact')">
          Contact Us
        </router-link>
      </div>
    </section>
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
  font-weight: 400;
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