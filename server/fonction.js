const csv = require('csv-parser')
const fs = require('fs')
const PrismaClient = require('@prisma/client')
const prisma = new PrismaClient.PrismaClient();

const path = "./databases/"

function convertCSVToJson(name) {
    const tab = []
    return new Promise((resolve, reject) => {
        fs.createReadStream(path + name + '.csv')
            .pipe(csv())
            .on('data', (data) => tab.push(data))
            .on('end', () => {
                resolve(tab)
            });
    })
}

async function lookDisneyTableId(idP) {
    return (await prisma.Disney.findMany({
        where: {
            id: idP
        }
    }));
}

async function lookDisneyTableType(type) {
    if (type === "movie" || type === "MOVIE") type = "Movie";
    if (type === "Tv Show" || type === "TV SHOW" || type === "tv show") type = "TV Show";
    return (await prisma.Disney.findMany({
        where: {
            type: type
        }
    }));
}

async function lookTableByField(table, field, req) {
    if (req === "movie" || req === "MOVIE") req = "Movie";
    if (req === "Tv Show" || req === "TV SHOW" || req === "tv show") req = "TV Show";
    if (field === "country"){
        //Mettre la première lettre de chaque mot en majuscule
        const words = req.split(" ");
        for (let i = 0; i < words.length; i++) {
            words[i] = words[i][0].toUpperCase() + words[i].substr(1);
        }
        req = words.join(' ')
    }
    return (await table.findMany({
        where: {
            [field]: req
        }
    }));
}



module.exports = { convertCSVToJson, lookDisneyTableId, lookDisneyTableType, lookTableByField }