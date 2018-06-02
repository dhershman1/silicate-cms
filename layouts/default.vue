<template>
  <div>
    <header>
      <h1>
        <a href="/">
          <img src="/imgs/logo.png" height="30"/>
        </a>
        Silicate
        <small>v{{ version }}</small>
      </h1>
    </header>
    <aside role="navigation">
      <nav>
        <ul>
          <li>
            <a href="/dashboard"><i class="icon-meter"></i> Dashboard</a>
          </li>
          <li>
            <a href="/users"><i class="icon-users"></i> Users</a>
          </li>
          <li>
            <a href="/"><i class="icon-key"></i> Login</a>
          </li>
        </ul>
      </nav>
    </aside>
    <main role="main">
      <nuxt/>
    </main>
    <footer>&copy; Dustin Hershman</footer>
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

