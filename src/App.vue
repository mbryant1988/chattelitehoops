<template>
  <div id="app" class="background-container">
    <Navbar />
    <HomePage />

    <Footer />
  </div>
</template>

<script>
import Navbar from './components/AppNavbar.vue';
import HomePage from './components/HomePage.vue';
import Footer from './components/AppFooter.vue';

export default {
  components: {
    Navbar,
    HomePage,
    Footer
  },
};
</script>

<style>
@import "@/assets/colors.css";
body {
  margin: 0;
}

.background-container {
  position: relative;
  height: 100vh;
  background-image: url("@/assets/bg-image.jpg");
  background-size: contain;
  background-position: center;
}
/* Media query for mobile */
@media screen and (max-width: 767px) {
  .background-container {
    background-size: cover; /* Set background-size to cover on mobile */
  }
}

</style>
