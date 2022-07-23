// This javascript file is made to define all functions shared between unlinked components
import i18n from '../i18n'
import moment from "moment";
import "moment/dist/locale/fr";
import "moment/dist/locale/ja";

export default {
    getImgUrl: (name, ext = 'svg') => {
        return new URL(`/src/assets/${name}.${ext}`,
            import.meta.url).href;
    },
    getIconImgUrl: (name) => {
        return new URL(`/src/assets/icons/${name}.svg`,
            import.meta.url).href;
    },
    formatDate: (date, noDayformat) => {
        moment.locale(i18n.global.locale);
        if (noDayformat) {
            const result = moment(date).format("MMM YYYY")
                // Have to add 年 kanji manually as no format for month and year only in japanese
            return i18n.global.locale === 'ja' ? result + '年' : result
        } else {
            return i18n.global.locale === "en" ? moment(date).format("MMM Do YY") : moment(date).format("ll")
        }
    }
}