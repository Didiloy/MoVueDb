<template>
    <div class="background">
        <div class="row fixe">
            <Navbar />
        </div>
        <br>
        <br>
        <Sidebar />

        <div class="main">
            <!-- Div permettant d'afficher l'animation pendant le chargement -->
            <div v-if="thereAreMovies == null" class="fullHeight">
                <h2>Recherche en cours...</h2>
                <br>
                <div class="conteneur-animation">
                    <div class="rond-animation">

                    </div>
                </div>
            </div>
            <div v-else>
                <div class="fullHeight">
                     <div class="searchTitle ">
                        <h2> {{searchTitle}}</h2>
                    </div>
                    <div class="principal">
                        <!-- On affiche des cartes différentes selon le type de film que l'on recherche -->
                        <div v-for="movies in films" v-bind:key="movies.id" class="">
                            <div>
                                <CardSearchMovies class="uneCard" v-if="chemin == 'SearchMovie' || chemin == 'SearchTitle'"
                                :name="movies.title" 
                                :image="movies.image" 
                                :description="movies.description.length > 100 ? movies.description.slice(0, 100) : movies.description" />


                                <CardSearchMovies class="uneCard" v-if="chemin == 'BoxOffice'"
                                :name="movies.title" 
                                :image="movies.image" 
                                :description="`Gain de la semaine : ${movies.weekend}`" />

                                <CardSearchMovies class="uneCard" v-if="chemin == 'MostPopularMovies' || chemin == 'MostPopularTvs' || chemin == 'Top250Movies' || chemin == 'Top250Tvs'"
                                :name="movies.title" 
                                :image="movies.image" 
                                :description="`Année : ${movies.year}
                                <br> Note : ${movies.imDbRating}/10
                                `" />

                                <CardSearchMovies class="uneCard" v-if="chemin == 'Fav'"
                                :name="movies.title" 
                                :image="movies.image" 
                                :description="movies.description.length > 100 ? movies.description.slice(0, 100) : movies.description" />
                            </div>
                            
                        </div>
                    </div>
                </div> 
                
            </div>
        </div>    
      <br>
      <br>
      <Footer />
    </div>
</template>

<script>
// @ is an alias to /src
import M from 'materialize-css'
import 'materialize-css'
import 'materialize-css/dist/css/materialize.css'
import Navbar from '@/components/Navbar.vue'
import Sidebar from '@/components/Sidebar.vue'
import {searchApi} from '@/api/api.js'
import CardSearchMovies from '../components/CardSearchMovies.vue'
import Footer from '@/components/Footer.vue'
import { getCategorie } from '../api/api.js'
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';

// Create an instance of Notyf
const notyf = new Notyf();

export default {
  name: 'Movie',
  props: {
      //Les props sont requises pour savoir quel type de film on affiche
        name: {
            required: true,
            type: String
        },
        path:{
            required:true,
            type: String
        }
  },
  data() {
    return{
        searchTitle: "",
        films: null,
        apiGetCategorie : false,
        chemin:this.path,
        isFav: false,
        favMovies: null,
    }
  },
  computed:{
        thereAreMovies(){
            return this.films
        },
        computedName(){
            return this.name
        },
        computedPath(){
            return this.path
        }
  },
  components: {
        Navbar,
        Sidebar,
        CardSearchMovies,
        Footer
  },
  created(){
      //Je verifie si il y a des éléments dans le local storage
      //Si il n'y en a pas j'ajoute un objet pour me permettre de mettres les films que l'utilisateur va ajouter
      if (localStorage.length == 0){
          localStorage.setItem('fav', JSON.stringify({})) //Je met un objet vide dans le local storage sous la clé fav pour me permettre de récupérer les favoris
      }
      try {
          let localStorageFav = localStorage.getItem('fav');
          this.favMovies = JSON.parse(localStorageFav);
      } catch (error) {
          console.log("impossible de récupérer l'objet dans le local storage\nerror:", error);
          notyf.error({
                     message: 'Un problème est survenu !',
                     duration: 3000,
                     position: {x: 'right', y: 'top'}
                 });
      }
      
      
  },
  mounted() {
      M.AutoInit(),
      this.testWhoPath()
    this.getMovie(this.path)
  },
  methods: {
      /**
       * Méthode permettant de récupérer une liste de films a afficher
       * @param {string } path - Catégorie de la recherche a effectuer sur l'api
       */
      async getMovie(path){
        this.searchTitle = this.name
        if (this.isFav){
            this.films = this.favMovies
        }else {
            if(this.apiGetCategorie){
                
                await getCategorie(path)
                .then((responses)=>{
                    return (this.films = responses)
                })
            }else{
            await searchApi(path, this.name)
            .then((responses) => {
                return (this.films = responses.results);
            });
            }
        }
        
        
        },
        /**
         * Méthode permettant de savoir a quelle catégorie appartient le chemin récupérer à l'appel du composant
         */
        testWhoPath(){
            console.log();
            if(this.path == "SearchTitle"){
                this.apiGetCategorie = false
            }else if (this.path == "Fav"){
                this.isFav = true
            }else{
                this.apiGetCategorie = true
            }
        }
    },
    watch: { //refresh components a chaque changement de name
        name:function(){
            this.getMovie(this.path).then();
        }
    }
}
</script>
<style scoped>
.fullHeight {
    height: auto;
}
.fixe{
    z-index: 1 !important;
}
.main{
    margin-left: 230px;
    z-index: 2;
}

.background{
    background-image: url('../assets/background.jpg');
    background-size: cover;
    min-height: 100vh;
    flex-grow: 1;
}

h2 {
    color: #5F51E5;
    text-align: center;
    text-shadow: 1px 2px 1px black;
}

img{
    width: 100%;
    height: auto;
    border-radius: 10px;
    
}

.principal{
    display: flex;
    position: initial;
    flex-wrap: wrap;
    justify-content: space-evenly;
}

.conteneur-animation {
    position: absolute;
    width: 20rem;
    height: 2rem;
    background-image: linear-gradient(45deg,#5F51E5, #B94465);
    border-radius: .75rem;
    left: 45vw;
}

.rond-animation {
    width: 2rem;
    height: 100%; 
    background-color: #5F51E5;
    border-radius: 1rem;
    left: 0;
    animation: search-animation 1s  infinite alternate;
}

@keyframes search-animation {
    0% {
        transform : translateX(0%);
        background-color: #B94465;
    }
    100% {
        transform : translateX(900%); background-color: #5F51E5;
    }
}

</style>