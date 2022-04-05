<template>
  <div id="app2">
    <RegistrationForm />
  </div>
</template>

<script>
import RegistrationForm from './components/RegistrationForm.vue'
export default {
  name: 'App',
  components: {
    RegistrationForm
  },

}
</script>

<style lang="sass">
$main-color: #404040

#app2
  font-family: 'Open Sans', Arial, sans-serif
  font-size: 16px
  font-weight: 500
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: left
  color: $main-color
  overflow: hidden
</style>
