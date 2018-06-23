<template>
  <input type="file" :name="name" multiple :accepts="extensions" />
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: 'file'
    }
  }
}
</script>
