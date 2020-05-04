// Q : Find a given a number is prime or not
// Meaning : A prime number is a number that is divisible by 1 and itself only.
//           First few prime numbers are: 2, 3, 5, 7, 11, 13, 17, …

function isPrime(num) {
  for (var i = 2; i < num; i++) if (num % i === 0) return false;
  return num > 1;
}

console.log(isPrime(1)); // returns false
console.log(isPrime(2)); // returns true
console.log(isPrime(9)); // returns false

console.log(isPrime(11)); // returns true
console.log(isPrime(79)); // returns true
console.log(isPrime(51)); // returns false

console.log(isPrime(811)); // returns true
console.log(isPrime(437)); // returns false
console.log(isPrime(319)); // returns false
