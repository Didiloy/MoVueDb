<template>
      <!-- on utilise le composant qu'on a créé pour faire la grille de films-->
      <GridComponents  :path="path" :name="name"/>
</template>

<script>
// @ is an alias to /src
import GridComponents from '../components/GridComponents.vue'

export default {
  name: 'Movies',
  components:{
      GridComponents,
  },
  data(){
    return{
      path:"SearchTitle",
      name:""
    }
  }
  
}
</script>
<style scoped>

</style>