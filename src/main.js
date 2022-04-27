import { createApp } from 'vue'
import App from './App.vue'
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)
dom.watch();

createApp(App)
.component("font-awesome-icon", FontAwesomeIcon)
.mount("#app");
