<template>
    <div class="stats-section" ref="statsSection">
      <h2 class="stats-header">Stats</h2>
      <div class="stats-container">
        <div class="stat">
          <div class="stat-value" ref="totalPlayersStat">
            {{ animatedTotalPlayers }}
          </div>
          <div class="stat-label">Total Players</div>
        </div>
        <div class="stat">
          <div class="stat-value" ref="championshipsStat">
            {{ animatedChampionships }}
          </div>
          <div class="stat-label">Championships</div>
        </div>
        <div class="stat">
          <div class="stat-value" ref="coachesStat">
            {{ animatedCoaches }}
          </div>
          <div class="stat-label">Coaches</div>
        </div>
        <div class="stat">
          <div class="stat-value" ref="awardsStat">
            {{ animatedAwards }}
          </div>
          <div class="stat-label">Awards</div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      totalPlayers: Number,
      championships: Number,
      coaches: Number,
      awards: Number,
    },
    data() {
      return {
        animatedTotalPlayers: 0,
        animatedChampionships: 0,
        animatedCoaches: 0,
        animatedAwards: 0,
        animationDuration: 2000,
        inView: false,
      };
    },
    mounted() {
      this.observeIntersection();
    },
    beforeUnmount() {
      this.unobserveIntersection();
    },
    methods: {
      animateCount(dataProp, endValue) {
        const startTime = Date.now();
        const startValue = this[dataProp];
  
        const updateValue = () => {
          const currentTime = Date.now();
          const elapsedTime = currentTime - startTime;
  
          if (elapsedTime < this.animationDuration) {
            this[dataProp] = Math.round(
              this.easeInOut(elapsedTime, startValue, endValue - startValue, this.animationDuration)
            );
            this.animationFrameId = requestAnimationFrame(updateValue);
          } else {
            this[dataProp] = endValue;
          }
        };
  
        updateValue();
      },
      observeIntersection() {
        this.intersectionObserver = new IntersectionObserver(
          (entries) => {
            const entry = entries[0];
            if (entry.isIntersecting) {
              this.inView = true;
              this.animateStats();
            } else {
              this.inView = false;
            }
          },
          { threshold: 0.5 }
        );
  
        this.intersectionObserver.observe(this.$refs.statsSection);
      },
      unobserveIntersection() {
        this.intersectionObserver.disconnect();
      },
      animateStats() {
        if (this.inView) {
          this.animateCount("animatedTotalPlayers", this.totalPlayers);
          this.animateCount("animatedChampionships", this.championships);
          this.animateCount("animatedCoaches", this.coaches);
          this.animateCount("animatedAwards", this.awards);
        }
      },
      easeInOut(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
      },
    },
  };
  </script>
  
   
  
  <style>
  /* Common styles for both desktop and mobile */
  .stats-section {
    background-color: #14274e;
    color: white;
    padding: 120px 0; /* Adjust padding for both desktop and mobile */
  }
  
  .stats-header {
    text-align: center;
    font-size: 72px;
    margin-bottom: 30px;
    margin-top: 0;
  }
  
  .stats-container {
    max-width: 1240px;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
  }
  
  .stat {
    text-align: center;
  }
  
  /* Desktop Styles */
  @media (min-width: 768px) {
    .stats-header {
      font-size: 72px; /* Adjust font size for desktop header */
    }
  
    .stat-value {
      font-size: 56px; /* Adjust font size for desktop stats */
      margin-bottom: 10px;
      font-weight: 700;
    }
  
    .stat-label {
      font-size: 36px; /* Adjust font size for desktop labels */
    }
  }
  
  /* Mobile Styles */
  @media (max-width: 767px) {
    .stats-section {
      padding: 60px 0; /* Adjust padding for mobile */
    }
  
    .stats-header {
      font-size: 36px; /* Adjust font size for mobile header */
    }
  
    .stats-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 20px;
    }
  
    .stat {
      flex-basis: calc(50% - 20px);
      margin-bottom: 20px;
    }
  
    .stat-value {
      font-size: 32px; /* Adjust font size for mobile stats */
      margin-bottom: 5px;
    }
  
    .stat-label {
      font-size: 24px; /* Adjust font size for mobile labels */
    }
  }
  </style>
  
  