<template>
  <b-container fluid class="product-page px-0" v-if="cms && product">
    <section class="product-hero">
      <b-container>
        <b-row class="align-items-start hero-layout">
          <!-- Left: image + pack size -->
          <b-col cols="12" lg="5" class="mb-4 mb-lg-0">
            <div class="hero-media">
              <div class="hero-image-card">
                <img
                  class="hero-image"
                  :src="productImg"
                  :alt="t(product.name)"
                />
              </div>

              <div v-if="detailContent.packSize" class="pack-size">
                {{ detailContent.packSize }}
              </div>
            </div>
          </b-col>

          <!-- Right: brand + product name + tagline + highlights -->
          <b-col cols="12" lg="7">
            <div class="hero-copy">
              <div class="brand-mark mb-2">Silver Bullet<sup>®</sup></div>

              <h1 class="hero-title mb-3">
                {{ t(product.name).toUpperCase() }}
              </h1>

              <p v-if="detailContent.tagline" class="hero-tagline mb-4">
                {{ detailContent.tagline }}
              </p>

              <div v-if="detailContent.statement" class="statement-card mb-4">
                <div class="statement-text" v-html="detailContent.statement"></div>
              </div>

              <div class="highlight-list">
                <div
                  v-for="(item, index) in detailContent.features"
                  :key="index"
                  class="highlight-item"
                >
                  <div class="highlight-square"></div>
                  <div class="highlight-body">
                    <h2 class="highlight-title">{{ item.title }}</h2>
                    <p v-if="item.text" class="highlight-text mb-0">
                      {{ item.text }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>

    <section class="product-main">
      <b-container>
        <div class="usage-card">
  <b-row class="align-items-start">
    <!-- Left: directions / steps -->
    <b-col cols="12" lg="5" class="mb-4 mb-lg-0">
      <div class="usage-left">
        <h2 class="section-title mb-4">Directions for Use</h2>

        <p
          v-if="detailContent.directionsText"
          class="directions-copy mb-4"
        >
          {{ detailContent.directionsText }}
        </p>

        <div class="step-grid">
          <div
            v-for="(step, index) in detailContent.steps"
            :key="index"
            class="step-item"
          >
            <div class="step-icon">
              <img
                :src="detailContent.stepIcons[index]"
                class="step-svg-img"
                :alt="step"
              />
            </div>

            <div class="step-label">{{ step }}</div>
          </div>
        </div>
      </div>
    </b-col>

    <!-- Right: recommended -->
    <b-col cols="12" lg="7">
      <div class="usage-right">
        <h2 class="section-title mb-4">{{ detailContent.notesTitle }}</h2>

        <ul class="notes-list mb-0">
          <li
            v-for="(item, index) in detailContent.notes"
            :key="index"
          >
            {{ item }}
          </li>
        </ul>
      </div>
    </b-col>
  </b-row>
</div>

        <div class="back-row">
          <router-link class="back-btn" :to="withLang('/products')">
            {{ t({ zh: "查看全部产品", en: "View all products" }) }}
          </router-link>
        </div>
      </b-container>
    </section>
  </b-container>
</template>

<script>
import { getCMS } from "../cms/cmsClient";

export default {
  name: "ProductSoothingGel",
  data() {
    return {
      cms: null,
      product: null,
    };
  },
  async created() {
    this.cms = await getCMS();
    this.setProduct();
  },
  watch: {
    "$route.params.slug"() {
      this.setProduct();
    },
    product: {
      immediate: true,
      handler(val) {
        if (!val) return;
        document.title = `${this.t(val.name)} | silver bullet®`;
      },
    },
  },
  computed: {
    productImg() {
      return this.product?.images?.[0] || null;
    },
    slug() {
      return (this.$route && this.$route.params && this.$route.params.slug) || "soothing-gel";
    },
    detailContent() {
      const map = {
        "soothing-gel": {
          tagline: "Specifically designed for discomfort in joint areas",
          packSize: "50mL / 1.7 fl.oz | 10mL / 0.34 fl.oz",
          features: [
            {
              title: "1–5 mins speedy comfort",
              text: "",
            },
            {
              title: "Fragrance-free, natural aqua-based feel",
              text: "",
            },
            {
              title: "Deep and long-lasting soothing effect",
              text: "",
            },
          ],
          directionsText:
            "APPLY A SMALL AMOUNT TO THE DESIRED AREA AND RUB IT GENTLY UNTIL ABSORBED. USE AS NEEDED ON A DAILY BASIS.",
          steps: [
            "APPLY A SMALL AMOUNT",
            "RUB IT GENTLY",
            "ALLOW TO FULLY ABSORB",
          ],
          stepIcons: [
            "/img/body_step1.svg",
            "/img/body_step2.svg",
            "/img/body_step3.svg",
          ],
          notesTitle: "Recommended for",
          notes: [
            "Areas of skin that feel tight or warm. Helps leave skin feeling comfortable.",
            "Ideal for applying to the areas of neck, shoulders, back, arms and legs.",
            "Suitable for all skin types, including sensitive skin.",
          ],
          statement: "",
        },

        "post-procedure-gel": {
          tagline: "Specifically designed for post-aesthetic care",
          packSize: "50mL / 1.7 fl.oz | 15mL / 0.51 fl.oz",
          features: [
            {
              title: "Speedy soothing",
              text: "Instant soothing sensation in 1~5 minutes",
            },
            {
              title: "Moisture Balance",
              text: "Fast hydration and long-lasting moisture retention",
            },
            {
              title: "Barrier Support",
              text: "Helps reinforce skin barrier function with continued use",
            },
            {
              title: "Visible Refinement",
              text: "Delivers a refined, healthy-looking appearance over time",
            },
          ],
          directionsText: "",
          steps: [
            "APPLY A THIN EVEN LAYER",
            "MASSAGE GENTLY (1~1.5 MIN)",
            "ALLOW TO FULLY ABSORB",
          ],
          stepIcons: [
            "/img/face_step1.svg",
            "/img/face_step2.svg",
            "/img/face_step3.svg",
          ],
          notesTitle: "Recommended use",
          notes: [
            "An extra amount can be applied where the skin desires speedy soothing.",
            "Can be used after cosmetic aesthetic care, or for daily care of sensitive and stressed skin.",
          ],
          statement:
  'A smooth shortcut to bring your skin back to &nbsp; <span class="statement-focus">Comfort&nbsp;zone</span>',
        },
      };

      return (
        map[this.slug] || {
          tagline: "",
          packSize: "",
          features: [],
          directionsText: "",
          steps: [],
          stepIcons: [],
          notesTitle: "",
          notes: [],
          statement: "",
        }
      );
    },
  },
  methods: {
    setProduct() {
      if (!this.cms || !this.cms.eu || !this.cms.eu.products) return;
      this.product =
        this.cms.eu.products.find((x) => x.slug === this.slug) || null;
    },
    t(obj) {
      const lang = this.$i18n.locale;
      return (obj && (obj[lang] || obj.en)) || "";
    },
    withLang(path) {
      const lang =
        (this.$route && this.$route.params && this.$route.params.lang) ||
        this.$i18n.locale ||
        "en";
      const p = path.startsWith("/") ? path : `/${path}`;
      if (p === "/") return `/${lang}`;
      return `/${lang}${p}`;
    },
  },
};
</script>

<style scoped>
.product-page {
  background: transparent;
  color: #1f1f1a;
}

.product-hero {
  padding: 42px 0 28px;
}

.hero-layout {
  row-gap: 18px;
}

.hero-media {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hero-image-card {
  width: 100%;
  min-height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 18px;
  background: transparent;
}

.hero-image {
  max-width: 100%;
  max-height: 470px;
  width: auto;
  height: auto;
  object-fit: contain;
  display: block;
}

.pack-size {
  margin-top: 10px;
  font-size: 0.78rem;
  line-height: 1.35;
  color: #6a6c63;
  font-weight: 300;
  text-align: center;
  letter-spacing: 0.01em;
}

.hero-copy {
  max-width: 760px;
  padding-left: 18px;
}

.brand-mark {
  font-size: 1.15rem;
  line-height: 1.2;
  font-weight: 600;
  letter-spacing: -0.03em;
  color: #1f201b;
}

.hero-title {
  margin: 0;
  font-size: 3rem;
  line-height: 0.98;
  letter-spacing: -0.04em;
  font-weight: 700;
  color: #1d1e19;
  text-transform: uppercase;
}

.hero-tagline {
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5;
  color: #4e504a;
  margin: 0;
}

.statement-card {
  padding-top: 4px;
}

.statement-text {
  font-size: 0.9rem;
  font-weight: 300;
  line-height: 1.6;
  color: #3f413c;
}

/* ::v-deep .statement-line {
  display: block;
  font-size: 1.12rem;
  line-height: 1.5;
  letter-spacing: -0.015em;
  color: #3f413c;
  font-weight: 400;
  margin-bottom: 6px;
} */

::v-deep .statement-focus {
  /* display: inline-block; */
  font-size: 1.5rem;
  line-height: 1;
  letter-spacing: -0.03em;
  font-family: "SnellBT", "Snell Roundhand", "Brush Script MT", cursive;
  font-weight: 400;
  white-space: nowrap;
}

.highlight-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 10px;
}

.highlight-item {
  display: grid;
  grid-template-columns: 30px 1fr;
  gap: 5px;
  align-items: start;
  padding-top: 14px;
  border-top: 1px solid rgba(70, 70, 55, 0.08);
}

.highlight-item:first-child {
  border-top: 1px solid rgba(70, 70, 55, 0.08);
}

.highlight-square {
  width: 14px;
  height: 14px;
  margin-top: 4px;
  border-radius: 2px;
  background: #110ee6;
  flex-shrink: 0;
}

.highlight-title {
  margin: 0;
  font-size: 1.18rem;
  line-height: 1.25;
  font-weight: 600;
  color: #1f201b;
  letter-spacing: -0.02em;
}

.highlight-text {
  margin-top: 6px;
  color: #66685f;
  font-size: 0.95rem;
  line-height: 1.55;
}

.product-main {
  padding: 0 0 56px;
}

.usage-card {
  background: transparent;
  border: 1px solid rgba(70, 70, 55, 0.08);
  border-radius: 22px;
  padding: 28px 28px 26px;
  box-shadow: 0 14px 36px rgba(40, 42, 33, 0.04);
}

.section-title {
  font-size: 1.55rem;
  line-height: 1.14;
  letter-spacing: -0.02em;
  color: #1f201b;
  font-weight: 600;
  margin: 0;
}

.directions-copy {
  color: #21221d;
  font-size: 1rem;
  line-height: 1.65;
  text-transform: uppercase;
  max-width: 560px;
}

.step-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}

