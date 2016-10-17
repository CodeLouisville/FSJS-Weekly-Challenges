
//create function
  //control and return statements

//Prompt user for input and store variable

//Call function

//Alert user results

function processInput(message)
{
   if(message === "Hello!")
   {
   return("Hello World!");
   }
	else {
	return("You didn't say hello :(");	
  }
}
  
var userInput;
var response;

userInput = prompt();

response = processInput(userInput);
 
alert(response);
