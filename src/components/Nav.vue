<template>
  <div class="router-nav grey lighten-4">
      <div class="container">
          <div class="row">
              <div class="col-12">
                  <div class="d-flex justify-content-center align-items-center font-weight-600">
                      <div class="nav nav-one" @click="navClick"> <router-link to="/myportfolio" class="spectra"> Portfolio </router-link> </div>
                      <div class="nav nav-two mx-4" @click="navClick"> <router-link to="/" class="spectra"> About Me </router-link> </div>
                      <div class="nav nav-three" @click="navClick"> <router-link to="/expedu" class="spectra"> Experience/Education </router-link> </div>
                  </div> 
              </div>
          </div>
      </div>
  </div>
</template>

<script>

export default {
    name: 'Nav',
    data() {
        return{
            isactive: false
        }
    },
    methods: {
        navClick(e) {
            e.target.classList.add('active-link');
        }
    }
}
</script>
