<template>
    <GridComponents  :path="path" :name="name"/>
</template>

<script>
// @ is an alias to /src
import GridComponents from '../components/GridComponents.vue'

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
  name: 'Movies',
  components:{
      GridComponents
  },
  data(){
    return{
      path:"SearchMovie",
      name:""
    }
  }
  
}
</script>
<style scoped>

</style>