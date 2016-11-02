
function processInput(message)
{
	if(message === "hello")
	{
	return ("Hello World!");
	}
	else {
		return("You didn't say hello :(");
	}
}

var userInput;

userInput = prompt();

var response = processInput(userInput);

console.log(response);