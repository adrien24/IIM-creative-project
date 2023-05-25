<script>
import Home from './views/Home.vue'

export default {
  name: 'App',
  components: {
    Home
  }
}

</script>

<template>
  <Home />
</template>

<style  lang="scss">
.red {

  filter: hue-rotate(247deg) saturate(3.5);

}
</style>
