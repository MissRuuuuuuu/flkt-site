<template>
  <b-container class="py-5" v-if="cms && product">
    <b-row>
      <b-col cols="12" lg="8" class="mx-auto">
        <!-- note -->
        <b-alert show variant="secondary" class="note mb-4">
          {{ t(product.disclaimerNote) }}
        </b-alert>

        <!-- title -->
        <h1 class="mb-2">{{ t(product.name) }}</h1>
        <p class="text-muted mb-4">{{ t(product.short) }}</p>

        <!-- description -->
        <b-card body-class="p-4" class="mb-4">
         <div class="topRow">
  <!-- LEFT: product image -->
  <div class="imgBox" v-if="productImg">
    <img class="prodImg" :src="productImg" :alt="t(product.name)" />
  </div>

  <!-- RIGHT: description (原红框内容) -->
  <div class="descBox">
    <p class="descText">
      {{ t(product.description) }}
    </p>
  </div>
</div>
        </b-card>

        <!-- sections -->
        <div v-for="sec in product.sections" :key="sec.key" class="mb-3">
          <b-card body-class="p-4">
            <h2 class="h5 mb-3">{{ t(sec.title) }}</h2>
            <b-list-group flush>
              <b-list-group-item v-for="(x, i) in list(sec.bullets)" :key="i">
                {{ x }}
              </b-list-group-item>
            </b-list-group>
          </b-card>
        </div>

        <!-- back -->
        <div class="mt-4">
          <b-button
            variant="dark"
            :to="withLang('/products')"
            router
          >
            {{ t({ zh: "返回产品列表页", en: "Back to Product List" }) }}
          </b-button>
        </div>

        <!-- legal -->
        <!-- <b-card class="mt-4" bg-variant="light" border-variant="light" body-class="p-4">
          <h3 class="h6 mb-3">{{ t({ zh: "EU/UK 合规提示", en: "EU/UK Disclaimer" }) }}</h3>
          <ul class="mb-3">
            <li v-for="(x, i) in list(cms.legal.eu)" :key="i">{{ x }}</li>
          </ul>
          <b-link :to="withLang('/legal')" router>
            {{ t({ zh: "查看完整声明", en: "View full disclaimers" }) }}
          </b-link>
        </b-card> -->
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { getCMS } from "../cms/cmsClient";

export default {
  name: "ProductSoothingGel",
  data() {
    return { cms: null, product: null };
  },
  async created() {
    this.cms = await getCMS();
    const slug = (this.$route && this.$route.params && this.$route.params.slug) || "soothing-gel";
    this.product = (this.cms.eu.products || []).find((x) => x.slug === slug) || null;
  },
  methods: {
    t(obj) {
      const lang = this.$i18n.locale;
      return (obj && (obj[lang] || obj.en)) || "";
    },
    list(obj) {
      const lang = this.$i18n.locale;
      return (obj && (obj[lang] || obj.en)) || [];
    },
  },
  computed: {
  productImg() {
    return this.product?.images?.[0] || null;
  },
},
};
</script>

<style scoped>
.note {
  font-size: 13px;
}
.topRow {
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  gap: 18px;
  margin-top: 14px;
}

/* 左侧图片：固定框，竖图用 contain */
.imgBox {
  flex: 0 0 260px;          /* 固定宽度，你想更宽就加 */
  height: 240px;            /* 固定高度，按你页面视觉调 */
  border: 1px solid #eee;
  border-radius: 14px;
  background: #fafafa;

  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;
  padding: 10px;
  box-sizing: border-box;
}

.prodImg {
  height: 100%;
  width: auto;              /* ✅ 关键：不被拉扁 */
  max-width: 100%;
  object-fit: contain;
  display: block;
}

/* 右侧描述：占满剩余宽度 */
.descBox {
  flex: 1 1 auto;
  min-width: 0;
  border: 1px solid #eee;   /* 如果你想要红框那种卡片感 */
  border-radius: 14px;
  padding: 16px;
  background: #fff;
}

.descText {
  white-space: pre-line;
  line-height: 1.7;
  margin: 0;
  color: #222;
}

/* 小屏：改成上下 */
@media (max-width: 900px) {
  .topRow {
    flex-direction: column;
  }
  .imgBox {
    width: 100%;
    flex-basis: auto;
    height: 320px; /* 小屏可更高一点 */
  }
}
</style>
