<template>
  <div>
    <h3>Login</h3>
    <p>Please fill out the form below and click login</p>
    <form>
      <!-- Find a better way to handle this not a fan -->
      <div :class="['anim', { 'anim--filled': emailFilled || email }]">
        <input
          id="email"
          class="anim__field"
          type="email"
          name="email"
          v-model="email"
          @focus="emailFilled = true"
          @blur="emailFilled = false">
        <label class="anim__label" for="email">
          <span class="anim__label-content">Email Address</span>
        </label>
      </div>
      <div :class="['anim', { 'anim--filled': passFilled || password }]">
        <input
          id="password"
          class="anim__field"
          type="password"
          name="password"
          v-model="password"
          @focus="passFilled = true"
          @blur="passFilled = false">
        <label class="anim__label" for="password">
          <span class="anim__label-content">Password</span>
        </label>
      </div>
      <button class="btn--fill btn--md" type="button">Login</button>
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
      emailFilled: false,
      passFilled: false,
      authed: false,
      email: '',
      password: ''
    }
  }
}
</script>

<style scoped>
.btn {
  font-weight: 700;
}
</style>
