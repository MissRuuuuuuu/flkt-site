<template>
  <div v-if="cms" class="wrap">
    <!-- 1) Floating Knight -->
    <section class="section">
      <h1 class="title">{{ t(cms.floatingKnight.title) }}</h1>
      <pre class="content">{{ t(cms.floatingKnight.body) }}</pre>
    </section>

    <hr class="divider" />

    <!-- 2) Silver Bullet / Brand -->
    <section class="section">
      <h1 class="title">{{ t(cms.about.title) }}</h1>
      <p class="paragraph">{{ t(cms.about.body) }}</p>
    </section>
  </div>
</template>

<script>
import { getCMS } from "../cms/cmsClient";

export default {
  name: "About",
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
  },
};
</script>

<style scoped>
.wrap {
  max-width: 980px;
  margin: 0 auto;
  padding: 28px 16px 60px;
}

.section {
  margin: 0;
}

.title {
  font-weight: 900;
  letter-spacing: 0.5px;
  margin: 0 0 12px;
}

.content {
  white-space: pre-wrap;
  background: #fafafa;
  border: 1px solid #eee;
  border-radius: 16px;
  padding: 14px;
  line-height: 1.6;
  margin: 0;
}

.paragraph {
  white-space: pre-line;
  line-height: 1.7;
  margin: 0;
  color: #222;
}

.divider {
  border: none;
  border-top: 1px solid #eee;
  margin: 22px 0;
}
</style>
