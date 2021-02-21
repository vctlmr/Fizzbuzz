function fizzbuzz(a) {
    for(var i = 1; i <= 100; i++) {
        if (i % 3 == 0 && i % 5 > 0)
            a[i] = "Fizz"
        if (i % 5 == 0 && i % 3 > 0)
            a[i] = "Buzz"
        if (i % 5 == 0 && i % 3 == 0)
            a[i] = "FizzBuzz"
        if (i % 5 > 0 && i % 3 > 0)
            a[i] = i;
    }
    console.log(" --------------- In fizzbuzz js ----------------")
    console.log(a)
    return a;
}

module.exports = fizzbuzz;