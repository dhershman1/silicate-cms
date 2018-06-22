export const state = () => ({
  current: {}
})

export const mutations = {
  setBucket (state, payload) {
    state.current = payload
  }
}

const data = {
  home: [
    {
      id: 1,
      title: 'header content',
      type: 'Text',
      editedBy: 'Dustin',
      lastEdited: '6/5/2018',
      body: 'This is a content bucket for the header section'
    },
    {
      id: 2,
      title: 'header sub-content',
      type: 'Text',
      editedBy: 'Dustin',
      lastEdited: '6/5/2018',
      body: 'This is some sub content for the header'
    },
    {
      id: 3,
      title: 'footer content',
      type: 'Text',
      editedBy: 'Dustin',
      lastEdited: '6/7/2018',
      body: 'This is some content that lives for the footer section'
    }
  ],
  about: [
    {
      id: 1,
      title: 'header content',
      type: 'Text',
      editedBy: 'Dustin',
      lastEdited: '6/6/2018',
      body: 'This is a content bucket for the header section'
    },
    {
      id: 2,
      title: 'header sub-content',
      type: 'Text',
      editedBy: 'Dustin',
      lastEdited: '6/5/2018',
      body: 'This is some sub content for the header'
    },
    {
      id: 3,
      title: 'main',
      type: 'Text',
      editedBy: 'Dustin',
      lastEdited: '6/4/2018',
      body: 'This is a simple headless cms that prides itself on being user friendly, and completely plug and play ready!'
    }
  ]
}

export const actions = {
  fetchBucket ({ commit }, { page, section, id }) {
    return new Promise(resolve => {
      const d = data[page].find(val => Number(val.id) === Number(id))

      commit('setBucket', d)
      resolve(d)
    })
  }
}
