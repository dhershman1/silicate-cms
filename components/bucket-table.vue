<template>
  <table>
    <tr>
      <th class="sortable" @click="handleSortSetup('id')">
        <i :class="idIcon"></i> ID
      </th>
      <th class="sortable" @click="handleSortSetup('title')">
        <i :class="titleIcon"></i> Title
      </th>
      <th class="sortable" @click="handleSortSetup('type')">
        <i :class="typeIcon"></i> Type
      </th>
      <th class="sortable" @click="handleSortSetup('lastEdited')">
        <i :class="lastEditedIcon"></i> Last Edited
      </th>
      <th class="sortable" @click="handleSortSetup('editedBy')">
        <i :class="editedByIcon"></i> Edited By
      </th>
      <th>Edit</th>
      <th>Delete</th>
    </tr>
    <tr class="content" v-for="(d, i) in sortBuckets" :key="i">
      <td>{{ d.id }}</td>
      <td>{{ d.title }}</td>
      <td>{{ d.type }}</td>
      <td>{{ d.lastEdited }}</td>
      <td>{{ d.editedBy }}</td>
      <td>
        <button @click="$router.push(`/edit/${page}/${d.id}`)" class="btn--fill btn--sm">
          <i class="icon-pencil"></i>
        </button>
      </td>
      <td>
        <button class="btn--fill btn--sm">
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