.step-item {
  text-align: center;
}

.step-icon {
  width: 72px;
  height: 72px;
  margin: 0 auto 12px;
  border-radius: 999px;
  border: 1px solid rgba(70, 70, 55, 0.12);
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(
    circle at 30% 30%,
    rgba(255, 255, 255, 0.7) 0%,
    rgba(235, 235, 235, 0.9) 45%,
    rgba(190, 190, 190, 0.95) 100%
  );
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.5);
  color: #2f302c;
}

.step-svg-img {
  width: 50px;
  height: 50px;
  object-fit: contain;
  display: block;
}

.step-label {
  font-size: 0.82rem;
  line-height: 1.35;
  color: #2a2b26;
  font-weight: 600;
  letter-spacing: 0.01em;
  max-width: 120px;
  margin: 0 auto;
}

.usage-right {
  padding-left: 12px;
}

.notes-list {
  padding-left: 1.2rem;
  margin: 0;
}

.notes-list li {
  color: #5f6159;
  font-size: 0.95rem;
  line-height: 1.7;
  margin-bottom: 14px;
}

.notes-list li:last-child {
  margin-bottom: 0;
}

.back-row {
  margin-top: 28px;
}

.back-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 42px;
  padding: 0 16px;
  border: 1.5px solid #20211c;
  border-radius: 999px;
  text-decoration: none;
  color: #20211c;
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 0.01em;
  background: transparent;
  transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease;
}

