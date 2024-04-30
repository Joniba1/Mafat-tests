//12
const fs = require('fs');

const readFileAsync = async (path) => {
    return await fs.readFile(path, 'utf-8');
}

//8
const { division, multiplication, addition, subtraction } = require('./math.js');
const result = division(8, 0);
if (result) { console.log(result) } ;


