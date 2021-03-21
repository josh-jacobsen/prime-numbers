export const sieve = (startNumber: number, endNumber: number) => {

    var array = [];

    for (var i = startNumber; i < endNumber; i++) {
        if (isPrime(i)) {
            array.push(i)
        }
    }
    return array;
};


const isPrime = (num: number) => {
    for(let i = 2; i < num; i++)
      if(num % i === 0) return false;
    return num > 1;
  }