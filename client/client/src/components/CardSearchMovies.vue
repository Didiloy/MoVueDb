<template>
  <div class="conteneur">
    <div class="carte">
      <div class="carte-image" :style="imageCard">

      </div>
      <div class="card-text">
          <h2>{{name}}</h2>
          <p>{{description}}</p>
          </div>
      <div class="card-stats" :style="computedColor">
        <div class="stat">
          <button v-on:click="search"> voir plus</button>
        </div>
      </div>
    </div>
  </div>
    
</template>

<script>

// import 'materialize-css'
// import 'materialize-css/dist/css/materialize.css'
import router from '../router/index.js'

export default {
    name :'CardFilm2',
    props:{
        image: {
            required: true,
            type: String
        },
        name:{
            required : true,
            type:String
        },
        description: {
          required: true,
          type:String
        }
    },
    computed: {
      imageCard(){
        return { 
          '--background-image' : `url(${this.image})`,
        };
      },
      computedColor(){
        return { 
          '--color': `#5F51E5`
        };
      }
    },
    methods: {
      async search() {
            // searchApi('Search', this.$refs.input.value).then((response)=> {
            //    console.log(response.results);
            // }).catch((error) => {
            //     console.log(error);
            // });
            router.replace(`/movie/${this.name}`)
        },
    }
}
</script>

<style scoped>
.conteneur {
  width: 360px
}
.carte {
  display: grid;
  grid-template-columns: 300px;
  grid-template-rows: 290px 150px 60px;
  grid-template-areas: "image" "text" "stats";
  border-radius: 18px;
  background: white;
  box-shadow: 5px 5px 15px rgba(0,0,0,0.9);
  font-family: roboto;
  text-align: center;

  transition: 0.5s ease;
  cursor: pointer;
  margin:30px;
}

.card-text {
  grid-area: text;
}

.carte-image {
  grid-area: image;
  background: var(--background-image);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background-size: cover;
}

.card-text {
  grid-area: text;
  margin: 25px;
}

.card-text p {
  color: grey;
  font-size:15px;
  font-weight: 300;
}
.card-text h2 {
  margin-top:0px;
  font-size:28px;
}

.card-stats {
  grid-area: stats; 
  display: grid;
  grid-template-columns: 1fr;
  
  grid-template-rows: 2fr;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  /* background: rgb(255, 7, 110); */
  background: var(--color);
}

button {
  border: none;
  text-align: center;
  color: white;
  background: var(--color);
  height: 100%;
  width: 100%;
  border-radius: 15px;
  transition: .5s;
}
button:hover {
  cursor: pointer;
  filter: brightness(85%);
  transition: .5s;
}
</style>