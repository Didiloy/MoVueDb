const csv = require('csv-parser')
const fs = require('fs')

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

module.exports = {convertCSVToJson}
