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
import {getCategorie,searchApi} from '../api/api.js'


export default {
    name :'CarouselAcceuil',
    data() {
        return {
            topMovies: null ,
            tabImages:null,
            tabId:[],
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
                let tab =[];
                for(let i=0;i<5;i++){
                    console.log("salut");
                    tab.push(movies[i])
                    this.tabId.push(tab[i].id + "/Images")
                }
            
                this.getImagesById();
            return (this.topMovies = tab);
            });
        },
        async getImagesById(){
            this.tabId.forEach( async(id) =>{
               
                await searchApi("Title",id).then((movies) =>{

                })
            })
            
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
    height: 90vh !important;
}

img {
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
    object-fit: cover;
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