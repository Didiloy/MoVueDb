<template>
  <div class="background">
        <div class="row">
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
                <div class="searchTitle">
                    <h2>Resultat de la recherche : {{searchTitle}}</h2>
                </div>
                <div class="principal">
                    <div v-for="movies in films" v-bind:key="movies.id" class="secondaire">
                      
                      <CardSearchMovies class="" 
                      :name="movies.title" 
                      :image="movies.image" 
                      :description="movies.description" />
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

//quoi afficher:
//Actor list
//box office
//Companies
//directors
//genre
//imDbRating imDbRatingVotes
//plotLocal
//releaseDate
//runtimeStr
//Similars ?
//year

export default {
  name: 'Movie',
  props: {
      name: {
            required: true,
            type: String
      }
  },
  data() {
    return{
        searchTitle: "",
        films: null,
        id: null,
        movieInfos: null,
        starList: null,
        directorList: null,
        details: null,
        roseColor: "B94465",
        bleuColor: "5F51E5",
    }
  },
  computed:{
        thereAreMovies(){
            return this.films
        },
        computedName(){
            return this.name
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
      this.getMovie().then(() => {
        //   console.log(this.id);
          this.getInfos();
      });
  },
  methods: {
      async getMovie(){
          this.films = [];
          this.searchTitle = this.name
          await searchApi('SearchMovie', this.name)
          .then((responses) => {
              console.log(responses.results);
              return (this.films = responses.results);
          });
        }
    },
    watch: { //refresh components a chaque changement de name
        name:function(){
            this.getMovie().then();
        }
    }
}
</script>
<style scoped>
.fullHeight {
    height: 100vh;
}

.background{
    background-image: url('../assets/background.jpg') !important;
    background-size: cover;
}
.main{
    margin-left: 230px;
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
    50% {
        background-color: #65b944;
    }
    100% {
        transform : translateX(900%); background-color: #5F51E5;
    }
}

</style>