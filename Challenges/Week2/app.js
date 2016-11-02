//create function
  //control and return statements

//Prompt user for input and store variable

function processInput(message)
{

  console.log(message);

  if(message == 'Hello!')
  {
    return('Hello world!');

  } else {
    return("You didn't say hello :(");
    }
}

var userInput;

userInput = prompt();

var response = processInput(userInput);

console.log(response);


//Call function

//Alert user results
