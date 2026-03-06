<template>
  <div class="home-placeholder">
    <div class="placeholder-inner">
      <p class="placeholder-kicker">SILVER BULLET<sup>®</sup></p>
      <h1 class="placeholder-title">Under Construction</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  mounted() {
    document.title = "Home | silver bullet®";
  },
};
</script>

<style scoped>
.home-placeholder {
  min-height: calc(100vh - 140px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 20px 80px;
  background: transparent;
}

.placeholder-inner {
  text-align: center;
  max-width: 760px;
}

.placeholder-kicker {
  margin: 0 0 14px;
  font-size: 0.82rem;
  line-height: 1.2;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #6f7068;
  font-weight: 600;
}

.placeholder-title {
  margin: 0;
  font-size: 3.2rem;
  line-height: 1.02;
  letter-spacing: -0.05em;
  color: #1f1f1a;
  font-weight: 600;
}

@media (max-width: 991.98px) {
  .home-placeholder {
    min-height: calc(100vh - 120px);
    padding: 32px 18px 72px;
  }

  .placeholder-title {
    font-size: 2.5rem;
  }
}

@media (max-width: 575.98px) {
  .placeholder-title {
    font-size: 2rem;
  }

  .placeholder-kicker {
    font-size: 0.76rem;
    letter-spacing: 0.14em;
  }
}
</style>