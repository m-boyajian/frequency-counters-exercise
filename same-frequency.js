// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
// Examples:
// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false

function createFrequencyCounter(array) {
    let frequencies = new Map();
  
    for (let val of array) {
      let valCount = frequencies.get(val) || 0;
      frequencies.set(val, valCount + 1);
    }
  
    return frequencies;
}

function sameFrequency(num1, num2) {
    // Need to use toString to convert the intgs to string
    if (num1.toString().length !== num2.toString().length) return false;

    let num1Freqs = createFrequencyCounter(num1);
    let num2Freqs = createFrequencyCounter(num2);

    for(let [digit, count] of num1Freqs) {
        if(num2Freqs.get(digit) !== count) return false;
    }

    return true;
}
 