<template>
  <b-container fluid class="contact-page px-0" v-if="cms">
    <section class="contact-hero">
      <b-container>
        <b-row>
          <b-col cols="12" lg="8">
            <div class="hero-copy">
              <p class="eyebrow mb-2">{{ uiText.eyebrow }}</p>
              <h1 class="hero-title mb-3">{{ t(cms.contact.title) }}</h1>

              <p
                v-if="cms.contact && cms.contact.text"
                class="hero-desc mb-0"
              >
                {{ t(cms.contact.text) }}
              </p>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>

    <section class="contact-section">
      <b-container>
        <b-row class="align-items-stretch">
          <b-col cols="12" lg="5" class="mb-4 mb-lg-0 d-flex">
            <div class="info-card w-100">
              <div class="section-kicker mb-2">{{ uiText.infoKicker }}</div>
              <h2 class="section-title mb-3">{{ uiText.infoTitle }}</h2>

              <div
                v-if="cms.contact && cms.contact.body"
                class="info-body mb-3"
                style="white-space: pre-line;"
              >
                {{ t(cms.contact.body) }}
              </div>

              <div class="info-block">
                <h3>{{ uiText.inquiryTitle }}</h3>
                <p>{{ uiText.inquiryDesc }}</p>
              </div>

              <div class="info-block">
                <h3>{{ uiText.qualityTitle }}</h3>
                <p>{{ uiText.qualityDesc }}</p>
              </div>

              <div class="info-block mb-0">
                <h3>{{ uiText.partnershipTitle }}</h3>
                <p>{{ uiText.partnershipDesc }}</p>
              </div>
            </div>
          </b-col>

          <b-col cols="12" lg="7" class="d-flex">
            <div class="form-card w-100">
              <div class="section-kicker mb-2">{{ uiText.formKicker }}</div>
              <h2 class="section-title mb-2">{{ uiText.formTitle }}</h2>
              <p class="form-intro mb-3">{{ uiText.formIntro }}</p>

              <b-alert
                v-if="submitState === 'success'"
                show
                variant="success"
                class="mb-3 custom-alert"
              >
                {{ uiText.successMessage }}
              </b-alert>

              <b-alert
                v-if="submitState === 'error'"
                show
                variant="danger"
                class="mb-3 custom-alert"
              >
                {{ errorMessage || uiText.errorMessage }}
              </b-alert>

              <b-form @submit.prevent="handleSubmit" novalidate>
                <b-row>
                  <b-col cols="12" md="6">
                    <b-form-group
                      :label="uiText.nameLabel"
                      label-for="contact-name"
                      class="form-group-elegant"
                    >
                      <b-form-input
                        id="contact-name"
                        v-model.trim="form.name"
                        :placeholder="uiText.namePlaceholder"
                        :state="getFieldState('name')"
                        class="form-control-elegant"
                      />
                      <b-form-invalid-feedback v-if="errors.name">
                        {{ errors.name }}
                      </b-form-invalid-feedback>
                    </b-form-group>
                  </b-col>

                  <b-col cols="12" md="6">
                    <b-form-group
                      :label="uiText.emailLabel"
                      label-for="contact-email"
                      class="form-group-elegant"
                    >
                      <b-form-input
  id="contact-email"
  v-model.trim="form.email"
  type="email"
  :placeholder="uiText.emailPlaceholder"
  :state="emailState"
  class="form-control-elegant"
/>
                      <b-form-invalid-feedback v-if="emailState === false">
  {{ uiText.invalidEmail }}
