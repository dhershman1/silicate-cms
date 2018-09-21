<template>
  <div class="card shrink center">
    <div class="card__header">
      <h1>Editing {{ title }} Bucket</h1>
    </div>
    <div class="card__body">
      <form class="control">

        <label class="control__label" for="title">Bucket Title</label>
        <p class="small">The title this should show up as when managing content</p>
        <input class="control__input" type="text" name="title" maxlength="50" v-model="title" />
        <p class="mt">Characters Left: {{ title.length }}/50</p>

        <label class="control__label" for="type">Bucket Type</label>
        <p class="small">The type of content this bucket will contain</p>
        <select class="control__select" name="type" v-model="type">
          <option value="" disabled selected>Select a Bucket Type</option>
          <option value="text">Text</option>
          <option value="image">Image</option>
          <option value="file">File</option>
        </select>
        <p class="small" v-if="type">{{ typeDesc }}</p>

        <label class="control__label" for="content">Bucket Content</label>
        <p class="small">The actual content or file this bucket will serve</p>
        <textarea class="control__input" v-if="inputType === 'text'" v-model="content" rows="8" cols="8"></textarea>
        <input
        v-else
        class="control__input"
        :type="inputType"
        v-model="file"
        :accepts="extensions"
        multiple name="content" />

        <div v-if="type === 'image'">
          <label class="control__label">Alternative Text</label>
          <p class="small">If a picture fails to load, what should the alternative text be</p>
          <input class="control__input" type="text" maxlength="50" v-model="content" />
        </div>

      </form>
    </div>
  </div>
</template>

<script>
import identity from 'kyanite/identity'

export default {
  loading: false,
  asyncData ({ params, store }) {
    return store.dispatch('bucket/fetchBucket', params).then(identity)
  },
  methods: {
    updateContent ({ target }) {
      this.content = target.value
    }
  },
  computed: {
    extensions () {
      if (this.type === 'image') {
        return '.jpg,.jpeg,.png,.gif'
      }

      return '.pdf'
    },
    inputType () {
      if (this.type === 'image') {
        return 'file'
      }

      return this.type
    },
    typeDesc () {
      if (!this.type) {
        return
      }

      const descriptions = {
        text: 'A simple URL or Text based content type',
        image: 'An image file content type .jpg, .png, .gif extensions accepted only',
        file: 'A file content type, upload a pdf document'
      }

      return descriptions[this.type]
    }
  }
}
</script>

<style scoped>
.mt {
  margin-top: 0.3rem;
}
.small {
  font-size: 14px;
  margin-top: 0.3rem;
}
.control__select {
  font-size: 16px;
}
.shrink {
  width: 50%;
}
.text-center {
  text-align: center;
}
button.center {
  width: 30%;
}
.center {
  text-align: center;
  margin-left: auto;
  margin-right: auto;
}
</style>

