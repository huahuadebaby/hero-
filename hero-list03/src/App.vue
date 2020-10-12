<template>
  <div id="app" class="container">
     <nav-bar></nav-bar>

    <div class="col-md-2">
      <my-side></my-side>

    </div>

    <div class="col-md-10">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import NavBar from './components/nav-bar'
import MySide from './components/my-side'
export default {
  components: {
    NavBar,
    MySide

  }

}
</script>

<style>

</style>
