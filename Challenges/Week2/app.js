//create function
  //control and return statements
 function sayHello()
 {
	var userInput = prompt("Hello there!");
	//because we dont care about capitals
	userInput = userInput.toLowerCase()
	if (userInput == "hello"){
		return "Hello World";
	}
	else {
		return "Well thats not very friendly to not say hello";
	}
 }
//Prompt user for input and store variable

//Call function
var output = sayHello();
//Alert user results
alert(output);