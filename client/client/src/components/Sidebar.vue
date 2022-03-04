<template>
    <div class="background-img">
        <ul id="nav-mobile" class="sidenav sidenav-fixed">
            <li class="no-padding">
            <ul class="collapsible collapsible-accordion">
                <li class="bold"><a class="collapsible-header waves-effect">Box office de la semaine</a></li>
                <li class="bold"><a class="collapsible-header waves-effect">Box office</a></li>
                <li class="bold"><a class="collapsible-header waves-effect">En salle de cinéma</a></li>
                <li class="bold"><a class="collapsible-header waves-effect">Films les plus populaires</a></li>
                <li class="bold"><a class="collapsible-header waves-effect">Series les plus populaires</a></li>
                <li class="bold"><a class="collapsible-header waves-effect">rechercher des films</a></li>
                <li class="bold"><a class="collapsible-header waves-effect">rechercher des series</a></li>
                <li class="bold"><a class="collapsible-header waves-effect">Top 250 des meilleurs films</a></li>
                <li class="bold"><a  class="collapsible-header waves-effect">Top 250 des meilleurs series</a></li>
            </ul>
            </li>
            
        </ul>

    </div>

</template>

<script>

import M from 'materialize-css'
import 'materialize-css'
import 'materialize-css/dist/css/materialize.css'

export default {
    
    data: () => ({
            isPanelOpen: true
    }),
    methods: {
        closeSidebarPanel() {
            this.isPanelOpen = false
        }
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