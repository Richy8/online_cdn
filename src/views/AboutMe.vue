<template>
  <div class="about-me">
    <About/>
  </div>
</template>

<script>
// @ is an alias to /src
import About from '@/components/About.vue'

export default {
  name: 'AboutMe',
  components: {
    About
  }
}
</script>
