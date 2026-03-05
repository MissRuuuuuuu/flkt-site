import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

const messages = {
  en: {
    nav: {
      home: "Home",
      brand: "Brand",
      floating: "Company",
      science: "Science",
      products:"Product",
      contact: "Contact",
      legal: "Legal",
    },
    ui: {
      language: "Language",
      zh: "中文",
      en: "English",
      readMore: "Read more",
      viewEU: "View EU",
      viewCN: "View CN",
      viewProduct: "View product",
    },
    footer: {
      note:
        "This site is for brand and product information. Availability and claims may differ by market. Always follow label instructions.",
    },
  },
  zh: {
    nav: {
      home: "首页",
      brand: "品牌",
      floating: "公司",
      science: "科学与理念",
      eu: "欧洲",
      cn: "中国",
      contact: "联系我们",
      legal: "合规与声明",
    },
    ui: {
      language: "语言",
      zh: "中文",
      en: "English",
      readMore: "了解更多",
      viewEU: "查看欧洲",
      viewCN: "查看中国",
      viewProduct: "查看产品",
    },
    footer: {
      note:
        "本网站用于品牌与产品信息展示；不同市场的可售情况与表述可能不同，请以产品标签与当地法规要求为准。",
    },
  },
};

const saved = localStorage.getItem("sb_locale");
const i18n = new VueI18n({
  locale: saved || "en",
  fallbackLocale: "en",
  messages,
});

export function setLocale(next) {
  i18n.locale = next;
  localStorage.setItem("sb_locale", next);
}

export default i18n;
