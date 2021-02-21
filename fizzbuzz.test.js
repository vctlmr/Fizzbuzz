var fizzbuzz = require("./fizzbuzz")

var array = [];
var verifArray = [];
for(var i = 1; i <= 100; i++) {
    array[i-1] = i;
    if (i % 3 == 0 && i % 5 > 0)
        verifArray[i-1] = "Fizz"
    if (i % 5 == 0 && i % 3 > 0)
        verifArray[i-1] = "Buzz"
    if (i % 5 == 0 && i % 3 == 0)
        verifArray[i-1] = "FizzBuzz"
    if (i % 5 > 0 && i % 3 > 0)
        verifArray[i-1] = i;
}

test('should return an array with the same value than the solution', () => {
    expect(fizzbuzz(array)).toEqual(verifArray);
});