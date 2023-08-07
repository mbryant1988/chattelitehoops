<template>
    <div class="home-page">
      <h1 class="coming-soon-text">Coming Soon</h1>
    </div>
    <Hero />
  </template>

<script>
import Hero from "@/components/HeroImage.vue";

export default {
  components: {
    Hero,
  },
};
</script>
  
  <style>
  /* Customize your home page styles here */
  .home-page {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  
  .coming-soon-text {
    font-size: 72px; /* Adjust the font size as needed */
    color: var(--color-primary);
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  </style>
  