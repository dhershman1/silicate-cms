<template>
  <section>
    <div>
      <h1>Dashboard</h1>
      <h4 class="subtitle">You can edit existing content buckets or create new ones here</h4>
    </div>
    <div class="divider"></div>
    <h4 class="title--page">Choose a Page</h4>
    <ul class="tabs" v-if="!replaceTabs">
      <li class="tabs__item" v-for="(p, pageName) in pageList" :key="pageName">
        <a
          :class="['tabs__link', { 'tabs__link--active': isActive(pageName) }]"
          @click="selectPage(p, pageName)"
          :href="`#${pageName}`">
          {{ pageName | capitalize}}
        </a>
      </li>
      <li class="tabs__item" title="Add a new page">
        <a href="#new" class="tabs__link" @click="addPage"><i class="icon-plus"></i></a>
      </li>
    </ul>
    <select class="control" v-else>
      <option value="" disabled selected>Select a Page</option>
      <option
        v-for="(p, pageName) in pageList"
        :key="pageName"
        @click="selectPage(p, pageName)"
        :value="pageName">
        {{ pageName | capitalize }}
      </option>
    </select>
    <div class="mt" v-if="page">
      <button @click="$router.push(`edit/${page}`)" class="btn--fill btn--md">
        Edit {{ page | capitalize }} Page <i class="icon-pencil"></i>
      </button>
      <h4 class="title--section">Choose a Bucket</h4>
      <p>
        Click the edit button to edit a content bucket, or
        <button class="btn--fill btn--sm"><i class="icon-plus"></i> Create New Bucket</button>
      </p>
      <bucket-table v-if="buckets.length" />
      <h3 v-else>You haven't created and content buckets yet, click the add button above to get started!</h3>
    </div>
  </section>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex'
import BucketTable from '~/components/bucket-table'
import capitalize from 'kyanite/capitalize'
import height from 'kyanite/height'
import isEmpty from 'kyanite/isEmpty'
import sift from 'kyanite/sift'

export default {
  transition: 'fade',
  components: {
    BucketTable
  },
  // middleware: 'auth',
  filters: {
    capitalize
  },
  methods: {
    isEmpty,
    isActive (name) {
      return this.page === name
    },
    editor (pageName) {
      this.$route.push(`edit/${pageName}`)
    },
    addPage () {
      // This will probably be removed, just go to a page to create a new one
      console.log('Click!')
    },
    selectPage (p, name) {
      this.setPage(name)
      this.setBuckets(p)
    },
    ...mapActions('dashboard', ['fetchPages']),
    ...mapMutations('dashboard', [
      'setPage',
      'setBuckets'
    ])
  },
  computed: {
    replaceTabs () {
      return height(this.pageList) > 10
    },
    ...mapState('dashboard', [
      'pageList',
      'buckets',
      'page'
    ])
  },
  beforeMount () {
    const hash = this.$route.hash.replace('#', '')

    if (isEmpty(this.pageList)) {
      this.fetchPages()
    }

    // Make sure we use the hash to remember the stuff we forgot on refresh
    if (hash && !isEmpty(this.pageList)) {
      this.setPage(hash)
      this.setBuckets(sift([hash], this.pageList)[hash])
    }
  }
}
</script>


<style scoped>
.mt {
  margin-top: 0.35rem;
}
.subtitle {
  margin-top: 0;
  margin-bottom: 0;
  padding-bottom: 0.5rem;
}
.title--page {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}
.title--section {
  font-size: 1.5rem;
  margin-bottom: 0rem;
}
.btn {
  font-weight: 700;
}
</style>

