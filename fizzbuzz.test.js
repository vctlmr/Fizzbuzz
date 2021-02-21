var fizzbuzz = require("./fizzbuzz")

var array = [];
var verifArray = [];
for(var i = 1; i <= 100; i++) {
    array[i] = i;
    if (i % 3 == 0 && i % 5 > 0)
        verifArray[i] = "Fizz"
    if (i % 5 == 0 && i % 3 > 0)
        verifArray[i] = "Buzz"
    if (i % 5 == 0 && i % 3 == 0)
        verifArray[i] = "FizzBuzz"
    if (i % 5 > 0 && i % 3 > 0)
        verifArray[i] = i;
}



console.log(array);
console.log(verifArray);


test('should return an array with the same value than the solution', () => {
    expect(fizzbuzz(array)).toEqual(verifArray);
});