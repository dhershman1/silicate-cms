import axios from 'axios'

export const state = () => ({
  authUser: null
})

export const mutations = {
  setUser (state, user) {
    state.authUser = user
  }
}

export const actions = {
  nuxtServerInit ({ commit }, { req }) {
    if (req.session && req.session.authUser) {
      commit('setUser', req.session.authUser)
    }
  },

  login ({ commit }, { username, password }) {
    axios.post('/api/login', { username, password })
      .then(({ data }) => {
        commit('setUser', data)
      })
      .catch(err => {
        if (err.response && err.response.status === 401) {
          throw new Error('Bad Credentials')
        }
        throw err
      })
  },

  logout ({ commit }) {
    axios.post('/api/logout')
      .then(() => commit('setUser', null))
  }
}
