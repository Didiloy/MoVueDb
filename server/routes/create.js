const express = require('express')
const router = express.Router()
const PrismaClient = require('@prisma/client')
const prisma = new PrismaClient.PrismaClient();
const { createMedia } = require('../fonction.js')

router.use(express.json());

/**
 * @swagger
 * /create/:table:
 *      post:
 *          description: allow you to add a movies or a tv shows on a table you pass as a parameter.
 *          consumes:
 *              - application/json
 *          parameters:
 *              - in: body
 *                name: media 
 *                description: the media to add, note that the id should not be null or an error will be throw
 *                schema:
 *                    type: object
 *                    required:
 *                        - id
 *                    properties:
 *                      id: 
 *                          type: string 
 *                      type: 
 *                          type: string
 *                      title: 
 *                          type: string
 *                      director: 
 *                          type: string
 *                      cast: 
 *                          type: string
 *                      country: 
 *                          type: string
 *                      date_added: 
 *                          type: string
 *                      release_year: 
 *                          type: string
 *                      listed_in: 
 *                          type: string
 *                      description: 
 *                          type: string
 *                      duration: 
 *                          type: string
 *          responses: 
 *              200: 
 *                  description: 
 *                  content: application/json
 */

router.post('/:table', async(req, res) => {
    // console.log(req.body);
    let table
    switch (req.params.table) {
        case "netflix":
            table = prisma.netflix;
            break;
        case "amazon":
            table = prisma.amazon;
            break;
        case "disney":
            table = prisma.disney;
            break;
        default:
            break;
    }
    try {
        res.status(200).send(await createMedia(table, req.body))
        return;
    } catch (error) {
        res.status(500).send(error)
        console.log("sent error");
        return;
    }
})

module.exports = router;