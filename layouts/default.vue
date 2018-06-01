<template>
  <div class="container" role="main">
    <ul class="sidenav sidenav-fixed" role="navigation">
      <li class="logo">
        <a class="logo__brand" href="/">
          <img class="logo__img" src="/imgs/logo.png"/>
        </a>
      </li>
      <li class="version">
        <p>v{{ version }}</p>
      </li>
      <li class="nav-item" title="Go to the dashboard page">
        <a class="black-text" href="/dashboard">
          <i class="material-icons">dashboard</i><span>Dashboard</span>
        </a>
      </li>
      <li class="nav-item" title="Go to the users page">
        <a class="black-text" href="/users">
          <i class="material-icons">person</i><span>Users</span>
        </a>
      </li>
      <li class="nav-item" title="Go to the login page">
        <a class="black-text" href="/">
          <i class="material-icons">lock</i><span>Login</span>
        </a>
      </li>
    </ul>
    <nuxt/>
  </div>
</template>

<script>
import { version } from '~/package.json'

export default {
  computed: {
    version () {
      return version
    }
  }
}
</script>


<style scoped>
li.nav-item > a {
  font-size: 16px;
}
.nav-item > a > .material-icons {
  margin-right: 0.625rem;
}
.nav-item span {
  font-weight: 600;
}
.version {
  position: absolute;
  top: 6.25rem;
  left: 0;
  right: 0;
  text-align: center;
  font-weight: 600;
  font-size: 1.25rem;
}
.version p {
  margin-top: 0;
  margin-bottom: 0;
}
.logo {
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 4.6rem;
}
.logo__brand {
  height: 3.5rem;
}
.logo__img {
  display: inline-block;
  height: 100%;
  pointer-events: none;
}
.sidenav {
  width: 12.5rem;
}
</style>

