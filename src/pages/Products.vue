<template>
  <div v-if="cms" class="wrap">
    <div class="topBar">
    <h1 class="title">{{ t({ zh: "产品", en: "Products" }) }}</h1>

    <router-link
      v-if="activeLine !== 'all'"
      class="clearFilterBtn"
      :to="withLang('/products')"
    >
      {{ t({ zh: "查看全部产品", en: "View all products" }) }}
    </router-link>
  </div>

    <div class="grid">
      <div
  class="card"
  :class="{ disabledCard: p.slug === 'anti-aging-gel' }"
  v-for="p in filteredProducts"
  :key="p.slug"
>
        <div
  class="imgWrap"
  :class="{ disabledImg: p.slug === 'anti-aging-gel' }"
  @click="p.slug !== 'anti-aging-gel' && go(p.slug)"
  role="button"
  tabindex="0"
  @keyup.enter="p.slug !== 'anti-aging-gel' && go(p.slug)"
>
          <img :src="p.images?.[0]" :alt="t(p.name)" /> <!-- overlay badge -->
  <span
    v-if="p.slug === 'anti-aging-gel'"
    class="badgeComing"
  >COMING SOON
  </span>
        </div>
<div class="cardBody">
  <h3 class="name" v-if="p.slug !== 'anti-aging-gel'">{{ t(p.name) }}</h3>

  <!-- anti-aging 不显示 short -->
  <p
    v-if="p.slug !== 'anti-aging-gel'"
    class="desc"
  >
    {{ t(p.short) }}
  </p>
<span
  v-if="p.slug === 'anti-aging-gel'"
  class="comingSoonCenter"
>EVEN MORE REVOLUTIONARY?<br>IT IS COMING...
</span>
  <!-- anti-aging 不显示按钮 -->
  <router-link
    v-if="p.slug !== 'anti-aging-gel'"
    class="btn"
    :to="withLang(`/eu/products/${p.slug}`)"
  >
    {{ t({ zh: "查看详情", en: "View detail" }) }}
  </router-link>
</div>
      </div>
    </div>
  </div>
</template>

<script>
import { getCMS } from "../cms/cmsClient";

export default {
  name: "Products",

  data() {
    return {
      cms: null,
    };
  },

  async created() {
    this.cms = await getCMS();
  },

  methods: {
    t(obj) {
      const lang = this.$i18n.locale;
      return obj?.[lang] || obj?.en || "";
    },

    withLang(path) {
      const lang =
        this.$route?.params?.lang ||
        this.$i18n.locale ||
        "en";

      const clean = path.startsWith("/")
        ? path
        : `/${path}`;

      return `/${lang}${clean}`;
    },

    go(slug) {
      this.$router.push(
        this.withLang(`/eu/products/${slug}`)
      );
    },
  },

  computed: {
    activeLine() {
      return this.$route.query.line || "all";
    },

    filteredProducts() {
      const all = this.cms?.eu?.products || [];

      if (this.activeLine === "all") return all;

      return all.filter(
        (p) => p.line === this.activeLine
      );
    },
  },
};
</script>

<style scoped>
.wrap {
  max-width: 1120px;
  margin: 0 auto;
  padding: 36px 16px 48px;
}

.title {
  margin: 0 0 24px;
  font-size: 2.05rem;
  line-height: 1.08;
  letter-spacing: -0.02em;
  font-weight: 600;
  color: #1e1f1a;
}

/* grid */

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 26px;
}

/* card */

.card {
  border: 1px solid transparent;
  border-radius: 22px;
  background: transparent;
  overflow: hidden;
  transition:
    border-color 0.22s ease,
    box-shadow 0.22s ease,
    transform 0.22s ease;
}

.card:hover:not(.disabledCard) {
  border-color: rgba(70, 70, 55, 0.08);
  box-shadow:
    0 14px 36px rgba(40, 42, 33, 0.04);
  transform: translateY(-2px);
}

.disabledCard{
  cursor: default;
}

.disabledImg{
  cursor: default;
}

.comingSoon{
  margin-top:8px;
  font-size:13px;
  letter-spacing:-0.01em;
  color:#666;
}

/* image */

.imgWrap {
   position: relative;
 height: 320px;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  box-sizing: border-box;
}

.imgWrap img {
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  object-fit: contain;
  display: block;
}

.badgeComing{
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 10px;
  letter-spacing: 0.08em;
  font-weight: 600;
   text-align: center;
  padding: 4px 8px;
  border-radius: 999px;
  background: #001ee6;
  color: #fff;
  backdrop-filter: blur(4px);
}
.comingSoonCenter{
  margin-top: 10px;
  text-align: center;
  font-size: 13px;
  letter-spacing: 0.05em;
  color: #666;
  font-weight: 500;
}

.card:hover .imgWrap img {
  transform: scale(1.05);
}

/* body */

.cardBody {
  padding: 14px;
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 3px;
  background: transparent;
}

.name {
  margin: 0;
  font-size: 1.2rem;
  line-height: 1.35;
  font-weight: 600;
  color: #22231e;
  letter-spacing: -0.05em;
}

.desc {
  margin: 0;
  color: #6a6c63;
  line-height: 1.5;
  font-size: 0.9rem;
  min-height: 42px;
}

/* button */

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  /* align-self: flex-start; */
  margin-top: auto;
  min-height: 34px;
  padding: 0 12px;
  border: 1.5px solid #20211c;
  text-decoration: none;
  color: #20211c;
  font-size: 0.88rem;
  font-weight: 600;
  letter-spacing: -0.01em;
  background: transparent;
  transition:
    background 0.2s ease,
    color 0.2s ease,
    border-color 0.2s ease;
}

.btn:hover {
  background: #001ee6;
  border-color: #001ee6;
  color: #fff;

  text-decoration: none;
}


.topBar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 24px;
  flex-wrap: wrap;
}

.title {
  margin: 0;
  font-size: 2.05rem;
  line-height: 1.08;
  letter-spacing: -0.02em;
  font-weight: 600;
  color: #1e1f1a;
}

.clearFilterBtn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 36px;
  padding: 0 14px;
  /* border: 1.5px solid rgba(31, 31, 26, 0.18); */
  border-radius: 8px;
  text-decoration: none;
  color: #1f1f1a;
  font-size: 0.86rem;
  font-weight: 600;
  letter-spacing: 0.01em;
  background: transparent;
  transition: background 0.2s ease, border-color 0.2s ease, color 0.2s ease;
}

.clearFilterBtn:hover {
  text-decoration: underline;
  background: rgba(255, 255, 255, 0.2);
  border-color: rgba(31, 31, 26, 0.32);
  color: #1f1f1a;
}

/* tablet */

@media (max-width: 992px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .imgWrap {
    height: 300px;
  }
}

/* mobile */

@media (max-width: 576px) {
  .wrap {
    padding: 28px 14px 36px;
  }

  .title {
    font-size: 1.65rem;
  }

  .grid {
    grid-template-columns: 1fr;
  }

  .imgWrap {
    height: 280px;
  }

  .cardBody {
    padding: 16px 2px 4px;
  }

  .desc {
    min-height: auto;
  }

  .topBar {
    align-items: flex-start;
    margin-bottom: 20px;
  }

  .clearFilterBtn {
    min-height: 34px;
    font-size: 0.82rem;
  }
}

</style>