const fs = require('fs')
const path = require('path')
const csv = require('csvtojson')
const csvFilePath = './customer-data.csv'

csv().fromFile(csvFilePath)
    .on('end_parsed',(jsonArrObj)=>{
        fs.writeFile("./object.json", JSON.stringify(jsonArrObj, null, 4), (err) => {
            if (err)
                console.error(err)
        })  
    })
    .on('done',(error)=>{
    console.log('JsonFile created')
})