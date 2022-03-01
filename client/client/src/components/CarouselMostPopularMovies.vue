<template>
    <div>
    <h2>{{films_populaires}}</h2>
    <div v-if="computedMostPopularMovies == null">
            <p>Recherche en cours...</p>
          </div>
          <div v-else>
            <Modal ref="modal"/>
          <div ref="carousel" class="carousel">
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
            hover : false
        }
    },
    computed:{
        computedMostPopularMovies(){
            return this.mostPopularMovies
        }
    },
    mounted() {
        M.AutoInit(),
        this.getMostPopularMovies().then(() => M.Carousel.init(this.$refs.carousel, {numVisible: 10,}))
        console.log(this.$refs.carousel)
    },
    methods: {
    async getMostPopularMovies(){
      this.mostPopularMovies = {};
      await getCategorie("MostPopularMovies").then((movies) =>{
        console.log(movies)
        return (this.mostPopularMovies = movies);
      });

    },
    open(){
      this.$refs.modal.show()
    }

  }
}
</script>

<style scoped>
.carousel .carousel-item{
  width: 300px;
  height: 100%;
  
}


</style>