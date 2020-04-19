<template>
  <div class="my-portfolio">
    <Portfolio/>
  </div>
</template>

<script>
// @ is an alias to /src
import Portfolio from '@/components/Portfolio.vue'

export default {
  name: 'MyPortfolio',
  components: {
    Portfolio
  }
}
</script>
