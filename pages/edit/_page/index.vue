<template>
  <div class="card shrink center" v-if="!isEmpty(page)">
    <div class="card__header">
      <h1>Editing the {{currentTitle}} Page</h1>
    </div>
    <div class="card__body">
      <form class="control">
        <label class="control__label" for="pageTitle">Page Title</label>
        <input
          class="control__input"
          id="pageTitle"
          type="text"
          name="pageTitle"
          :value="currentTitle">
      </form>
      <button class="mr btn--fill btn--md"><i class="icon-floppy-disk"></i> Save</button>
      <button class="btn--fill btn--md" @click="$router.back()"><i class="icon-cancel-circle"></i> Cancel</button>
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
  transition: 'fade',
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
.mr {
  margin-right: 0.4rem;
}
.control {
  margin-bottom: 0.4rem;
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

