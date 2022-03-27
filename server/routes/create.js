const express = require('express')
const router = express.Router()
const PrismaClient = require('@prisma/client')
const prisma = new PrismaClient.PrismaClient();
const { lookTableByField, lookTableFieldContains, lookTableTwoFields, createMedia } = require('../fonction.js')

router.use(express.json());

/**
 * @swagger
 * /create/:table:
 *      post:
 *          summary: allow you to add a movies or a tv shows on a table you pass as a parameter.
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
        let response = createMedia(table, req.body)
            // .then((response) => {
            //     console.log("sent:", response);
            //     res.status(200).json(response)
            //     return;
            // })
        console.log("sent:", response);
        res.status(200).json(response)
        return;
    } catch (error) {
        res.status(500).send(error)
        console.log("sent error");
        return;
    }
})

module.exports = router;