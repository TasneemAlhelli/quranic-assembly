<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import WOW from 'wow.js'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  mounted() {
    new WOW().init()
  }
}
</script>

<template>
  <Header />
  <router-view></router-view>
  <Footer />
</template>

<style scoped></style>
