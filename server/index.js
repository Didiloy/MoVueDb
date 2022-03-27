'use strict';

const express = require('express');
const app = express();
const port = 4000
const cors = require('cors');
const fs = require('fs')
const PrismaClient = require('@prisma/client')
const prisma = new PrismaClient.PrismaClient();
const swaggerUi = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");

// const updateDatabase = "/api/updateDatabase"

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Movie and Tv Shows API",
            version: "1.0.0",
            description: "a express Movie and Tv Shows API"
        },
        servers: [{
            url: "http://localhost:4000"
        }]
    },
    apis: ["routes/*.js"]
}

const specs = swaggerJsDoc(options);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

//J'utiliser les fichier écrits pour gérer ces requetes
const disney = require('./routes/disney');
const netflix = require('./routes/netflix');
const amazon = require('./routes/amazon');
const create = require('./routes/create');

//rediriger les requete de ces urls vers les fichier
app.use('/search/disney', disney);
app.use('/search/netflix', netflix);
app.use('/search/amazon', amazon);
app.use('/create', create);


app.use(cors());
app.use(express.json());

app.listen(port, () => {
    console.log("listening on port " + port);
})

// Set up home route
app.get('/', (req, res) => {
    res.send('This is the homepage');
});

// app.get(updateDatabase, async(req, res) => {
//     const results = [];
//     fs.createReadStream('./databases/netflix_titles.csv')
//         .pipe(csv())
//         .on('data', (data) => results.push(data))
//         .on('end', async() => {
//             console.log('done parsing csv');
//             // console.log(results);

//             for (let i = 0; i < results.length; i++) {
//                 try {
//                     await prisma.netflix.create({
//                         data: {
//                             id: results[i].show_id,
//                             type: results[i].type || " ",
//                             title: results[i].title || " ",
//                             director: results[i].director || " ",
//                             cast: results[i].cast || " ",
//                             country: results[i].country || " ",
//                             date_added: results[i].date_added || " ",
//                             release_year: results[i].release_year || " ",
//                             listed_in: results[i].listed_in || " ",
//                             description: results[i].description || " "
//                         }
//                     })
//                     console.log('created ', results[i].title);
//                     await new Promise(r => setTimeout(r, 500));
//                 } catch (error) {
//                     console.log(error, "\n\n================================");
//                 }
//             }

//             await prisma.netflix.findMany().then(results => res.send(results));
//         })

// });