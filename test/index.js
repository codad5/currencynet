const fs = require('fs')
var filedata = ""
fs.readFile('./main/production.js', 'utf-8', (err, data) => {
    if(err){
        console.log(err)
        return;
    }
    // console.log(data)
    filedata = data
    filedata += '\nexports.currrencyNet = currrencyNet'
    filedata += '\nexports.sum = sum'

    fs.writeFile('./test/production.js', filedata, (err) => {
        console.log('test file produced with error = ', err)
    })
})

