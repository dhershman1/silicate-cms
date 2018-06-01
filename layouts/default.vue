<template>
  <div role="main">
    <ul class="sidenav sidenav-fixed">
      <li>
        <a class="black-text" href="/dashboard"><i class="material-icons">dashboard</i>Dashboard</a>
      </li>
      <li>
        <a class="black-text" href="/users"><i class="material-icons">person</i>Users</a>
      </li>
      <li>
        <a class="black-text" href="/"><i class="material-icons">lock</i>Login</a>
      </li>
    </ul>
    <nuxt/>
  </div>
</template>

<style scoped>
.sidenav {
  width: 200px;
}
</style>

