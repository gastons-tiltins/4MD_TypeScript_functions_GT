// MD4 TS CODELEX uzdevumi

console.log('    --- uzd 1 ---');
// Write a function that takes two numbers (a and b) as argument
// Subtract b from a. Return the result

const subtract = (a: number, b: number): number => a - b;
console.log(subtract(1, 2));
console.log(subtract(10, 5));
console.log(subtract(99, 1));

console.log('    --- uzd 2 ---');
// Write a function that takes two numbers (a and b) as argument
// Sum a and b. Return the result

const sumNumbers = (a: number, b: number): number => a + b;
console.log(sumNumbers(1, 2));
console.log(sumNumbers(10, 5));
console.log(sumNumbers(99, 1));

console.log('    --- uzd 3 ---');
// Write a function that takes a value as argument
// Return the type of the value

type valueTypes = number | boolean | object | string;
const velueType = (a: valueTypes): valueTypes => typeof a;
console.log(velueType(1));
console.log(velueType(false));
console.log(velueType({one: 1, two: 2}));
console.log(velueType(null));
console.log(velueType('codelex'));
console.log(velueType([1, 2, 3, 4, 5]));

console.log('    --- uzd 4 ---');
// Write a function that takes two values, say a and b, as arguments
// Return true if the two values are equal and of the same type

const isEqual = (a: string | number, b: string | number): boolean =>
    a === b ? true : false;
console.log(isEqual(2, 3));
console.log(isEqual(3, 3));
console.log(isEqual(1, '1'));
console.log(isEqual('10', '10'));

console.log('   --- uzd 5 ---');
// Write a function that takes a string (a) and a number (n) as arguments
// Return the nth character of 'a'

const returnCharacterPosition = (a: string, n: number): string =>
    n <= a.length && n > 0 ? a.charAt(n - 1) : `Index ${n} out of range.`;
console.log(returnCharacterPosition('abcd', 1));
console.log(returnCharacterPosition('zyxbwpl', 5));
console.log(returnCharacterPosition('gfedcba', 3));

console.log(returnCharacterPosition('gfedcba', 666));
console.log(returnCharacterPosition('gfedcba', -100));

console.log('   --- uzd 6 ---');
// Write a function that takes a string (a) as argument
// Remove the first 3 characters of a. Return the result

const removeThreeChars = (a: string): string => a.substring(3);
console.log(removeThreeChars('abcdefg'));
console.log(removeThreeChars('1234'));
console.log(removeThreeChars('fgedcba'));

console.log('   --- uzd 7 ---');
// Write a function that takes a string as argument
// Extract the last 3 characters from the string. Return the result

const lastThreeChars = (a: string): string => a.slice(-3);
console.log(lastThreeChars('abcdefg'));
console.log(lastThreeChars('1234'));
console.log(lastThreeChars('fgedcba'));

console.log('   --- uzd 8 ---');
// Write a function that takes a string (a) as argument
// Get the first 3 characters of a. Return the result
const firstTrheeChars = (a: string): string => a.slice(0, 3);
console.log(firstTrheeChars('abcdefg'));
console.log(firstTrheeChars('1234'));
console.log(firstTrheeChars('fgedcba'));

console.log('   --- uzd 9 ---');
// Write a function that takes a string (a) as argument
// Extract the first half a. Return the result

const halfString = (a: string): string => a.slice(0, Math.floor(a.length / 2));
console.log(halfString('abcdefgh'));
console.log(halfString('1234'));
console.log(halfString('gedcba'));

console.log('   --- uzd 10 ---');
// Write a function that takes a string (a) as argument
// Remove the last 3 characters of a. Return the result
const removeLastThreeChars = (a: string): string => a.slice(0, -3);
console.log(removeLastThreeChars('abcdefg'));
console.log(removeLastThreeChars('1234'));
console.log(removeLastThreeChars('fgedcba'));

console.log('   --- uzd 11 ---');
// Write a function that takes two numbers (a and b) as argument
// Return b percent of a
const calcPercent = (a: number, b: number): number => (a / 100) * b;
console.log(calcPercent(100, 50));
console.log(calcPercent(10, 1));
console.log(calcPercent(500, 25));

console.log('   --- uzd 12 ---');
// Write a function that takes 6 values (a,b,c,d,e,f) as arguments
// Sum a and b
// Then substract by c
// Then multiply by d and divide by e
// Finally raise to the power of f and return the result
// Tip: mind the order
const mathOperations = (
    a: number,
    b: number,
    c: number,
    d: number,
    e: number,
    f: number,
): number => (((a + b - c) * d) / e) ** f;
console.log(mathOperations(6, 5, 4, 3, 2, 1));
console.log(mathOperations(6, 2, 1, 4, 2, 3));
console.log(mathOperations(2, 3, 6, 4, 2, 3));

