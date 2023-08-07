<template>
  <div class="features-container">
    <div class="left-section">
      <h2 class="left-title">Left-aligned title explaining these awesome features</h2>
    </div>
    <div class="right-section">
      <div class="feature-item" v-for="(feature, index) in features" :key="index">
        <div class="feature-icon">
          <!-- Replace 'require("@/assets/icon.png")' with the actual path to your icon/image -->
          <img :src="feature.icon" :alt="feature.title" />
        </div>
        <div class="feature-content">
          <h3 class="feature-title">{{ feature.title }}</h3>
          <p class="feature-description">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    features: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style>
/* Customize the styles for the features component here */
.features-container {
  display: flex;
  justify-content: space-between;
}

.left-section {
  flex: 1;
  padding: 20px;
  background-color: #f1f6f9;
}

.left-title {
  font-size: 24px; /* Adjust the title font size as needed */
}

.right-section {
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.feature-item {
  max-width: 300px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 10px;
}

.feature-icon img {
  width: 80px; /* Adjust the icon size as needed */
  height: 80px; /* Adjust the icon size as needed */
}

.feature-title {
  font-size: 24px; /* Adjust the title font size as needed */
  margin: 10px 0;
}

.feature-description {
  font-size: 16px; /* Adjust the description font size as needed */
}
</style>
