export const state = () => ({
  authed: false
})

export const mutations = {
  toggleAuth (state) {
    state.authed = !state.authed
  }
}