console.log('   --- uzd 13 ---');
// Write a function that takes a number as argument
// If the number is even, return true. Otherwise, return false
const checkEven = (a: number): boolean => (a % 2 == 0 ? true : false);
console.log(checkEven(10));
console.log(checkEven(-4));
console.log(checkEven(5));
console.log(checkEven(-111));

console.log('   --- uzd 14 ---');
// Write a function that takes two strings (a and b) as arguments
// Return the number of times a occurs in b

const countOccurences = (a: string, b: string): number => {
    function specialChar(str: string) {
        return str.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
    }

    let pattern = new RegExp(specialChar(a), 'g');
    if (b.match(pattern) == null) {
        return 0;
    } else {
        return b.match(pattern).length;
    }
};

console.log(
    countOccurences(
        'm',
        'how many times does the character occur in this sentence?',
    ),
);

console.log(
    countOccurences(
        'h',
        'how many times does the character occur in this sentence?',
    ),
);

console.log(
    countOccurences(
        '?',
        'how many times does the character occur in this sentence?',
    ),
);

console.log(
    countOccurences(
        'z',
        'how many times does the character occur in this sentence?',
    ),
);
console.log(
    countOccurences(
        'tence?',
        'how many times does the character occur in this sentence?',
    ),
);

console.log('   --- uzd 15 ---');
// Write a function that takes a number (a) as argument
// If a is a whole number (has no decimal place), return true Otherwise, return false

const isWholeNumber = (a: number): boolean => (a % 1 != 0 ? false : true);
console.log(isWholeNumber(4));
console.log(isWholeNumber(1.123));
console.log(isWholeNumber(1048));
console.log(isWholeNumber(10.48));

console.log('   --- uzd 16 ---');
// Write a function that takes two numbers (a and b) as arguments If a is smaller than b, divide a by b
// Otherwise, multiply both numbers Return the resulting value

const calcNumbers = (a: number, b: number): number => (a < b ? a / b : a * b);
console.log(calcNumbers(10, 100));
console.log(calcNumbers(90, 45));
console.log(calcNumbers(8, 20));
console.log(calcNumbers(2, 0.5));

console.log('   --- uzd 17 ---');
// Write a function that takes two strings (a and b) as arguments
// If a contains b, append b to the beginning of a
// If not, append it to the end
// Return the concatenation

const concatStrings = (a: string, b: string): string =>
    a.includes(b) ? b + a : a + b;

console.log(concatStrings('cheese', 'cake'));
console.log(concatStrings('lips', 's'));
console.log(concatStrings('Java', 'script'));
console.log(concatStrings(' think, therefore I am', 'I'));

console.log('   --- uzd 18 ---');
// Write a function that takes a number (a) as argument
// Round a to the 2nd digit after the comma
// Return the rounded number
const mathRound = (a: number): number =>
    Math.round((a + Number.EPSILON) * 100) / 100;
console.log(mathRound(2.12397));
console.log(mathRound(3.136));
console.log(mathRound(1.12397));
console.log(mathRound(26.1379));
console.log(mathRound(1.255));
console.log(mathRound(1.005));

console.log('   --- uzd 19 ---');
// Write a function that takes a number (a) as argument
// Split a into its individual digits and return them in an array
// Tip: you might want to change the type of the number for the splitting
const splitToArray = (a: number): Array<string> => a.toString().split('');
console.log(splitToArray(10));
console.log(splitToArray(931));
console.log(splitToArray(193278));

console.log('   --- uzd 20 ---');
// It seems like something happened to these strings
// Can you figure out how to clear up the chaos?
// Write a function that joins these strings together such that they form the following words:
// 'Javascript', 'Countryside', and 'Downtown'
// You might want to apply basic JS string methods such as replace(), split(), slice() etc.

const combineWords = (a: string, b: string): string => {
    let word: string =
        a.replace('%', '') + b.replace('%', '').split('').reverse().join('');
    return word.charAt(0).toUpperCase() + word.slice(1);
};
console.log(combineWords('java', 'tpi%rcs'));
console.log(combineWords('c%ountry', 'edis'));
console.log(combineWords('down', 'nw%ot'));

console.log('   --- uzd 21 ---');
// This challenge is a little bit more complex
// Write a function that takes a number (a) as argument
// If a is prime, return a
// If not, return the next higher prime number

let b: number;

