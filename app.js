
const { getFuncTime } = require("./util")
const { alg } = require("./alg")


let res = { 
    result: -1 
};

let value = 444
let workTime = getFuncTime(alg, [value, res])

console.log(`Результат: ${res.result}`);
console.log(`Время выполнения: ${workTime} mc`);
