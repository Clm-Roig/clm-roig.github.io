import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createI18n } from "vue-i18n";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faCircleDown, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import en from "./locales/en.json";
import fr from "./locales/fr.json";

import "./assets/styles/main.scss";

const i18n = createI18n({
  locale: "fr",
  messages: {
    fr,
    en,
  },
});

const app = createApp(App).component("font-awesome-icon", FontAwesomeIcon);
library.add(faGithub, faLinkedin, faEnvelope, faCircleDown);
app.use(router);
app.use(i18n);

app.mount("#app");
