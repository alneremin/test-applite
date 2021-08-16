
const { getMultipliers } = require("./util")

// найти самое маленькое натуральное число, 
// произведение цифр которого равно заданному числу. 
exports.alg = (val, result) => {

    if (!Number.isInteger(val) || val < 1) {
        console.log("Значение не является натуральным числом.");
        result.result = null
        return;
    }

    let multipliers = getMultipliers(val)
    // console.log(multipliers);
    if (multipliers.filter(v => v > 9).length > 0) {
        result.result = "-1"
        return;
    }

    let indexes2 = filterByValue(multipliers, 2)
    let indexes3 = filterByValue(multipliers, 3)
    let indexes4 = filterByValue(multipliers, 4)

    toDelete = []

    // пока у нас есть хотя бы одна пара для свертки (2 и 2, 2 и 3, 2 и 4)
    while (indexes2.length + indexes3.length + indexes4.length > 1) {
        if (indexes3.length > 1) {
            toDelete.push(indexes3.pop())
            let indx = indexes3.pop()
            multipliers[indx] = 9
        } else if (indexes2.length > 0 && indexes4.length > 0) {
            toDelete.push(indexes2.pop())
            let indx = indexes4.pop()
            multipliers[indx] = 8
        } else if (indexes2.length > 2) {
            toDelete.push(indexes2.pop())
            toDelete.push(indexes2.pop())
            let indx = indexes2.pop()
            multipliers[indx] = 8
        } else if (indexes2.length > 0 && indexes3.length > 0) {
            toDelete.push(indexes2.pop())
            let indx = indexes3.pop()
            multipliers[indx] = 6
        } else if (indexes2.length > 1) {
            toDelete.push(indexes2.pop())
            let indx = indexes2.pop()
            multipliers[indx] = 4
        }
    }

    multipliers = multipliers.filter((_, i) => !toDelete.includes(i))
    multipliers.sort()

    const reducer = (accumulator, currentValue) => String(accumulator) + String(currentValue);

    let strRes = String(multipliers.reduce(reducer))
    result.result = strRes;
}

// получаем массивы индексов для конкретных значений
function filterByValue(array, value) {
    return array.map( (v, i) => mapIndex(v, value,i)).filter(v => v !== -1)
}

// возвращаем индекс при совпадении значений
function mapIndex(cur, value, index) {
    if (cur === value) {
        return index
    } else {
        return -1
    }
}