</b-form-invalid-feedback>
                    </b-form-group>
                  </b-col>

                  <b-col cols="12" md="6">
                    <b-form-group
                      :label="uiText.companyLabel"
                      label-for="contact-company"
                      class="form-group-elegant"
                    >
                      <b-form-input
                        id="contact-company"
                        v-model.trim="form.company"
                        :placeholder="uiText.companyPlaceholder"
                        class="form-control-elegant"
                      />
                    </b-form-group>
                  </b-col>

                  <b-col cols="12" md="6">
                    <b-form-group
                      :label="uiText.countryLabel"
                      label-for="contact-country"
                      class="form-group-elegant"
                    >
                      <b-form-input
                        id="contact-country"
                        v-model.trim="form.country"
                        :placeholder="uiText.countryPlaceholder"
                        class="form-control-elegant"
                      />
                    </b-form-group>
                  </b-col>

                  <b-col cols="12" md="6">
                    <b-form-group
                      :label="uiText.businessTypeLabel"
                      label-for="contact-business-type"
                      class="form-group-elegant"
                    >
                      <b-form-select
  id="contact-business-type"
  v-model="form.businessType"
  :options="businessTypeOptions"
  class="form-control-elegant"
  :class="{ 'select-placeholder': !form.businessType }"
/>
                    </b-form-group>
                  </b-col>

                  <b-col cols="12" md="6">
                    <b-form-group
                      :label="uiText.productLabel"
                      label-for="contact-product"
                      class="form-group-elegant"
                    >
                      <b-form-input
                        id="contact-product"
                        v-model.trim="form.product"
                        :placeholder="uiText.productPlaceholder"
                        class="form-control-elegant"
                      />
                    </b-form-group>
                  </b-col>

                  <b-col cols="12">
                    <b-form-group
                      :label="uiText.messageLabel"
                      label-for="contact-message"
                      class="form-group-elegant"
                    >
                      <b-form-textarea
                        id="contact-message"
                        v-model.trim="form.message"
                        :placeholder="uiText.messagePlaceholder"
                        :state="getFieldState('message')"
                        rows="5"
                        max-rows="5"
                        class="form-control-elegant textarea-elegant"
                      />
                      <b-form-invalid-feedback v-if="errors.message">
                        {{ errors.message }}
                      </b-form-invalid-feedback>
                    </b-form-group>
                  </b-col>
                </b-row>

                <div class="consent-wrap">
                  <b-form-checkbox
                    id="privacy-consent"
                    v-model="form.consent"
                    name="privacy-consent"
                    :state="getFieldState('consent')"
                    class="consent-checkbox"
                  >
                    {{ uiText.privacyConsentLabel }}
                  </b-form-checkbox>

                  <div v-if="errors.consent" class="consent-error">
                    {{ errors.consent }}
                  </div>
                </div>

                <div class="hp-field" aria-hidden="true">
                  <label for="website">Website</label>
                  <input
                    id="website"
                    v-model="form.website"
                    type="text"
                    tabindex="-1"
                    autocomplete="off"
                  />
                </div>

                <div class="form-footer">
                  <p class="privacy-note">
                    {{ uiText.privacyNote }}
                  </p>

                  <b-button
                  type="submit"
                  class="submit-btn-elegant"
                  :class="{ 'submit-btn-disabled': !isFormReady || isSubmitting }"
                  :disabled="!isFormReady || isSubmitting"
                  >
                  <b-spinner small v-if="isSubmitting" class="mr-2" />
                   {{ isSubmitting ? uiText.submittingText : uiText.submitText }}
                  </b-button>
                </div>
              </b-form>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </b-container>
</template>

<script>
import { getCMS } from "../cms/cmsClient";

const FORM_ENDPOINT = "https://formspree.io/f/mzdjpnqg";

