<template>
  <div v-if="cms" class="wrap">
    <h1 class="title">{{ t({ zh: "产品", en: "Products" }) }}</h1>

    <div class="grid">
      <!-- v-for="p in filteredProducts" -->
      <div class="card" v-for="p in cms.eu.products" :key="p.slug">
        <div class="imgWrap" @click="go(p.slug)" role="button" tabindex="0" @keyup.enter="go(p.slug)">
          <img :src="p.images?.[0]" :alt="t(p.name)" />
        </div>

        <div class="cardBody">
          <h3 class="name">{{ t(p.name) }}</h3>
          <p class="desc">{{ t(p.short) }}</p>

          <router-link class="btn" :to="withLang(`/eu/products/${p.slug}`)">
            {{ t({ zh: "查看详情", en: "View detail" }) }}
          </router-link>
        </div>
      </div>
    </div>

    <!-- <router-link class="back" :to="withLang('/')">
      ← {{ t({ zh: "返回首页", en: "Back to Home" }) }}
    </router-link> -->
  </div>
</template>

<script>
import { getCMS } from "../cms/cmsClient";

export default {
  name: "Products",
  
  data() {
    return { cms: null };
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
      const lang = this.$route?.params?.lang || this.$i18n.locale || "en";
      const clean = path.startsWith("/") ? path : `/${path}`;
      return `/${lang}${clean}`;
    },
    go(slug) {
      this.$router.push(this.withLang(`/eu/products/${slug}`));
    },
  },
  computed: {
  activeLine() {
    return this.$route.query.line || "all";
  },
  filteredProducts() {
    const all = this.cms?.eu?.products || [];
    if (this.activeLine === "all") return all;
    return all.filter(p => p.line === this.activeLine); // 你按自己的字段名改
  },
}

};
</script>

<style scoped>
.wrap { max-width: 1100px; margin: 0 auto; padding: 24px 16px; }
.title { font-weight: 900; margin-bottom: 16px; }
.grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 14px; }

.card { border: 1px solid #eee; border-radius: 16px; overflow: hidden; background: #fff; }
.imgWrap { height: 300px;              /* ✅ 竖图建议 320~420，你可以按视觉调 */
  background: #f6f6f6;
  cursor: pointer;
  display: flex;              /* ✅ 关键：居中 */
  align-items: center;
  justify-content: center;
  padding: 14px;              /* ✅ 给 contain 留边距更好看 */
  box-sizing: border-box; }
.imgWrap img { height: 100%;
  width: auto;                /* ✅ 防止撑宽变扁 */
  max-width: 100%;
  object-fit: contain;        /* ✅ 不裁切 */
  display: block; }
.cardBody { padding: 14px; }

.name { margin: 0; font-size: 18px; font-weight: 800; }
.desc { margin-top: 8px; color: #444; line-height: 1.6; min-height: 56px; }
.btn { display: inline-block; margin-top: 12px; padding: 10px 14px; border: 1px solid #111; border-radius: 12px; text-decoration: none; color: #111; }
.back { display: inline-block; margin-top: 18px; color: #111; text-decoration: none; }
@media (max-width: 520px){
  .imgWrap{ height: 300px; }
}
</style>
