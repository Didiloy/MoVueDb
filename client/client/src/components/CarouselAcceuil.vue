<template>
    <div class="carousel carousel-slider" ref="carousel">
        <a class="carousel-item" href="#one!"><img src="../assets/background.jpg"></a>
        <a class="carousel-item" href="#two!"><img src="../assets/background.jpg"></a>
        <a class="carousel-item" href="#three!"><img src="../assets/background.jpg"></a>
        <a class="carousel-item" href="#four!"><img src="../assets/background.jpg"></a>
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
            instance:null,
        }
    },
    computed:{
        
    },
    mounted() {
        // M.AutoInit()
        this.instance = M.Carousel.init(this.$refs.carousel,{
            fullWidth: true,
            indicators: true
        });
        setInterval(() => {this.instance.next()}, 6000)
    },
    methods: {

    },
   components:{
      
  }
}
</script>

<style scoped>
.carousel {
    height: 90vh !important;
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