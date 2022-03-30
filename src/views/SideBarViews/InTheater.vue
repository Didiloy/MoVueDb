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
  name: 'InTheater',
  components:{
      GridComponents
  },
  data(){
    return{
      path:"InTheaters",
      name:"les films en salle de cinéma"
    }
  }
  
}
</script>
<style scoped>

</style>