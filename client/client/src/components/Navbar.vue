<template>
    <nav>
        <div class="logo">
            Logo
        </div>
  
        <div class="nav-items">
  
            <!-- The Menu items -->
            <li><a href="#">TUTORIALS</a></li>
            <li><a href="#">STUDENT</a></li>
            <li><a href="#">JOBS</a></li>
            <li><a href="#">COURSES</a></li>
        </div>
  
        <!-- Defining the search bars -->
        <div class="searchbar">
            <input type="text" placeholder="search">
            <div class="icon">
                <i class="fas fa-search"></i>
            </div>
        </div>
  
        <!-- Defining the login button -->
        <div class="licon">
            <li>
                <a href="#">
                    <i class="fas fa-user-circle
                        fa-2x" style="color: white;">
                    </i>
                </a>
            </li>
        </div>
    </nav>
</template>

<script>

// import M from 'materialize-css'
// import 'materialize-css'
// import 'materialize-css/dist/css/materialize.css'

export default {
    // mounted () {
    //     M.AutoInit()
    // },    
}
</script>

<style scoped>
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
            background: #037729;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: space-between;
            height: 70px;
            padding: 0 100px;
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
            padding: 0 0 0 200px;
        }
  
        /* Styling the list items in the nav tag */
        nav .nav-items li {
            list-style: none;
            padding: 0 10px;
        }
  
        /* Styling each list items */
        nav .nav-items li a {
            color: #fff;
            font-size: 15px;
            font-weight: 500;
            text-decoration: none;
        }
  
        /* Setting the hover colour on the list items*/
          
        nav .nav-items li a:hover {
            color: #19191b;
        }
          
        nav .searchbar {
            position: relative;
        }
  
        /* Styling the search box where the 
            input would be given */
        nav .searchbar input[type="text"] {
            border: 0;
            padding: 0;
            width: 0px;
            height: 35px;
            border-radius: 3px;
            transition: all 0.3s ease;
        }
  
        /* Styling the search bar icon */
        nav .searchbar .icon {
            display: flex;
            position: absolute;
            top: 0;
            right: 0;
            width: 35px;
            height: 100%;
            background: none;
            border-radius: 3px;
            color: #fff;
            transition: all 0.5s 0.3s ease;
        }
          
        nav .searchbar .icon i {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            cursor: pointer;
        }
          
        nav .searchbar .icon.active {
            background: #062333;
            transition: all 0.3s ease;
        }
          
        nav .searchbar input[type="text"].active {
            width: 250px;
            padding: 0 10px;
            transition: all 0.5s 0.2s ease;
        }
          
        nav .licon li {
            list-style: none;
            display: flex;
        }
          
        nav .licon li a {
            padding: 0 20px;
        }
  
        /* Changing the colour of the login 
            icon when hovered over*/
          
        .fa-user-circle:hover {
            color: #0e0d0d !important;
        }
</style>