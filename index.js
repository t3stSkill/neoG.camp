
var readlineSync = require('readline-sync')

var count = 0;
var userRes = readlineSync.question('Enter your Age: ')

if (userRes === 'yes'|| userRes === 'y') {
  console.log('Fuck Hard')
  // console.log(count+=1)
  console.log(++count)
} else {
  console.log('Try again leter!!!')
}