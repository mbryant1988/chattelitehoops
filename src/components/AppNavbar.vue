<template>
  <nav :class="{ 'navbar-scrolled': isScrolled }">
    <div class="nav-container">
      <div class="nav-logo">
        <router-link to="/">
          <img src="@assets/logo.png" alt="Logo" class="logo-image">
        </router-link>
      </div>
      <div class="nav-content">
        <div class="nav-top">
          <router-link to="/" class="nav-link">What's Your Why?</router-link>
        </div>
        <div class="nav-divider"></div>
        <div class="nav-bottom">
          <router-link to="/teams" class="nav-link">Teams</router-link>
          <router-link to="/coaches" class="nav-link">Coaches</router-link>
          <router-link to="/about" class="nav-link">About</router-link>
          <router-link to="/events" class="nav-link">Events</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<!-- The rest of the script and style sections remain the same -->


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
  justify-content: space-between;
  align-items: center; /* Vertically center items */
}

.nav-logo {
  /* Remove flex: 1; to allow the logo to take its natural width */
}

.logo-image {
  height: 100px; /* Set the height of the logo as needed */
  /* Add any other styles for the logo here */
}

.nav-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.nav-top,
.nav-bottom {
  /* Remove flex: 2; to allow these sections to take their natural width */
  /* flex: 2; */
}

.nav-divider {
  /* Remove height: 100%; and set a fixed height for the divider */
  height: 1px; /* Adjust the height as needed */
  width: 100%;
  background-color: rgba(255, 255, 255, 0.3);
  margin: 5px 15px; /* Add some space above and below the divider */


}

.nav-link {
  font-size: 13px;
  font-weight: 700;
  color: white;
  text-decoration: none;
  transition: color 0.3s ease;
  font-family: 'Montserrat', sans-serif;
  padding: 0 15px;
  line-height: 50px;
  text-transform: uppercase; 
}

.nav-link:hover {
  color: navy;
}

.nav-top .nav-link {
  font-size: 26px; /* Adjust the font size as needed */
}
</style>
