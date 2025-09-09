<template>
  <div id="app">
    <NavBar />
    <main>
      <router-view />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import NavBar from '@/components/common/NavBar.vue';
import AppFooter from '@/components/common/AppFooter.vue';
</script>

<style>
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
  padding: 2rem 0;
}
</style>
