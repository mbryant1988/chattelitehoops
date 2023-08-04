<template>
  <nav :class="{ 'navbar-scrolled': isScrolled }">
    <div class="nav-container">
      <router-link class="nav-link" to="/">HOME</router-link>
      <router-link class="nav-link" to="/about">ABOUT</router-link>
      <router-link class="nav-link" to="/teams">TEAMS</router-link>
      <router-link class="nav-link" to="/contact">CONTACT-US</router-link>


      <!-- Add more links as needed -->
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isScrolled: false,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 50;
    },
  },
};
</script>

<style>
/* Customize your navbar styles here */
nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 20px;
  transition: background-color 0.3s ease;
  z-index: 1000;
}

.navbar-scrolled {
  background-color: rgba(0, 0, 0, 0.8);
}

.nav-container {
  max-width: 1240px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
}

.nav-top {
  display: flex;
  justify-content: flex-start; /* Align content to the start (left) */
  align-items: center;
  padding-bottom: 10px; /* Add some space at the bottom of the top section */
}

.nav-divider {
  height: 1px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.3);
  margin: 10px 0; /* Add some space above and below the divider */
}

.logo {
  max-height: 50px; /* Adjust logo height as needed */
  /* Add any other styles for the logo here */
}

.nav-link {
  font-size: 13px;
  font-weight: 700;
  line-height: 50px;
  color: white;
  text-decoration: none;
  transition: color 0.3s ease;
  font-family: 'Montserrat', sans-serif;
  padding-right: 50px;
}

.nav-link:last-child {
  padding-right: 0;
}

.nav-link:hover {
  color: red;
}
</style>