export default {
  name: "Contact",

  data() {
    return {
      cms: null,
      isSubmitting: false,
      submitState: "",
      errorMessage: "",
      form: {
        name: "",
        email: "",
        company: "",
        country: "",
        businessType: "",
        product: "",
        message: "",
        consent: false,
        website: "",
      },
      errors: {},
    };
  },
  async created() {
    this.cms = await getCMS();
  },
  computed: {
    currentLang() {
      return (this.$i18n && this.$i18n.locale) || "en";
    },
    uiText() {
      const dict = {
        en: {
          eyebrow: "CONTACT",
          infoKicker: "Professional Communication",
          infoTitle: "Let us understand your needs",
          inquiryTitle: "Business Inquiries",
          inquiryDesc:
            "Please share your company background, target market, and product interests so our team can respond more efficiently.",
          qualityTitle: "Product & Quality Topics",
          qualityDesc:
            "You may also include questions related to specifications, documentation, packaging preferences, or collaboration requirements.",
          partnershipTitle: "Long-Term Partnership",
          partnershipDesc:
            "We welcome serious distribution, private label, and strategic cooperation inquiries from qualified partners.",

          formKicker: "Inquiry Form",
          formTitle: "Send a business inquiry",
          formIntro:
            "Complete the form below and our team will review your request as soon as possible.",

          nameLabel: "Name *",
          namePlaceholder: "Your name",
          emailLabel: "Work Email *",
          emailPlaceholder: "name@company.com",
          companyLabel: "Company",
          companyPlaceholder: "Company name",
          countryLabel: "Country / Region",
          countryPlaceholder: "Country or region",
          businessTypeLabel: "Business Type",
          productLabel: "Product Interest",
          productPlaceholder: "Product name, category, or solution",
          messageLabel: "Message *",
          messagePlaceholder:
            "Please briefly describe your inquiry, intended market, quantity expectations, or cooperation needs.",

          privacyConsentLabel:
            "I understand and agree to the terms of use and privacy policy",
          privacyNote:
            "Your information will only be used to respond to your inquiry.",
          submitText: "Submit",
          submittingText: "Submitting...",
          successMessage:
            "Thank you. Your inquiry has been received successfully.",
          errorMessage:
            "We could not submit your inquiry at this time. Please try again later.",

          requiredName: "Please enter your full name.",
          requiredEmail: "Please enter your work email.",
          invalidEmail: "Please enter a valid email address.",
          requiredMessage: "Please enter your message.",
          requiredConsent: "Please confirm your consent before submitting.",

          businessTypePlaceholder: "Select business type",
          businessTypeBrand: "Brand Owner",
          businessTypeDistributor: "Distributor",
          businessTypeRetailer: "Retailer",
          businessTypeManufacturer: "Manufacturer",
          businessTypeClinic: "Clinic / Healthcare Institution",
          businessTypeOther: "Other",
        },
        zh: {
          eyebrow: "联系我们",
          infoKicker: "专业沟通",
          infoTitle: "让我们更了解您的需求",
          inquiryTitle: "商务咨询",
          inquiryDesc:
            "请尽量提供公司背景、目标市场和感兴趣的产品信息，以便我们更高效地回复。",
          qualityTitle: "产品与质量相关问题",
          qualityDesc:
            "您也可以补充规格、资料文件、包装偏好或合作要求等信息，便于我们内部评估。",
          partnershipTitle: "长期合作",
          partnershipDesc:
            "我们欢迎来自合格合作伙伴的分销、贴牌及长期战略合作咨询。",

          formKicker: "咨询表单",
          formTitle: "发送商务咨询",
          formIntro:
            "请填写以下表单，我们会尽快审阅并回复您的需求。",

          nameLabel: "姓名 *",
          namePlaceholder: "请输入您的姓名",
          emailLabel: "工作邮箱 *",
          emailPlaceholder: "name@company.com",
          companyLabel: "公司",
          companyPlaceholder: "请输入公司名称",
          countryLabel: "国家 / 地区",
          countryPlaceholder: "请输入国家或地区",
          businessTypeLabel: "业务类型",
          productLabel: "感兴趣的产品",
          productPlaceholder: "产品名称、类别或解决方案",
          messageLabel: "留言内容 *",
          messagePlaceholder:
            "请简要填写您的咨询内容、目标市场、预计数量或合作需求。",

          privacyConsentLabel:
            "我同意 Floating Knight 就此次咨询与我联系。",
          privacyNote:
            "您的信息仅用于回复本次咨询。",
          submitText: "提交",
          submittingText: "提交中...",
          successMessage:
            "感谢您的留言，我们已成功收到您的咨询信息。",
          errorMessage:
            "当前无法提交您的咨询，请稍后再试。",

          requiredName: "请输入您的姓名。",
          requiredEmail: "请输入您的工作邮箱。",
          invalidEmail: "请输入有效的邮箱地址。",
          requiredMessage: "请输入留言内容。",
          requiredConsent: "提交前请先勾选同意条款。",

          businessTypePlaceholder: "请选择业务类型",
          businessTypeBrand: "品牌方",
          businessTypeDistributor: "经销商",
          businessTypeRetailer: "零售商",
          businessTypeManufacturer: "生产商",
          businessTypeClinic: "诊所 / 医疗机构",
          businessTypeOther: "其他",
        },
      };

      return dict[this.currentLang] || dict.en;
    },
  businessTypeOptions() {
  return [
    { value: "", text: this.uiText.businessTypePlaceholder, disabled: true },
    { value: "Brand Owner", text: this.uiText.businessTypeBrand },
    { value: "Distributor", text: this.uiText.businessTypeDistributor },
    { value: "Retailer", text: this.uiText.businessTypeRetailer },
    { value: "Manufacturer", text: this.uiText.businessTypeManufacturer },
    { value: "Clinic / Healthcare Institution", text: this.uiText.businessTypeClinic },
    { value: "Other", text: this.uiText.businessTypeOther },
  ];
},
    emailState() {
  if (!this.form.email) return null; // 没填，不提示
  return this.validateEmail(this.form.email); // true 或 false
},
    isFormReady() {
  return (
    !!this.form.name &&
    !!this.form.email &&
    this.validateEmail(this.form.email) &&
    !!this.form.message &&
    !!this.form.consent
  );
},
  },
  methods: {
    t(obj) {
      const lang = this.$i18n.locale;
      return (obj && (obj[lang] || obj.en)) || "";
    },
    getFieldState(field) {
      if (!this.errors[field]) return null;
      return false;
    },
    validateEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    },
    validateForm() {
      const errors = {};

      if (!this.form.name) {
        errors.name = this.uiText.requiredName;
      }

      if (!this.form.email) {
        errors.email = this.uiText.requiredEmail;
      } else if (!this.validateEmail(this.form.email)) {
        errors.email = this.uiText.invalidEmail;
      }

      if (!this.form.message) {
        errors.message = this.uiText.requiredMessage;
      }

      if (!this.form.consent) {
        errors.consent = this.uiText.requiredConsent;
      }

      this.errors = errors;
      return Object.keys(errors).length === 0;
    },
    resetForm() {
      this.form = {
        name: "",
        email: "",
        company: "",
        country: "",
        businessType: "",
        product: "",
        message: "",
        consent: false,
        website: "",
      };
      this.errors = {};
    },
    async handleSubmit() {
      this.submitState = "";
      this.errorMessage = "";

      if (!this.validateForm()) return;

      if (this.form.website) {
        this.submitState = "success";
        this.resetForm();
        return;
      }

      this.isSubmitting = true;

      try {
        const payload = {
          name: this.form.name,
          email: this.form.email,
          company: this.form.company,
          country: this.form.country,
          businessType: this.form.businessType,
          product: this.form.product,
          message: this.form.message,
          consent: this.form.consent ? "Yes" : "No",
          _subject: "New inquiry from Floating Knight website",
          _source: "Floating Knight website",
          _page: window.location.href
        };

        const response = await fetch(FORM_ENDPOINT, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(payload),
        });

        if (!response.ok) {
          throw new Error(this.uiText.errorMessage);
        }

        this.submitState = "success";
        this.resetForm();
      } catch (error) {
        this.submitState = "error";
        this.errorMessage = error.message || this.uiText.errorMessage;
      } finally {
        this.isSubmitting = false;
      }
    },
  },
};
</script>

