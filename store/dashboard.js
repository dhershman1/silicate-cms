import sort from 'kyanite/sort'

export const state = () => ({
  pageList: [],
  buckets: [],
  sortBy: 'id',
  isDesc: false,
  page: ''
})

export const getters = {
  sortBuckets ({ isDesc, sortBy, buckets }) {
    const ASC = (a, b) => {
      const valA = a[sortBy]
      const valB = b[sortBy]

      if (valA < valB) {
        return -1
      }

      if (valA > valB) {
        return 1
      }

      return 0
    }

    const DESC = (a, b) => {
      const valA = a[sortBy]
      const valB = b[sortBy]

      if (valA > valB) {
        return -1
      }

      if (valA < valB) {
        return 1
      }

      return 0
    }

    if (isDesc) {
      return sort(DESC, buckets)
    }

    return sort(ASC, buckets)
  }
}

export const mutations = {
  setSortBy (state, by) {
    state.sortBy = by
  },

  setDesc (state, bol) {
    state.isDesc = bol
  },

  setPageList (state, list) {
    state.pageList = list
  },

  setBuckets (state, list) {
    state.buckets = list
  },

  setPage (state, payload) {
    state.page = payload
  }
}

export const actions = {
  fetchPages ({ commit }, payload) {
    // Axios call will be made here
    // For now we will just mock the data
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

    commit('setPageList', data)
  }
}