// https://stackoverflow.com/questions/40200089/check-number-prime-in-javascript
const isPrime = (a: number) => {
    for (let i = 2, s = Math.sqrt(a); i <= s; i++) {
        if (a % i === 0) return false;
    }
    return a > 1;
};

const nextPrime = (b: number): number => {
    if (isPrime(b) == true) {
        return b;
    } else {
        while (!isPrime(b)) {
            b++;
        }
        return b;
    }
};

console.log(nextPrime(38));
console.log(nextPrime(7));
console.log(nextPrime(115));
console.log(nextPrime(2000));

console.log('   --- uzd 22 ---');
// Write a function that takes two numbers, say x and y, as arguments
// Check if x is divisible by y
// If yes, return x
// If not, return the next higher natural number that is divisible by y

const idNumberDivisible = (x: number, y: number): number => {
    if (x % y == 0) {
        return x;
    } else {
        while (x % y != 0) {
            x++;
        }
        return x;
    }
};

console.log(idNumberDivisible(1, 23));
console.log(idNumberDivisible(23, 23));
console.log(idNumberDivisible(7, 3));
console.log(idNumberDivisible(-5, 7));

console.log('   --- uzd 23 ---');
// Write a function that takes two strings (a and b) as arguments
// Beginning at the end of 'a', insert 'b' after every 3rd character of 'a'
// Return the resulting string

const insertText = (a: string, b: string) => {
    const reverseString = a.split('').reverse().join('');
    let myString = '';

    for (let i = 0; i <= a.length; i += 3) {
        let splitChars = reverseString.substring(i, i + 3);
        myString += splitChars;
        if (splitChars.length == 3) {
            myString += b;
        }
    }

    return myString.split('').reverse().join('');
};

console.log(insertText('1234567', '.'));
console.log(insertText('abcde', '$'));
console.log(insertText('zxyzxyzxyzxyzxyz', 'w'));

console.log('   --- uzd 24 ---');
// Write a function that takes a string as argument
// As it is, the string has no meaning
// Increment each letter to the next letter in the alphabet
// Return the correct word

const incrementAlphabetLetters = (a: string): string => {
    let result = '';
    for (const char of a) {
        if (char === 'z') {
            result += 'a';
        } else {
            // https://stackoverflow.com/questions/12504042/what-is-a-method-that-can-be-used-to-increment-letters
            result += String.fromCharCode(char.charCodeAt(0) + 1);
        }
    }

    return result;
};

console.log(incrementAlphabetLetters('bnchmf'));
console.log(incrementAlphabetLetters('bgddrd'));
console.log(incrementAlphabetLetters('sdrshmf'));

console.log('   --- uzd 25 ---');
// Write a function that takes an array (a) and a value (n) as argument
// Return the nth element of 'a'

const returnElement = (a: Array<number>, n: number): number => a[n - 1];
console.log(returnElement([1, 2, 3, 4, 5], 3));
console.log(returnElement([10, 9, 8, 7, 6], 5));
console.log(returnElement([7, 2, 1, 6, 3], 1));

console.log('   --- uzd 26 ---');
// Write a function that takes an array (a) as argument
// Remove the first 3 elements of 'a'
// Return the result

const removeThreeArrayElements = (a: Array<number>): Array<number> =>
    a.slice(3);
console.log(removeThreeArrayElements([1, 2, 3, 4]));
console.log(removeThreeArrayElements([5, 4, 3, 2, 1, 0]));
console.log(removeThreeArrayElements([99, 1, 1]));

console.log('   --- uzd 27 ---');
// Write a function that takes an array (a) as argument
// Extract the last 3 elements of a
// Return the resulting array
const removeLastThreeElements = (a: Array<number>): Array<number> =>
    a.slice(-3);
console.log(removeLastThreeElements([1, 2, 3, 4]));
console.log(removeLastThreeElements([5, 4, 3, 2, 1, 0]));
console.log(removeLastThreeElements([99, 1, 1]));

console.log('   --- uzd 28 ---');
// Write a function that takes an array (a) as argument
// Extract the first 3 elements of a
// Return the resulting array
const extractFirstThreeElements = (a: Array<number>): Array<number> =>
    a.slice(0, 3);
console.log(extractFirstThreeElements([1, 2, 3, 4]));
console.log(extractFirstThreeElements([5, 4, 3, 2, 1, 0]));
console.log(extractFirstThreeElements([99, 1, 1]));

console.log('   --- uzd 29 ---');
// Write a function that takes an array (a) and a number (n) as arguments
// It should return the last n elements of a
const returnLastNElements = (a: Array<number>, b: number): Array<number> =>
    a.slice(-b);
