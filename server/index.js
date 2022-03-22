'use strict';

const express = require('express');
const app = express();
const port = 4000
const cors = require('cors');
const { convertCSVToJson } = require('../server/fonction.js')
const csv = require('csv-parser')
const fs = require('fs')
const PrismaClient = require('@prisma/client')
const prisma = new PrismaClient.PrismaClient();

const APIHomePath = "/api/films/"
const updateDatabase = "/api/updateDatabase"


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
app.get(APIHomePath, (req, res) => {
    res.send('This is the home page of our API')
})

app.get(APIHomePath + "test/", async(req, res) => {
    let tab = []
    convertCSVToJson("netflix_titles").then((response) => {
        tab = response
        res.send(tab)
    })

});

app.get(updateDatabase, async(req, res) => {
    const results = [];
    fs.createReadStream('./databases/netflix_titles.csv')
        .pipe(csv())
        .on('data', (data) => results.push(data))
        .on('end', async() => {
            console.log('done parsing csv');
            // console.log(results);

            results.forEach(async(result) => {
                try {
                    await prisma.netflix.create({
                        data: {
                            id: result.show_id,
                            type: result.type || " ",
                            title: result.title || " ",
                            director: result.director || " ",
                            cast: result.cast || " ",
                            country: result.country || " ",
                            date_added: result.date_added || " ",
                            release_year: result.release_year || " ",
                            duration: result.duration || " ",
                            listed_in: result.listed_in || " ",
                            description: result.description || " "
                        }
                    })
                    console.log('created');
                } catch (error) {
                    console.log(error);
                }
            })

            await prisma.netflix.findMany().then(results => res.send(results));
        })

});