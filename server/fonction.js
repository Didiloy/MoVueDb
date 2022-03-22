const csv = require('csv-parser')
const fs = require('fs')
const PrismaClient = require('@prisma/client')
const prisma = new PrismaClient.PrismaClient();

const path = "./databases/"

function convertCSVToJson(name){
    const tab = []
    return new Promise((resolve ,reject)=>{
        fs.createReadStream(path+name+'.csv')
        .pipe(csv())
        .on('data', (data) => tab.push(data))
        .on('end', () => {
            resolve(tab) 
        });
    })
}

async function lookDisneyTableId(idP){
    const vraiId = "s"+idP.toString()
    return (await prisma.Disney.findMany({
        where:{
            id: vraiId
        }
    }));
}


module.exports = {convertCSVToJson,lookDisneyTableId}
