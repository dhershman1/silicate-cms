<template>
  <div class="card shrink center" v-if="!isEmpty(page)">
    <div class="card__header">
      <h1>Editing the {{currentTitle}} Page</h1>
    </div>
    <div class="card__body">
      <form class="control">
        <label for="pageTitle">Page Title</label>
        <input
          id="pageTitle"
          type="text"
          name="pageTitle"
          :value="currentTitle">
      </form>
      <h4>Page Sections</h4>
      <table>
        <tr>
          <th>Name</th>
          <th># of Buckets</th>
          <th>Edit</th>
          <th>Remove</th>
        </tr>
        <tr class="content" v-for="(p, name) in page" :key="name">
          <td>{{ name }}</td>
          <td>{{ p.length }}</td>
          <td><button class="btn--fill btn--sm"><i class="icon-pencil"></i></button></td>
          <td><button class="btn--fill btn--sm"><i class="icon-bin"></i></button></td>
        </tr>
      </table>
      <button class="btn--fill btn--md"><i class="icon-floppy-disk"></i> Save</button>
      <button class="mx btn--fill btn--md"><i class="icon-plus"></i> Add Section</button>
      <button class="btn--fill btn--md"><i class="icon-cancel-circle"></i> Cancel</button>
    </div>
  </div>
  <div v-else>
    <p>Attempting to fetch page...</p>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex'
import isEmpty from 'kyanite/isEmpty'

export default {
  data () {
    return {
      currentTitle: this.$route.params.page
    }
  },
  computed: {
    ...mapState('dashboard', ['page', 'pageList'])
  },
  methods: {
    isEmpty,
    ...mapActions('dashboard', ['fetchPages']),
    ...mapMutations('dashboard', ['setPage'])
  },
  watch: {
    pageList () {
      this.setPage(this.pageList[this.$route.params.page])
    }
  },
  beforeMount () {
    if (isEmpty(this.pageList)) {
      this.fetchPages()
    }
  }
}
</script>

<style scoped>
.mx {
  margin-left: 0.4rem;
  margin-right: 0.4rem;
}
.card__header h1 {
  padding-left: 1.25rem;
}
.shrink {
  width: 50%;
}
.center {
  text-align: center;
  margin-left: auto;
  margin-right: auto;
}
</style>

