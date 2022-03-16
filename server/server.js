/*
const express = require('express');
const app = express();
const cors = require('cors');

import { PrismaClient } from '@prisma/client'
import Hapi from '@hapi/hapi'
const prisma = new PrismaClient()
*/


'use strict';

const Prisma = require('prisma/prisma-client');
const prisma = new Prisma.PrismaClient();



const Hapi = require('@hapi/hapi');

const init = async () => {
    const server = Hapi.server({
        port : 3000,
        host: 'localhost'
    })

    server.route({
        method: 'GET',
        path: '/',
        handler: (request, h) =>{
            return 'Hello World';
        }
    })

    await server.start();
    console.log('Server running on %s', server.info.uri);
}

process.on('unhandledRejection', (err) => {
    
    console.log(err.statusCode);
    process.exit(1);
});


init();


/*
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
    res.send('This is the homepage');
});

*/