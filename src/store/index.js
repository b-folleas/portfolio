import { createStore } from 'vuex'

import theme from './modules/theme'
// import language from './modules/language'

const store = createStore({
    modules: {
        theme,
        // language
    }
})

export default store