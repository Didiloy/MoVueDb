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
  name: 'BoxOfficeAllTime',
  components:{
      GridComponents
  },
  data(){
    return{
      path:"BoxOfficeAllTime",
      name:"les Box Offices"
    }
  }
  
}
</script>
<style scoped>

</style>