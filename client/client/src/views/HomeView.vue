<template>
  <div class="background">
      <div class="row navbar">
        <Navbar class="nav"/>
      </div>
      <br>
      <br>
      <Sidebar />
      <div class="main">
            <CarouselAcceuil />
          <br>
          <div class="row">
            <div class="container">
                <h2 class="center"> <span style="color: #5F51E5">À</span> Découvrir</h2>
            </div>
          </div>
          <div class="row">
            <div class="col m12 l4">
              <div class="container">
                  <div class="card" @click="goToMostPopularMovies()">
                    <div class="card-image">
                      <img src="../assets/image_movie.jpg" style="height: 246px" alt="image films">
                      <span class="card-title">Films les plus populaires</span>
                    </div>
                    <div class="card-content">
                      <p>Découvrez ici les films les plus populaires du moment et les derniers films actuellement au cinéma !
                      </p>
                    </div>
                  </div>
              </div>
            </div>
            <div class="col m12 l4">
              <div class="container">
                  <div class="card " @click="goToMostPopularSeries()">
                    <div class="card-image">
                      <img src="../assets/image_serie.jpg" style="height: 246px" alt="image serie">
                      <span class="card-title">Séries les plus populaires</span>
                    </div>
                    <div class="card-content">
                      <p>Découvrez ici les séries les plus populaires du moment !
                        Découvrez combien elles sont notées par les internautes !
                      </p>
                    </div>
                  </div>
              </div>
            </div>
            <div class="col m12 l4">
              <div class="container">
                  <div class="card" @click="goToBoxOffice()">
                    <div class="card-image">
                      <img src="../assets/image_box_office.jpg" style="height: 246px" alt="image box office">
                      <span class="card-title">Box office</span>
                    </div>
                    <div class="card-content">
                      <p>Découvrez ici le box office de la semaine ! Voyez quels films ont le plus rapportés 
                        cette semaine !
                      </p>
                    </div>
                  </div>
              </div>
            </div>
          </div>
          <!-- <CarouselMostPopularMovies />
          <br>
          <CarouselMostPopularTvs />
          <br> -->
           <!-- Section: Popular -->
      </div>
      <br>
      <br>
      
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Sidebar from '@/components/Sidebar.vue'
import CarouselAcceuil from '@/components/CarouselAcceuil.vue'
import M from 'materialize-css'
import 'materialize-css'
import 'materialize-css/dist/css/materialize.css'
import router from '../router/index.js'

export default {
  name: 'HomeView',
  data() {
    return{
        
    }
  },
  computed:{
    
  },
  components: {
    Navbar,
    Sidebar,
    CarouselAcceuil
  },
  created(){
    
  },
  mounted() {
   
  },
  methods: {
    // Définition des fonctions permettant d'aller dans les différentes pages
      goToMostPopularMovies(){
            router.replace(`/mostPopularMovies`)
        },
        goToMostPopularSeries(){
            router.replace(`/mostPopularSeries`)
        },
        goToBoxOffice(){
            router.replace(`/boxOffice`)
        },
  }
}
</script>
<style scoped>
.background{
    background-image: url('../assets/background.jpg') !important;
    background-size:cover ;
}
.navbar{
  position: fixed;
  z-index: 3 !important;
}

.main{
  margin-left: 230px;
  
}

.card{
  border-radius: .5rem;
  transition: .4s;
}

.card:hover{
  transform: scale(1.025);
  transition: 0.4s;
  border: none;
  box-shadow: 0 2px 10px 0 #5F51E5;
  cursor: pointer;
}

img {
  border-top-left-radius: .5rem !important;
  border-top-right-radius: .5rem !important;
}

</style>