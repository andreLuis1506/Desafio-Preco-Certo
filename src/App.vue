<template>
  <div id="app">
    <NavBar />
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from './components/Navbar/Index'
export default {
  name: 'App',
  components:{
    NavBar
  }
}
</script>

