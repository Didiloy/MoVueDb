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
                <!-- <div v-for="movie in mostPopularTvs" v-bind:key="movie.id" class="carousel-item card">
                    <div class="card-image">
                        <img v-bind:src="movie.image">
                        <span class="card-title">{{movie.title}}</span>
                    </div>
                </div> -->
                <div>
                    <!-- <CardFilm2 class="carousel-item" v-for="movie in mostPopularTvs" v-bind:key="movie.id" :name="movie.title" :image="movie.image" /> -->
                </div>
            </div>
            <div class="row">
                <div class="col s12 l3">
                    <CardFilm2 class="carousel-item" :name="mostPopularTvs[0].title" :image="mostPopularTvs[0].image" :color="B94465" />
                </div>
                <div class="col s12 l3">
                    <CardFilm2 class="carousel-item" :name="mostPopularTvs[1].title" :image="mostPopularTvs[1].image" :color="AF51E5" />
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
            instance: null
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
          numVisible: 10, 
          fullWidth: true,});
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
        this.instance.next(3);
    },
    prevCarousel(){
        this.instance.prev(3);
    }
  },
  components:{
      CardFilm2
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