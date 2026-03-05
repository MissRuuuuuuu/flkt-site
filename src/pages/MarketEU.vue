<template>
  <b-container class="py-5" v-if="cms">
    <b-row>
      <b-col cols="12" lg="8" class="mx-auto">
        <!-- Title -->
        <h1 class="mb-3">{{ t(cms.eu.overview.title) }}</h1>

        <!-- Body -->
        <p class="mb-4" style="white-space: pre-line; line-height: 1.7;">
          {{ t(cms.eu.overview.body) }}
        </p>

        <!-- Bullets -->
        <b-list-group class="mb-4">
          <b-list-group-item v-for="(x, i) in list(cms.eu.overview.bullets)" :key="i">
            {{ x }}
          </b-list-group-item>
        </b-list-group>

        <!-- Products -->
        <h2 class="mb-3">{{ t({ zh: "产品", en: "Products" }) }}</h2>

        <b-row>
          <b-col
            v-for="p in cms.eu.products"
            :key="p.slug"
            cols="12"
            md="6"
            class="mb-3"
          >
            <b-card body-class="p-4" class="h-100">
              <h3 class="h5 mb-2">{{ t(p.name) }}</h3>
              <p class="text-muted mb-3">
                {{ t(p.short) }}
              </p>

              <b-button
                variant="dark"
                :to="withLang(`/eu/products/${p.slug}`)"
                router
              >
                {{ t({ zh: "查看产品", en: "View product" }) }}
              </b-button>
            </b-card>
          </b-col>
        </b-row>

        <!-- Disclaimer -->
        <b-card class="mt-4" bg-variant="light" border-variant="light" body-class="p-4">
          <h3 class="h6 mb-3">{{ t({ zh: "EU/UK 合规提示", en: "EU/UK Disclaimer" }) }}</h3>

          <ul class="mb-3">
            <li v-for="(x, i) in list(cms.legal.eu)" :key="i">{{ x }}</li>
          </ul>

          <b-link :to="withLang('/legal')" router>
            {{ t({ zh: "查看完整声明", en: "View full disclaimers" }) }}
          </b-link>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { getCMS } from "../cms/cmsClient";

export default {
  name: "MarketEU",
  data() {
    return { cms: null };
  },
  async created() {
    this.cms = await getCMS();
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
};
</script>
