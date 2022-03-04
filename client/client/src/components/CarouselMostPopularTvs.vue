<template>
    <div>
        <h2>{{mostPopularTvs_title}}</h2>
        <div v-if="computedMostPopularTvs == null">
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
                
                <div v-for="(movie, index) in mostPopularTvs" v-bind:key="movie.id" class="carousel-item">
                    <!-- <div class="card-image">
                        <img v-bind:src="movie.image">
                        <span class="card-title">{{movie.title}}</span>
                    </div> -->
                    <CardFilm2 class="" :name="movie.title" :image="movie.image" :date="movie.year" :note="movie.imDbRating" :numNotes="movie.imDbRatingCount" :crew="movie.crew" :card_stat_color="index%2 === 0 ? roseColor : bleuColor" />
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

export default {
    name :'CarouselMostPopularTvs',
    data() {
        return {
            mostPopularTvs: null ,
            mostPopularTvs_title: "Séries les plus populaires",
            instance: null,
            roseColor: "B94465",
            bleuColor: "5F51E5",
        }
    },
    computed:{
        computedMostPopularTvs(){
            return this.mostPopularTvs
        }
    },
    mounted() {
        M.AutoInit(),
        this.getMostPopularTvs().then(() => {this.instance = M.Carousel.init(this.$refs.carousel, {
        //   numVisible: 10, 
          fullWidth: true,
          });
          this.instance.next(3);
          this.instance.prev(2);
          })
    },
    methods: {
        async getMostPopularTvs(){
        this.mostPopularTvs = [];
        await getCategorie("MostPopularTvs").then((movies) =>{
            return (this.mostPopularTvs = movies);
        });
        },
        nextCarousel(){
            this.instance.next();
        },
        prevCarousel(){
            this.instance.prev();
        }
    },
  components:{
      CardFilm2
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