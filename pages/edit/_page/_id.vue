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
import identity from 'kyanite/identity'

export default {
  asyncData ({ params, store }) {
    return store.dispatch('bucket/fetchBucket', params).then(identity)
  }
}
</script>