console.log(returnLastNElements([1, 2, 3, 4, 5], 2));
console.log(returnLastNElements([1, 2, 3], 6));
console.log(returnLastNElements([1, 2, 3, 4, 5, 6, 7, 8], 3));

console.log('   --- uzd 30 ---');
// Write a function that takes an array (a) and a value (b) as argument
// The function should clean a from all occurrences of b
// Return the filtered array
const removeSpecifiedElements = (
    a: (string | number | boolean)[],
    b: number | string | boolean,
): (string | number | boolean)[] => {
    for (let i = 0; i <= a.length; i++) {
        if (a[i] === b) {
            a.splice(i, 1);
        }
    }
    return a;
};

console.log(removeSpecifiedElements([1, 2, 3], 2));
console.log(removeSpecifiedElements([1, 2, '2'], '2'));
console.log(removeSpecifiedElements([false, '2', 1], false));
console.log(removeSpecifiedElements([1, 2, '2', 1], 1));

console.log('   --- uzd 31 ---');
// Write a function that takes an array (a) as argument
// Return the number of elements in a

const arrayLength = (a: Array<number>): number => a.length;

console.log(arrayLength([1, 2, 2, 4]));
console.log(arrayLength([9, 9, 9]));
console.log(arrayLength([4, 3, 2, 1, 0]));

console.log('   --- uzd 32 ---');
// Write a function that takes an array of numbers as argument
// Return the number of negative values in the array

const negativeValuesAmount = (a: Array<number>): number => {
    let counter = 0;
    for (let i = 0; i <= a.length; i++) {
        if (a[i] < 0) {
            counter += 1;
        }
    }
    return counter;
};
console.log(negativeValuesAmount([1, -2, 2, -4]));
console.log(negativeValuesAmount([0, 9, 1]));
console.log(negativeValuesAmount([4, -3, 2, 1, 0]));

console.log('   --- uzd 33 ---');
// Write a function that takes an array of numbers as argument
// It should return an array with the numbers sorted in descending order

const arraySortedDescending = (a: Array<number>): Array<number> =>
    a.sort().reverse();

console.log(arraySortedDescending([1, 3, 2]));
console.log(arraySortedDescending([4, 2, 3, 1]));

console.log('   --- uzd 34 ---');
// Write a function that takes an array of strings as argument
// Sort the array elements alphabetically
// Return the result

const sortArrayOfStrings = (a: string[]): string[] => a.sort();

console.log(sortArrayOfStrings(['b', 'c', 'd', 'a']));
console.log(sortArrayOfStrings(['z', 'c', 'd', 'a', 'y', 'a', 'w']));

console.log('   --- uzd 35 ---');
// Write a function that takes an array of numbers as argument
// It should return the average of the numbers

const averageOfArrayNumbers = (a: number[]): number => {
    let total = 0;
    for (const number of a) {
        total += number;
    }
    return total / a.length;
};
console.log(averageOfArrayNumbers([10, 100, 40]));
console.log(averageOfArrayNumbers([10, 100, 1000]));
console.log(averageOfArrayNumbers([-50, 0, 50, 200]));

console.log('   --- uzd 36 ---');
// Write a function that takes an array of strings as argument
// Return the longest string

const longestStringArray = (a: Array<string>): string => {
    let itemText = '';
    let longest = 0;
    for (const item in a) {
        if (a[item].length > longest) {
            longest = a[item].length;
            itemText = a[item];
        }
    }
    return itemText;
};

console.log(longestStringArray(['help', 'me']));
console.log(longestStringArray(['I', 'need', 'candy']));

console.log('   --- uzd 37 ---');
// Write a function that takes an array as argument
// It should return true if all elements in the array are equal
// It should return false otherwise

const allArrayItemsEqual = (a: (string | number | boolean)[]): boolean => {
    for (const item in a) {
        if (a[item] !== a[0]) {
            return false;
        }
    }
    return true;
};

console.log(allArrayItemsEqual([true, true, true, true]));
console.log(allArrayItemsEqual(['test', 'test', 'test']));
console.log(allArrayItemsEqual([1, 1, 1, 2]));
console.log(allArrayItemsEqual(['10', 10, 10, 10]));

console.log('   --- uzd 38 ---');
// Write a function that takes arguments an arbitrary number of arrays
// It should return an array containing the values of all arrays

type varTypeDecl = (string | number | boolean | object)[];
const mergeAllArrays = (...arrays: varTypeDecl): varTypeDecl => {
    let result: varTypeDecl = [];
    for (const array of arrays) {
        result = result.concat(array);
    }
    return result;
};

