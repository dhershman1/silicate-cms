<template>
  <section class="container">
    <div class="row">
      <div class="col s12 m6 offset-m3">
        <div class="card darken-1">
          <div class="card-content">
            <span class="card-title">Login</span>
            <p>Please fill out the form below and click login</p>
            <form>
              <div class="row">
                <div class="input-field col s12">
                  <i class="material-icons prefix">email</i>
                  <input id="email" type="email" class="validate">
                  <label for="email">Email Address</label>
                </div>
              </div>
              <div class="row">
                <div class="input-field col s12">
                  <i class="material-icons prefix">lock</i>
                  <input id="password" type="password" class="validate">
                  <label for="password">Password</label>
                </div>
              </div>
              <button class="waves-effect waves-light btn" type="button">
                Login
                <i class="material-icons right">send</i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  head: {
    title: 'Silicate CMS - Login'
  },
  data() {
    return {
      authed: false
    }
  }
}
</script>
