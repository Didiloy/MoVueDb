<template>

    <div class="card">
        <div class="card-image waves-effect waves-block waves-light">
            <img class="activator" :src="src">
        </div>
        <div class="card-title">
            <span class="card-title activator grey-text text-darken-4">{{name}}</span>
        </div>
        
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

.card :active{
    
}
.card .name{
    font-size: 30px;
    
}
.card-image{
    height: 320px;
    width: 240px;
    border-radius: 10px;
    
}

</style>