const express = require('express')
const router = express.Router()
const PrismaClient = require('@prisma/client')
const prisma = new PrismaClient.PrismaClient();
const { lookTableByField, lookTableFieldContains, lookTableTwoFields } = require('../fonction.js')

/**
 * @swagger
 * components:
 *      schemas:
 *          Disney:
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
 *  name: Disney
 *  description: all the routes to deal with disney's movies and tv shows
 */

/**
 * @swagger
 * /search/disney:
 *      get:
 *          summary: returns a list of all the movies and tv shows on Disney+
 *          tags: [Disney]
 *          responses: 
 *              200: 
 *                  description: the list of movies that matches the parameters
 *                  content: application/json
 */
router.get('/', (req, res) => {
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
    if (req.query.title) {
        lookTableFieldContains(prisma.disney, "title", req.query.title).then((response) => { res.send(response) })
    }
    if (req.query.categorie) {
        lookTableFieldContains(prisma.disney, "listed_in", req.query.categorie).then((response) => { res.send(response) })
    }
    if (req.query.categorie && req.query.year || req.query.year && req.query.categorie) {
        lookTableTwoFields(prisma.disney, ["listed_in", req.query.categorie], ["release_year", req.query.year]).then((response) => { res.send(response) })
    }
    if (req.query.categorie && req.query.type || req.query.type && req.query.categorie) {
        lookTableTwoFields(prisma.disney, ["listed_in", req.query.categorie], ["type", req.query.type]).then((response) => { res.send(response) })
    }
    if (req.query.categorie && req.query.director || req.query.director && req.query.categorie) {
        lookTableTwoFields(prisma.disney, ["listed_in", req.query.categorie], ["director", req.query.director]).then((response) => { res.send(response) })
    }
    if (req.query.cast && req.query.type || req.query.type && req.query.cast) {
        lookTableTwoFields(prisma.disney, ["cast", req.query.cast], ["type", req.query.type]).then((response) => { res.send(response) })
    }
    //Si aucun paramètres on renvoi la liste de tout les films
    else {
        lookTableFieldContains(prisma.disney, "id", 's').then((response) => { res.send(response) })
    }
})

module.exports = router;