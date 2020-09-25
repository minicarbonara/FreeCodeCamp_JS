function sumPrimes(value) {
    var primes = [];
    var sum = 0;
    for (var i = 2; i <= value; i++) {
        primes[i] = true;
    }
    var limit = Math.sqrt(value);
    for (var i = 2; i < limit; i++) {
        if (primes[i] === true) {
            for (var j = i * i; j <= value; j += i) {
                primes[j] = false;
            }
        }
    }
    for (var i = 2; i <= value; i++) {
        if (primes[i] === true) {
            console.log(i + " " + primes[i]);
            sum += i;
            //console.log(sum);
        }
    }
    return sum;
}

console.log(sumPrimes(10));
