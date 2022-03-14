<template>
    <div>
        <div class="carousel carousel-slider" ref="carousel" v-if="computedTopMovies">
            <div class="fill">
<a class="carousel-item" href="#one!"><img src="https://m.media-amazon.com/images/M/MV5BOGE2YWUzMDItNTg2Ny00NTUzLTlmZGYtNWMyNzVjMjQ3MThkXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_Ratio0.6716_AL_.jpg"></a>
            
            </div>
            <a class="carousel-item" href="#two!"><img :src="topMovies[1].image"></a>
            <a class="carousel-item" href="#three!"><img :src="topMovies[2].image"></a>
            <a class="carousel-item" href="#four!"><img :src="topMovies[3].image"></a>
            <a class="carousel-item" href="#four!"><img :src="topMovies[4].image"></a>
        </div>
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
        computedTopMovies : function(){
            return this.topMovies
        }
    },
    mounted() {
        // M.AutoInit()
        this.getMostPopularMovies()
        .then( () => {
            this.instance = M.Carousel.init(this.$refs.carousel,{
                fullWidth: true,
                indicators: true
            });
            setInterval(() => {this.instance.next()}, 6000)
        })
        
    },
    methods: {
        async getMostPopularMovies(){
            await getCategorie("MostPopularMovies").then((movies) =>{
                console.log(movies);
            return (this.topMovies = movies);
            });
        },
    },
   components:{
      
  }
}
</script>

<style scoped>
.carousel {
    height: 90vh !important;
}

img {
    width: auto;
    height: 90vh;
    background-repeat: no-repeat;
    background-size: contain;
}

/* .fill {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden
}
.fill img {
    flex-shrink: 0;
    min-width: 100%;
    min-height: 100%
} */

#btn-carousel {
    border-radius: 20px;
    background-color: #5F51E5 !important;
    color: #5F51E5 ;
    font-weight: bold;
    font-size: large;
    margin-top: 200px;
}
</style>