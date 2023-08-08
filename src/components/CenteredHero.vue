<template>
    <div class="centered-hero-container">
      <div  class="centered-hero-content" :class="{ visible: isVisible}">
        <!-- Centered content -->
        <h1 class="hero-title">Welcome to My Website</h1>
        <p class="hero-description">
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias est soluta eum repudiandae nisi amet labore praesentium asperiores nam, alias unde? Modi, laboriosam voluptas? Commodi, ut autem nostrum sunt nisi rem explicabo eum beatae. Perspiciatis dolorem, nesciunt quidem asperiores velit culpa inventore omnis veniam, vel aliquid explicabo sequi fugit tenetur necessitatibus tempore fuga iusto corrupti odio blanditiis quae perferendis voluptate aspernatur enim delectus. Voluptas, minima velit? Blanditiis saepe modi tenetur quasi minus perspiciatis iusto ex autem id est? Molestiae cumque magni tenetur temporibus sequi exercitationem quasi ducimus, voluptates culpa molestias reiciendis aliquam assumenda possimus iste nisi saepe, dolorem obcaecati minus illo incidunt consequatur sapiente laudantium est. Cupiditate libero praesentium doloribus laborum, modi expedita beatae qui enim quaerat, explicabo sed nostrum.
        </p>
        <div class="hero-buttons">
          <button class="hero-button primary">Learn More</button>
          <button class="hero-button secondary">Contact Us</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from "vue";
  
  export default {
    props: {
      // No image-related props since we're removing the image
    },
    setup() {
      const isVisible = ref(false);
  
      onMounted(() => {
        const options = {
          threshold: 0.5, // Change this value as needed for the desired trigger point
        };
  
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              isVisible.value = true;
              observer.disconnect();
            }
          });
        }, options);
  
        observer.observe(document.querySelector(".centered-hero-content"));
      });
  
      return {
        isVisible,
      };
    },
  };
  </script>
  
  
  <style>
/* Add any custom styles for the centered-hero section here */
.centered-hero-container {
  display: flex;
  flex-direction: column;
  justify-content: center; /* Vertically center content */
  align-items: center;
  padding: 120px 15px; /* Increase vertical padding for more space */
}

.centered-hero-content {
  text-align: center;
  max-width: 1240px; /* Limit the width of the content to 1240px */
  width: 100%;
  opacity: 0;
  transform: translateY(50px); /* Initial position */ /* Make the content responsive within the max-width */
   /* Apply transitions for smooth animation */
   transition: opacity 0.5s ease, transform 0.5s ease;
}

.visible {
  opacity: 1;
  transform: translateY(0); /* Move to the final position */
}

.hero-title {
  font-size: 48px; /* Increase the title font size */
  margin-bottom: 30px;
}

.hero-description {
  font-size: 24px; /* Increase the description font size */
}

.hero-buttons {
  margin-top: 40px;
}

.hero-button {
  padding: 15px 30px;
  font-size: 18px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-right: 10px;
  font-weight: bold;
}

/* Primary button styles */
.primary {
  background-color: #14274e;
  color: #ffffff;
  border: none; /* Remove the border */
}

/* Secondary button styles */
.secondary {
  background-color: #394867;
  color: #ffffff;
  border: none; /* Remove the border */
}

/* Button hover effect */
.hero-button:hover {
  background-color: #9ba4b4;
  color: #ffffff;
}
</style>