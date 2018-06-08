<template>
  <div>
    <header>
      <h1>
        <router-link class="logo-text" :to="'/'">
          <img :src="logo" height="30" alt="Logo Image"/>
          {{ title }}
        </router-link>
        <small v-if="showVers">v{{ version }}</small>
      </h1>
    </header>
    <aside role="navigation">
      <nav>
        <ul>
          <li>
            <router-link :to="'/dashboard'"><i class="icon-meter"></i> Dashboard</router-link>
          </li>
          <li>
            <router-link :to="'/users'"><i class="icon-users"></i> Users</router-link>
          </li>
          <li>
            <router-link :to="'/help'"><i class="icon-lifebuoy"></i> Help</router-link>
          </li>
          <li>
            <router-link :to="'/'"><i class="icon-key"></i> Login</router-link>
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
import { mapState } from 'vuex'
import { version } from '~/package.json'

export default {
  computed: {
    version () {
      return version
    },
    ...mapState('settings', ['title', 'showVers', 'logo'])
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

