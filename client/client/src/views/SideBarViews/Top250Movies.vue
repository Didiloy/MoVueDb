<template>
    <GridComponents  :path="path" :name="name"/>
</template>

<script>
// @ is an alias to /src
import M from 'materialize-css'
import 'materialize-css'
import 'materialize-css/dist/css/materialize.css'
import GridComponents from '../../components/GridComponents.vue'

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
  name: 'Top250Movies',
  components:{
      GridComponents
  },
  data(){
    return{
      path:"Top250Movies",
      name:"Les 250 films les plus populaires"
    }
  }
  
}
</script>
<style scoped>

</style>