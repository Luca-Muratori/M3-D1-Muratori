/*

1)
Create a function to calculate the sum of the two given integers. If the two values are same, then returns triple their sum.
*/
const sum1 = function (a, b) {
  if (a === b) {
    return (a + b) * 3;
  } else {
    return a + b;
  }
};
console.log(sum1(1, 1));
console.log(sum1(1, 2));

/*
2)
Create a function to check two given numbers and return true if one of the number is 50 or if their sum is 50.
*/
const checkNumber = function (a, b) {
  if (a === 50 || b === 50 || a + b === 50) {
    return true;
  } else {
    return false;
  }
};
console.log(checkNumber(1, 50));
console.log(checkNumber(1, 1));
console.log(checkNumber(25, 25));

/*
3)
Create a function to remove a character at the specified position of a given string and return the new string.
*/

const removeCharacter = function (string, position) {
  let arr = [...string];
  arr.splice(position, 1);
  let newArr = arr.join("");
  return newArr;
};
console.log(removeCharacter("Strive", 2));
/*

4)
 Create a function to find the largest of three given integers.
*/
const maxOfThree = function (a, b, c) {
  let max = Math.max(a, b, c);
  return max;
};

console.log(maxOfThree(10, 23, 1));

/*
5)
Create a function to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.
*/
const checkTheRange = function (a, b) {
  if ((a > 40 && a < 60) || (a > 70 && a < 100)) {
    return `${a} is between 40-60 or 70-100`;
  } else if ((b > 40 && b < 60) || (b > 70 && b < 100)) {
    return `${b} is between 40-60 or 70-100`;
  } else {
    ("the given integers aren't between 40-60 or 70-100");
  }
  return;
};
console.log(checkTheRange(20, 50));

/*
6) 
Create a function to create a new string of specified copies (positive number) of a given string.
*/
const repeatSting = function (string, number) {
  let repeated = "";
  while (number > 0) {
    repeated += string;
    number--;
  }
  return repeated;
};
console.log(repeatSting("hello", 2));
/*

7)
Create a function to display the city name if the string begins with "Los" or "New" otherwise return blank.
*/
const DisplayCity = function (city) {
  if (city.startsWith("Los") || city.startsWith("New")) {
    return city;
  } else {
    return ' " ';
  }
};
console.log(DisplayCity("New York"));
console.log(DisplayCity("Los Angeles"));
console.log(DisplayCity(" York"));

/*
8)
Create a function to calculate the sum of three elements of a given array of integers of length 3.
*/
const sumThreeElements = function (arr) {
  let zero = 0;
  for (let i = 0; i < arr.length; i++) {
    zero += arr[i];
  }
  return zero;
};
console.log(sumThreeElements([3, 3, 3]));
console.log(sumThreeElements([3, 2, 5]));
/*

9)
Create a function to test whether an array of integers of length 2 contains 1 or a 3. 
*/
const checkArr = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1 || arr[i] === 3) {
      return `in the array there is 1 or 3`;
    } else {
      return "this array doesn't contain 1 or 3";
    }
  }
};
console.log(checkArr([1, 2]));
console.log(checkArr([4, 2]));

/*

10)

Create a function to test whether an array of integers of length 2 does not contain 1 or a 3*/
const checkArr2 = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1 || arr[i] === 3) {
      return `in the array there is 1 or 3`;
    } else {
      return "this array doesn't contain 1 or 3";
    }
  }
};
console.log(checkArr2([1, 2]));
console.log(checkArr2([4, 2]));

/*11)

Create a function to find the longest string from a given array of strings.*/
const findTheLongest = function (arr) {
  let max_str = arr[0].length;
  let ans = arr[0];
  for (let i = 1; i < arr.length; i++) {
    let maxi = arr[i].length;
    if (maxi > max_str) {
      ans = arr[i];
      max_str = maxi;
    }
  }
  return `the longest string in the array is: '${ans}'`;
};
console.log(
  findTheLongest(["hello", "Pony", "Supercalifragilistichespiralitoso"])
);

