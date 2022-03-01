<template>
    <div>
        <h2>{{films_in_theater}}</h2>
        <div v-if="computedInTheaterMovies == null">
            <p>Recherche en cours...</p>
        </div>
        <div v-else>
            <div ref="carousel" class="carousel">
                <div v-for="movie in inTheatherMovies" v-bind:key="movie.id" class="carousel-item card">
                    <div class="card-image">
                        <img v-bind:src="movie.image">
                        <span class="card-title">{{movie.title}}</span>
                    </div>
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
    name :'CarouselInTheater',
    data() {
        return {
            inTheatherMovies: null ,
            films_in_theater: "Films au cinéma",
        }
    },
    computed:{
        computedInTheaterMovies(){
            return this.inTheatherMovies
        }
    },
    mounted() {
        M.AutoInit(),
        this.getInTheaterMovies().then(() => M.Carousel.init(this.$refs.carousel, {
          numVisible: 10, 
          fullWidth: true,}))
        console.log(this.$refs.carousel)
    },
    methods: {
    async getInTheaterMovies(){
      this.inTheatherMovies = [];
      await getCategorie("InTheaters").then((movies) =>{
        return (this.inTheatherMovies = movies);
      });
    }
  }
}
</script>

<style scoped>

.carousel-item{
    margin: 10px;
    padding: 10px;
}
</style>