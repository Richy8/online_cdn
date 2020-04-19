<template>
  <div id="app">
    <Header/>
    <Nav/>
    <router-view/>
    <Contact/>
    <Footer/>
  </div>
</template>


<script>
import Header from '@/components/Header.vue'
import Nav from '@/components/Nav.vue'
import Contact from '@/components/Contact.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Nav,
    Contact,
    Footer
  }
}
</script>


<style>

</style>
