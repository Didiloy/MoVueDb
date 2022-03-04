<template>
  <div class="background">
        <div class="row">
            <Navbar />
        </div>
        <br>
        <br>
        <Sidebar />

        <div class="main">
            {{name}}
            <div v-if="computedMovies == null">
                <p>Recherche en cours...</p>
            </div>
            <div v-else> 
                <!-- {{movies.image}} -->
                <img :src="movies.image" alt="movie picture">
                {{id}}
            </div>
        </div>

      
      <br>
      <br>
  </div>
</template>

<script>
// @ is an alias to /src
import M from 'materialize-css'
import 'materialize-css'
import 'materialize-css/dist/css/materialize.css'
import Navbar from '@/components/Navbar.vue'
import Sidebar from '@/components/Sidebar.vue'
import {searchApi} from '@/api/api.js'

export default {
  name: 'HomeView',
  props: {
      name: {
            required: true,
            type: String
      }
  },
  data() {
    return{
        movies: null,
        id: null,
        movieInfos: null
    }
  },
  computed:{
      computedMovies(){
            return this.movies
        }
  },
  components: {
        Navbar,
        Sidebar
  },
  created(){
    
  },
  mounted() {
      M.AutoInit(),
      this.getMovie().then(() => {
          console.log(this.id);
          this.getInfos();
      });
  },
  methods: {
      async getMovie(){
          this.movies = [];
          await searchApi('SearchMovie', this.name)
          .then((responses) => {
              console.log(responses.results[0]);
              return (this.movies = responses.results[0], this.id = responses.results[0].id);
          });
        },
        async getInfos(){
            await searchApi('Title', this.id)
            .then((responses) => {
                console.log(responses);
                return (this.movieInfos = responses);
            });
        }
    }
}
</script>
<style scoped>
.background{
    background-image: url('../assets/background.jpg') !important;
    background-size: cover;
}
.main{
    margin-left: 230px;
}
</style>