var readlineSync = require('readline-sync')

var count = 0

function question(q, a) {
  var userAns = readlineSync.question(q)
  
  if(userAns===a){
    console.log('You are right')
    console.log(`Score: ${count+=1}`)
  } else {
    console.log('You are wrong')
    console.log(`Score: ${count+=1}`)
  }
}

question('How old are you? ', '21')