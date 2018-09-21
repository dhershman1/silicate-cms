<template>
  <div class="card shrink center">
    <div class="card__header">
      <h2 class="card__title">Login</h2>
      <p class="card__subtitle">Please fill out the form below and click login</p>
    </div>
    <form class="card__body" v-if="!authUser" @submit.prevent="runLogin">
      <label class="control__label" for="email">
        Email Address
      </label>
      <input
        v-model="formEmail"
        id="email"
        class="control__input"
        type="email"
        name="email">
      <label class="control__label" for="password">
        Password
      </label>
      <input
        v-model="formPass"
        id="password"
        class="control__input"
        type="password"
        name="password">
      <button class="center control__btn btn--fill btn--md" type="submit">Login</button>
    </form>
    <div v-else>
      Hello {{ authUser.username }}!
      <pre>I am the secret content, I am shown only when the use is connected.</pre>
      <p><i>You can also refresh this page, you'll still be connected!</i></p>
      <button @click="logout">Logout</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  loading: false,
  head: {
    title: 'Silicate CMS - Login'
  },
  data () {
    return {
      formEmail: '',
      formPass: ''
    }
  },
  methods: {
    ...mapActions(['login', 'logout']),
    runLogin () {
      this.login({
        username: this.formEmail,
        password: this.formPass
      }).then(() => {
        this.formEmail = ''
        this.formPass = ''
      })
    }
  },
  computed: {
    ...mapState(['authUser'])
  }
}
</script>

<style scoped>
.btn {
  font-weight: 700;
}
.shrink {
  width: 30%;
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
