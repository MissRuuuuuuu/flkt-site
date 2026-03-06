<template>
  <div v-if="cms" class="wrap">
    <h1 class="title">{{ t({ zh: "产品", en: "Products" }) }}</h1>

    <div class="grid">
      <div class="card" v-for="p in filteredProducts" :key="p.slug">
        <div
          class="imgWrap"
          @click="go(p.slug)"
          role="button"
          tabindex="0"
          @keyup.enter="go(p.slug)"
        >
          <img :src="p.images?.[0]" :alt="t(p.name)" />
        </div>

        <div class="cardBody">
          <h3 class="name">{{ t(p.name) }}</h3>

          <p class="desc">
            {{ t(p.short) }}
          </p>

          <router-link
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

.card:hover {
  border-color: rgba(70, 70, 55, 0.08);

  box-shadow:
    0 14px 36px rgba(40, 42, 33, 0.04);

  transform: translateY(-2px);
}

/* image */

.imgWrap {
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

.card:hover .imgWrap img {
  transform: scale(1.02);
}

/* body */

.cardBody {
  padding: 18px 6px 8px;

  background: transparent;
}

.name {
  margin: 0;

  font-size: 1.08rem;

  line-height: 1.35;

  font-weight: 600;

  color: #22231e;

  letter-spacing: -0.01em;
}

.desc {
  margin: 10px 0 0;

  color: #6a6c63;

  line-height: 1.58;

  font-size: 0.92rem;

  min-height: 58px;
}

/* button */

.btn {
  display: inline-flex;

  align-items: center;
  justify-content: center;

  margin-top: 14px;

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

  transition:
    background 0.2s ease,
    color 0.2s ease,
    border-color 0.2s ease;
}

.btn:hover {
  background: #20211c;

  border-color: #20211c;

  color: #fff;

  text-decoration: none;
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
}
</style>