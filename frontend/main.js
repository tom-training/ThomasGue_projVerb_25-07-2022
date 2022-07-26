var XLSX = require("xlsx");

var fs = require('fs');

const workbook = XLSX.readFile('vbal.xlsx');

let worksheets = {};

for (const sheetName of workbook.SheetNames){
    worksheets[sheetName] = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
}

var mesVerbes = worksheets.Sheet1;

console.log(mesVerbes);


/* A METTRE SUR UNE AUTRE BRANCH

var mesVerbesJson = JSON.stringify(mesVerbes);

fs.writeFile('verb.json', mesVerbesJson, (err)=>{
    if(err){console.log(err)}
    else{console.log("normalement c'est bon")}
}); 


*/

//console.log(mesVerbesJson);








/*
fs.readFile('read.txt', 'utf-8', function(err, data){
    if(err){console.log(err)}
    fs.writeFile('write.txt', data, (err)=>{message: err});
});
*/


// il va falloir écrire un fichier verb.js


// --------------------------Consignes de JORDAN -----------------------------

// ici il faut utiliser un fichier en utilisant fs

// fichier contenant les résultat mesVerbes

// verb.json

// de script.js je récupère les verb.js

// dans index.html on chargera le verb.js

// ensuite chargement du script.js