/*
12)
Create a function to find the types of a given angle.
Types of angles:
    Acute angle: An angle between 0 and 90 degrees.
    Right angle: An 90 degree angle.
    btuse angle: An angle between 90 and 180 degrees.
    Straight angle: A 180 degree angle.*/

const typeoFAngle = function (angle) {
  if (angle === 90) {
    return "right angle";
  } else if (angle > 0 && angle < 90) {
    return "acute angle";
  } else if (angle > 90 && angle < 180) {
    return "obtuse angle";
  } else if (angle === 180) {
    return "straight angle";
  } else {
    return `the input is unknown`;
  }
};
console.log(typeoFAngle(90));
console.log(typeoFAngle(190));
console.log(typeoFAngle(180));
console.log(typeoFAngle(45));

/*
13)

Create a function to find the index of the greatest element of a given array of integers*/
const findTheIndex = function (arr) {
  let i = arr.indexOf(Math.max(...arr));
  return "the position of the greatest number in the array is " + ++i;
};
console.log(findTheIndex([221, 41, 4]));
/*

14)

Create a function to get the largest even number from an array of integers.*/
const findTheGreatestEven = function (arr) {
  arr.sort((x, y) => y - x);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      return arr[i];
    }
  }
};
console.log(findTheGreatestEven([1, 2, 4, 5]));
/*

16)

Create a function to check from two given integers, whether one is positive and another one is negative.*/
const checkPositiveOrNegative = function (a, b) {
  if (a > 0 && b < 0) {
    return a + " is positive and " + b + " is negative";
  } else if (a < 0 && b > 0) {
    return a + " is negative and " + b + " is positive";
  } else if (a < 0 && b < 0) {
    return a + " and " + b + " are negative";
  } else if (a > 0 && b > 0) {
    return a + " and " + b + " are positive";
  }
};
console.log(checkPositiveOrNegative(1, -2));
console.log(checkPositiveOrNegative(-1, -2));
console.log(checkPositiveOrNegative(1, 2));
console.log(checkPositiveOrNegative(-1, 2));
/*
17)

Create a function to create new string with first 3 characters are in lower case and the others in upper case.
 If the string length is less than 3 convert all the characters in upper case. */

const convertInUpperCase = function (string) {
  {
    if (string.length < 3) {
      return string.toUpperCase();
    }
    front_part = string.substring(0, 3).toUpperCase();
    back_part = string.substring(3, string.length);
    return front_part + back_part;
  }
};
console.log(convertInUpperCase("hello"));

/*

18)

Create a function to calculate the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.*/
const calculateTheSum = function (a, b) {
  if (a + b >= 50 && a + b <= 80) {
    return 65;
  } else {
    return 80;
  }
};

console.log(calculateTheSum(5, 48));
console.log(calculateTheSum(78, 1));
console.log(calculateTheSum(78, 45));

/*

19)

Create a function to convert a number to a string, the contents of which depend on the number's factors. Follow next example:

If the number has 3 as a factor, output 'Diego'.
If the number has 5 as a factor, output 'Riccardo'.
If the number has 7 as a factor, output 'Stefano'.
If the number does not have 3, 5, or 7 as a factor, just pass the number's digits straight through.
Examples
28's factors are 1, 2, 4, 7, 14, 28.
this would be a simple "Stefano".
30's factors are 1, 2, 3, 5, 6, 10, 15, 30.
this would be a "DiegoRiccardo".
34 has four factors: 1, 2, 17, and 34.
this would be "34".*/
const convertNumberToString = function (num) {
  return num % 3 === 0 && num % 5 !== 0 && num % 7 !== 0
    ? "Diego"
    : num % 5 === 0 && num % 3 !== 0 && num % 7 !== 0
    ? "Riccardo"
    : num % 7 === 0 && num % 3 !== 0 && num % 5 !== 0
    ? "Stefano"
    : num % 3 === 0 && num % 5 === 0 && num % 7 !== 0
    ? "DiegoRiccardo"
    : num % 5 === 0 && num % 7 === 0 && num % 3 !== 0
    ? "RiccardoStefano"
    : num % 7 === 0 && num % 3 === 0 && num % 5 !== 0
    ? "StefanoDiego"
    : num % 7 === 0 && num % 5 === 0 && num % 3 === 0
    ? "StefanoDiegoRiccardo"
    : num;
};
console.log(convertNumberToString(15));
/*

20)
Create a function that given a phrase returns its acronym, like British Broadcasting Corporation returns BBC

*/
const acronymGenerator = function (str) {
  //create an empty array
  let newStrArr = [];
  //split the string, dividing every word in element of array=> [ 'British', 'broadcasting', 'Corporation' ]
  let splitted = str.split(" ");
  //for each word we take the first letter of every word, make them upper case, and putting in the newStrArr
  for (let i = 0; i < splitted.length; i++) {
    const letter = splitted[i];
    newStrArr.push(letter.charAt(0).toUpperCase()); //newStrArr=['B', 'B', 'C']
  }
  //finally we join all the array element, to create a string with just the acronym
  return newStrArr.join("");
};
console.log(acronymGenerator("British broadcasting Corporation"));

