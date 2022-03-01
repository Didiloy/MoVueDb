<template>
    <div>
    <h2>{{films_populaires}}</h2>
    <div v-if="computedMostPopularMovies == null">
            <p>Recherche en cours...</p>
          </div>
          <div v-else>
            <Modal ref="modal"/>
          <div ref="carousel" class="carousel ">
            <div class="carousel-fixed-item right">
                <a class="btn waves-effect white white-text darken-text-2" id="btn-carousel" v-on:click="nextCarousel">></a>
            </div>
            <div class="carousel-fixed-item left">
                <a class="btn waves-effect white white-text darken-text-2" id="btn-carousel" v-on:click="prevCarousel"> &lt </a>
            </div>
            <CardFilm v-for="movie in mostPopularMovies" v-bind:key="movie" :src="movie.image" :name="movie.title" class="carousel-item card" @click="open"/>
          </div>
      </div>
      </div>
</template>

<script>
import M from 'materialize-css'
import 'materialize-css'
import 'materialize-css/dist/css/materialize.css'
import {getCategorie} from '../api/api.js'
import CardFilm from '@/components/CardFilm.vue'
import Modal from '@/components/Modal/Modal.vue'

export default {
    name :'CarouselMostPopularMovies',
    components:{
      CardFilm,
      Modal
    },
    data() {
        return {
            mostPopularMovies: null ,
            films_populaires: "Films les plus populaires",
            hover : false,
            instance: null
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
          fullWidth: false, 
          });
          this.instance.next(3);
          this.instance.prev(2);
          })
    },
    methods: {
    async getMostPopularMovies(){
      this.mostPopularMovies = {};
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
.carousel .carousel-item{
  width: 300px;
  height: 100%;
  
}

#btn-carousel {
    border-radius: 20px;
    /* background-color: #5F51E5 !important; */
    background-color: #B94465 !important;
    color: #5F51E5 ;
    font-weight: bold;
    font-size: large;
    margin-top: 120px;
}


</style>