<template>
  <div>
      <div class="row">
        <Navbar />
      </div>
      <br>
      <br>
      <div class="row">
          <div class="col s3">
          <Sidebar />
      </div>
      <div class="col s9">
          <div class="home">
          <img alt="Vue logo" src="../assets/logo.png">
          <HelloWorld msg="Welcome to Your Vue.js App"/>
          </div>
      </div>
      </div>
      
      
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Navbar from '@/components/Navbar.vue'
import Sidebar from '@/components/Sidebar.vue'
import M from 'materialize-css'
import 'materialize-css'
import 'materialize-css/dist/css/materialize.css'

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    Navbar,
    Sidebar
  },
  mounted() {
    M.AutoInit()
  }
}
</script>
<style scoped>

.spacer {

}
</style>