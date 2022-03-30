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
  name: 'BoxOfficeSemaine',
  components:{
      GridComponents
  },
  data(){
    return{
      path:"BoxOffice",
      name:"les Box Offices de la semaine"
    }
  }
  
}
</script>
<style scoped>

</style>