<template>
  <div>
      <Navbar />
      <Sidebar />
      <div class="home">
        <img alt="Vue logo" src="../assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js App"/>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Navbar from '@/components/Navbar.vue'
import Sidebar from '@/components/Sidebar.vue'


export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    Navbar,
    Sidebar
  }
}
</script>
