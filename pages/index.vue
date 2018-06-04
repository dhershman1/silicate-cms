<template>
  <div class="card shrink center">
    <div class="card__header">
      <h3 class="card__title">Login</h3>
      <p class="card__subtitle">Please fill out the form below and click login</p>
    </div>
    <form class="control card__body" action="/login" method="POST">
      <label for="email">
        Email Address
      </label>
      <input
        id="email"
        type="email"
        name="email"
        @keyup="checkLen('email', $event)">
      <label for="password">
        Password
      </label>
      <input
        id="password"
        type="password"
        name="password"
        @keyup="checkLen('pass', $event)">
      <button class="center btn--fill btn--md" type="button">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  head: {
    title: 'Silicate CMS - Login'
  },
  data () {
    return {
      filled: {
        pass: false,
        email: false
      }
    }
  },
  methods: {
    checkLen (field, { target }) {
      this.filled[field] = Boolean(target.value.length)
    }
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
