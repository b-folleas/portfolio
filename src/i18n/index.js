import { createI18n } from 'vue-i18n'
/*
 * The i18n resources in the path specified in the plugin `include` option can be read
 * as vue-i18n optimized locale messages using the import syntax
 */
import en from './locales/en.json'
import fr from './locales/fr.json'
import ja from './locales/ja.json'

const i18n = createI18n({
    legacy: true,
    globalInjection: true,
    locale: 'en',
    messages: {
        en,
        fr,
        ja
    }
})

export default i18n