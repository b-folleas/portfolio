// This javascript file is made to define all functions shared between unlinked components

export default {
    getImgUrl: (name) => {
        return new URL(`/src/assets/${name}.svg`,
            import.meta.url).href;
    },
    getIconImgUrl: (name) => {
        return new URL(`/src/assets/icons/${name}.svg`,
            import.meta.url).href;
    }
}