//EXTRA
/* 1) MAX CHAR

Given a string, return the character that is most
commonly used in the string.
--- Examples
    maxChar("abcccccccd") === "c"
    maxChar("apple 1231111") === "1"
*/
const findCommon = function (string) {
  let arr = string.split("");
  let common = 0;
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
  }
};
findCommon("hello");

/* 2) ANAGRAMS

Check to see if two provided strings are anagrams of each other.
One string is an anagram of another if it uses the same characters
in the same quantity. Only consider characters, not spaces
or punctuation.  Consider capital letters to be the same as lower case

--- Examples
  anagrams('rail safety', 'fairy tales') --> True
  anagrams('RAIL! SAFETY!', 'fairy tales') --> True
  anagrams('Hi there', 'Bye there') --> False
*/

/* 3) ANAGRAMS 2

Given a word and a list of possible anagrams, select the correct sublist.

--- Examples 

    "listen" and a list of candidates like "enlists" "google" "inlets" "banana" the program should return a list containing "inlets".
*/

/* 4) PALINDROME

Given a string, return true if the string is a palindrome
or false if it is not.  Palindromes are strings that
form the same word if it is reversed. Do include spaces
and punctuation in determining if the string is a palindrome.

--- Examples:

    palindrome("abba") === true
    palindrome("abcdefg") === false
 */

/* 5) REVERSE INT

Given an integer, return an integer that is the reverse
ordering of numbers.

--- Examples

    reverseInt(15) === 51
    reverseInt(981) === 189
    reverseInt(500) === 5
    reverseInt(-15) === -51
    reverseInt(-90) === -9
 */

/* 6) STEPS

Write a function that accepts a positive number N.
The function should console log a step shape
with N levels using the # character.  Make sure the
step has spaces on the right hand side!

--- Examples

    steps(2)
        '# '
        '##'
    steps(3)
        '#  '
        '## '
        '###'
    steps(4)
        '#   '
        '##  '
        '### '
        '####' */

/* 7) REVERSE STRING

Given a string, return a new string with the reversed
order of characters

--- Examples

    reverse('apple') === 'leppa'
    reverse('hello') === 'olleh'
    reverse('Greetings!') === '!sgniteerG'
 */

/* 8) CHUNK

Given an array and chunk size, divide the array into many subarrays
where each subarray is of length size

--- Examples

    chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
    chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
    chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
    chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
    chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]
*/

/* 9) PYRAMID

Write a function that accepts a positive number N.
The function should console log a pyramid shape
with N levels using the # character.  Make sure the
pyramid has spaces on both the left and right hand sides

--- Examples

    pyramid(1)
        '#'
    pyramid(2)
        ' # '
        '###'
    pyramid(3)
        '  #  '
        ' ### '
        '#####' */

/* 10) SPYRAL MATRIX

Write a function that accepts an integer N
and returns a NxN spiral matrix.

--- Examples

    matrix(2)
        [[1, 2],
        [4, 3]]
    matrix(3)
        [[1, 2, 3],
        [8, 9, 4],
        [7, 6, 5]]
    matrix(4)
        [[1, 2, 3, 4],
        [12, 13, 14, 5],
        [11, 16, 15, 6],
        [10,  9,  8, 7]]

*/
