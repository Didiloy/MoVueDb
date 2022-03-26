const express = require('express')
const router = express.Router()
const PrismaClient = require('@prisma/client')
const prisma = new PrismaClient.PrismaClient();
const { lookTableByField, lookTableFieldContains, lookTableTwoFields } = require('../fonction.js')

/**
 * @swagger
 * components:
 *      schemas:
 *          Netflix:
 *              type: object
 *              properties:
 *                  id: 
 *                      type: string   
 *                      description: the id of the movie in the database ex:"s123"
 *                  type: 
 *                      type: string   
 *                      description: the type of the movie in the database ex:"movie, tv show"
 *                  title: 
 *                      type: string   
 *                      description: the title of the movie in the database ex:"spider-man"
 *                  cast: 
 *                      type: string   
 *                      description: 1 or more members of the cast of movie ex:"Bryan Cranston"
 *                  country: 
 *                      type: string   
 *                      description: the country were the movie were produced ex:"Canada"
 *                  year: 
 *                      type: string   
 *                      description: the release year of the movie ex:"2020"
 *                  categorie: 
 *                      type: string   
 *                      description: 1 or more categories of the movie ex:"comedy" 
 */

/**
 * @swagger
 * tags:
 *  name: Netflix
 *  description: all the routes to deal with netflix's movies and tv shows
 */

/**
 * @swagger
 * /search/netflix:
 *      get:
 *          summary: returns a list of all the movies and tv shows on Netflix
 *          tags: [Netflix]
 *          responses: 
 *              200: 
 *                  description: the list of movies that matches the parameters
 *                  content: application/json
 *          parameters:
 *              - in: query
 *                name: title
 *                schema:
 *                 type: string
 *                description: the title of the movie or a string contained inside the title
 *              - in: query
 *                name: type
 *                schema:
 *                 type: string
 *                description: the type the media (movie or tv show)
 *              - in: query
 *                name: id
 *                schema:
 *                 type: string
 *                description: the id the media in the database for example "s123"
 *              - in: query
 *                name: country
 *                schema:
 *                 type: string
 *                description: the country where the media were produced
 *              - in: query
 *                name: year
 *                schema:
 *                 type: string
 *                description: the release year of the media 
 *              - in: query
 *                name: categorie
 *                schema:
 *                 type: string
 *                description: the categorie of the media (horror, comedie, etc)
 */

router.get('/', (req, res) => {
    if (req.query.type) {
        lookTableByField(prisma.netflix, "type", req.query.type).then((response) => {
            res.status(200).send(response);
            return;
        })
    }
    if (req.query.id) {
        lookTableByField(prisma.netflix, "id", req.query.id).then((response) => {
            res.status(200).send(response);
            return;
        })
    }
    if (req.query.country) {
        lookTableFieldContains(prisma.netflix, "country", req.query.country).then((response) => {
            res.status(200).send(response);
            return;
        })
    }
    if (req.query.year) {
        lookTableByField(prisma.netflix, "release_year", req.query.year).then((response) => {
            res.status(200).send(response);
            return;
        })
    }
    if (req.query.title) {
        lookTableFieldContains(prisma.netflix, "title", req.query.title).then((response) => {
            res.status(200).send(response);
            return;
        })
    }
    if (req.query.categorie) {
        lookTableFieldContains(prisma.netflix, "listed_in", req.query.categorie).then((response) => {
            res.status(200).send(response);
            return;
        })
    }
    if (req.query.categorie && req.query.year || req.query.year && req.query.categorie) {
        lookTableTwoFields(prisma.netflix, ["listed_in", req.query.categorie], ["release_year", req.query.year]).then((response) => {
            res.status(200).send(response);
            return;
        })
    }
    if (req.query.categorie && req.query.type || req.query.type && req.query.categorie) {
        lookTableTwoFields(prisma.netflix, ["listed_in", req.query.categorie], ["type", req.query.type]).then((response) => {
            res.status(200).send(response);
            return;
        })
    }
    if (req.query.categorie && req.query.director || req.query.director && req.query.categorie) {
        lookTableTwoFields(prisma.netflix, ["listed_in", req.query.categorie], ["director", req.query.director]).then((response) => {
            res.status(200).send(response);
            return;
        })
    }
    if (req.query.cast && req.query.type || req.query.type && req.query.cast) {
        lookTableTwoFields(prisma.netflix, ["cast", req.query.cast], ["type", req.query.type]).then((response) => {
            res.status(200).send(response);
            return;
        })
    }
    //Si aucun paramètres on renvoi la liste de tout les films
    // else {
    //     lookTableFieldContains(prisma.netflix, "id", 's').then((response) => { res.send(response) })
    // }
});

module.exports = router;