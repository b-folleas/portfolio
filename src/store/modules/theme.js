export default {
  namespaced: true,
  state: {
    userTheme: "light-theme"
  },
  getters: {
    isDarkTheme: (state) => state.userTheme === "dark-theme"
  },
  mutations: {
    setUserTheme(state, payload) {
      state.userTheme = payload
    }
  },
  actions: {
    setUserTheme(context, theme) {
      localStorage.setItem("user-theme", theme);
      context.commit('setUserTheme', theme)
    },
    getLocalStorageTheme() {
      return localStorage.getItem("user-theme");
    }
  }
}