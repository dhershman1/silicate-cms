<template>
  <section>
    <div>
      <h1>Dashboard</h1>
      <h4 class="subtitle">You can edit existing content buckets or create new ones here</h4>
    </div>
    <div class="divider"></div>
    <h4 class="title--page">Choose a Page</h4>
    <ul class="tabs">
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
    <div v-if="!isEmpty(page)">
      <h4 class="title--section">Choose a Section</h4>
      <select v-model="activeSection" class="control" @change="selectSection">
        <option value="" disabled selected>Select a Section on the page</option>
        <option
          v-for="(sec, secName) in page"
          :key="secName"
          :value="secName">
            {{ secName | capitalize }}
          </option>
      </select>
    </div>
    <div v-if="section">
      <h4 class="title--section">Choose a Bucket</h4>
      <p>
        Click the edit button to edit a content bucket, or add a new one:
        <button class="btn--fill btn--sm"><i class="icon-plus"></i> Add</button>
      </p>
      <bucket-table :data="buckets" :page="activePage" :section="activeSection" />
    </div>
  </section>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex'
import BucketTable from '~/components/bucket-table'
import capitalize from 'kyanite/capitalize'
import isEmpty from 'kyanite/isEmpty'
import sift from 'kyanite/sift'

export default {
  components: {
    BucketTable
  },
  data () {
    return {
      activePage: '',
      activeSection: ''
    }
  },
  watch: {
    page () {
      this.setSection('')
      this.setBuckets([])
      this.activeSection = ''
    }
  },
  filters: {
    capitalize
  },
  methods: {
    isEmpty,
    isActive (name) {
      return this.activePage === name
    },
    addPage () {
      // This will probably be removed, just go to a page to create a new one
      // Creating a page is also where you will create sections
      console.log('Click!')
    },
    selectPage (p, name) {
      this.activePage = name
      this.setPage(p)
    },
    selectSection ($event) {
      this.setSection($event.target.value)
      this.setBuckets(this.page[$event.target.value])
    },
    ...mapActions('dashboard', ['fetchPages']),
    ...mapMutations('dashboard', [
      'setPage',
      'setBuckets',
      'setSection'
    ])
  },
  computed: {
    ...mapState('dashboard', [
      'pageList',
      'buckets',
      'section',
      'page'
    ])
  },
  beforeMount () {
    const hash = this.$route.hash.replace('#', '')

    if (isEmpty(this.pageList)) {
      this.fetchPages()
    }

    if (hash && !isEmpty(this.pageList)) {
      this.activePage = hash
      this.setPage(sift([hash], this.pageList)[hash])
    }
  }
}
</script>


<style scoped>
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

