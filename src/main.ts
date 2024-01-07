import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import "tailwindcss/tailwind.css";
import "animate.css";
import "virtual:svg-icons-register";

createApp(App).use(router).mount("#app");
