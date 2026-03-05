<template>
  <b-container class="py-5" v-if="cms && cms.cn">
    <b-row>
      <b-col cols="12" lg="8" class="mx-auto">
        <h1 class="mb-4">{{ t(cms.cn.title) }}</h1>

        <b-card class="mb-4" body-class="p-4">
          <p class="mb-0" style="white-space: pre-line; line-height: 1.7;">
            {{ t(cms.cn.intro) }}
          </p>
        </b-card>

        <b-card class="mb-4" body-class="p-4">
          <h5 class="mb-3">{{ t({ zh: "规划", en: "Plan" }) }}</h5>
          <b-list-group flush>
            <b-list-group-item v-for="(item, i) in list(cms.cn.plan)" :key="i">
              {{ item }}
            </b-list-group-item>
          </b-list-group>
        </b-card>

        <div class="d-flex flex-wrap" style="gap: 10px;">
          <b-button variant="dark" :to="withLang('/contact')" router>
            {{ t({ zh: "联系", en: "Contact" }) }}
          </b-button>

          <b-button variant="outline-secondary" :to="withLang('/legal')" router>
            {{ t({ zh: "合规与声明", en: "Legal" }) }}
          </b-button>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { getCMS } from "../cms/cmsClient";

export default {
  name: "MarketCN",
  data() {
    return { cms: null };
  },
  async created() {
    this.cms = await getCMS();
  },
  methods: {
    t(obj) {
      const lang = this.$i18n?.locale || "en";
      return (obj && (obj[lang] || obj.en)) || "";
    },
    list(obj) {
      const lang = this.$i18n?.locale || "en";
      return (obj && (obj[lang] || obj.en)) || [];
    },
  },
};
</script>
