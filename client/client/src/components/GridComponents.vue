<template>
    <div class="background">
        <div class="row fixe">
            <Navbar />
        </div>
        <br>
        <br>
        <Sidebar />

        <div class="main">
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
                        <h2>Resultat de la recherche pour {{searchTitle}}</h2>
                    </div>
                    <div class="principal">
                        <div v-for="movies in films" v-bind:key="movies.id" class="">
                            <div>
                                <CardSearchMovies class="uneCard" v-if="chemin == 'SearchMovie'"
                                :name="movies.title" 
                                :image="movies.image" 
                                :description="movies.description" />


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
                            </div>
                            
                        </div>
                    </div>
                </div> 
                
            </div>
        </div>    
      <br>
      <br>
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
import router from '../router/index.js'
import CardSearchMovies from '../components/CardSearchMovies.vue'
import { getCategorie } from '../api/api.js'

export default {
  name: 'Movie',
  props: {
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
        chemin:this.path
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
        CardSearchMovies
  },
  created(){
      
  },
  mounted() {
      M.AutoInit(),
      this.testWhoPath(),
      console.log(this.path);
      this.getMovie(this.path)
  },
  methods: {
      async getMovie(path){
        //   this.films = [];
          this.searchTitle = this.name
            console.log(path);
          if(this.apiGetCategorie){
              
              await getCategorie(path)
              .then((responses)=>{
                  console.log("affichage");
                  console.log(responses);
                  return (this.films = responses)
              })
          }else{
            
            await searchApi(path, this.name)
            .then((responses) => {
                console.log(responses.results);
                return (this.films = responses.results);
            });
          }
          
        },
        testWhoPath(){
            console.log();
            if(this.path == "SearchMovie"){
                this.apiGetCategorie = false
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