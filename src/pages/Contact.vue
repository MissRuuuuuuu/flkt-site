<template>
  <b-container fluid class="contact-page px-0" v-if="cms">
    <section class="contact-hero">
      <b-container>
        <b-row>
          <b-col cols="12" lg="8">
            <div class="hero-copy">

            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>

    <section class="contact-section">
      <b-container>
        <b-row class="align-items-start contact-layout">
          
 <!-- Contact details -->
          <b-col cols="12" lg="4" class="mb-4 mb-lg-0">
            <div class="contact-details">
              <h2 class="hero-title">{{ uiText.detailsTitle }}</h2>
              <p class="details-intro">
                {{ uiText.detailsIntro }}
              </p>

              <div class="detail-card">
                <div class="detail-label">OUR Offices</div>
                <h3 class="detail-company">Floating Knight Biotech Pte. Ltd.</h3>
                <div class="detail-country">Singapore</div>
                <p class="detail-address mb-0">
                  8 Kaki Bukit Avenue 4, #08-32, Premier @ Kaki Bukit, <br>Singapore 415875
                </p>
              </div>

      
                <h3 class="detail-company mt-4" >Floating Knight Biotech Europe B.V.</h3>
                <div class="detail-country">Netherlands</div>
                <p class="detail-address mb-0">
                  Haaksbergweg 75, 1101BR Amsterdam
                </p>
          

              <div class="detail-card detail-card-email">
                <div class="detail-label">{{ uiText.emailLabelSmall }}</div>
                <a class="detail-email" href="mailto:info@floatingknight.com">
                  info@floatingknight.com
                </a>
              </div>
            </div>
          </b-col>
          <!-- Form -->
          <b-col cols="12" lg="8" class="d-flex">
            <div class="form-card w-100">

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
                    &nbsp;&nbsp;I understand and agree to the
                    <router-link class="inline-legal-link" :to="withLang('/terms')">
                      terms
                    </router-link>
                    of use and
                    <router-link class="inline-legal-link" :to="withLang('/privacy')">
                      privacy policy
                    </router-link>.
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
          detailsKicker: "Contact Details",
          detailsTitle: "Get in touch",
          detailsIntro:
            "For product, distribution, or partnership inquiries, please contact us directly or submit the form.",

          headOfficeLabel: "Registered Office",
          euOfficeLabel: "Europe Office",
          emailLabelSmall: "Email",

          formKicker: "Inquiry Form",
          formTitle: "Contact us",
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

          submitText: "Submit",
          submittingText: "Submitting...",
          successMessage:
            "Thank you. Your message has been received successfully.",
          errorMessage:
            "We could not submit your inquiry at this time. Please try again later.",

          requiredName: "Please enter your full name.",
          requiredEmail: "Please enter your work email.",
          invalidEmail: "Please enter a valid email address.",
          requiredMessage: "Please enter your message.",
          requiredConsent: "Please confirm your consent before submitting.",
          businessTypePlaceholder: "Select business type",

        },
        zh: {
          detailsKicker: "联系信息",
          detailsTitle: "与我们联系",
          detailsIntro:
            "如需了解产品、分销合作或其他商务合作，请直接联系或填写右侧表单。",
          headOfficeLabel: "注册办公室",
          euOfficeLabel: "欧洲办公室",
          emailLabelSmall: "邮箱",
          formKicker: "咨询表单",
          formTitle: "联系我们",
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

        },
      };

      return dict[this.currentLang] || dict.en;
    },
    businessTypeOptions() {
      return [
        { value: "", text: this.uiText.businessTypePlaceholder, disabled: true },
    { value: "Brand Owner", text: "Brand Owner" },
    { value: "Distributor / Wholesaler", text: "Distributor / Wholesaler" },
    { value: "Manufacturer", text: "Manufacturer" },
    { value: "Pharmacy / Pharmacy Chain", text: "Pharmacy / Pharmacy Chain" },
    { value: "Dermo-Cosmetic Retailer", text: "Dermo-Cosmetic Retailer" },
    { value: "Aesthetic / Medical Clinic", text: "Aesthetic / Medical Clinic" },
    { value: "Hospital", text: "Hospital" },
    { value: "E-commerce Platform", text: "E-commerce Platform" },
    { value: "Trading Company / Importer", text: "Trading Company / Importer" },
    { value: "Other", text: "Other" },
      ];
    },
    emailState() {
      if (!this.form.email) return null;
      return this.validateEmail(this.form.email);
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
    withLang(path) {
      const lang =
        (this.$route && this.$route.params && this.$route.params.lang) ||
        this.$i18n.locale ||
        "en";
      const p = path.startsWith("/") ? path : `/${path}`;
      if (p === "/") return `/${lang}`;
      return `/${lang}${p}`;
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
          _page: window.location.href,
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
  padding: 40px 0 20px;
}

.hero-copy {
  max-width: 760px;
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
  padding: 8px 0 52px;
}

.contact-layout {
  row-gap: 24px;
}

/* left details */
.contact-details {
  padding-right: 14px;
}

.details-kicker {
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: #8b8b83;
  font-weight: 600;
  margin-bottom: 10px;
}

.details-title {
  font-size: 1.5rem;
  line-height: 1.14;
  letter-spacing: -0.02em;
  color: #1f201b;
  font-weight: 600;
  margin: 0 0 12px;
}

.details-intro {
  color: #6a6c63;
  line-height: 1.6;
  font-size: 0.9rem;
  margin-top: 10px;
  margin-bottom: 20px;
  max-width: 360px;
}

.detail-card {
  background: transparent;
  border-top: 1px solid rgba(70, 70, 55, 0.08);
  padding-top: 16px;
  margin-top: 16px;
}

.detail-label {
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: -0.05em;
  color: #8b8b83;
  font-weight: 600;
  margin-bottom: 8px;
}

.detail-company {
  font-size: 0.9rem;
  line-height: 1.45;
  font-weight: 600;
  color: #22231e;
  margin: 0 0 4px;
}

.detail-country {
  font-size: 0.85rem;
  color: #4f514b;
  font-weight: 500;
  margin-bottom: 8px;
}

.detail-address {
  color: #6a6c63;
  line-height: 1.7;
  font-size: 0.85rem;
   font-weight: 300;
}

.detail-card-email {
  margin-top: 18px;
}

.detail-email {
  color: #1f1f1a;
  text-decoration: none;
  font-size: 0.94rem;
  font-weight: 500;
  line-height: 1.6;
}

.detail-email:hover {
  text-decoration: underline;
}

/* form */
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

.form-group-elegant {
  margin-bottom: 0.95rem;
}

::v-deep .form-group-elegant > label {
  font-size: 0.79rem;
  letter-spacing: 0.03em;
  color: #53554d;
  font-weight: 600;
  margin-bottom: 0.4rem;
}

::v-deep .form-control-elegant::placeholder {
  color: #8a8a8a;
  font-weight: 300;
  font-size: 0.8rem;
  opacity: 1;
}

::v-deep .form-control-elegant,
::v-deep .form-control-elegant.form-control,
::v-deep .form-control-elegant.custom-select {
  min-height: 44px;
  height: 44px;
  border-radius: 12px;
  border: 1.5px solid #b9b9b9;
  background: transparent;
  color: #1f1f1a;
  font-weight: 400;
  box-shadow: none;
  padding-left: 10px;
  padding-right: 10px;
  font-size: 0.8rem;
}

::v-deep .form-control-elegant.custom-select.select-placeholder {
  color: #8a8a8a;
  font-weight: 300;
  font-size: 0.8rem;
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
  border-color: #b9b9b9;
  resize: none;
}

::v-deep .form-control-elegant:focus,
::v-deep .form-control-elegant.form-control:focus,
::v-deep .form-control-elegant.custom-select:focus {
  border-color: #8a8a8a;
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
  border-color: #8a8a8a;
  background-color: transparent;
}

.inline-legal-link {
  color: #1f1f1a;
  text-decoration: underline;
  text-underline-offset: 2px;
}

.inline-legal-link:hover {
  color: #1f1f1a;
  opacity: 0.75;
}

.consent-error {
  margin-top: 4px;
  font-size: 0.78rem;
  color: #b85c5c;
}

.form-footer {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 14px;
  margin-top: 8px;
  flex-wrap: nowrap;
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

  .form-card {
    padding: 24px 24px;
  }

  .section-title,
  .details-title {
    font-size: 1.45rem;
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

  .section-title,
  .details-title {
    font-size: 1.35rem;
  }

  .form-card {
    padding: 22px 18px;
    border-radius: 18px;
  }

  .contact-details {
    padding-right: 0;
  }
}

@media (max-width: 575.98px) {
  .hero-title {
    font-size: 1.65rem;
  }

  .hero-desc,
  .form-intro,
  .details-intro,
  .detail-address {
    font-size: 0.9rem;
  }

  .form-footer {
    flex-wrap: wrap;
    align-items: stretch;
  }

  .submit-btn-elegant {
    width: 100%;
  }
}
</style>