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
    const vraiId = "s" + idP.toString()
    return (await prisma.Disney.findMany({
        where: {
            id: vraiId
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



module.exports = { convertCSVToJson, lookDisneyTableId, lookDisneyTableType }