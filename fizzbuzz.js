function fizzbuzz(a) {
    for(var i = 1; i <= 100; i++) {
        if (i % 3 == 0 && i % 5 > 0)
            a[i-1] = "Fizz"
        if (i % 5 == 0 && i % 3 > 0)
            a[i-1] = "Buzz"
        if (i % 5 == 0 && i % 3 == 0)
            a[i-1] = "FizzBuzz"
        if (i % 5 > 0 && i % 3 > 0)
            a[i-1] = i;
    }
    return a;
}

module.exports = fizzbuzz;