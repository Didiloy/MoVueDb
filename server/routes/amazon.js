const express = require('express')
const router = express.Router()
const PrismaClient = require('@prisma/client')
const prisma = new PrismaClient.PrismaClient();
const { lookTableByField, lookTableFieldContains, lookTableTwoFields } = require('../fonction.js')


router.get('/', (req, res) => {
    if (req.query.type) {
        lookTableByField(prisma.amazon, "type", req.query.type).then((response) => { res.send(response) })
    }
    if (req.query.id) {
        lookTableByField(prisma.amazon, "id", req.query.id).then((response) => { res.send(response) })
    }
    if (req.query.country) {
        lookTableFieldContains(prisma.amazon, "country", req.query.country).then((response) => { res.send(response) })
    }
    if (req.query.year) {
        lookTableByField(prisma.amazon, "release_year", req.query.year).then((response) => { res.send(response) })
    }
    if (req.query.title) {
        lookTableFieldContains(prisma.amazon, "title", req.query.title).then((response) => { res.send(response) })
    }
    if (req.query.categorie) {
        lookTableFieldContains(prisma.amazon, "listed_in", req.query.categorie).then((response) => { res.send(response) })
    }
    if (req.query.categorie && req.query.year || req.query.year && req.query.categorie) {
        lookTableTwoFields(prisma.amazon, ["listed_in", req.query.categorie], ["release_year", req.query.year]).then((response) => { res.send(response) })
    }
    if (req.query.categorie && req.query.type || req.query.type && req.query.categorie) {
        lookTableTwoFields(prisma.amazon, ["listed_in", req.query.categorie], ["type", req.query.type]).then((response) => { res.send(response) })
    }
    if (req.query.categorie && req.query.director || req.query.director && req.query.categorie) {
        lookTableTwoFields(prisma.amazon, ["listed_in", req.query.categorie], ["director", req.query.director]).then((response) => { res.send(response) })
    }
    if (req.query.cast && req.query.type || req.query.type && req.query.cast) {
        lookTableTwoFields(prisma.amazon, ["cast", req.query.cast], ["type", req.query.type]).then((response) => { res.send(response) })
    }

    if (req.query.categorie && req.query.year && req.query.type) {
        //TODO: changer le nom de la fonction et l'adapter
        // lookTableTwoFields(prisma.amazon, ["listed_in", req.query.categorie], ["release_year", req.query.year]).then((response) => { res.send(response) })
    }

    //Si aucun paramètres on renvoi la liste de tout les films
    else {
        lookTableFieldContains(prisma.amazon, "id", 's').then((response) => { res.send(response) })
    }

});

module.exports = router;