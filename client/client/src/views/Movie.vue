<template>
  <div class="background">
        <div class="row fixe">
            <Navbar />
        </div>
        <br>
        <br>
        <Sidebar />

        <div class="main">
            <div v-if="computedMovies == null" class="fullHeight">
                <h2>Recherche en cours...</h2>
                <br>
                <!-- Permet de faire l'animation pendant la recherche -->
                <div class="conteneur-animation">  
                    <div class="rond-animation">

                    </div>
                </div>
            </div>
            <div v-else> 
                <div class="row" v-if="isMovie">
                    <div class="col s12 m6 l6">
                        <CardInfoMovie 
                                :color_shadow="bleuColor" 
                                :image_content="{ image_link: movies.image}"/>
                        <!-- <img class="image" :src="movies.image" alt="movie picture"> -->
                    </div>
                    <div class="col s12 m6 l6">
                        <div class="row">
                            <div class="col s6">
                                <h2>{{movieInfos.title}}</h2>
                            </div>
                            <div class="col s6 divFav" v-if="isFav(this.movieInfos.id)">
                                <a class="waves-effect waves-light btn addToFav" @click="deleteFav(this.movieInfos.id)">Retirer des favoris !</a>
                            </div>
                            <div class="col s6 divFav" v-else>
                                <a class="waves-effect waves-light btn addToFav" @click="addToFav">Ajouter au favoris !</a>
                            </div>
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
                                :link_image="this.movieInfos.similars[0].image"
                                :link="this.movieInfos.similars[0].title" />
                            </div>
                            <div class="col s12 m12 l4">
                                <!-- similaire -->
                                <CardInfoMovie 
                                :titre="'À (re)découvrir'"
                                :color_shadow="roseColor"
                                :link_image="this.movieInfos.similars[1].image"
                                :link="this.movieInfos.similars[1].title"/>
                            </div>
                            <div class="col s12 m12 l4">
                                <!-- similaire -->
                                <CardInfoMovie 
                                :titre="'À (re)découvrir'"
                                :color_shadow="bleuColor"
                                :link_image="this.movieInfos.similars[2].image"
                                :link="this.movieInfos.similars[2].title"/>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col s12 m12 l12" v-if="computedTrailerLink">
                                <!-- Trailer -->
                                <iframe class="trailer" 
                                :src="computedTrailerLink" 
                                title="YouTube video player" 
                                frameborder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowfullscreen>
                                </iframe>
                                <p class="link"><a :href="computedNonTransformedLink"> Regarder sur youtube !!</a></p>
                                    <!-- <video  controls class="trailer" :poster="computedThumbnail">
                                        <source :src="computedTrailerLink" type="video/ogg">
                                        <source :src="computedTrailerLink" type="video/mp4">
                                        <source :src="computedTrailerLink" type="video/webm">
                                        Votre navigateur ne peux pas afficher la vidéo.
                                    </video> -->
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div class="row" v-if="isSerie">
                    <div class="col s12 m6 l6">
                        <CardInfoMovie 
                                :color_shadow="bleuColor" 
                                :image_content="{ image_link: movies.image}"/>
                        <!-- <img class="image" :src="movies.image" alt="movie picture"> -->
                    </div>
                    <div class="col s12 m6 l6">
                        <div class="row">
                            <div class="col s6">
                                <h2>{{movieInfos.title}}</h2>
                            </div>
                             <div class="col s6 divFav" v-if="isFav(this.movieInfos.id)">
                                <a class="waves-effect waves-light btn addToFav" @click="deleteFav(this.movieInfos.id)">Retirer des favoris !</a>
                            </div>
                            <div class="col s6 divFav" v-else>
                                <a class="waves-effect waves-light btn addToFav" @click="addToFav">Ajouter au favoris !</a>
                            </div>
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
                                :titre="'Langues'"
                                :color_shadow="roseColor"
                                :content="this.movieInfos.languages"/>
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
                                :titre="'Créateurs'"
                                :color_shadow="roseColor"
                                :content="movieInfos.tvSeriesInfo.creators"/>
                            </div>
                            <div class="col s12 m12 l4">
                                <!-- notes -->
                                <CardInfoMovie 
                                :titre="'Notes'"
                                :color_shadow="bleuColor"
                                :content="this.note"/>
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
                                <CardInfoMovie 
                                :titre="'À (re)découvrir'"
                                :color_shadow="bleuColor"
                                :link_image="this.movieInfos.similars[0].image"
                                :link="this.movieInfos.similars[0].title" />
                            </div>
                            
                            <div class="col s12 m12 l4">
                                <!-- similaire -->
                                <CardInfoMovie 
                                :titre="'À (re)découvrir'"
                                :color_shadow="roseColor"
                                :link_image="this.movieInfos.similars[1].image"
                                :link="this.movieInfos.similars[1].title"/>
                            </div>
                            <div class="col s12 m12 l4">
                                <!-- similaire -->
                                <CardInfoMovie 
                                :titre="'À (re)découvrir'"
                                :color_shadow="bleuColor"
                                :link_image="this.movieInfos.similars[2].image"
                                :link="this.movieInfos.similars[2].title"/>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col s12 m12 l12" v-if="computedTrailerLink">
                                <!-- Trailer -->
                                <iframe class="trailer" 
                                :src="computedTrailerLink" 
                                title="YouTube video player" 
                                frameborder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowfullscreen>
                                </iframe>
                                <p class="link"><a :href="computedNonTransformedLink"> Regarder sur youtube !!</a></p>
                                    <!-- <video  controls class="trailer" :poster="computedThumbnail">
                                        <source :src="computedTrailerLink" type="video/ogg">
                                        <source :src="computedTrailerLink" type="video/mp4">
                                        <source :src="computedTrailerLink" type="video/webm">
                                        Votre navigateur ne peux pas afficher la vidéo.
                                    </video> -->
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
const movieTrailer = require( 'movie-trailer' )

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
        note:null,
        starList: null,
        directorList: null,
        details: null,
        trailer_link: null,
        thumbnail: null,
        nonTransformed_link: null,
        roseColor: "B94465",
        bleuColor: "5F51E5",
        isMovie:false,
        isSerie:false
    }
  },
  computed:{
      computedMovies(){
            return this.movies
        },
        computedName(){
            return this.name
        },
        computedTrailerLink(){
            return this.trailer_link
        },
        computedThumbnail(){
            return this.thumbnail
        },
        computedNonTransformedLink(){
            return this.nonTransformed_link
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
          this.getInfos()
            .then(this.getLinkTrailer())
      });
  },
  methods: {
      async getMovie(){
          this.movies = [];
          await searchApi('SearchMovie', this.name)
          .then((responses) => {
            //   console.log("result");
              console.log(responses.results[0]);
              return (this.movies = responses.results[0], this.id = responses.results[0].id);
          });
        },
        async getInfos(){
            await searchApi('Title', this.id)
            .then((responses) => {
                console.log(responses);
                if(responses.type == "Movie"){
                    console.log("This is a movie");
                    this.isMovie = true
                    this.isSerie = false


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


                }else if (responses.type == "TVSeries") {
                    console.log("This is a serie");
                    this.isSerie = true
                    this.isMovie = false
                    
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
                        let paragraph = '<p> <b>Nombre de saisons : </b>' + responses.tvSeriesInfo.seasons;
                        paragraph = paragraph + '<br> <b>Date de sortie </b>' + responses.releaseDate;
                        paragraph += '<br> <b>Genres : </b>' + responses.genres;
                        paragraph += '</p>';
                        return paragraph;
                        } 
                    this.details = paragraphDetails();
                    this.note = responses.imDbRating + '/10'
                    return (this.movieInfos = responses);

                }
                //loop throught starList to make a <p> tag
                
            })
        },
        async getLinkTrailer(){
            // await searchApi('Trailer', this.id)
            // .then((response) => {
            //     console.log(response);
            //     this.trailer_link = response.linkEmbed;
            //     this.thumbnail = response.thumbnailUrl
            // });
            await movieTrailer(this.name)
            .then((responses) => {
                this.nonTransformed_link = responses;
                const YOUTUBE_EMBED_ENDPOINT = "https://www.youtube.com/embed/"
                const ID_OF_YOUTUBE_VIDEO = responses.slice(responses.lastIndexOf('=') +1)
                let link =  YOUTUBE_EMBED_ENDPOINT + ID_OF_YOUTUBE_VIDEO
                this.trailer_link = link
                
            })
        },
        addToFav(){
            if (localStorage.length == 0){
                localStorage.setItem('fav', JSON.stringify({})) //Je met un objet vide dans le local storage sous la clé fav pour me permettre de récupérer les favoris
            }
            let localStorageFav = localStorage.getItem('fav');
            this.favMovies = JSON.parse(localStorageFav);
            //Ajouter le film au local storage dans le bon format
            this.favMovies[this.movieInfos.id] = {"id": this.movieInfos.id,
             "title": this.movieInfos.title,
             "image": this.movieInfos.image,
             "description" : this.movieInfos.plotLocal
             }
            localStorage.setItem('fav', JSON.stringify(this.favMovies))
            this.$router.go()
        },
        isFav(id){
            let localStorageFav = localStorage.getItem('fav');
            this.favMovies = JSON.parse(localStorageFav);
            if (id in this.favMovies) {
                return true;
            }
            return false;
        },
        deleteFav(id){
            let localStorageFav = localStorage.getItem('fav');
            this.favMovies = JSON.parse(localStorageFav);
            console.log(this.favMovies);
            delete this.favMovies[id]
            localStorage.setItem('fav', JSON.stringify(this.favMovies))
            this.$router.go()
        }
    },
    watch: { //refresh components a chaque changement de name
        name:function(){
            this.getMovie().then(() => {
            //   console.log(this.id);
            this.getInfos()
            .then(this.getLinkTrailer())
            
            });
        }
    }
}
</script>


<style scoped>
.fullHeight {
    height: 100vh;
}

.fixe{
    z-index: 1 !important;
}

.background{
    background-image: url('../assets/background.jpg') !important;
    background-size: cover;
}
.fixe{
    z-index: 1;
}
.main{
    margin-left: 230px;
    z-index: 2;
}

h2 {
    color: #5F51E5;
    text-align: center;
    text-shadow: 1px 2px 1px black;
}

.divFav {
    height : 115px;
}

.addToFav {
    background-color: #B94465 !important;
    text-align: center;
    margin-top: 13%;
    margin-left: 35%;
}
img{
    width: 100%;
    height: auto;
    border-radius: 10px;
    
}

.link a {
    text-decoration: none;
}

.link{
    color: #5F51E5;
    text-align: center;
    font-size: 2rem;
    text-decoration: underline;
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

.trailer {
    width: 100%;
    height: 400px;
}

</style>