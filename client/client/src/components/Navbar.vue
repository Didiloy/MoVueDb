<template>
    <nav>
        <div class="logoo">
            <img src="../assets/clapperboard32x32.png" alt="" @click="goHome">
        </div>
        <div >
            <h4 class="title"><b>MoVueDb</b></h4>
        </div>
        <!-- Defining the search bars -->
        <div class="height">
            <input ref="input" v-on:keyup.enter="search" type="text" placeholder="Search..." id="searchbar">
        </div>
    </nav>
</template>

<script>

// import M from 'materialize-css'
// import 'materialize-css'
// import 'materialize-css/dist/css/materialize.css'
import {searchApi} from '../api/api.js'
import router from '../router/index.js'

export default {
    name: "Navbar",
    data() {
        return {}
    },  
    methods: {
        search() {
            // searchApi('Search', this.$refs.input.value).then((response)=> {
            //    console.log(response.results);
            // }).catch((error) => {
            //     console.log(error);
            // });
            router.replace(`/movies/${this.$refs.input.value}`)
        },
        goHome(){
            router.replace(`/`)
        }
    }
}
</script>

<style scoped>
    img {
        height: 40px;
        width: 40px;
        margin-left: 5px;
        margin-top: 5px;
    }
    .title{
        margin-top: 5px;
        color: #5F51E5;
    }
    /* Styling all the elements in nav as a whole */
        nav {
            background-color: transparent !important;
            background-image: url('../assets/background.jpg') !important;
            background-size: cover;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: space-between;
            height: 56px;
            padding: 0 50px;
            position: fixed;
        }
  
        /* Styling the logo */
        nav .logoo {
            color: #fff;
            font-size: 30px;
            height: 50px;
            width: 50px;
            font-weight: 600;
            letter-spacing: -1px;
            transition: .4s;
            
        }
        nav .logoo:hover{
            background-color: #B94465;
            cursor: pointer;
            border-radius: 10px;
            
            transition: .4s;
        }
  
        /* Styling all the nav items as a whole */
          
        #searchbar {
            display: flex;
            width: 100%;
            height: 100%;
            border-radius: 10px;
            box-sizing: border-box;
            padding-left: 20px;
            background-color: #D0D0D0;
        }

        input::placeholder {
            color: #19191b;
        }
        .height {
            height: 60%;
        }
        button {
            border: none;
            color: none;
            background: none;
            height: 100%;
            width: 100%;
            border-radius: 15px;
        }
</style>