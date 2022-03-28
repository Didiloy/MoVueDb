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
const del = require('./routes/delete');
const put = require('./routes/put');

//rediriger les requete de ces urls vers les fichier
app.use('/search/disney', disney);
app.use('/search/netflix', netflix);
app.use('/search/amazon', amazon);
app.use('/create', create);
app.use('/delete/', del);
app.use('/update', put);


app.use(cors());
app.use(express.json());

app.listen(port, () => {
    console.log("listening on port " + port);
})

// Set up home route
app.get('/', (req, res) => {
    res.send('This is the homepage');
});