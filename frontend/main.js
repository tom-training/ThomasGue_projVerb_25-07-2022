const XLSX = require('xlsx');

const workbook = XLSX.readFile('vbal.xlsx');

console.log("heloo there");

let worksheets = {};

for (const sheetName of workbook.SheetNames){
    worksheets[sheetName] = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
}

var mesVerbes = JSON.stringify(worksheets.Sheet1);

console.log(mesVerbes);

