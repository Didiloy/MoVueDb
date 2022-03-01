<template>
    <div>
        <h2>{{films_box_office}}</h2>
        <div v-if="computedBoxOfficeWeek == null">
            <p>Recherche en cours...</p>
        </div>
        <div v-else>
            <div ref="carousel" class="carousel">
                <div class="carousel-fixed-item right">
                    <a class="btn waves-effect white white-text darken-text-2" id="btn-carousel" v-on:click="nextCarousel">></a>
                </div>
                <div class="carousel-fixed-item left">
                    <a class="btn waves-effect white white-text darken-text-2" id="btn-carousel" v-on:click="prevCarousel"> &lt </a>
                </div>
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
            instance: null
        }
    },
    computed:{
        computedBoxOfficeWeek(){
            return this.boxOfficeMovies
        }
    },
    mounted() {
        M.AutoInit(),
        this.getBoxOfficeWeekMovies().then(() => {this.instance = M.Carousel.init(this.$refs.carousel, {
          numVisible: 10, 
          fullWidth: true,})
          })
    },
    methods: {
    async getBoxOfficeWeekMovies(){
      this.boxOfficeMovies = {};
      await getCategorie("BoxOffice").then((movies) =>{
        return (this.boxOfficeMovies = movies);
      });
    },
    nextCarousel(){
        this.instance.next(3);
    },
    prevCarousel(){
        this.instance.prev(3);
    }
  }
}
</script>

<style scoped>

.carousel-item{
    margin: 10px;
    padding: 10px;
}

#btn-carousel {
    border-radius: 20px;
    background-color: #5F51E5 !important;
    color: #5F51E5 ;
    font-weight: bold;
    font-size: large;
    margin-top: 120px;
}
</style>