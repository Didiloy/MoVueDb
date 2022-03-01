<template>
    <div>
        <h2>{{films_top}}</h2>
        <div v-if="computedTop250Movies == null">
            <p>Recherche en cours...</p>
        </div>
        <div v-else>
            <div ref="carousel" class="carousel">
                <div v-for="movie in top250Movies" v-bind:key="movie.id" class="carousel-item card">
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
    name :'CarouselTop250Movies',
    data() {
        return {
            top250Movies: null ,
            films_top: "Top 250 des meilleurs films",
        }
    },
    computed:{
        computedTop250Movies(){
            return this.top250Movies
        }
    },
    mounted() {
        M.AutoInit(),
        this.getTop250Movies().then(() => M.Carousel.init(this.$refs.carousel, {
          numVisible: 10, 
          fullWidth: true,}))
        console.log(this.$refs.carousel)
    },
    methods: {
    async getTop250Movies(){
      this.top250Movies = [];
      await getCategorie("Top250Movies").then((movies) =>{
        return (this.top250Movies = movies);
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