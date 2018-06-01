<template>
  <div class="container" role="main">
    <ul class="sidenav sidenav-fixed">
      <li class="logo">
        <a class="logo__brand" href="/">
          <img class="logo__img" src="/imgs/logo.png"/>
        </a>
      </li>
      <li class="version">
        <p>v{{ version }}</p>
      </li>
      <li class="nav-item">
        <a class="black-text" href="/dashboard"><i class="material-icons">dashboard</i><span>Dashboard</span></a>
      </li>
      <li class="nav-item">
        <a class="black-text" href="/users"><i class="material-icons">person</i><span>Users</span></a>
      </li>
      <li class="nav-item">
        <a class="black-text" href="/"><i class="material-icons">lock</i><span>Login</span></a>
      </li>
    </ul>
    <nuxt/>
  </div>
</template>

<script>
import { version } from '~/package.json'

export default {
  computed: {
    version() {
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
  margin-right: 10px;
}
.nav-item span {
  font-weight: 600;
}
.version {
  position: absolute;
  top: 100px;
  left: 0;
  right: 0;
  text-align: center;
  font-weight: 600;
  font-size: 20px;
}
.version p {
  margin-top: 0;
  margin-bottom: 0;
}
.logo {
  text-align: center;
  margin-top: 32px;
  margin-bottom: 75px;
}
.logo__brand {
  height: 57px;
}
.logo__img {
  display: inline-block;
  height: 100%;
  pointer-events: none;
}
.sidenav {
  width: 200px;
}
</style>

