// import { createApp } from 'vue'
import { createStore } from 'vuex'
// import App from '../App.vue'

import theme from './modules/theme'
// import language from './modules/language'

const store = createStore({
    modules: {
        theme,
        // language
    }
})

export default store

// const app = createApp(App)

// Install the store instance as a plugin
// app.use(store)
