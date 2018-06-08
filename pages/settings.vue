<template>
  <section class="card shrink center">
    <div class="card__header">
      <h1>CMS Settings</h1>
      <p>Change internal settings of the CMS here</p>
    </div>
    <div class="card__body">
      <form class="control">
        <label for="logo">Logo Image</label>
        <p>Change the CMS logo in the top right corner</p>
        <input id="lgo" type="file" name="logo" />
        <label for="title">CMS Title</label>
        <p>Change the text title that displays in the top right corner</p>
        <input
          id="title"
          type="text"
          name="title"
          :value="title"
          @keyup="setTitle($event.target.value)" />
        <label for="showVers">
          Show Version
        </label>
        <p>Show the version number next to the Title in the top right corner</p>
        <input
          id="showVers"
          type="checkbox"
          name="showVers"
          :checked="showVers"
          @change="setShowVers($event.target.checked)" />
      </form>
    </div>
  </section>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  computed: {
    ...mapState('settings', ['title', 'showVers', 'logo'])
  },
  methods: {
    ...mapMutations('settings', ['setTitle', 'setLogo', 'setShowVers'])
  }
}
</script>

<style scoped>
form {
  margin-top: 0.3rem;
}
.shrink {
  width: 50%;
}
label {
  margin-top: 0.2rem;
}
.center {
  text-align: center;
  margin-left: auto;
  margin-right: auto;
}
.control button {
  width: 50%;
}
.control p {
  margin: 0.2rem;
}
#showVers {
  padding: 0.2rem;
  width: 20%;
}
</style>

