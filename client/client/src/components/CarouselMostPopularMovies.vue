<template>
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
</template>

<script>
import M from 'materialize-css'
import 'materialize-css'
import 'materialize-css/dist/css/materialize.css'
import {getCategorie} from '../api/api.js'

export default {
    name :'CarouselMostPopularMovies',
    data() {
        return {
            mostPopularMovies: null ,
        }
    },
    computed:{
        computedMostPopularMovies(){
            return this.mostPopularMovies
        }
    },
    mounted() {
        M.AutoInit(),
        this.getMostPopularMovies().then(() => M.Carousel.init(this.$refs.carousel, {numVisible: 10}))
        console.log(this.$refs.carousel)
    },
    methods: {
    async getMostPopularMovies(){
      this.mostPopularMovies = {};
      await getCategorie("MostPopularMovies").then((movies) =>{
        return (this.mostPopularMovies = movies);
      });
    }
  }
}
</script>

<style scoped>

</style>