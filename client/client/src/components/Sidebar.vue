<template>
    <div class="background-img">
        <ul id="nav-mobile" class="sidenav sidenav-fixed">
            <li class="no-padding">
            <ul class="collapsible collapsible-accordion">
                <li class="bold"><a href="about.html" class="collapsible-header waves-effect waves-teal">Abouuuuut</a></li>
                <li class="bold"><a href="getting-started.html" class="collapsible-header waves-effect waves-teal">Getting Started</a></li>
                <li class="bold"><a class="collapsible-header waves-effect waves-teal">CSS</a></li>
                <li class="bold"><a class="collapsible-header waves-effect waves-teal">Components</a></li>
                <li class="bold"><a class="collapsible-header waves-effect waves-teal">JavaScript</a></li>
                <li class="bold"><a class="collapsible-header waves-effect waves-teal">Forms</a></li>
                <li class="bold"><a href="mobile.html" class="collapsible-header waves-effect waves-teal">Mobile</a></li>
                <li class="bold"><a href="showcase.html" class="collapsible-header waves-effect waves-teal">Showcase</a></li>
                <li class="bold"><a href="themes.html" class="collapsible-header waves-effect waves-teal">Themes</a></li>
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
    width: 200px !important;
    background-image: url('../assets/background.jpg') !important;
    background-size: cover;
}
.sidenav-fixed .bold{
    background-color: #5F51E5 !important;
    
}
.sidenav-fixed .bold:hover{
    background-color: #7F74EA !important;
}
.sidenav-fixed a{
    color : white !important
}

</style>