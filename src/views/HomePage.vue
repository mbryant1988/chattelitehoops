<template>
    <div class="home-page background-container" >
      <h1 class="coming-soon-text">Coming Soon</h1>
    </div>
    <CenteredHero
      :imageSrc="require('@/assets/DSC_2755.jpg')"  
      altText="Centered Hero Image"
    />
    <Hero />
    <Features :features="featureList" />
  </template>

<script>
import CenteredHero from "@/components/CenteredHero.vue";
import Hero from "@/components/HeroImage.vue";
import Features from "@/components/FeaturesList.vue";

export default {
  components: {
    Hero,
    CenteredHero,
    Features
  },
  data() {
    return {
      featureList: [
        {
          icon: require("@/assets/vuelogo.png"), // Replace with the actual path to your icon/image
          title: "Feature 1",
          description: "Description for Feature 1",
        },
        {
          icon: require("@/assets/vuelogo.png"), // Replace with the actual path to your icon/image
          title: "Feature 2",
          description: "Description for Feature 2",
        },
        {
          icon: require("@/assets/vuelogo.png"), // Replace with the actual path to your icon/image
          title: "Feature 2",
          description: "Description for Feature 2",
        },
        {
          icon: require("@/assets/vuelogo.png"), // Replace with the actual path to your icon/image
          title: "Feature 2",
          description: "Description for Feature 2",
        },
        // Add more features here as needed
      ],
    };
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

  .background-container {
  position: relative;
  height: 100vh;
  background-image: url("@/assets/DSC01494.jpg");
  background-size: cover;
  background-position: center;
}
  </style>
  