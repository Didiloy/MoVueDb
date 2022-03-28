const express = require('express')
const router = express.Router()
const PrismaClient = require('@prisma/client')
const prisma = new PrismaClient.PrismaClient();
const { deleteMedia } = require('../fonction.js')

router.use(express.json());

/**
 * @swagger
 * /delete/:table/:id:
 *      delete:
 *          description: allow you to delete a movies or a tv shows with the id you pass as parameter on a table you pass as a parameter.
 *          consumes:
 *              - application/json
 *          parameters:
 *              - in: path
 *                name: table 
 *                description: the table on which you want to delete the media
 *                schema:
 *                    type: string
 *                required: true
 *              - in: path
 *                name: id 
 *                description: the id of the media you want to delete
 *                schema:
 *                    type: string
 *                required: true
 *          responses: 
 *              200: 
 *                  description: the user was deleted
 *                  content: application/json
 *              500: 
 *                  description: an error occured while deleting
 */

router.delete('/:table/:id', async(req, res) => {
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
        res.status(200).send(await deleteMedia(table, req.params.id))
        return;
    } catch (error) {
        res.status(500).send(error)
        console.log("sent error: ", error);
        return;
    }
})

module.exports = router;