<template>
  <footer class="footer">
    <div class="footer-content">
      <!-- Footer logo -->
      <img src="@/assets/logo.png" alt="Footer Logo" class="footer-logo" />

      <!-- Teams section -->
      <div class="footer-teams">
        <h3 class="footer-heading">Teams</h3>
        <div class="team-links">
          <router-link to="/6th-grade" class="team-link">6th Grade</router-link>
          <router-link to="/7th-grade" class="team-link">7th Grade</router-link>
          <router-link to="/8th-grade" class="team-link">8th Grade</router-link>
          <router-link to="/9th-grade" class="team-link">9th Grade</router-link>
          <router-link to="/10th-grade" class="team-link">10th Grade</router-link>
          <router-link to="/11th-grade" class="team-link">11th Grade</router-link>
        </div>
      </div>

      <!-- Social Media section -->
      <div class="footer-social">
        <h3 class="footer-heading">Social Media</h3>
        <div class="social-links">
          <router-link to="/facebook" class="social-link">Facebook</router-link>
          <router-link to="/twitter" class="social-link">Twitter</router-link>
          <router-link to="/instagram" class="social-link">Instagram</router-link>
        </div>
      </div>

      <!-- Other section -->
      <div class="footer-other">
        <h3 class="footer-heading">Other</h3>
        <div class="other-links">
          <router-link to="/circuit" class="other-link">Circuit</router-link>
          <router-link to="/payment" class="other-link">Payment</router-link>
          <router-link to="/alumni" class="other-link">Alumni</router-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style>
/* Footer styles (updated with background color) */
.footer {
  background-color: var(--color-quaternary); /* Set the background color to black */
  color: #ffffff;
  padding: 40px 0;
}

/* Footer content container (updated with flex-wrap and justify-content) */
.footer-content {
  max-width: 1240px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between; /* Adjust the spacing between sections */
  align-items: flex-start;
  padding: 30px;
}

/* Adjust the width of the logo */
.footer-logo {
  width: 160px;
}

/* Teams, Social Media, and Other sections (same as in the previous examples) */
.footer-teams,
.footer-social,
.footer-other {
  display: flex;
  flex-direction: column;
}

.footer-teams h3,
.footer-social h3,
.footer-other h3 {
  color: var(--color-secondary); /* Set headline color to navy */
  font-size: 18px;
  font-weight: 900; /* Set font weight to 900 (bold) */
  margin-bottom: 10px;
  text-transform: uppercase; /* Convert headline text to uppercase */
  font-family: Montserrat, sans-serif; /* Set font family to Montserrat */
}

.team-links,
.social-links,
.other-links {
  display: flex;
  flex-direction: column;
}

.team-link,
.social-link,
.other-link {
  color: var(--color-primary); /* Set link color to white */
  text-decoration: none;
  font-size: 14px;
  padding: 5px 10px;
  margin-bottom: 5px;
}

.team-link:hover,
.social-link:hover,
.other-link:hover {
  color: var(--color-secondary); /* Set link hover color to navy */
}

/* Style the dividers between the links (same as in the previous examples) */
.divider {
  width: 1px;
  height: 10px;
  background-color: #ffffff;
  margin: 0 5px;
}

/* Media query for mobile devices */
@media screen and (max-width: 767px) {
  .footer-content {
    flex-direction: column; /* Stack sections vertically on mobile */
  }

  .footer-logo {
    margin-bottom: 20px; /* Add some spacing between logo and sections on mobile */
  }

  .footer-teams,
  .footer-social,
  .footer-other {
    margin-bottom: 30px; /* Add some spacing between sections on mobile */
  }

  .team-links,
  .social-links,
  .other-links {
    align-items: flex-start; /* Center the links horizontally on mobile */
  }
}
</style>
