<template>
  <div id="app">
    <img src="./assets/logo.png">
    <header_component></header_component>

    <router-view/>
    
    <footer_component></footer_component>
  </div>
</template>

<script>
  import header_component from './components/header/index.vue'
  import footer_component from './components/footer/index.vue'

export default {
  name: 'app',
  components:{
    'header_component':header_component,
    'footer_component':footer_component
  }
}
</script>

<style>
  @import "./assets/style.css"
</style>
