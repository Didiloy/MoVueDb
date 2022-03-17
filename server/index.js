'use strict';

const express = require('express');
const app = express();
const port = 4000
const csv = require('csv-parser')
const fs = require('fs')
const cors = require('cors');
const { convertCSVToJson } = require('../server/fonction.js') 

const APIHomePath = "/APIFilm/"

//import { PrismaClient } from '@prisma/client'

//const prisma = new PrismaClient()
//const Prisma = require('@prisma/client');
//const prisma = new Prisma.PrismaClient();

app.use(cors());

//J'utiliser les fichier écrits pour gérer ces requetes
// const top250Movies = require('./api/top250Movies');


//rediriger les requete de ces urls vers les fichier
// app.use('/api/top250Movies', top250Movies);

app.listen(port, () => {
    console.log("listening on port " + port);
})

// Set up home route
app.get('/', (req, res) => {
    res.send('This is example page');
});



//Ici, la page d'acceuil avec pour lien : http://localhost:4000/APIFilm
app.get(APIHomePath,(req,res) => {
    res.send('This is the home page of our API')
})

app.get(APIHomePath+"test/",async (req,res) => {
    let tab = []
    convertCSVToJson("netflix_titles").then((response)=>{
        tab = response
        res.send(tab)
    })
    
});
   

