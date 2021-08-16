const assert = require('assert');
const { numIsSimple, getMultipliers, getFuncTime } = require("./util")
const { alg } = require("./alg")

it('Число 103 должно быть простым', () => {
    assert.strictEqual(numIsSimple(103), true)
});

it('Число 102 не должно быть простым', () => {
    assert.strictEqual(numIsSimple(102), false)
});

it('Число 10 имеет 2 множителя: 2 и 5', () => {
    let arr = getMultipliers(10).sort()
    let expected = [2,5]
    assert.strictEqual(arr.length, expected.length)
    for (let i = 0; i < arr.length; ++i) {
        assert.strictEqual(arr[i], expected[i])
    }
});

it('Число 102 не может быть получено из произведения цифр натурального числа', () => {
    let res = { result: "-1" };
    alg(102, res)
    assert.strictEqual(res.result, "-1")
});

it('Число 444 не может быть получено из произведения цифр натурального числа', () => {
    let res = { result: "-1" };
    alg(444, res)
    assert.strictEqual(res.result, "-1")
});


it('Число 10 может быть получено из произведения цифр натурального числа 25', () => {
    let res = { result: "-1" };
    alg(10, res)
    assert.strictEqual(res.result, "25")
});

it('Число 13 не может быть получено из произведения цифр натурального числа', () => {
    let res = { result: "-1" };
    alg(13, res)
    assert.strictEqual(res.result, "-1")
});

it('Число 8 может быть получено из произведения цифр натурального числа 8', () => {
    let res = { result: "-1" };
    alg(8 , res)
    assert.strictEqual(res.result, "8")
});

it('Число 90 может быть получено из произведения цифр натурального числа 259', () => {
    let res = { result: "-1" };
    alg(90, res)
    assert.strictEqual(res.result, "259")
});

it('Натуральное число, произведение цифр которого дает 10^9, должно быть получено менее чем за 1с', () => {
    let res = { 
        result: -1 
    };
    
    let value = Math.pow(10,9)
    let workTime = getFuncTime(alg, [value, res])
    assert.ok(workTime < 1000)
});