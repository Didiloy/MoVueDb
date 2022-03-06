<template>
    <nav>
        <div class="logo">
            <button v-on:click="goHome">
                <img src="../assets/clapperboard32x32.png" alt="">
            </button>
        </div>
  
        <div class="nav-items height">
  
            <!-- The Menu items -->
            <li><a href="#">TUTORIALS</a></li>
            <li><a href="#">STUDENT</a></li>
            <li><a href="#">JOBS</a></li>
            <li><a href="#">COURSES</a></li>
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
            router.replace(`/movie/${this.$refs.input.value}`)
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
    }

    .background-img {
        background-image: url('../assets/background.jpg') !important;
        background-size: cover;
    }
    .background-none {
        background-color: transparent !important;
    }

    .background-gris {
        background-color: #D0D0D0;    
    }

    .background-rose {
        background-color: #B94465;
        margin: 5px 10px;
        margin-bottom: 10px;
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
        nav .logo {
            color: #fff;
            font-size: 30px;
            font-weight: 600;
            letter-spacing: -1px;
        }
  
        /* Styling all the nav items as a whole */
        nav .nav-items {
            display: flex;
            flex: 1;
            padding: 0 0 0 33%;
             
        }
  
        /* Styling the list items in the nav tag */
        nav .nav-items li {
            list-style: none;
            padding: 0 10px;
            margin: 0 10px; 
            background-color: #B94465;
            border-radius: 10px;
        }
  
        /* Styling each list items */
        nav .nav-items li a {
            color: #fff;
            font-size: 15px;
            font-weight: 500;
            text-decoration: none;
            position: relative;
            top: -12px; left: 0px;
        }
  
        /* Setting the hover colour on the list items*/
          
        nav .nav-items li:hover {
            background-color: #19191b;
        }
          
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