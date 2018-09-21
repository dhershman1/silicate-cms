<template>
  <table class="table">
    <tr class="table__row">
      <th class="sortable table__head" @click="handleSortSetup('id')">
        <i :class="idIcon"></i> ID
      </th>
      <th class="sortable table__head" @click="handleSortSetup('title')">
        <i :class="titleIcon"></i> Title
      </th>
      <th class="sortable table__head" @click="handleSortSetup('type')">
        <i :class="typeIcon"></i> Type
      </th>
      <th class="sortable table__head" @click="handleSortSetup('lastEdited')">
        <i :class="lastEditedIcon"></i> Last Edited
      </th>
      <th class="sortable table__head" @click="handleSortSetup('editedBy')">
        <i :class="editedByIcon"></i> Edited By
      </th>
      <th class="table__head">Edit</th>
      <th class="table__head">Delete</th>
    </tr>
    <tr class="table__row" v-for="(d, i) in sortBuckets" :key="i">
      <td class="table__data">{{ d.id }}</td>
      <td class="table__data">{{ d.title }}</td>
      <td class="table__data">{{ d.type }}</td>
      <td class="table__data">{{ d.lastEdited }}</td>
      <td class="table__data">{{ d.editedBy }}</td>
      <td class="table__data">
        <button
        @click="$router.push(`/edit/${page}/${d.id}`)"
        class="btn--fill btn--sm table__button">
          <i class="icon-pencil"></i>
        </button>
      </td>
      <td>
        <button class="btn--fill btn--sm table__button">
          <i class="icon-bin"></i>
        </button>
      </td>
    </tr>
  </table>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'
import assign from 'kyanite/assign'

export default {
  data () {
    return {
      iconStates: {
        id: false,
        title: false,
        type: false,
        lastEdited: false,
        editedBy: false
      }
    }
  },
  computed: {
    idIcon () {
      return this.iconStates.id ? 'icon-circle-down' : 'icon-circle-up'
    },
    titleIcon () {
      return this.iconStates.title ? 'icon-circle-down' : 'icon-circle-up'
    },
    typeIcon () {
      return this.iconStates.type ? 'icon-circle-down' : 'icon-circle-up'
    },
    lastEditedIcon () {
      return this.iconStates.lastEdited ? 'icon-circle-down' : 'icon-circle-up'
    },
    editedByIcon () {
      return this.iconStates.editedBy ? 'icon-circle-down' : 'icon-circle-up'
    },
    ...mapState('dashboard', ['buckets', 'page', 'isDesc', 'sortBy']),
    ...mapGetters('dashboard', ['sortBuckets'])
  },
  methods: {
    ...mapMutations('dashboard', ['setSortBy', 'setDesc']),
    handleSortSetup (by) {
      // This is probably way more complicated than it needs to be?
      // TODO: Sweep back to this for some cleanup to much going on, to many branches
      if (this.sortBy !== by) {
        this.iconStates = assign({}, this.iconStates, {
          id: false,
          title: false,
          type: false,
          lastEdited: false,
          editedBy: false
        })
        this.setDesc(true)
        this.setSortBy(by)
        this.iconStates[by] = true
      } else if (this.isDesc) {
        this.setDesc(false)
        this.iconStates[by] = false
      } else {
        this.setDesc(true)
        this.iconStates[by] = true
      }
    }
  }
}
</script>

<style scoped>
.sortable {
  cursor: pointer;
}
</style>

