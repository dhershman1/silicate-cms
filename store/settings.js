export const state = () => ({
  title: 'Silicate CMS',
  showVers: true,
  logo: '/imgs/logo.png'
})

export const mutations = {
  setTitle (state, val) {
    state.title = val
  },
  setShowVers (state, bool) {
    state.showVers = bool
  },
  setLogo (state, payload) {
    state.logo = payload
  }
}
