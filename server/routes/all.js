const express = require('express')
const router = express.Router()
const PrismaClient = require('@prisma/client')
const prisma = new PrismaClient.PrismaClient();
const { lookTableByField, lookTableFieldContains, lookTableTwoFields } = require('../fonction.js')

router.use(express.json());

/**
 * @swagger
 * components:
 *      schemas:
 *          Amazon:
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
 *  name: Amazon Prime
 *  description: all the routes to deal with amazon prime's movies and tv shows
 */

/**
 * @swagger
 * /search/amazon:
 *      get:
 *          summary: returns a list of all the movies and tv shows on Amazon Prime
 *          tags: [Amazon Prime]
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

router.get('/', async (req, res) => {
    let response = {};
    if (req.query.type) {
        try {
            await lookTableByField(prisma.amazon, "type", req.query.type).then((answer) => {
                console.log("answer: " + answer);
                response.amazon = answer
            })
            await lookTableByField(prisma.netflix, "type", req.query.type).then((answer) => {
                response.netflix = answer
            })
            await lookTableByField(prisma.disney, "type", req.query.type).then((answer) => {
                response.disney = answer
            })
            console.log(response);
            res.status(200).send(response);
        } catch (error) {
            res.status(500).send(error)
        }
        
    }
    if (req.query.id) {
        try {
            await lookTableByField(prisma.amazon, "id", req.query.id).then((answer) => {
                console.log("answer: " + answer);
                response.amazon = answer
            })
            await lookTableByField(prisma.netflix, "id", req.query.id).then((answer) => {
                response.netflix = answer
            })
            await lookTableByField(prisma.disney, "id", req.query.id).then((answer) => {
                response.disney = answer
            })
            console.log(response);
            res.status(200).send(response);
        } catch (error) {
            res.status(500).send(error)
        }
        
    }
    if (req.query.country) {
        try {
            await lookTableByField(prisma.amazon, "country", req.query.country).then((answer) => {
                console.log("answer: " + answer);
                response.amazon = answer
            })
            await lookTableByField(prisma.netflix, "country", req.query.country).then((answer) => {
                response.netflix = answer
            })
            await lookTableByField(prisma.disney, "country", req.query.country).then((answer) => {
                response.disney = answer
            })
            console.log(response);
            res.status(200).send(response);
        } catch (error) {
            res.status(500).send(error)
        }
        
    }
    if (req.query.year) {
        try {
            await lookTableByField(prisma.amazon, "year", req.query.year).then((answer) => {
                console.log("answer: " + answer);
                response.amazon = answer
            })
            await lookTableByField(prisma.netflix, "year", req.query.year).then((answer) => {
                response.netflix = answer
            })
            await lookTableByField(prisma.disney, "year", req.query.year).then((answer) => {
                response.disney = answer
            })
            console.log(response);
            res.status(200).send(response);
        } catch (error) {
            res.status(500).send(error)
        }
        
    }
    if (req.query.title) {
        try {
            await lookTableFieldContains(prisma.amazon, "title", req.query.title).then((answer) => {
                console.log("answer: " + answer);
                response.amazon = answer
            })
            await lookTableFieldContains(prisma.netflix, "title", req.query.title).then((answer) => {
                response.netflix = answer
            })
            await lookTableFieldContains(prisma.disney, "title", req.query.title).then((answer) => {
                response.disney = answer
            })
            console.log(response);
            res.status(200).send(response);
        } catch (error) {
            res.status(500).send(error)
        }
        
    }
    if (req.query.categorie) {
        try {
            await lookTableFieldContains(prisma.amazon, "listed_in", req.query.categorie).then((answer) => {
                console.log("answer: " + answer);
                response.amazon = answer
            })
            await lookTableFieldContains(prisma.netflix, "listed_in", req.categoriey.categorie).then((answer) => {
                response.netflix = answer
            })
            await lookTableFieldContains(prisma.disney, "listed_in", req.query.categorie).then((answer) => {
                response.disney = answer
            })
            console.log(response);
            res.status(200).send(response);
        } catch (error) {
            res.status(500).send(error)
        }
        
    }
    if (req.query.cast) {
        try {
            await lookTableFieldContains(prisma.amazon, "cast", req.query.cast).then((answer) => {
                console.log("answer: " + answer);
                response.amazon = answer
            })
            await lookTableFieldContains(prisma.netflix, "cast", req.categoriey.cast).then((answer) => {
                response.netflix = answer
            })
            await lookTableFieldContains(prisma.disney, "cast", req.query.cast).cast((answer) => {
                response.disney = answer
            })
            console.log(response);
            res.status(200).send(response);
        } catch (error) {
            res.status(500).send(error)
        }
        
    }
    if (req.query.categorie && req.query.year || req.query.year && req.query.categorie) {
        try {
            await lookTableTwoFields(prisma.amazon, ["listed_in", req.query.categorie], ["release_year", req.query.year]).then((answer) => {
                // console.log("answer: " + answer);
                response.amazon = answer
            })
            await lookTableTwoFields(prisma.amazon, ["listed_in", req.query.categorie], ["release_year", req.query.year]).then((answer) => {
                response.netflix = answer
            })
            await lookTableTwoFields(prisma.amazon, ["listed_in", req.query.categorie], ["release_year", req.query.year]).then((answer) => {
                response.disney = answer
            })
            // console.log(response);
            res.status(200).send(response);
            return
        } catch (error) {
            res.status(500).send(error)
        }
    }
    if (req.query.categorie && req.query.type || req.query.type && req.query.categorie) {
        lookTableTwoFields(prisma.amazon, ["listed_in", req.query.categorie], ["type", req.query.type]).then((response) => {
            res.status(200).send(response);
            return;
        })
    }
    if (req.query.categorie && req.query.director || req.query.director && req.query.categorie) {
        lookTableTwoFields(prisma.amazon, ["listed_in", req.query.categorie], ["director", req.query.director]).then((response) => {
            res.status(200).send(response);
            return;
        })
    }
    if (req.query.cast && req.query.type || req.query.type && req.query.cast) {
        lookTableTwoFields(prisma.amazon, ["cast", req.query.cast], ["type", req.query.type]).then((response) => {
            res.status(200).send(response);
            return;
        })
    }

    if (req.query.categorie && req.query.year && req.query.type) {
        //TODO: changer le nom de la fonction et l'adapter
        // lookTableTwoFields(prisma.amazon, ["listed_in", req.query.categorie], ["release_year", req.query.year]).then((response) => { res.send(response) })
    }

    //Si aucun paramètres on renvoi la liste de tout les films
    // else {
    //     lookTableFieldContains(prisma.amazon, "id", 's').then((response) => { res.send(response) })
    // }

});


module.exports = router;