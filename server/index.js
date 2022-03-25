'use strict';

const express = require('express');
const app = express();
const port = 4000
const cors = require('cors');
const { convertCSVToJson, lookDisneyTableId, lookDisneyTableType, lookTableByField , lookTableFieldContains, lookTableTwoFields } = require('../server/fonction.js')
const csv = require('csv-parser')
const fs = require('fs')
const PrismaClient = require('@prisma/client')
const prisma = new PrismaClient.PrismaClient();

const APIHomePath = "/api/films/"
const updateDatabase = "/api/updateDatabase"


app.use(cors());

app.listen(port, () => {
    console.log("listening on port " + port);
})

// Set up home route
app.get('/', (req, res) => {
    res.send('This is the homepage');
});

app.get(updateDatabase, async(req, res) => {
    const results = [];
    fs.createReadStream('./databases/netflix_titles.csv')
        .pipe(csv())
        .on('data', (data) => results.push(data))
        .on('end', async() => {
            console.log('done parsing csv');
            // console.log(results);

            for (let i = 0; i < results.length; i++) {
                try {
                    await prisma.netflix.create({
                        data: {
                            id: results[i].show_id,
                            type: results[i].type || " ",
                            title: results[i].title || " ",
                            director: results[i].director || " ",
                            cast: results[i].cast || " ",
                            country: results[i].country || " ",
                            date_added: results[i].date_added || " ",
                            release_year: results[i].release_year || " ",
                            duratioconvertCSVToJson, lookDisneyTableId, lookDisneyTableType, lookTableByField , lookTableByNamen: results[i].duration || " ",
                            listed_in: results[i].listed_in || " ",
                            description: results[i].description || " "
                        }
                    })
                    console.log('created ', results[i].title);
                    await new Promise(r => setTimeout(r, 500));
                } catch (error) {
                    console.log(error, "\n\n================================");
                }
            }

            await prisma.netflix.findMany().then(results => res.send(results));
        })

});


//Request on disney table
app.get("/search/disney/", (req, res) => {
    if (req.query.type) {
        lookTableByField(prisma.disney, "type", req.query.type).then((response) => { res.send(response) })
    }
    if (req.query.id) {
        lookTableByField(prisma.disney, "id", req.query.id).then((response) => { res.send(response) })
    }
    if (req.query.country) {
        lookTableFieldContains(prisma.disney, "country", req.query.country).then((response) => { res.send(response) })
    }
    if (req.query.year) {
        lookTableByField(prisma.disney, "release_year", req.query.year).then((response) => { res.send(response) })
    }
    if(req.query.title){
        lookTableFieldContains(prisma.disney, "title", req.query.title).then((response) => { res.send(response) })
    }
    if(req.query.categorie){
        lookTableFieldContains(prisma.disney, "listed_in",req.query.categorie).then((response) => { res.send(response) })
    }
    if(req.query.categorie && req.query.year || req.query.year && req.query.categorie){
        lookTableTwoFields(prisma.disney, ["listed_in", req.query.categorie], ["release_year", req.query.year]).then((response) => { res.send(response) })
    }
    if(req.query.categorie && req.query.type ||req.query.type && req.query.categorie){
        lookTableTwoFields(prisma.disney, ["listed_in", req.query.categorie], ["type", req.query.type]).then((response) => { res.send(response) })
    }
    if(req.query.categorie && req.query.director ||req.query.director && req.query.categorie){
        lookTableTwoFields(prisma.disney, ["listed_in", req.query.categorie], ["director", req.query.director]).then((response) => { res.send(response) })
    }
    if(req.query.cast && req.query.type ||req.query.type && req.query.cast){
        lookTableTwoFields(prisma.disney, ["cast", req.query.cast], ["type", req.query.type]).then((response) => { res.send(response) })
    }

})