.back-btn:hover {
  background: #20211c;
  border-color: #20211c;
  color: #fff;
  text-decoration: none;
}

@media (max-width: 991.98px) {
  .product-hero {
    padding: 34px 0 22px;
  }

  .brand-mark {
    font-size: 1rem;
  }

  .hero-title {
    font-size: 2.35rem;
  }

  .hero-image-card {
    min-height: 360px;
  }

  .hero-image {
    max-height: 340px;
  }

  ::v-deep .statement-line {
    font-size: 1.02rem;
  }

  ::v-deep .statement-focus {
    font-size: 2.25rem;
  }

  .usage-card {
    padding: 24px 20px 22px;
    border-radius: 18px;
  }

  .section-title {
    font-size: 1.38rem;
  }

  .usage-right {
    padding-left: 0;
  }
}

@media (max-width: 767.98px) {
  .step-grid {
    grid-template-columns: 1fr;
    gap: 18px;
  }

  .step-item {
    text-align: left;
    display: flex;
    align-items: center;
    gap: 14px;
  }

  .step-icon {
    margin: 0;
    width: 64px;
    height: 64px;
    flex: 0 0 auto;
  }

  .step-svg-img {
    width: 48px;
    height: 48px;
  }

  .step-label {
    max-width: none;
    margin: 0;
    font-size: 0.84rem;
  }
}

@media (max-width: 575.98px) {
  .brand-mark {
    font-size: 0.95rem;
  }

  .hero-title {
    font-size: 1.9rem;
  }

  .hero-tagline,
  .highlight-text,
  .notes-list li {
    font-size: 0.92rem;
  }

  ::v-deep .statement-line {
    font-size: 0.96rem;
    line-height: 1.45;
  }

  ::v-deep .statement-focus {
    font-size: 1.85rem;
  }

  .highlight-item {
    display: grid;
    grid-template-columns: 30px 1fr;
    gap: 5px;
  }

  .highlight-number {
    font-size: 2.2rem;
  }

  .highlight-title {
    font-size: 1.06rem;
  }

  .hero-image-card {
    min-height: 300px;
    padding: 8px;
  }

  .hero-image {
    max-height: 280px;
  }

  .pack-size {
    font-size: 0.74rem;
  }
}

.usage-left {
  padding-right: 10px;
}

.usage-right {
  padding-left: 18px;
}

@media (max-width: 991.98px) {
  .usage-left {
    padding-right: 0;
  }

  .usage-right {
    padding-left: 0;
  }
}
</style>