<template>
    <div class="hero-container">
      <div class="hero-content">
        <!-- Left-aligned content -->
        <h1>Welcome to My Website</h1>
        <p>
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus ipsam ratione laboriosam voluptatibus ea et, illum autem eligendi eos tempora! Obcaecati perspiciatis expedita officiis voluptatum quae quia accusamus assumenda deleniti. Illum, possimus laudantium! Numquam eos voluptatem rem ratione nisi doloremque, quibusdam voluptas nostrum animi iusto nobis quod praesentium assumenda voluptatibus, debitis quaerat? Eveniet ipsam labore doloremque maxime perspiciatis molestiae facilis. Ullam veniam ut reiciendis repellendus ex eum quasi, exercitationem velit deleniti eius commodi dicta, cupiditate voluptatibus pariatur dignissimos hic laborum.
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
 
  }
  
  .hero-content {
    flex: 1;
    max-width: 50%;
    padding: 60px 40px;
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
  