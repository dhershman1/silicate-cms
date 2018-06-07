export const state = () => ({
  title: 'Silicate CMS',
  showVers: true,
  logo: '/imgs/logo.png'
})

export const mutations = {
  setSetting (state, { id, value }) {
    state[id] = value
  }
}