console.log(mergeAllArrays([1, 2, 3], [4, 5, 6]));
console.log(mergeAllArrays(['a', 'b', 'c'], [4, 5, 6]));
console.log(mergeAllArrays([true, true], [1, 2], ['a', 'b']));

console.log('   --- uzd 39 ---');
// Write a function that takes an array of objects as argument
// Sort the array by property b in ascending order
// Return the sorted array

type ObjectType = {a: number; b: number};

const arraySortByBValue = (a: ObjectType[]) => {
    return a.sort((a: ObjectType, b: ObjectType) => a.b - b.b);
};

console.log(
    arraySortByBValue([
        {a: 1, b: 2},
        {a: 5, b: 4},
    ]),
);

console.log(
    arraySortByBValue([
        {a: 2, b: 10},
        {a: 5, b: 4},
    ]),
);

console.log(
    arraySortByBValue([
        {a: 1, b: 7},
        {a: 2, b: 1},
    ]),
);

console.log('   --- uzd 40 ---');
// Write a function that takes two arrays as arguments
// Merge both arrays and remove duplicate values
// Sort the merge result in ascending order
// Return the resulting array

const twoArrayMerge = (a: number[], b: number[]): number[] => {
    const c = a.concat(b);
    const unique = [...new Set(c)];
    return unique.sort((a, b) => a - b);
};

console.log(twoArrayMerge([1, 2, 3], [3, 4, 5]));
console.log(twoArrayMerge([-10, 22, 333, 42], [-11, 5, 22, 41, 42]));

console.log('   --- uzd 41 ---');
// Write a function that takes an array (a) and a number (b) as arguments
// Sum up all array elements with a value greater than b
// Return the sum

const sumArrayElements = (a: number[], b: number) => {
    let counter = 0;
    for (const num of a) {
        if (num > b) {
            counter += num;
        }
    }
    return counter;
};

console.log(sumArrayElements([1, 2, 3, 4, 5, 6, 7], 2));
console.log(sumArrayElements([-10, -11, -3, 1, -4], -3));
console.log(sumArrayElements([78, 99, 100, 101, 401], 99));

console.log('   --- uzd 42 ---');
// Write a function that takes two numbers (min and max) as arguments
// Return an array of numbers in the range min to max

const generateNumbersArray = (a: number, b: number) => {
    const myArray: Array<number> = [];
    for (let i = a; i <= b; i++) {
        myArray.push(i);
    }
    return myArray;
};

console.log(generateNumbersArray(2, 10));
console.log(generateNumbersArray(1, 3));
console.log(generateNumbersArray(-5, 5));
console.log(generateNumbersArray(2, 7));

// PARAUGS
type SomeObject = {
    [key: string]: number;
};

console.log('   --- uzd 43 ---');
// Write a function that takes an array of strings as argument
// Group those strings by their first letter
// Return an object that contains properties with keys representing first letters
// The values should be arrays of strings containing only the corresponding strings
// For example, the array ['Alf', 'Alice', 'Ben'] should be transformed to
// { a: ['Alf', 'Alice'], b: ['Ben']}

// const groupStringsByFirstLetter = (a: string[]) => {
//     for (const item of a) {
//         if (const.charAt(0))
//     }
// }

// TODO: PĀRSTRUKTURĒT

type VarduMasivs = {
    [key: string]: string[];
};

const objectByFirstLetter = (a: string[]): VarduMasivs => {
    const result: VarduMasivs = {};

    for (const str of a) {
        const firstLetter = str[0].toLowerCase();

        // https://stackoverflow.com/questions/1098040/checking-if-a-key-exists-in-a-javascript-object
        // If no key, create one with empty array.
        if (result[firstLetter] === undefined) {
            result[firstLetter] = [];
        }

        // push string into key array
        result[firstLetter].push(str);
    }

    return result;
};

console.log(objectByFirstLetter(['Alf', 'Alice', 'Ben']));
console.log(objectByFirstLetter(['Ant', 'Bear', 'Bird']));
console.log(objectByFirstLetter(['Berlin', 'Paris', 'Prague']));

console.log('   --- uzd 44 ---');
// Write a function that takes an array with arbitrary elements and a number as arguments
// Return a new array, the first element should be either the given number itself
// or zero if the number is smaller than 6
// The other elements should be the elements of the original array
// Try not to mutate the original array

type MySpecialType = (number | string | boolean)[];
const mutateArray = (a: MySpecialType, b: number): MySpecialType => {
    let newArray: MySpecialType = [];
    if (b < 6) {
        newArray.push(0);
    } else {
        newArray.push(b);
    }

    return newArray.concat(a);
};

console.log(mutateArray([1, 2, 3], 6));
console.log(mutateArray(['a', 'b'], 2));
console.log(mutateArray([null, false], 11));

