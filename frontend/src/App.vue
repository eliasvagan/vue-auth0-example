<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import UserStatus from './components/UserStatus.vue';
</script>

<template>
  <section class="app-wrapper">
    <header>
      <div>
        <nav>
          <RouterLink to="/">About</RouterLink>
          <RouterLink to="/video">Video thingy</RouterLink>
        </nav>
        <UserStatus></UserStatus>
      </div>
    </header>
    <section class="middle">
      <RouterView />
    </section>
    <footer>
      <div>
        <p>The source for this page can be seen <a href="https://github.com/eliasvagan/vue-auth0-example">on GitHub</a></p>
      </div>
    </footer>
  </section>
</template>

<style scoped lang="scss">
@import './assets/base.scss';
section.app-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  box-sizing: border-box;
}
section.middle {
  display: flex;
  flex: 1;
  padding: 1rem;
  justify-content: center;
  align-items: center;
}

header, footer {
  background-color: $color-background-mute;
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: center;
  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 40rem;
  }
}

nav {
  display: flex;
  column-gap: 1.0rem;
}
</style>
