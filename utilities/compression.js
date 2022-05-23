const Buffer = require('buffer').Buffer;
const{ json } = require('express/lib/response');
const zlib = require("zlib")


const compressResponse = (data) =>{
    return new Promise ( (resolve,reject) =>{
        var input = JSON.stringify(data);
        var compressed = zlib.gzip(input,(err,res)=>{
            return resolve(res)
        })
})
};

module.exports={
    compressResponse
}

// const zlib = require('zlib');  
// const gzip = zlib.createGzip();  
// const fs = require('fs');  
// const inp = fs.createReadStream('input.txt');  
// const out = fs.createWriteStream('input.txt.gz');  
// inp.pipe(gzip).pipe(out); 