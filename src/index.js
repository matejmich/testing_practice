// src/index.js

const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => {
    if (b === 0) {
        return 'Cannot devide by zero'
    } else {
        return a / b
    }
}

const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
const reverseString = (str) => {
   return str = str.split('').reverse().join('')
}

const calculator = {
    add,
    sub,
    multiply,
    divide,
}

const ceasarsCipher = (str, shift) => {
    // Define the uppercase and lowercase alphabets
    const uppercaseAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseAlphabet = 'abcdefghijklmnopqrstuvwxyz';
  
    // Use the replace method to iterate through each character in the string
    const encryptedStr = str.replace(/[a-zA-Z]/g, function (char) {
      // Check if the character is uppercase
      let isUpperCase = char === char.toUpperCase();
  
      // Choose the appropriate alphabet based on the case of the character
      let sourceAlphabet = isUpperCase ? uppercaseAlphabet : lowercaseAlphabet;
  
      // Find the index of the character in the alphabet
      let index = sourceAlphabet.indexOf(char);
  
      // If the character is not in the alphabet, return it unchanged
      if (index === -1) {
        return char;
      }
  
      // Apply the shift and handle wrap-around
      let newIndex = (index + shift) % sourceAlphabet.length;
      if (newIndex < 0) {
        // If the new index is negative, add the length of the alphabet to wrap around
        newIndex += sourceAlphabet.length;
      }
  
      // Return the encrypted character
      return isUpperCase ? uppercaseAlphabet[newIndex] : lowercaseAlphabet[newIndex];
    });
  
    // Return the final encrypted string
    return encryptedStr;
  
}

// analyzeArray.js (or whatever you name your file)
function analyzeArray(numbers) {
    if (!Array.isArray(numbers)) {
      throw new Error('Input is not an array');
    }
  
    if (numbers.length === 0) {
      return {
        average: NaN,
        min: NaN,
        max: NaN,
        length: 0,
      };
    }
  
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    const average = sum / numbers.length;
    const min = Math.min(...numbers);
    const max = Math.max(...numbers);
  
    return {
      average,
      min,
      max,
      length: numbers.length,
    };
  }

 

export { add, sub, capitalize, reverseString, calculator, ceasarsCipher, analyzeArray };
