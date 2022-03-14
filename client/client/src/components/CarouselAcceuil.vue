<template>
    <div>
        <!-- <div class="carousel carousel-slider center no-autoinit" ref="carousel" v-if="computedTopMovies" >
            <div class="carousel-item" v-for="film in topMovies" v-bind:key="film.id">
                <div class="row">
                    <div class="col s12 m8">
                        <div class="carte">
                            <img :src="film.image" alt="">
                        </div>
                        
                    </div>
                    <div class="col s12 m4">
                        <h1>{{film.title}}</h1>
                        
                    </div>
                </div>
                
                
            </div>
            
            
        </div> -->

    <section class="slider" ref="slider">
        <ul class="slides">
            <li v-for="film in topMovies" v-bind:key="film.id">
                <div class="row">
                        <div class="col s12 m8">
                            <img :src="film.image" alt="">
                            <!-- <div class="carte">
                                
                            </div> -->
                            
                        </div>
                        <div class="col s12 m4">
                            <h1>{{film.title}}</h1>
                            
                        </div>
                    </div>
            </li>
        </ul>
  </section>
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
        this.getMostPopularMovies()
        .then( () => {
            // M.AutoInit()
            // this.instance = M.Carousel.init(this.$refs.carousel,{
            //     fullWidth: true,
            //     indicators: true
            // });
            // setInterval(() => {this.instance.next()}, 6000)
            M.Slider.init(this.$refs.slider, {
                indicators: false,
                height: 800,
                transition: 1000,
                interval: 6000
            });
        })
        
    },
    methods: {
        async getMostPopularMovies(){
            await getCategorie("MostPopularMovies").then((movies) =>{
                let tab =[];
                for(let i=0;i<5;i++){
                    // console.log("salut");
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

h1 {
    color: #5F51E5;
    text-align: center;
    text-shadow: 1px 2px 1px black;
}
.carte {
    padding-top : 15px;
    border-radius : .75rem;
    background-color : white;
    box-shadow: 0 2px 10px 0 black;
}

img {
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
    object-fit: cover;
    padding: 5px;
    border-radius: .75rem;
    box-shadow: 0 2px 10px 0 black;
}
</style>