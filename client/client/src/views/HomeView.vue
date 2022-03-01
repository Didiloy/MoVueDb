<template>
  <div class="background">
      <div class="row">
        <Navbar />
      </div>
      <br>
      <br>
      <div class="row">
          <div class="col s2">
          <Sidebar />
      </div>
      <div class="col s10">
          <CarouselMostPopularMovies />
          <br>
          <CarouselBoxOfficeSemaine />
          <br>
          <CarouselBoxOfficeAllTime />
          <br>
          <CarouselInTheater />
          <br>
          <CarouselTop250Movies />
          <br>
          <CarouselTop250Series />
      </div>
      </div>
      <br>
      <br>
      
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Navbar from '@/components/Navbar.vue'
import Sidebar from '@/components/Sidebar.vue'
import CarouselMostPopularMovies from '@/components/CarouselMostPopularMovies.vue'
import CarouselBoxOfficeSemaine from '@/components/CarouselBoxOfficeSemaine.vue'
import CarouselBoxOfficeAllTime from '@/components/CarouselBoxOfficeAllTime.vue'
import CarouselInTheater from '@/components/CarouselInTheater.vue'
import CarouselTop250Movies from '@/components/CarouselTop250Movies.vue'
import CarouselTop250Series from '@/components/CarouselTop250Series.vue'
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
    HelloWorld,
    Navbar,
    Sidebar,
    CarouselMostPopularMovies,
    CarouselBoxOfficeSemaine,
    CarouselBoxOfficeAllTime,
    CarouselInTheater,
    CarouselTop250Movies,
    CarouselTop250Series
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
    background-size: cover;
}
</style>