<style scoped>
.contact-page {
  background: transparent;
  color: #1f1f1a;
}

.contact-hero {
  padding: 40px 0 18px;
}

.hero-copy {
  max-width: 760px;
}

.eyebrow {
  font-size: 0.74rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #7b7a72;
  font-weight: 600;
}

.hero-title {
  font-size: 2.2rem;
  line-height: 1.08;
  letter-spacing: -0.02em;
  font-weight: 600;
  color: #1e1f1a;
  margin: 0;
}

.hero-desc {
  font-size: 0.96rem;
  line-height: 1.5;
  color: #66685f;
  max-width: 660px;
}

.contact-section {
  padding: 10px 0 48px;
}

.info-card,
.form-card {
  background: transparent;
  border: 1px solid rgba(70, 70, 55, 0.08);
  border-radius: 22px;
  padding: 26px 28px;
  box-shadow: 0 14px 36px rgba(40, 42, 33, 0.04);
  height: 100%;
}

.section-kicker {
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: #8b8b83;
  font-weight: 600;
}

.section-title {
  font-size: 1.55rem;
  line-height: 1.16;
  letter-spacing: -0.02em;
  color: #1f201b;
  font-weight: 600;
  margin: 0;
}

.form-intro {
  color: #92938e;
  line-height: 1.5;
  font-size: 0.92rem;
  max-width: 640px;
}

