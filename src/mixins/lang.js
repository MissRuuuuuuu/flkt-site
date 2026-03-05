export default {
  methods: {
    withLang(path) {
      const lang = (this.$route && this.$route.params && this.$route.params.lang) || this.$i18n.locale || "en";
      const p = path.startsWith("/") ? path : `/${path}`;
      if (p === "/") return `/${lang}`;
      return `/${lang}${p}`;
    },
    // switchLang(next) {
    //   const rest = this.$route.fullPath.replace(/^\/(en|zh)/, "");
    //   setLocale(next);
    //   this.$router.push(`/${next}${rest || ""}`);
    // },
  },
};
