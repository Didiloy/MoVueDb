<template>
    <div class="card card-shadow" :style="computedColor">
      <div class="card-header">{{titre}}</div>
      <div class="card-body">
        <div v-html="content"></div>
        <div>
          <p class="link" @click="goToOtherFilms"><b>{{link}}</b></p>
        </div> 
        <div v-if="image_content"> 
          <img class="image" :src="image_content.image_link" alt="movie picture">
        </div>
      </div>
      <div class="card-footer">
        <!-- <button class="btn">Details</button> -->
      </div>
    </div>
</template>

<script>
import router from '../router/index.js'

export default {


  name: "CardInfoMovie",
  data() {
    return {

    }
  },
  props: {
    titre: {
      required: false,
      type:String
    },
    color_shadow: {
        required: true,
        type:String
    },
    content: {
      required: false,
      type:String
    },
    image_content: {
      required: false,
      type:Object
    },
    link:{
      required:false,
      type:String
    }
  },
  computed: {
      computedColor(){
        return { 
          '--color': `#${this.color_shadow}`
        };
      }
    },
  methods:{
    goToOtherFilms(){
      router.replace(`/movie/${this.link}`)
    }
  }
}
</script>

<style scoped>
img{
    width: 100%;
    height: auto;
    border-radius: 10px;
    
}


.card {
  --padding: 1rem;
  background: rgb(255, 255, 255, 0.3);
  /* border: 1px solid #777; */
  border-radius: .50rem;
  overflow: hidden;
  transition: 0.4s;
  
}

.card.card-shadow {
  border: none;
  box-shadow: 0 2px 10px 0 var(--color);
}

.card-header {
  font-size: 1.5rem;
  padding-top: 10px;
  padding-bottom: 0;
  margin-bottom: .5rem;
  text-align: center;
}

.card-header.card-image {
  padding: 0;
  overflow: hidden;
}

.card:hover {
  transform: scale(1.025);
  transition: 0.4s;
}

.card-body {
  font-size: .9rem;
  padding: 0 var(--padding);
}


.card-footer {
  margin-top: 1rem;
  padding: var(--padding);
  padding-top: 0;
}

.link{
  cursor: pointer;
}

.btn {
  --color: hsl(200, 50%, 50%);
  background: var(--color);
  color: white;
  border: none;
  font-size: 1rem;
  padding: .5em .75em;
  border-radius: .25em;
  cursor: pointer;
}

.btn:hover, .btn:focus {
  background: hsl(200, 50%, 60%);
}

.btn.btn-outline {
  background: none;
  border: 1px solid var(--color);
  color: var(--color);
}

.btn.btn-outline:hover, .btn.btn-outline:focus {
  background: hsl(200, 50%, 90%);
}

.btn + .btn {
  margin-left: .25rem;
}
</style>