.info-body {
  color: #65675f;
  font-size: 0.92rem;
  line-height: 1.6;
}

.info-block {
  padding-top: 14px;
  margin-top: 14px;
  border-top: 1px solid rgba(70, 70, 55, 0.08);
}

.info-block h3 {
  font-size: 0.95rem;
  font-weight: 600;
  color: #22231e;
  margin-bottom: 6px;
}

.info-block p {
  margin-bottom: 0;
  color: #6a6c63;
  line-height: 1.55;
  font-size: 0.9rem;
}

.form-group-elegant {
  margin-bottom: 0.95rem;
}


::v-deep .form-control-elegant::placeholder {
  color: #b9b9b9;
  font-weight: 300;
  font-size: 0.8rem;
  opacity: 1;
}

::v-deep .form-group-elegant > label {
  font-size: 0.79rem;
  letter-spacing: 0.03em;
  color: #53554d;
  font-weight: 600;
  margin-bottom: 0.4rem;
}

::v-deep .form-control-elegant,
::v-deep .form-control-elegant.form-control,
::v-deep .form-control-elegant.custom-select {
  min-height: 44px;
  height: 44px;
  border-radius: 12px;
  border: 1.5px solid #d8d7d0;
  background: transparent;
  color: #1f1f1a; 
  font-weight: 400; 
  box-shadow: none;
  padding-left: 10px;
  padding-right: 10px;
  font-size: 0.8rem;
}
::v-deep .form-control-elegant.custom-select.select-placeholder {
  color: #b9b9b9;
  font-weight: 300;
  font-size: 0.85rem;
}

::v-deep select option {
  color: #1f1f1a;
  font-weight: 400;
}

::v-deep .textarea-elegant,
::v-deep textarea.textarea-elegant.form-control {
  min-height: 104px;
  height: 104px;
  padding-top: 10px;
  padding-bottom: 10px;
  resize: none;
}

::v-deep .form-control-elegant:focus,
::v-deep .form-control-elegant.form-control:focus,
::v-deep .form-control-elegant.custom-select:focus {
  border-color: #a8a79f;
  background: transparent;
  box-shadow: 0 0 0 0.15rem rgba(94, 96, 86, 0.08);
}

::v-deep .is-invalid.form-control,
::v-deep .is-invalid.custom-select,
::v-deep .is-invalid textarea.form-control {
  border-color: #c97e7e;
  background-image: none;
}

.custom-alert {
  border-radius: 12px;
  font-size: 0.86rem;
  padding: 8px 12px;
}

.consent-wrap {
  margin-top: 0.25rem;
  margin-bottom: 0.9rem;
}

