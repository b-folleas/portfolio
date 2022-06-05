import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)
dom.watch();

const app = createApp(App)
.use(store)
.component("font-awesome-icon", FontAwesomeIcon)
.mount("#app");
