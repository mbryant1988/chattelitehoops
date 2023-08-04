<template>
  <nav :class="{ 'navbar-scrolled': isScrolled, 'navbar': true }">
    <!-- Desktop Navbar -->
    <div class="nav-container desktop-navbar">
      <div class="nav-logo">
        <router-link to="/">
          <img src="@/assets/logo.png" alt="Logo" class="logo-image">
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

    <!-- Mobile Navbar -->
    <div class="nav-container mobile-navbar" v-if="isMobile">
      <div class="nav-hamburger" @click="toggleMenu">
        <div class="hamburger-icon" :class="{ 'active': isMenuOpen }"></div>
      </div>

      <!-- Mobile Slide-in Menu -->
      <div class="nav-content-mobile" :class="{ 'active': isMenuOpen }">
        <router-link to="/">
          <img src="@/assets/logo.png" alt="Logo" class="logo-image-mobile">
        </router-link>
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

<script>
export default {
  data() {
    return {
      isScrolled: false,
      isMenuOpen: false,
      isMobile: window.innerWidth <= 767,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.handleResize);
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 50;
    },
    handleResize() {
      this.isMobile = window.innerWidth <= 767;
      // Close the slide-in menu when the screen size changes
      this.isMenuOpen = false;
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>

<style>
/* Customize your navbar styles here */
.navbar {
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

.nav-hamburger {
  display: flex; /* Show the hamburger menu icon on mobile */
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 1000;
}

.hamburger-icon {
  width: 30px;
  height: 2px;
  background-color: white;
  position: relative;
  transition: transform 0.3s ease;
}

.hamburger-icon:before,
.hamburger-icon:after {
  content: '';
  width: 30px;
  height: 2px;
  background-color: white;
  position: absolute;
  left: 0;
  transition: transform 0.3s ease;
}

.hamburger-icon:before {
  top: -8px;
}

.hamburger-icon:after {
  top: 8px;
}

.hamburger-icon.active {
  transform: rotate(45deg);
}

.hamburger-icon.active:before {
  transform: translateY(8px) rotate(-45deg);
}

.hamburger-icon.active:after {
  opacity: 0;
}

.nav-logo {
  /* Remove flex: 1; to allow the logo to take its natural width */
}

.logo-image {
  height: 100px; /* Set the height of the logo as needed */
  /* Add any other styles for the logo here */
}

.logo-image-mobile {
  height: 40px; /* Set the height of the logo in mobile menu */
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
  height: 1px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.3);
  margin: 5px 15px;
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
  font-size: 26px;
}

/* Media query for responsive design */
@media screen and (max-width: 767px) {
  .desktop-navbar {
    display: none; /* Hide the desktop navbar on mobile */
  }

  .nav-content-mobile {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 80%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 999;
    transition: transform 0.3s ease;
    transform: translateX(-100%); /* Move the slide-in menu off-screen */
  }

  .nav-content-mobile.active {
    transform: translateX(0); /* Slide in the menu from the left */
  }
}
</style>
