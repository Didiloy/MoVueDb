<template>
  <div class="background">
      <div class="row">
        <Navbar />
      </div>
      <br>
      <br>
      <Sidebar />
      <div class="main">
          <CarouselAcceuil />
          <br>
          <CarouselMostPopularMovies />
          <br>
          <CarouselMostPopularTvs />
          <br>
          <!-- <CarouselTop250Movies />
          <br>
          <CarouselTop250Series />
          <br>
          <CarouselBoxOfficeSemaine /> -->
          <br>
          <!-- <CarouselInTheater />
          <br>
          <CarouselBoxOfficeAllTime /> -->

      </div>
      <br>
      <br>
      
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Sidebar from '@/components/Sidebar.vue'
import CarouselMostPopularMovies from '@/components/CarouselMostPopularMovies.vue'
import CarouselBoxOfficeSemaine from '@/components/CarouselBoxOfficeSemaine.vue'
import CarouselBoxOfficeAllTime from '@/components/CarouselBoxOfficeAllTime.vue'
import CarouselInTheater from '@/components/CarouselInTheater.vue'
import CarouselTop250Movies from '@/components/CarouselTop250Movies.vue'
import CarouselTop250Series from '@/components/CarouselTop250Series.vue'
import CarouselMostPopularTvs from '@/components/CarouselMostPopularTvs.vue'
import CarouselAcceuil from '@/components/CarouselAcceuil.vue'
import M from 'materialize-css'
import 'materialize-css'
import 'materialize-css/dist/css/materialize.css'

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
    CarouselMostPopularMovies,
    CarouselBoxOfficeSemaine,
    CarouselBoxOfficeAllTime,
    CarouselInTheater,
    CarouselTop250Movies,
    CarouselTop250Series,
    CarouselMostPopularTvs,
    CarouselAcceuil
  },
  created(){
    
  },
  mounted() {
   
  },
  methods: {
    
  }
}
</script>
<style scoped>
.background{
    background-image: url('../assets/background.jpg') !important;
    background-size:cover ;
}
.row{
  position: fixed;
  z-index: 1;
}

.main{
    margin-left: 230px;
    z-index: 2;
}
</style>