<template>
    <div>
      <h2>{{films_populaires}}</h2>
      <div v-if="computedMostPopularMovies == null">
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
                  
                  <div v-for="(movie, index) in mostPopularMovies" v-bind:key="movie.id" class="carousel-item">
                      <!-- <div class="card-image">
                          <img v-bind:src="movie.image">
                          <span class="card-title">{{movie.title}}</span>
                      </div> -->
                      <CardFilm2 class="" 
                      :name="movie.title" 
                      :image="movie.image" 
                      :date="movie.year" 
                      :note="movie.imDbRating" 
                      :numNotes="movie.imDbRatingCount" 
                      :crew="movie.crew" 
                      :card_stat_color="index%2 === 0 ? roseColor : bleuColor" />
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
import CardFilm2 from '@/components/CardFilm2.vue'
// import Modal from '@/components/Modal/Modal.vue'

export default {
    name :'CarouselMostPopularMovies',
    components:{
      CardFilm2,
    },
    data() {
        return {
            mostPopularMovies: null ,
            films_populaires: "Films les plus populaires",
            hover : false,
            instance: null,
            roseColor: "B94465",
            bleuColor: "5F51E5",
        }
    },
    computed:{
        computedMostPopularMovies(){
            return this.mostPopularMovies
        }
    },
    mounted() {
        M.AutoInit(),
        this.getMostPopularMovies().then(() => {this.instance = M.Carousel.init(this.$refs.carousel, {
          numVisible: 10,
          fullWidth: true, 
          });
          this.instance.next(3);
          this.instance.prev(2);
          })
    },
    methods: {
      async getMostPopularMovies(){
        this.mostPopularMovies = [];
        await getCategorie("MostPopularMovies").then((movies) =>{
          return (this.mostPopularMovies = movies);
        });

      },
      open(){
        this.$refs.modal.show()
      },
      nextCarousel(){
          this.instance.next(1);
      },
      prevCarousel(){
          this.instance.prev(1);
      }

    }
}
</script>

<style scoped>

.carousel {
    height: 500px !important;
}

.carousel-item{
    /* margin: 10px;
    padding: 10px; */
    height: 450px !important;
    width: 100px !important;
}

#btn-carousel {
    border-radius: 20px;
    background-color: #5F51E5 !important;
    color: #5F51E5 ;
    font-weight: bold;
    font-size: large;
    margin-top: 200px;
}
</style>