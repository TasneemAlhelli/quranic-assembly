<script>
import WOW from 'wow.js'
export default {
  name: 'app',
  mounted() {
    new WOW().init()
  }
}
</script>

<template>
  <router-view />
</template>
