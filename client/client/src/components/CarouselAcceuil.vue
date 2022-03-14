<template>
    <div class="carousel carousel-slider">
          <div class="carousel-fixed-item center">
            <a class="btn waves-effect white grey-text darken-text-2">button</a>
        </div>
    <a class="carousel-item" href="#one!"><img src="https://lorempixel.com/800/400/food/1"></a>
    <a class="carousel-item" href="#two!"><img src="https://lorempixel.com/800/400/food/2"></a>
    <a class="carousel-item" href="#three!"><img src="https://lorempixel.com/800/400/food/3"></a>
    <a class="carousel-item" href="#four!"><img src="https://lorempixel.com/800/400/food/4"></a>
  </div>
</template>

<script>
import M from 'materialize-css'
import 'materialize-css'
import 'materialize-css/dist/css/materialize.css'
import {getCategorie} from '../api/api.js'


export default {
    name :'CarouselAcceuil',
    data() {
        return {
            topMovies: null ,
            films_top: "Top 250 des meilleurs films",
            roseColor: "B94465",
            bleuColor: "5F51E5",
        }
    },
    computed:{
        
    },
    mounted() {
        M.AutoInit()
        M.Carousel.init({
            fullWidth: true,
            indicators: true
        });
    },
    methods: {

    },
   components:{
      
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