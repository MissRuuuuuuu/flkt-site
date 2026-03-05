<template>
  <b-container class="py-5" v-if="cms">
    <b-row>
      <b-col cols="12" lg="8" class="mx-auto">
        <h1 class="mb-4">{{ t(cms.floatingKnight.title) }}</h1>

        <b-card body-class="p-4" class="content-card">
          <div class="content-text">
            {{ t(cms.floatingKnight.body) }}
          </div>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { getCMS } from "../cms/cmsClient";

export default {
  name: "FloatingKnight",
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
  },
};
</script>

<style scoped>
/* 保留“长文本阅读”体验：换行、段落感、轻背景 */
.content-card {
  background: #fafafa;
  border: 1px solid #eee;
  border-radius: 16px;
}

.content-text {
  white-space: pre-wrap;
  line-height: 1.7;
  color: #222;
}
</style>
