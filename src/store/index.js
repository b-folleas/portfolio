import { createStore } from 'vuex'

import theme from './modules/theme'

const store = createStore({
    modules: {
        theme
    }
})

export default store