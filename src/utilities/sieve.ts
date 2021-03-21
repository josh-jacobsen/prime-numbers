export const sieve = (endNumber: number) => {
    // Eratosthenes algorithm to find all primes under n
    var array = [], upperLimit = Math.sqrt(endNumber), output = [];

    // Make an array from 2 to (n - 1)
    for (var i = 0; i < endNumber; i++) {
        array.push(true);
    }

    // Remove multiples of primes starting from 2, 3, 5,...
    for (var i = 2; i <= upperLimit; i++) {
        if (array[i]) {
            for (var j = i * i; j < endNumber; j += i) {
                array[j] = false;
            }
        }
    }

    // All array[i] set to true are primes
    for (var i = 2; i < endNumber; i++) {
        if(array[i]) {
            output.push(i);
        }
    }

    return output;
};