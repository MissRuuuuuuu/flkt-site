<template>
  <b-container class="py-5" v-if="cms">
    <b-row>
      <b-col cols="12" lg="8" class="mx-auto">
        <h1 class="mb-4">{{ t(cms.legal.title) }}</h1>

        <!-- Global -->
        <b-card no-body class="mb-2">
          <b-card-header class="p-1">
            <b-button block variant="link" class="text-left p-3" v-b-toggle.legal-global>
              {{ t({ zh: "通用声明", en: "Global" }) }}
            </b-button>
          </b-card-header>
          <b-collapse id="legal-global" visible>
            <b-card-body>
              <ul class="mb-0">
                <li v-for="(x, i) in list(cms.legal.global)" :key="'g' + i">{{ x }}</li>
              </ul>
            </b-card-body>
          </b-collapse>
        </b-card>

        <!-- EU -->
        <b-card no-body class="mb-2">
          <b-card-header class="p-1">
            <b-button block variant="link" class="text-left p-3" v-b-toggle.legal-eu>
              {{ t({ zh: "欧洲（EU/UK）", en: "Europe (EU/UK)" }) }}
            </b-button>
          </b-card-header>
          <b-collapse id="legal-eu" >
            <b-card-body>
              <ul class="mb-0">
                <li v-for="(x, i) in list(cms.legal.eu)" :key="'e' + i">{{ x }}</li>
              </ul>
            </b-card-body>
          </b-collapse>
        </b-card>

        <!-- CN -->
        <b-card no-body class="mb-2">
          <b-card-header class="p-1">
            <b-button block variant="link" class="text-left p-3" v-b-toggle.legal-cn>
              {{ t({ zh: "中国", en: "China" }) }}
            </b-button>
          </b-card-header>
          <b-collapse id="legal-cn" >
            <b-card-body>
              <ul class="mb-0">
                <li v-for="(x, i) in list(cms.legal.cn)" :key="'c' + i">{{ x }}</li>
              </ul>
            </b-card-body>
          </b-collapse>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { getCMS } from "../cms/cmsClient";

export default {
  name: "Legal",
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

<style scoped>
button.btn-link {
  color: #111;
  text-decoration: none;
  font-weight: 600;
}
button.btn-link:hover {
  text-decoration: none;
  opacity: 0.85;
}
</style>
