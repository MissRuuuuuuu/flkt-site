<template>
  <b-container class="py-5" v-if="cms">
    <b-row>
      <b-col cols="12" lg="8" class="mx-auto">
        <h1 class="mb-4">{{ t(cms.contact.title) }}</h1>

        <!-- 可选：如果 CMS 里有 contact.text 就显示，没有就不显示 -->
        <p v-if="cms.contact && cms.contact.text" class="text-muted mb-4">
          {{ t(cms.contact.text) }}
        </p>

        <b-card body-class="p-4" class="box-card">
          <div class="box-text" style="white-space: pre-line; line-height: 1.7;">
            {{ t(cms.contact.body) }}
          </div>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { getCMS } from "../cms/cmsClient";

export default {
  name: "Contact",
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
.box-card {
  border: 1px dashed #bbb;
  border-radius: 14px;
}

.box-text {
  color: #666;
}
</style>