//Request on Netflix table
app.get("/search/netflix/", (req, res) => {
    if (req.query.type) {
        lookTableByField(prisma.netflix, "type", req.query.type).then((response) => { res.send(response) })
    }
    if (req.query.id) {
        lookTableByField(prisma.netflix, "id", req.query.id).then((response) => { res.send(response) })
    }
    if (req.query.country) {
        lookTableFieldContains(prisma.netflix, "country", req.query.country).then((response) => { res.send(response) })
    }
    if (req.query.year) {
        lookTableByField(prisma.netflix, "release_year", req.query.year).then((response) => { res.send(response) })
    }
    if(req.query.title){
        lookTableFieldContains(prisma.netflix, "title", req.query.title).then((response) => { res.send(response) })
    }
    if(req.query.categorie){
        lookTableFieldContains(prisma.netflix, "listed_in",req.query.categorie).then((response) => { res.send(response) })
    }
    if(req.query.categorie && req.query.year || req.query.year && req.query.categorie){
        lookTableTwoFields(prisma.netflix, ["listed_in", req.query.categorie], ["release_year", req.query.year]).then((response) => { res.send(response) })
    }
    if(req.query.categorie && req.query.type ||req.query.type && req.query.categorie){
        lookTableTwoFields(prisma.netflix, ["listed_in", req.query.categorie], ["type", req.query.type]).then((response) => { res.send(response) })
    }
    if(req.query.categorie && req.query.director ||req.query.director && req.query.categorie){
        lookTableTwoFields(prisma.netflix, ["listed_in", req.query.categorie], ["director", req.query.director]).then((response) => { res.send(response) })
    }
    if(req.query.cast && req.query.type ||req.query.type && req.query.cast){
        lookTableTwoFields(prisma.netflix, ["cast", req.query.cast], ["type", req.query.type]).then((response) => { res.send(response) })
    }

})

//Request on Amazon table
app.get("/search/amazon/", (req, res) => {
    if (req.query.type) {
        lookTableByField(prisma.amazon, "type", req.query.type).then((response) => { res.send(response) })
    }
    if (req.query.id) {
        lookTableByField(prisma.amazon, "id", req.query.id).then((response) => { res.send(response) })
    }
    if (req.query.country) {
        lookTableFieldContains(prisma.amazon, "country", req.query.country).then((response) => { res.send(response) })
    }
    if (req.query.year) {
        lookTableByField(prisma.amazon, "release_year", req.query.year).then((response) => { res.send(response) })
    }
    if(req.query.title){
        lookTableFieldContains(prisma.amazon, "title", req.query.title).then((response) => { res.send(response) })
    }
    if(req.query.categorie){
        lookTableFieldContains(prisma.amazon, "listed_in",req.query.categorie).then((response) => { res.send(response) })
    }
    if(req.query.categorie && req.query.year || req.query.year && req.query.categorie){
        lookTableTwoFields(prisma.amazon, ["listed_in", req.query.categorie], ["release_year", req.query.year]).then((response) => { res.send(response) })
    }
    if(req.query.categorie && req.query.type ||req.query.type && req.query.categorie){
        lookTableTwoFields(prisma.amazon, ["listed_in", req.query.categorie], ["type", req.query.type]).then((response) => { res.send(response) })
    }
    if(req.query.categorie && req.query.director ||req.query.director && req.query.categorie){
        lookTableTwoFields(prisma.amazon, ["listed_in", req.query.categorie], ["director", req.query.director]).then((response) => { res.send(response) })
    }
    if(req.query.cast && req.query.type ||req.query.type && req.query.cast){
        lookTableTwoFields(prisma.amazon, ["cast", req.query.cast], ["type", req.query.type]).then((response) => { res.send(response) })
    }

    if(req.query.categorie && req.query.year && req.query.type){
        //TODO: changer le nom de la fonction et l'adapter
        // lookTableTwoFields(prisma.amazon, ["listed_in", req.query.categorie], ["release_year", req.query.year]).then((response) => { res.send(response) })
    }

})
