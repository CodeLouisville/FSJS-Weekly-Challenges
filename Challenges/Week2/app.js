//create function
function Hello(value) {
  //control and return statements
  if(value == 'Hello')
  {
    return "Hello world!"
  }
  else{
    return "You didn't say hello :("
  }
}
//Prompt user for input and store variable and call function
var userInput = prompt("Type 'Hello'")
//Alert user results
alert(Hello(userInput));