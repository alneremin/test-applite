

// определяем простое ли число
exports.numIsSimple = (num) => {

    var simple = true;

    if (num > 1) {

        for (var i = 1; i < num; i++) {

            if (num % i == 0 && i != 1) {
                simple = false;
            }
        }
        return simple;

    }

}

// получаем множители числа
exports.getMultipliers = (val) => {
    var k = 2;
    var mass = []
    while (val != 1) {

        if (val % k == 0 && this.numIsSimple(k)) {

            mass.push(k);
            val /= k;
        } else {
            k++;
        }

    }
    return mass
}

// получаем время выполнения функции
exports.getFuncTime = (func, args) => {

    var start, stop = 0;

    start = (new Date()).getTime();
    func.apply(this, args);
    stop = (new Date()).getTime();
    
    return stop - start
}