import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import i18n from './i18n'
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons'
import '@mdi/font/css/materialdesignicons.css' // For Vuetify components
import functions from './plugins/functions.js'
import Particles from "vue3-particles";
import FlagIcon from 'vue-flag-icon'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

library.add(fas)
dom.watch();

const vuetify = createVuetify({
  components,
  directives,
})

createApp(App)
  .use(store)
  .use(i18n)
  .use(vuetify)
  .use(Particles)
  .use(FlagIcon)
  .component("font-awesome-icon", FontAwesomeIcon)
  .provide('$func', functions) // Providing to all components during app creation
  .mount("#app");
