<template>
<!-- on utilise le composant qu'on a créé pour faire la grille de films-->
    <GridComponents  :path="path" :name="name"/>
</template>

<script>
// @ is an alias to /src
import 'materialize-css'
import 'materialize-css/dist/css/materialize.css'
import GridComponents from '../../components/GridComponents.vue'

export default {
  name: 'MostPopularSeries',
  components:{
      GridComponents
  },
  data(){
    return{
      path:"MostPopularTvs",
      name:"Les séries les plus populaires"
    }
  }
  
}
</script>
<style scoped>

</style>