<template>
  <b-container class="py-5" v-if="cms">
    <b-row>
      <b-col cols="12" lg="8" class="mx-auto">
        <!-- Title -->
        <h1 class="mb-2">{{ t(cms.science.title) }}</h1>

        <!-- Headline -->
        <h2 class="h4 text-muted mb-4">
          {{ t(cms.science.headline) }}
        </h2>

        <!-- Body -->
        <b-card body-class="p-4" class="mb-4">
          <p
            class="mb-0"
            style="white-space: pre-line; line-height: 1.7;"
          >
            {{ t(cms.science.body) }}
          </p>
        </b-card>

        <!-- Bullets -->
        <b-card body-class="p-4">
          <b-list-group flush>
            <b-list-group-item
              v-for="(x, i) in list(cms.science.bullets)"
              :key="i"
            >
              {{ x }}
            </b-list-group-item>
          </b-list-group>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { getCMS } from "../cms/cmsClient";

export default {
  name: "Science",
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
