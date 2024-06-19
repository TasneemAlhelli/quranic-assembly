<script>
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<template>
  <Header />
  <main>
    <router-view></router-view>
  </main>
</template>

<style scoped></style>
