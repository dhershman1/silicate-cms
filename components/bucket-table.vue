<template>
  <table>
    <tr>
      <th>Title</th>
      <th>Type</th>
      <th>Last Edited</th>
      <th>Edited By</th>
      <th>Edit</th>
    </tr>
    <tr class="content" v-for="(d, i) in data" :key="i">
      <td>{{ d.title }}</td>
      <td>{{ d.type }}</td>
      <td>{{ d.lastEdited }}</td>
      <td>{{ d.editedBy }}</td>
      <td>
        <a :href="`/bucket/${page}/${section}/${d.id}`" class="btn--fill btn--sm">Edit <i class="icon-pencil"></i></a>
      </td>
    </tr>
  </table>
</template>

<script>
export default {
  props: {
    page: {
      type: String,
      default: ''
    },
    section: {
      type: String,
      default: ''
    },
    data: {
      type: Array,
      default: []
    }
  }
}
</script>

