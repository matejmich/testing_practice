// test/index.test.js



import { add, sub, capitalize, reverseString, calculator, ceasarsCipher, analyzeArray } from '../src/index';

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});

test('subtracts 2 - 1 to equal 1', () => {
    expect(sub(2, 1)).toBe(1);
})

test('capitalizes a sentence hello world', () => {
    expect(capitalize('hello world')).toBe('Hello world')
})
test('capitalizes an empty string', () => {
    expect(capitalize('')).toBe('')
})
test('capitalizes an already capitalized word', () => {
    expect(capitalize('CAT')).toBe('CAT')
})

test('reverses one word', () => {
    expect(reverseString('cat')).toBe('tac')
})

test('devide 2 numbers', () => {
    expect(calculator.divide(10, 2)).toBe(5)
})

test('devide by zero', () => {
    expect(calculator.divide(10, 0)).toBe('Cannot devide by zero')
})
test('adds 1 + 2 to equal 3', () => {
    expect(calculator.add(1, 2)).toBe(3);
  });

  test('miltiplies 3 * 10 to equal 30', () => {
    expect(calculator.multiply(3, 10)).toBe(30);
  }); 

  test('ciphers  Hello world! by 3 chars', () => {
    expect(ceasarsCipher('Hello world!', 3)).toBe('Khoor zruog!');
  });

  test('ciphers  why by 2 chars', () => {
    expect(ceasarsCipher('why', 2)).toBe('yja');
  });

  test('ciphers  Hello world! by 0 chars', () => {
    expect(ceasarsCipher('Hello world!', 0)).toBe('Hello world!');
  });

  test('calculates average, min, max, and length for an array of numbers', () => {
    const numbersArray = [2, 5, 8, 1, 4];
    const result = analyzeArray(numbersArray);
  
    expect(result.average).toBe(4); // (2 + 5 + 8 + 1 + 4) / 5 = 4
    expect(result.min).toBe(1);      // Minimum value in the array
    expect(result.max).toBe(8);      // Maximum value in the array
    expect(result.length).toBe(5);   // Number of elements in the array
  });
  
  test('handles an empty array correctly', () => {
    const result = analyzeArray([]);
  
    expect(result.average).toBeNaN(); // NaN for an empty array
    expect(result.min).toBeNaN();     // NaN for an empty array
    expect(result.max).toBeNaN();     // NaN for an empty array
    expect(result.length).toBe(0);    // Length should be 0 for an empty array
  });
  
  test('throws an error if input is not an array', () => {
    // Wrap the function call in a function to test for the thrown error
    expect(() => analyzeArray('not an array')).toThrow('Input is not an array');
  });