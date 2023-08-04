<template>
  <div id="app" class="background-container">
    <Navbar />
    <HomePage />
  </div>
</template>

<script>
import Navbar from './components/AppNavbar.vue';
import HomePage from './components/HomePage.vue';

export default {
  components: {
    Navbar,
    HomePage,
  },
};
</script>

<style>

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

/* Add your Navbar and HomePage component styles here */
</style>
