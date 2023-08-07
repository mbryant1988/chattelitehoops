import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./views/HomePage.vue";
import AboutPage from "./views/AboutPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: HomePage },
    { path: "/about", component: AboutPage },

    // Add more routes as needed for other pages
  ],
});

createApp(App).use(router).mount("#app");
