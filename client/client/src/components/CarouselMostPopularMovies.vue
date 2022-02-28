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
      // await axios.get(`http://localhost:4000/api/MostPopularMovies`)
      // .then((response)=> {
      //           // console.log(response.data);
      //           //Couper la reponse pour ne garder que les 10 plus populaires car trop d'entrées sinon
      //           let slicedMostPopularMovies = {};
      //           for (let i = 0; i <= 10; i++) {
      //             slicedMostPopularMovies[i] = response.data[i];
      //           }
      //           return (this.mostPopularMovies = slicedMostPopularMovies);
      //       }).catch((error) => {
      //           console.log(error);
      //       });
      await getCategorie("MostPopularMovies");
    }
  }
}
</script>

<style scoped>

</style>