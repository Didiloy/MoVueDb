<template>
  <div class="background">
        <div class="row">
            <Navbar />
        </div>
        <br>
        <br>
        <Sidebar />

        <div class="main">
            <div v-if="computedMovies == null" class="fullHeight">
                <h2>Recherche en cours...</h2>
                <br>
                <div class="conteneur-animation">
                    <div class="rond-animation">

                    </div>
                </div>
            </div>
            <div v-else> 
                <div class="row">
                    <div class="col s12 m6 l6">
                        <img class="image" :src="movies.image" alt="movie picture">
                    </div>
                    <div class="col s12 m6 l6">
                        <div class="row">
                            <h2>{{movieInfos.title}}</h2>
                        </div>
                        <div class="row">
                            <div class="col s12 m12 l12">
                                <!-- plot -->
                                <CardInfoMovie :titre="movieInfos.tagline !== null? movieInfos.tagline : 'Résumé'" 
                                :color_shadow="roseColor" 
                                :content="movieInfos.plotLocal"/>
                            </div>
                        </div>
                        
                        <div class="row">
                            <div class="col s12 m12 l4">
                                <!-- cast -->
                                <CardInfoMovie 
                                :titre="'Tête d\'affiche'"
                                :color_shadow="bleuColor"
                                :content="starList"/>
                            </div>
                            <div class="col s12 m12 l4">
                                <!-- box office -->
                                <CardInfoMovie 
                                :titre="'Box office'"
                                :color_shadow="roseColor"
                                :content="`<b>Budget </b>: ${movieInfos.boxOffice.budget}
                                <br> <b>Revenus cumulés </b>: ${movieInfos.boxOffice.cumulativeWorldwideGross}
                                <br> <b> Première semaine </b>: ${movieInfos.boxOffice.openingWeekendUSA}`"/>
                            </div>
                            <div class="col s12 m12 l4">
                                <!-- Studio de production -->
                                <CardInfoMovie 
                                :titre="'Studio de production'"
                                :color_shadow="bleuColor"
                                :content="movieInfos.companies"/>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col s12 m12 l4">
                                <!-- Directors -->
                                <CardInfoMovie 
                                :titre="'Directeurs'"
                                :color_shadow="roseColor"
                                :content="directorList"/>
                            </div>
                            <div class="col s12 m12 l4">
                                <!-- notes -->
                                <CardInfoMovie 
                                :titre="'Notes'"
                                :color_shadow="bleuColor"
                                :content="'placeholder'"/>
                            </div>
                            <div class="col s12 m12 l4">
                                <!-- date de sortie, durée, genre -->
                                <CardInfoMovie 
                                :titre="'Détails'"
                                :color_shadow="roseColor"
                                :content="details"/>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col s12 m12 l4">
                                <!-- similaire -->
                                <CardInfoMovie 
                                :titre="'À (re)découvrir'"
                                :color_shadow="bleuColor"
                                :content="'placeholder'"/>
                            </div>
                            <div class="col s12 m12 l4">
                                <!-- similaire -->
                                <CardInfoMovie 
                                :titre="'À (re)découvrir'"
                                :color_shadow="roseColor"
                                :content="'placeholder'"/>
                            </div>
                            <div class="col s12 m12 l4">
                                <!-- similaire -->
                                <CardInfoMovie 
                                :titre="'À (re)découvrir'"
                                :color_shadow="bleuColor"
                                :content="'placeholder'"/>
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
import CardInfoMovie from '@/components/CardInfoMovie.vue'

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
        movies: null,
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
      computedMovies(){
            return this.movies
        },
        computedName(){
            return this.name
        }
  },
  components: {
        Navbar,
        Sidebar,
        CardInfoMovie
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
          this.movies = [];
          await searchApi('SearchMovie', this.name)
          .then((responses) => {
              console.log(responses.results[0]);
              return (this.movies = responses.results[0], this.id = responses.results[0].id);
          });
        },
        async getInfos(){
            await searchApi('Title', this.id)
            .then((responses) => {
                console.log(responses);
                //loop throught starList to make a <p> tag
                const paragraphCast = () => {
                    let paragraphStar = '<p>';
                    responses.starList.map((star) => {
                        paragraphStar = paragraphStar + ' ' + star.name + ' <br>';
                    });
                    paragraphStar += '</p>';
                    return paragraphStar;
                    } 
                this.starList = paragraphCast();
                //loop throught directorList to make a <p> tag
                const paragraphDirector = () => {
                    let paragraph = '<p>';
                    responses.directorList.map((star) => {
                        paragraph = paragraph + ' ' + star.name + ' <br>';
                    });
                    paragraph += '</p>';
                    return paragraph;
                    } 
                this.directorList = paragraphDirector();
                //loop throught directorList to make a <p> tag
                const paragraphDetails = () => {
                    let paragraph = '<p> <b>Durée : </b>' + responses.runtimeStr;
                    paragraph = paragraph + '<br> <b>Date de sortie </b>' + responses.releaseDate;
                    paragraph += '<br> <b>Genres : </b>' + responses.genres;
                    paragraph += '</p>';
                    return paragraph;
                    } 
                this.details = paragraphDetails();
                return (this.movieInfos = responses);
            });
        }
    },
    watch: { //refresh components a chaque changement de name
        name:function(){
            this.getMovie().then(() => {
            //   console.log(this.id);
            this.getInfos();
            });
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

.conteneur-animation {
    position: absolute;
    width: 50vmin;
    height: 5vmin;
    background-image: linear-gradient(45deg,#5F51E5, #B94465);
    border-radius: .75rem;
    left: 45vw;
}

.rond-animation {
    width: 30px;
    height: 100%; 
    background-color: #5F51E5;
    border-radius: 1rem;
    left: 0;
    animation: search-animation 1s  infinite alternate;
}

@keyframes search-animation {
    0% {
        transform : translateX(0%); background-color: #B94465;
    }
    100% {
        transform : translateX(970%); background-color: #5F51E5;
    }
}

</style>