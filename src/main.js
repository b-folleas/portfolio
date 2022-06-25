import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import i18n from './i18n'
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons'
import functions from './plugins/functions.js'

library.add(fas)
dom.watch();

createApp(App)
    .use(store)
    .use(i18n)
    .component("font-awesome-icon", FontAwesomeIcon)
    .provide('$func', functions) // Providing to all components during app creation
    .mount("#app");