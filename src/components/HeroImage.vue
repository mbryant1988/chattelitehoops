<template>
    <div class="hero-container">
      <div class="content">
        <!-- Left-aligned content -->
        <h1>Welcome to My Website</h1>
        <p>
          This is a sample hero section with a left-aligned image.
          Customize it as per your requirements.
        </p>
      </div>
      <div class="image">
        <!-- Right-aligned image -->
        <img class="img" src="@/assets/hero-image2.jpg" alt="Hero Image" />
      </div>
    </div>
  </template>
  
  <script>
  export default {
    // Add any necessary component logic here
  };
  </script>
  
  <style>
  /* Add any custom styles for the hero section here */
  .hero-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 60px 15px;
  }
  
  .content {
    flex: 1;
    max-width: 50%;
  }
  
  h1 {
    margin-bottom: 20px;
  }
  
  p {
    margin-bottom: 40px;
  }
  
  .image {
    flex: 1;
    max-width: 50%;
  }
  
  .img {
    max-width: 100%;
  height: auto;
  border-radius:10px 0px 0px 10px; /* Add rounded edges to the image */
  }
  </style>
  