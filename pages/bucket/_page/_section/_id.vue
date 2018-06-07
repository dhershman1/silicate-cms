<template>
  <div>
    <h1>Edit Page!</h1>
    <h4>Content that was selected:</h4>
    <p>Title: {{ title }}</p>
    <p>Type: {{ type }}</p>
    <p>Body: {{ body }}</p>
    <p>Last Edited: {{ lastEdited }}</p>
    <p>Edited By: {{ editedBy }}</p>

  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      title: '',
      type: '',
      body: '',
      lastEdited: '',
      editedBy: ''
    }
  },
  methods: {
    ...mapActions('bucket', ['fetchBucket'])
  },
  beforeMount () {
    // Instead of doing this, let's just build out some middleware so
    // Nuxt can serve up the page with this data already populated!
    this.fetchBucket(this.$route.params).then(d => {
      this.body = d.body
      this.title = d.title
      this.lastEdited = d.lastEdited
      this.editedBy = d.editedBy
      this.type = d.type
    })
  }
}
</script>

