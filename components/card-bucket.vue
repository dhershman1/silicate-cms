<template>
  <div class="card">
    <div class="card__header text-center">
      <h3 class="card__title">{{ data.title }}</h3>
    </div>
    <div class="card__body">
      <button v-if="!editing" @click="editing = true" class="btn--fill btn--md">
        Edit <i class="icon-pencil"></i>
      </button>
      <p v-if="!editing">{{ data.body }}</p>
      <form class="control" v-if="editing">
        <button @click="editing = false" class="btn--fill btn--md">
          Save <i class="icon-floppy-disk"></i>
        </button>
        <label>Content Title</label>
        <input type="text" :value="data.title">
        <label>Content Body</label>
        <textarea :value="data.body"></textarea>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: {}
    }
  },
  data () {
    return {
      editing: false
    }
  }
}
</script>

<style scoped>
.text-right {
  text-align: right;
}
.text-center {
  text-align: center;
}
</style>

