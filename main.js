/** KATA 01 ⮕
***
*** Log the numbers from 1 to 20. (1, 2, 3,..., 19, 20)
***
**/

console.log('%cKATA 1 RESULTS:', 'background: darkblue; color: white; font-weight: bold;')

let count = 1
while (count <= 20) {
  console.log(count)
  count = count + 1
}

/** KATA 02 ⮕
***
*** Log the even numbers from 1 to 20. (2, 4, 6,...18,20)
***
***/

console.log('%cKATA 02 RESULTS:', 'background: darkblue; color: white; font-weight: bold;') // These console.logs are just to help make the console log better organized and more readable

let countK2 = 0
while (countK2 < 20) {
  countK2 = countK2 + 2;
  console.log(countK2);

}

/** KATA 03 ⮕
***
*** Log the odd numbers from 1 to 20. (1, 3, 5,...,17,19)
***
***/

console.log('%cKATA 03 RESULTS:', 'background: darkblue; color: white; font-weight: bold;')
let countK3 = 0
while (countK3 < 20) {
  countK3 = countK3 + 1;
  if ((countK3 % 2) == 1) {
    console.log(countK3);
  }
}
/** KATA 04 ⮕
***
*** Log the multiples of 5 up to 100. (5, 10, 15, ..., 95, 100)
***
***/
console.log('%cKATA 04 RESULTS:', 'background: darkblue; color: white; font-weight: bold;')
let countK4 = 0
while (countK4 <= 95) {
  var x = 5;
  countK4 = countK4 + x;
  console.log(countK4)
}
/** KATA 05 ⮕
***
*** Log all numbers up to 100 that are perfect squares. (1, 4, 9, ..., 81, 100)
***
***/

console.log('%cKATA 05 RESULTS:', 'background: darkblue; color: white; font-weight: bold;')


var countK5 = 1
while (countK5 <= 99) {
  if (Number.isInteger(Math.sqrt(countK5))) {
    console.log(countK5);
  }
  countK5 = countK5 + 1;
}

/** KATA 06 ⮕
***
*** Log the numbers counting backwards from 20 to 1. (20, 19, 18, ..., 2, 1)
***
***/

console.log('%cKATA 06 RESULTS:', 'background: darkblue; color: white; font-weight: bold;')


let countK6 = 21
while (countK6 > 1) {
  countK6 = countK6 - 1;
  console.log(countK6);
}


/** KATA 07 ⮕
***
*** Log the even numbers counting backwards from 20. (20, 18, 16, ..., 4, 2)
***
***/

console.log('%cKATA 07 RESULTS:', 'background: darkblue; color: white; font-weight: bold;')

let countK7 = 21
while (countK7 > 1) {
  countK7 = countK7 - 1;
  if ((countK7 % 2) == 0) {
    console.log(countK7);
  }
}


/** KATA 08 ⮕
***
*** Log the odd numbers from 20 to 1, counting backwards. (19, 17, 15, ..., 3, 1)
***
***/

console.log('%cKATA 08 RESULTS:', 'background: darkblue; color: white; font-weight: bold;')


let countK8 = 21
while (countK8 > 1) {
  countK8 = countK8 - 1;
  if ((countK8 % 2) == 1) {
    console.log(countK8);
  }
}

/** KATA 09 ⮕
***
*** Log the multiples of 5, counting down from 100. (100, 95, 90, ..., 10, 5)
***
***/

console.log('%cKATA 09 RESULTS:', 'background: darkblue; color: white; font-weight: bold;')


let countK9 = 105
while (countK9 > 5) {
  var x = 5;
  countK9 = countK9 - x;
  console.log(countK9)
}


/** KATA 10 ⮕
***
*** Log the numbers that are perfect squares, counting down from 100. (100, 81, 64, ..., 4, 1)
***
***/

console.log('%cKATA 10 RESULTS:', 'background: darkblue; color: white; font-weight: bold;')

var countK10 = 100
while (countK10 > 0) {
  if (Number.isInteger(Math.sqrt(countK10))) {
    console.log(countK10);
  }
  countK10 = countK10 - 1;
}
