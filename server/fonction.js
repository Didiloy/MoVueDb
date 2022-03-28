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
    if (field === "country") {
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

async function lookTableFieldContains(table, field, name) {
    return (await table.findMany({
        where: {
            [field]: {
                contains: name
            }
        }
    }))
}

async function lookTableTwoFields(table, field1, field2) {
    return (await table.findMany({
        where: {
            AND: [{
                    [field1[0]]: {
                        contains: field1[1]
                    }
                },
                {
                    [field2[0]]: {
                        contains: field2[1]
                    }
                }
            ]
        }
    }))
}

async function createMedia(table, media) {
    try {
        if (media.id.length > 0) {
            return await table.create({
                data: {
                    id: media.id,
                    type: media.type || " ",
                    title: media.title || " ",
                    director: media.director || " ",
                    cast: media.cast || " ",
                    country: media.country || " ",
                    date_added: media.date_added + '' || " ",
                    release_year: media.release_year || " ",
                    listed_in: media.listed_in || " ",
                    description: media.description || " ",
                    duration: media.duration || ""
                }
            })
        } else {
            throw "null Id"
        }
    } catch (error) {
        return error
    }
}

async function deleteMedia(table, id) {
    try {
        if (id.length > 0) {
            return await table.delete({
                where: {
                    id: id
                }
            })
        } else {
            throw "null Id"
        }
    } catch (error) {
        if (
            error instanceof PrismaClient.PrismaClientKnownRequestError &&
            error.code === "P2025"
        ) {
            console.log("Media not found");
        } else console.error(error);
        console.log(error);
        return error
    }
}


module.exports = { deleteMedia, createMedia, convertCSVToJson, lookDisneyTableId, lookDisneyTableType, lookTableByField, lookTableFieldContains, lookTableTwoFields }