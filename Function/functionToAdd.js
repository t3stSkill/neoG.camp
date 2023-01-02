
var readlineSync = require('readline-sync')

function addTwoNumber(paramOne, paramTwo) {
  var sum = paramOne + paramTwo
  return sum
}



var numOne = readlineSync.question('Enter the first value: ')
var numTwo = readlineSync.question('Enter the second value: ')

console.log('Variable call ' + addTwoNumber(Number(numOne), Number(numTwo)))
console.log('Direct call ' + addTwoNumber(20, 7))

