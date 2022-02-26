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
          <div v-if="computedMostPopularMovies == null">
            <p>Recherche en cours...</p>
          </div>
          <div v-else>
            <div ref="carousel" class="carousel">
              <div v-for="movie in mostPopularMovies" v-bind:key="movie.id" class="carousel-item card">
                <div class="card-image">
                  <img v-bind:src="movie.image">
                  <span class="card-title">{{movie.title}}</span>
                </div>
              </div>
            </div>
          </div>

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
const axios = require('axios')

export default {
  name: 'HomeView',
  data() {
    return{
      films_populaires: "Films les plus populaires",
      mostPopularMovies: null ,
    }
  },
  computed:{
    computedMostPopularMovies(){
      return this.mostPopularMovies
    }
  },
  components: {
    HelloWorld,
    Navbar,
    Sidebar
  },
  created(){
    
  },
  mounted() {
    M.AutoInit(),
    this.getMostPopularMovies().then(() => instances = M.Carousel.init(this.$refs.carousel, {numVisible: 5}))
    console.log(this.$refs.carousel)
  },
  methods: {
    async getMostPopularMovies(){
      this.mostPopularMovies = {};
      await axios.get(`http://localhost:4000/api/MostPopularMovies`)
      .then((response)=> {
                // console.log(response.data);
                return (this.mostPopularMovies = response.data);
            }).catch((error) => {
                console.log(error);
            });
    }
  }
}
</script>
<style scoped>

.spacer {

}
</style>