<template>
  <div class="conteneur">
    <div class="card">
      <div class="card-image" :style="imageCard">
          <!-- <img :src="image" alt=""> -->
      </div>
      <div class="card-text">
          <span class="date">4 days ago</span>
          <h2>{{name}}</h2>
          <p>Lorem ipsum dolor sit amet consectetur, Ducimus, repudiandae temporibus omnis illum maxime quod deserunt eligendi dolor</p>
      </div>
      <div class="card-stats">
        <div class="stat">
          <div class="value">4<sup>m</sup></div>
          <div class="type">read</div>
        </div>
        <div class="stat border">
          <div class="value">5123</div>
          <div class="type">views</div>
        </div>
        <div class="stat">
          <div class="value">32</div>
          <div class="type">comments</div>
        </div>
      </div>
    </div>
  </div>
    
</template>

<script>

// import 'materialize-css'
// import 'materialize-css/dist/css/materialize.css'

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
        color: {
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
          '--color': `#${this.color}`
        };
      }
    }
}
</script>

<style scoped>
.conteneur {
  width: 380px
}
.card {
  display: grid;
  grid-template-columns: 300px;
  grid-template-rows: 210px 210px 80px;
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

.card-image {
  grid-area: image;
}
.card-text {
  grid-area: text;
}
.card-stats {
  grid-area: stats; 
}

.card-image {
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
.card-text .date {
  color: rgb(255, 7, 110);
  /* color: var(color); */
  font-size:13px;
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
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  background: rgb(255, 7, 110);
  /* background: var(color); */
}

.card-stats .stat {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
  padding:10px;
}

.card:hover {
  transform: scale(1.05);
  box-shadow: 5px 5px 15px rgba(0,0,0,0.6);
}
</style>