<script>
import Header from './components/Header.vue'
import WOW from 'wow.js'

export default {
  name: 'App',
  components: {
    Header
  },
  mounted() {
    new WOW().init()
  }
}
</script>

<template>
  <Header />
  <router-view></router-view>
</template>

<style scoped></style>