console.log('   --- uzd 45 ---');
// Write a function that takes an array (a) and a value (n) as arguments
// Save every nth element in a new array
// Return the new array

function getSpecifiedElements(a: number[], n: number): number[] {
    const nArray: number[] = [];
    for (let i = n - 1; i < a.length; i += n) {
        nArray.push(a[i]);
    }
    return nArray;
}

console.log(getSpecifiedElements([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
console.log(getSpecifiedElements([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 5));
console.log(getSpecifiedElements([7, 2, 1, 6, 3, 4, 5, 8, 9, 10], 2));

console.log('   --- uzd 46 ---');
// Write a function that takes an object with two properties as argument
// It should return the value of the property with key country

const getObjectCountry = (a: {country: string; continent: string}): string => {
    return a.country;
};

console.log(getObjectCountry({continent: 'Asia', country: 'Japan'}));
console.log(getObjectCountry({country: 'Sweden', continent: 'Europe'}));

console.log('   --- uzd 47 ---');
// Write a function that takes an object with two properties as argument
// It should return the value of the property with key 'prop-2'
// Tip: you might want to use the square brackets property accessor

const addProp2Property = (a: {[key: string]: string | number}) => a['prop-2'];

console.log(addProp2Property({one: 1, 'prop-2': 2}));
console.log(addProp2Property({'prop-2': 'two', prop: 'test'}));

console.log('   --- uzd 48 ---');
// Write a function that takes an object with two properties and a string as arguments
// It should return the value of the property with key equal to the value of the string

const valueByKeyPattern = (a: {[key: string]: string}, b: string) => a[b];

console.log(
    valueByKeyPattern({continent: 'Asia', country: 'Japan'}, 'continent'),
);
console.log(
    valueByKeyPattern({country: 'Sweden', continent: 'Europe'}, 'country'),
);

console.log('   --- uzd 49 ---');
// Write a function that takes an object (a) and a string (b) as argument
// Return true if a has a property with key b
// Return false otherwise

const arrayWithBKey = (
    a: {[key: string]: number | string},
    b: string,
): boolean => {
    if (b in a) {
        return true;
    } else {
        return false;
    }
};

console.log(arrayWithBKey({a: 1, b: 2, c: 3}, 'b'));
console.log(arrayWithBKey({x: 'a', y: 'b', z: 'c'}, 'a'));
console.log(arrayWithBKey({x: 'a', y: 'b', z: 'c'}, 'z'));

console.log('   --- uzd 50 ---');
// Write a function that a string (a) as argument
// Create an object that has a property with key 'key' and a value of a
// Return the object

type ReturnType50 = {[key: string]: string};
const objectWithValue = (a: string): ReturnType50 => {
    return {key: a};
};

console.log(objectWithValue('a'));
console.log(objectWithValue('z'));
console.log(objectWithValue('b'));

console.log('   --- uzd 51 ---');
// Write a function that takes two strings (a and b) as arguments
// Create an object that has a property with key 'a' and a value of 'b'
// Return the object

const objectFromTwoStrings = (a: string, b: string) => {
    return {a: b};
};

console.log(objectFromTwoStrings('a', 'b'));
console.log(objectFromTwoStrings('z', 'x'));
console.log(objectFromTwoStrings('b', 'w'));

console.log('   --- uzd 52 ---');
// Write a function that takes two arrays (a and b) as arguments
// Create an object that has properties with keys 'a' and corresponding values 'b'
// Return the object

const objectFromTwoArrays = (
    a: (string | number)[],
    b: (number | string)[],
) => {
    let myObject: {[key: string]: number | string} = {};
    for (let i = 0; i < a.length; i++) {
        myObject[a[i]] = b[i];
    }
    return myObject;
};

console.log(objectFromTwoArrays(['a', 'b', 'c'], [1, 2, 3]));
console.log(objectFromTwoArrays(['w', 'x', 'y', 'z'], [10, 9, 5, 2]));
console.log(objectFromTwoArrays([1, 'b'], ['a', 2]));

console.log('   --- uzd 53 ---');
// Write a function that takes an object (a) as argument
// Return an array with all object keys

const returnObjectKeys = (a: {[key: string]: number}) => {
    const myArray: string[] = [];
    for (const element in a) {
        myArray.push(element);
    }
    return myArray;
};

console.log(returnObjectKeys({a: 1, b: 2, c: 3}));
console.log(returnObjectKeys({j: 9, i: 2, x: 3, z: 4}));
console.log(returnObjectKeys({w: 15, x: 22, y: 13}));

console.log('   --- uzd 54 ---');
// Write a function that takes an object (a) as argument
// Return the sum of all object values

const sumObjectValues = (a: {[key: string]: number}) => {
    let sum = 0;
    for (const key in a) {
        sum += a[key];
    }
    return sum;
};

console.log(sumObjectValues({a: 1, b: 2, c: 3}));
console.log(sumObjectValues({j: 9, i: 2, x: 3, z: 4}));
console.log(sumObjectValues({w: 15, x: 22, y: 13}));

console.log('   --- uzd 55 ---');
// Write a function that takes an object as argument
// It should return an object with all original object properties
// except for the property with key 'b'

const removeOjbectKey = (a: {[key: string]: number}) => {
    delete a['b'];
    return a;
};

console.log(removeOjbectKey({a: 1, b: 7, c: 3}));
console.log(removeOjbectKey({b: 0, a: 7, d: 8}));
console.log(removeOjbectKey({e: 6, f: 4, b: 5, a: 3}));

console.log('   --- uzd 56 ---');
// Write a function that takes two objects as arguments
// Unfortunately, the property 'b' in the second object has the wrong key
// should be named 'd' instead
// Merge both objects and correct the wrong property name
// Return the resulting object
// It should have the properties 'a', 'b', 'c', 'd', and 'e'

const mergeObjectsRemoveB = (
    a: {[key: string]: number},
    b: {[key: string]: number},
) => {
    b.d = b.b;
    delete b.b;
    const newObject: {[key: string]: number} = Object.assign({}, a, b);
    return newObject;
};

console.log(mergeObjectsRemoveB({a: 1, b: 2}, {c: 3, b: 4, e: 5}));
console.log(mergeObjectsRemoveB({a: 5, b: 4}, {c: 3, b: 1, e: 2}));

console.log('   --- uzd 57 ---');
// Write a function that takes an object (a) and a number (b) as arguments
// Multiply all values of 'a' by 'b'
// Return the resulting object

const multiplyEachObjectValue = (obj: {[key: string]: number}, b: number) => {
    const result: {[key: string]: number} = {};
    for (const key in obj) {
        result[key] = obj[key] * b;
    }
    return result;
};

console.log(multiplyEachObjectValue({a: 1, b: 2, c: 3}, 3));
console.log(multiplyEachObjectValue({j: 9, i: 2, x: 3, z: 4}, 10));
console.log(multiplyEachObjectValue({w: 15, x: 22, y: 13}, 6));

console.log('   --- uzd 58 ---');
// Write a function that takes an object as argument
// Somehow, the properties and keys of the object got mixed up
// Swap the Javascript object's key with its values and return the resulting object

const changeKeysWithValues = (a: {[key: string]: string | number}) => {
    const result: {[key: string]: string | number} = {};
    for (const key in a) {
        result[a[key]] = key;
    }
    return result;
};

console.log(changeKeysWithValues({z: 'a', y: 'b', x: 'c', w: 'd'}));
console.log(changeKeysWithValues({2: 'a', 4: 'b', 6: 'c', 8: 'd'}));
console.log(changeKeysWithValues({a: 1, z: 24}));

console.log('   --- uzd 59 ---');
// Write a function that takes an object as argument
// Some of the property values contain empty strings
// Replace empty strings and strings that contain only whitespace with null values
// Return the resulting object

const emptyValuesToNull = (a: {[key: string]: string}) => {
    for (const key in a) {
        if (a[key].length == 0) {
            a[key] = null;
        }
    }
    return a;
};

console.log(emptyValuesToNull({a: 'a', b: 'b', c: ''}));
console.log(emptyValuesToNull({a: '', b: 'b', c: ' ', d: 'd'}));
console.log(emptyValuesToNull({a: 'a', b: 'b', c: ''}));

console.log('   --- uzd 60 ---');
// Write a function that takes an object as argument containing properties with personal information
// Extract firstName, lastName, size, and weight if available
// If size or weight is given transform the value to a string
// Attach the unit cm to the size
// Attach the unit kg to the weight
// Return a new object with all available properties that we are interested in

const persInfo = (a: {[key: string]: string | number}) => {
    const newObject: {[key: string]: string | number} = {};
    newObject.fn = a.fn;
    newObject.ln = a.ln;
    if ('size' in a) {
        newObject.size = `${a.size}cm`;
    }
    if ('weight' in a) {
        newObject.weight = `${a.weight}kg`;
    }
    return newObject;
};

console.log(
    persInfo({fn: 'Lisa', ln: 'Müller', age: 17, size: 175, weight: 67}),
);
console.log(
    persInfo({
        fn: 'Martin',
        ln: 'Harper',
        age: 26,
        email: 'martin.harper@test.de',
        weight: 102,
    }),
);
console.log(
    persInfo({fn: 'Andrew', ln: 'Harper', age: 81, size: 175, weight: 71}),
);
console.log(
    persInfo({
        fn: 'Matthew',
        ln: 'Müller',
        age: 19,
        email: 'matthew@mueller.de',
    }),
);

console.log('   --- uzd 61 ---');
// Write a function that takes an array of objects and a string as arguments
// Add a property with key 'continent' and value equal to the string to each of the objects
// Return the new array of objects
// Tip: try not to mutate the original array

// myFunction([{ city: 'Tokyo', country: 'Japan' }, { city: 'Bangkok', country: 'Thailand' }], 'Asia')
// Expected
// [{ city: 'Tokyo', country: 'Japan', continent: 'Asia' }, { city: 'Bangkok', country: 'Thailand', continent: 'Asia' }]

// myFunction([{ city: 'Stockholm', country: 'Sweden' }, { city: 'Paris', country: 'France' }], 'Europe')
// Expected
// [{ city: 'Stockholm', country: 'Sweden', continent: 'Europe' }, { city: 'Paris', country: 'France', continent: 'Europe' }]

const addValueToObject = (a: {city: string; country: string}[], b: string) => {
    const result: {city: string; country: string; continent?: string}[] = [];
    for (let i = 0; i < a.length; i++) {
        const obj: {city: string; country: string; continent?: string} = a[i];
        obj['continent'] = b;
        result.push(obj);
    }
    return result;
};

console.log(
    addValueToObject(
        [
            {city: 'Tokyo', country: 'Japan'},
            {city: 'Bangkok', country: 'Thailand'},
        ],
        'Asia',
    ),
);

console.log(
    addValueToObject(
        [
            {city: 'Stockholm', country: 'Sweden'},
            {city: 'Paris', country: 'France'},
        ],
        'Europe',
    ),
);

console.log('   --- uzd 62 ---');
// Write a function that takes an array of numbers as argument
// Convert the array to an object
// It should have a key for each unique value of the array
// The corresponding object value should be the number of times the key occurs within the array

const convertArrayToObject = (a: number[]) => {
    const result: {[key: number]: number} = {};

    for (const number of a) {
        if (result[number] === void 0) {
            result[number] = 1;
        } else {
            result[number] += 1;
        }
    }
    return result;
};

console.log(convertArrayToObject([1, 2, 2, 3]));
console.log(convertArrayToObject([9, 9, 9, 99]));
console.log(convertArrayToObject([4, 3, 2, 1]));

console.log('   --- uzd 63 ---');
// Write a function that takes two date instances as arguments
// It should return true if the dates are equal
// It should return false otherwise

const compareDates = (a: Date, b: Date) => {
    if (a.getTime() === b.getTime()) {
        return true;
    } else {
        return false;
    }
};

console.log(
    compareDates(
        new Date('2000/01/01 08:00:00'),
        new Date('2000/01/01 08:45:00'),
    ),
);

console.log(
    compareDates(
        new Date('2000/01/01 08:00:00'),
        new Date('2000/01/01 08:00:00'),
    ),
);
console.log(
    compareDates(
        new Date('2001/01/01 08:00:00'),
        new Date('2000/01/01 08:00:00'),
    ),
);

console.log('   --- uzd 64 ---');
// Write a function that takes two date instances as argument
// It should return the number of days that lies between those dates

const daysBetwenDates = (a: Date, b: Date) => {
    let differenceInTime = a.getTime() - b.getTime();
    let differenceInDays = differenceInTime / (1000 * 3600 * 24);
    return Math.abs(differenceInDays);
};

console.log(daysBetwenDates(new Date('2020-06-11'), new Date('2020-06-01')));
console.log(daysBetwenDates(new Date('2000-01-01'), new Date('2020-06-01')));

console.log('   --- uzd 65 ---');
// Write a function that takes two date instances as argument
// It should return true if they fall on the exact same day
// It should return false otherwise

const datesOnSameDay = (a: Date, b: Date) => {
    if (a.toDateString() === b.toDateString()) {
        return true;
    } else {
        return false;
    }
};

console.log(datesOnSameDay(new Date('2000/01/01'), new Date('2000/01/01')));
console.log(datesOnSameDay(new Date('2000/01/01'), new Date('2000/01/02')));
console.log(datesOnSameDay(new Date('2001/01/01'), new Date('2000/01/01')));
console.log(datesOnSameDay(new Date('2000/11/01'), new Date('2000/01/01')));
