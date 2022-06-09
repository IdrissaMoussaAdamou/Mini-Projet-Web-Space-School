<template>
  <div v-if="token">
    <cb></cb>
  </div>
  <div v-else>
     <cm></cm>
  </div>
</template>
<script>
import cb from "../components/coursbon"
import cm from "../components/courmal"
export default {
  name: 'Cours',
  components: {
    cm,
    cb
  },
  computed: {
    token() {
      return localStorage.token
    }
  }
}
</script>


