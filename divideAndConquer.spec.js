const divCon = require('./divideAndconquer.js');

describe('When given an array of elements it subtracts the sum of the strings from the sum of numbers.', () => {
    test('When passed the array [1, 2, "3", 4, "5"] it should return the difference of -1', () => {
        expect(divCon([1, 2, "3", 4, "5"])).toEqual(-1);
    });
    test('When given one input as a positive string it will return itself but negative', () => {
        expect(divCon(["4"])).toEqual(-4);
    });
    test('When given one input as a negative string it will return itself but positive', () => {
        expect(divCon(["-4"])).toEqual(4);
    });
    test('When given an empty array it should return 0', () => {
        expect(divCon([])).toEqual(0);
    });
    test('When given an empty string it should return NaN', () => {
        expect(divCon([''])).toBeNaN();
    });
    test('When passed all positive strings it will return the sum but negative', () => {
        expect(divCon(['1', '2', '3', '4'])).toEqual(-10);
    });
    test('When passed all positive numbers it will return the sum', () => {
        expect(divCon([1, 2, 3, 4])).toEqual(10);
    });
    test('When passed a non-numeric string it return NaN', () => {
        expect(divCon(["dog"])).toBeNaN();
    });
});