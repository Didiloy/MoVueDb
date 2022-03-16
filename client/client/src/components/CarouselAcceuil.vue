<template>
    <div>
        <div class="carousel carousel-slider" ref="carousel" v-if="computedTopMovies" >
            <span class="carousel-item" v-for="film in topMovies" v-bind:key="film.id">
                <img :src="film.image">
                
            </span>
            
            
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
            setInterval(() => {this.instance.next()}, 10000)
        })
        
    },
    methods: {
        async getMostPopularMovies(){
            await getCategorie("MostPopularMovies").then((movies) =>{
                console.log(movies);
                let tab =[];
                for(let i=0;i<5;i++){
                    tab.push(movies[i])
                }
            return (this.topMovies = tab);
            });
        },
        filmDetails(){
            
        }
    },
   components:{
      
  }
}
</script>

<style scoped>
.carousel {
    height: 820px !important;
}

img {
    width: auto;
    height: 820px;
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