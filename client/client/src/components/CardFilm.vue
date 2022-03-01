<template>
    <div class="card">
        <h3 class="name">{{name}}</h3>
        <img :src="src" class="image">
    </div>
</template>

<script>

import 'materialize-css'
import 'materialize-css/dist/css/materialize.css'

export default {
    name :'CardFilm',
    props:{
        src: {
            required: true,
            type: String
        },
        name:{
            required : true,
            type:String
        }
    }
}
</script>

<style scoped>
.card{
    background-color: #5F51E5;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column-reverse;
    border-radius: 10px;
    margin-top: 0px;
    cursor: pointer;
}
.card :hover{
    background-color: #7F74EA;
}
.card :active{
    transform: scale(.97) rotate(1deg);
}
.name{
    font-size: 30px;
    
}
.image{
    margin-top: 20px;
    width: 90% !important;
    height: 70% !important;
}
</style>