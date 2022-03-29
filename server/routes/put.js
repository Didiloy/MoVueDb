const express = require('express')
const router = express.Router()
const PrismaClient = require('@prisma/client')
const prisma = new PrismaClient.PrismaClient();
const { updateMedia } = require('../fonction.js')

router.use(express.json());

/**
 * @swagger
 * /update/:table:
 *      put:
 *          description: allow you to update the title and/or the categorie of a movies or a tv shows with the id you pass as parameter on a table you pass as a parameter.
 *          consumes:
 *              - application/json
 *          parameters:
 *              - in: path
 *                name: table 
 *                description: the table on which you want to update the media
 *                schema:
 *                    type: string
 *                required: true
 *              - in: body
 *                name: media 
 *                description: the fields to modify, note that the id is required, the others are optionals
 *                schema:
 *                    type: object
 *                    required:
 *                        - id
 *                    properties:
 *                      id: 
 *                          type: string 
 *                      title: 
 *                          type: string
 *                      categorie:
 *                          type: string 
 *          responses: 
 *              200: 
 *                  description: the user was updated
 *                  content: application/json
 *              500: 
 *                  description: an error occured while updating
 */

router.put('/:table/', async(req, res) => {
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
        res.status(200).send(await updateMedia(table, req.body))
        return;
    } catch (error) {
        res.status(500).send(error)
        console.log("sent error: ", error);
        return;
    }
})

module.exports = router;