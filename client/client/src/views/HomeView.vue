<template>
  <div>
      <div class="row">
        <Navbar />
      </div>
      <br>
      <br>
      <div class="row">
          <div class="col s2">
          <Sidebar />
      </div>
      <div class="col s10">
          <h2>{{films_populaires}}</h2>
          <CarouselMostPopularMovies />
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
import CarouselMostPopularMovies from '@/components/CarouselMostPopularMovies.vue'
import M from 'materialize-css'
import 'materialize-css'
import 'materialize-css/dist/css/materialize.css'
import {getCategorie} from '../api/api.js'
const axios = require('axios')

export default {
  name: 'HomeView',
  data() {
    return{
        films_populaires: "Films les plus populaires",
    }
  },
  computed:{
    
  },
  components: {
    HelloWorld,
    Navbar,
    Sidebar,
    CarouselMostPopularMovies
  },
  created(){
    
  },
  mounted() {
   
  },
  methods: {
    
  }
}
</script>
<style scoped>

</style>