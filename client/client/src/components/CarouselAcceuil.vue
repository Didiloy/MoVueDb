<template>
    <div>
        <section class="slider" ref="slider">
            <ul class="slides">
                <!-- affichage des différents films -->
                <li v-for="film in topMovies" v-bind:key="film.id">
                    <div class="row">
                            <div class="col s12 m8">
                                <img :src="film.image" alt="">
                            </div>
                            <div class="col s12 m4">
                                <h1>{{film.title}}</h1>
                                <br>
                                <CardInfoMovie :color_shadow="roseColor" :content="'<b>Avec</b> : <br>'+ film.crew"/>
                                <br>
                                <CardInfoMovie :color_shadow="bleuColor" :content="'<br><b>Note IMDB </b>: '+ film.imDbRating + '/10'" />
                                <br>
                                <CardInfoMovie :color_shadow="roseColor" :content="'<br><b>Année de sortie</b>: '+ film.year" />
                                <br>
                                <a class="waves-effect waves-light btn" @click="search(film.title)">En voir plus !</a>
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
import CardInfoMovie from '@/components/CardInfoMovie.vue'
import router from '../router/index.js'


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
            M.Slider.init(this.$refs.slider, {
                indicators: false,
                height: 800,
                transition: 1000,
                interval: 10000
            });
            this.getImagesById()
        })
        
    },
    methods: {
        /**
         * Méthode permettant de récupérer les films les plus populaires du moment et de renvoyer les 5 premiers
         */
        async getMostPopularMovies(){
            await getCategorie("MostPopularMovies").then((movies) =>{
                let tab =[];
                for(let i=0;i<5;i++){
                    tab.push(movies[i])
                    this.tabId.push(tab[i].id + "/Images")
                }
            return (this.topMovies = tab);
            });
        },
        /**
         * Méthode permettant de récupérer l'image d'un film grace à son ID IMDB
         */
        async getImagesById(){ //avoir les images en bonne qualité
            this.topMovies.forEach( async(movie) =>{
                await searchApi("Title",movie.id).then((movieById) =>{
                    movie.image = movieById.image
                })
            })
            
        },
        /**
         * Fonction permettant d'afficher la page de détail du film
         */
        search(name) {
            router.replace(`/movie/${name}`)
        },
    },
   components:{
      CardInfoMovie
  }
}
</script>

<style scoped>


.slides {
    /* background-color: white !important; */
    background-image: url('../assets/background.jpg') !important;

}

.btn {
    background-color: #5F51E5 ;
    width: 100%;
}

.btn:hover {
    background-color: #B94465 ;
    transform: scale(1.025);
    transition: 0.4s;
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
    width: auto;
    height: 820px;
    background-repeat: no-repeat;
    background-size: contain;
}


#btn-carousel {
    border-radius: 20px;
    background-color: #5F51E5 !important;
    color: #5F51E5 ;
    font-weight: bold;
    font-size: large;
    margin-top: 200px;
    height: auto;
    object-fit: cover;
    padding: 5px;
    margin-top: 15px !important;
    border-radius: .75rem;
    box-shadow: 0 2px 10px 0 black;
}
</style>