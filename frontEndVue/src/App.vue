<template>
  <div id="app">
    <HeaderComponent></HeaderComponent>
    <Slider></Slider>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
//import MiComponente from './components/MiComponente.vue'
import HeaderComponent from './components/HeaderComponent.vue';
import Slider from './components/Slider.vue';

export default {
  name: 'App',
  components: {
    //HelloWorld,
    //MiComponente,
    HeaderComponent,
    Slider
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

@import './assets/css/styles.css';
</style>
