<template>
    <div>
        <h2>{{films_box_office}}</h2>
        <div v-if="computedBoxOfficeWeek == null">
            <p>Recherche en cours...</p>
        </div>
        <div v-else>
            <div ref="carousel" class="carousel">
                <div v-for="movie in boxOfficeMovies" v-bind:key="movie.id" class="carousel-item card">
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
    name :'CarouselBoxOfficeSemaine',
    data() {
        return {
            boxOfficeMovies: null ,
            films_box_office: "Box Office de la semaine",
        }
    },
    computed:{
        computedBoxOfficeWeek(){
            return this.boxOfficeMovies
        }
    },
    mounted() {
        M.AutoInit(),
        this.getBoxOfficeWeekMovies().then(() => M.Carousel.init(this.$refs.carousel, {
          numVisible: 10, 
          fullWidth: true,}))
        console.log(this.$refs.carousel)
    },
    methods: {
    async getBoxOfficeWeekMovies(){
      this.boxOfficeMovies = {};
      await getCategorie("BoxOffice").then((movies) =>{
        return (this.boxOfficeMovies = movies);
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