var XLSX = require("xlsx");

const workbook = XLSX.readFile('vbal.xlsx');

console.log("hello there");

let worksheets = {};

for (const sheetName of workbook.SheetNames){
    worksheets[sheetName] = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
}

var mesVerbes = worksheets.Sheet1;

console.log(mesVerbes);

