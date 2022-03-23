<template>
    <div class="background-img">
        <ul id="nav-mobile" class="sidenav sidenav-fixed">
            <li class="no-padding">
            <ul class="collapsible collapsible-accordion">
                <li class="bold"><a class="collapsible-header waves-effect" @click="goToBoxOffice">Box office de la semaine</a></li>
                <li class="bold"><a class="collapsible-header waves-effect" @click="goToInTheater">En salle de cinéma</a></li>
                <li class="bold"><a class="collapsible-header waves-effect" @click="goToMostPopularMovies">Films les plus populaires</a></li>
                <li class="bold"><a class="collapsible-header waves-effect" @click="goToMostPopularSeries">Series les plus populaires</a></li>
                <li class="bold"><a class="collapsible-header waves-effect" @click="goToTop250Movies">Top 250 des meilleurs films</a></li>
                <li class="bold"><a  class="collapsible-header waves-effect" @click="goToTop250Tvs">Top 250 des meilleurs series</a></li>
                <li class="bold"><a class="collapsible-header waves-effect" @click="goToFav">Films et séries favoris</a></li>
            </ul>
            </li>
            
        </ul>

    </div>

</template>

<script>

import M from 'materialize-css'
import 'materialize-css'
import 'materialize-css/dist/css/materialize.css'
import router from '../router/index.js'

export default {
    
    data: () => ({
            isPanelOpen: true
    }),
    methods: {
        closeSidebarPanel() {
            this.isPanelOpen = false
        },
        goToBoxOffice(){
            router.replace(`/boxOffice`)
        },
        goToBoxOfficeAllTime(){
            router.replace(`/boxOfficeAllTime`)
        },
        goToInTheater(){
            router.replace(`/inTheater`)
        },
        goToMostPopularMovies(){
            router.replace(`/mostPopularMovies`)
        },
        goToMostPopularSeries(){
            router.replace(`/mostPopularSeries`)
        },
        goToTop250Movies(){
            router.replace(`/top250Movies`)
        },
        goToTop250Tvs(){
            router.replace(`/top250Tvs`)
        },
        goToFav(){
            router.replace(`/fav`)
        },
    }
}
</script>

<style scoped>
.background-img {
        background-image: url('../assets/background.jpg') !important;
        background-size: cover;
    }
.sidenav-fixed{

    margin-top :56px !important;
    width: 220px !important;
    background-image: url('../assets/background.jpg') !important;
    background-size: cover;
}
.sidenav-fixed .bold{
    background-color: #5F51E5 !important;
    transition: 0.4s;
    
}
.sidenav-fixed .bold:hover{
    background-color: #7F74EA !important;
    margin-left: 10px;
    transition: 0.4s;
}

.sidenav-fixed a{
    color : white !important
}

.sidenav-fixed a:hover {
    color: #B94465 !important;
}

.color-purple{
    background-color: #5F51E5 !important;
}

</style>