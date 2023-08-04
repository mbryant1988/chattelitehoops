<template>
    <div class="split-content-right">
      <div class="split-text">
        <h2>{{ heading }}</h2>
        <p>{{ paragraph }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      heading: String,
      paragraph: String,
    },
  };
  </script>
  
  <style>
  .split-content-right {
    /* Set width to 50% to make it occupy half of the container */
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f8f8f8; /* Set a background color for the text side */
  }
  
  .split-text {
    max-width: 600px; /* Set the maximum width of the text content */
    padding: 20px;
  }
  </style>
  