<template>
  <div class="conteneur">
    <div class="carte">
      <div class="carte-image" :style="imageCard">
      </div>
      <div class="card-text">
          <span class="date" :style="computedColor">{{date}}</span>
          <h2>{{name}}</h2>
          <p>Avec {{crew}}</p>
          </div>
      <div class="card-stats" :style="computedColor">
        <div class="stat">
          <div class="value">{{note}}/10</div>
        </div>
        <div class="stat border">
          <div class="value">{{numNotes}}</div>
          <div class="type">notes</div>
        </div>
        <div class="stat">
          <div class="value"><a href="#" class="link">Voir plus</a></div>
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
        card_stat_color: {
          required: true,
          type:String
        },
        date:{
          required: true,
          type:String
        },
        note:{
          required: true,
          type:String
        },
        numNotes: {
          required: true,
          type:String
        },
        crew:{
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
          '--color': `#${this.card_stat_color}`
        };
      }
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
  grid-template-rows: 210px 150px 60px;
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

.carte-image {
  grid-area: image;
}
.card-text {
  grid-area: text;
}
.card-stats {
  grid-area: stats; 
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
.card-text .date {
  /* color: rgb(255, 7, 110); */
  color: var(--color);
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
  /* background: rgb(255, 7, 110); */
  background: var(--color);
}

.card-stats .stat {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
  padding:10px;
}

.link {
  text-decoration: none;
  color: white;
}

.card:hover {
  transform: scale(1.05);
  box-shadow: 5px 5px 15px rgba(0,0,0,0.6);
}
</style>