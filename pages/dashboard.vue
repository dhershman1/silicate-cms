<template>
  <section>
    <div class="row">
      <div class="col s12">
        <h1>Dashboard</h1>
        <h4 class="subtitle">You can edit existing content buckets or create new ones here</h4>
      </div>
    </div>
    <div class="divider"></div>
    <div class="row">
      <div class="col s12">
        <h4 class="title--page">Choose a Page</h4>
        <ul class="tabs">
          <li class="tab col" v-for="(p, i) in pageList" :key="i">
            <a :class="{ active: p.name === page.name }" @click="page = p" :href="`#${p.name}`">{{ p.name }}</a>
          </li>
        </ul>
        <h4 class="title--section" v-if="!isEmpty(page)">Choose a Section</h4>
        <div class="input-field col s4" v-if="!isEmpty(page)">
          <select v-model="section" @change="fetchBuckets">
            <option value="" disabled selected>Select a Section on the page</option>
            <option v-for="sec in page.sections" :key="sec" :value="sec.toLowerCase()">{{ sec }}</option>
          </select>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import isEmpty from 'kyanite/isEmpty'

export default {
  data () {
    return {
      section: '',
      page: {},
      buckets: []
    }
  },
  watch: {
    page () {
      this.section = ''
      this.buckets = []
      M.FormSelect.init(document.querySelectorAll('select'))
    },
    section () {
      this.buckets = []
    }
  },
  methods: {
    isEmpty,
    fetchBuckets () {
      // Make a request for the content buckets living on the back end
      // For now this will just fake some data
      console.log('page', this.page)
      console.log('section', this.section)
      const data = {
        home: {
          header: [
            {
              title: 'header content',
              body: 'This is a content bucket for the header section'
            },
            {
              title: 'header sub-content',
              body: 'This is some sub content for the header'
            }
          ],
          footer: [
            {
              title: 'footer content',
              body: 'This is some content that lives for the footer section'
            }
          ]
        },
        about: {
          header: [
            {
              title: 'header content',
              body: 'This is a content bucket for the header section'
            },
            {
              title: 'header sub-content',
              body: 'This is some sub content for the header'
            }
          ],
          body: [
            {
              title: 'main',
              body: 'This is a simple headless cms that prides itself on being user friendly, and completely plug and play ready!'
            }
          ]
        }
      }

      console.log(data[this.page][this.section])

      this.buckets = data[this.page][this.section]
    }
  },
  computed: {
    pageList () {
      // Make a call to retrieve a list of pages perhaps, or already provide it on load
      return [
        {
          name: 'Home',
          sections: ['Header', 'Footer']
        },
        {
          name: 'About',
          sections: ['Header', 'Body']
        }
      ]
    }
  },
  mounted () {
    M.FormSelect.init(document.querySelectorAll('select'))
  }
}
</script>


<style scoped>
.row h1 {
  font-size: 3rem;
  margin-bottom: 0;
}
.subtitle {
  margin-top: 0;
  margin-bottom: 0;
  font-size: 1.5rem;
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

