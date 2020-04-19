<template>
  <div class="exp-edu">
    <Experience/>
    <Certification/>
    <Education/>
  </div>
</template>

<script>
// @ is an alias to /src
import Experience from '@/components/Experience.vue'
import Certification from '@/components/Certification.vue'
import Education from '@/components/Education.vue'

export default {
  name: 'ExpEdu',
  components: {
    Experience,
    Certification,
    Education
  }
}
</script>