::v-deep .consent-checkbox .custom-control-label {
  color: #575950;
  font-size: 0.84rem;
  line-height: 1.45;
}

::v-deep .consent-checkbox .custom-control-label::before {
  border-radius: 4px;
  border-color: #bdbcb4;
  background-color: transparent;
}

.consent-error {
  margin-top: 4px;
  font-size: 0.78rem;
  color: #b85c5c;
}

.form-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 14px;
  margin-top: 8px;
  flex-wrap: nowrap;
}

.privacy-note {
  color: #787a71;
  font-size: 0.8rem;
  line-height: 1.45;
  max-width: 360px;
  font-weight: 300;
  margin: 0;
}

.submit-btn-elegant {
  min-width: 140px;
  min-height: 44px;
  border-radius: 999px;
  padding: 0 20px;
  font-weight: 600;
  letter-spacing: 0.02em;
  font-size: 0.9rem;
  background: #20211c;
  border-color: #20211c;
  color: #fff;
  transition: background 0.2s ease, border-color 0.2s ease, opacity 0.2s ease;
}

.submit-btn-elegant:hover,
.submit-btn-elegant:focus {
  background: #12130f;
  border-color: #12130f;
  color: #fff;
}

.submit-btn-disabled,
.submit-btn-elegant:disabled {
  background: #b8b8b3 !important;
  border-color: #b8b8b3 !important;
  color: rgba(255, 255, 255, 0.92) !important;
  cursor: not-allowed;
  box-shadow: none;
  opacity: 1;
}

.submit-btn-disabled:hover,
.submit-btn-disabled:focus,
.submit-btn-elegant:disabled:hover,
.submit-btn-elegant:disabled:focus {
  background: #b8b8b3 !important;
  border-color: #b8b8b3 !important;
  color: rgba(255, 255, 255, 0.92) !important;
}

.hp-field {
  position: absolute;
  left: -9999px;
  opacity: 0;
  pointer-events: none;
}

@media (min-width: 992px) {
  .contact-hero {
    padding: 34px 0 14px;
  }

  .contact-section {
    padding: 8px 0 32px;
  }

  .hero-title {
    font-size: 2.05rem;
  }

  .hero-desc {
    font-size: 0.93rem;
    line-height: 1.45;
  }

  .info-card,
  .form-card {
    padding: 24px 24px;
  }

  .section-title {
    font-size: 1.45rem;
  }

  .info-body {
    font-size: 0.9rem;
    line-height: 1.5;
  }

  .info-block {
    padding-top: 12px;
    margin-top: 12px;
  }

  .info-block p {
    font-size: 0.88rem;
    line-height: 1.45;
  }

  ::v-deep .form-control-elegant,
  ::v-deep .form-control-elegant.form-control,
  ::v-deep .form-control-elegant.custom-select {
    min-height: 42px;
    height: 42px;
  }

  ::v-deep .textarea-elegant,
  ::v-deep textarea.textarea-elegant.form-control {
    min-height: 96px;
    height: 96px;
  }

  .form-group-elegant {
    margin-bottom: 0.85rem;
  }
}

@media (max-width: 991.98px) {
  .contact-hero {
    padding: 36px 0 18px;
  }

  .contact-section {
    padding: 8px 0 36px;
  }

  .hero-title {
    font-size: 1.85rem;
  }

  .section-title {
    font-size: 1.35rem;
  }

  .info-card,
  .form-card {
    padding: 22px 18px;
    border-radius: 18px;
  }
}

@media (max-width: 575.98px) {
  .hero-title {
    font-size: 1.65rem;
  }

  .hero-desc,
  .form-intro,
  .info-body,
  .info-block p {
    font-size: 0.9rem;
  }

  .form-footer {
    flex-wrap: wrap;
    align-items: stretch;
  }

  .privacy-note {
    max-width: none;
    width: 100%;
  }

  .submit-btn-elegant {
    width: 100%;
  }
}
</style>