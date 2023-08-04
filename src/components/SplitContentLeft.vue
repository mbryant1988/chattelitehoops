<template>
    <div class="split-content-left">
      <!-- Named slot for the image -->
      <slot name="image"></slot>
    </div>
  </template>
  
  <script>
  export default {};
  </script>
  
  <style>
  .split-content-left {
    /* Set width to 50% to make it occupy half of the container */
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden; /* Add this line to prevent images from overflowing */
  }
  
  /* Remove the .split-image class, as it is not needed in this component */
  </style>
  