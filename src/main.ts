import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import "./assets/styles/main.scss";

const app = createApp(App).component("font-awesome-icon", FontAwesomeIcon);
library.add(faGithub, faLinkedin);
app.use(router);

app.mount("#app");
