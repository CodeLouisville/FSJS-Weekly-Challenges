//create function
  //control and return statements

//Prompt user for input and store variable

//Call function

//Alert user results

/* -Prompt the user for input and store that into a variable

-Pass that value into a function

-If the user entered 'Hello' into the prompt, alert the user with 'Hello World!'

-If they entered anything else, alert with a different message of your choice (such as "Incorrect input!"

-Don't forget to call your script file from this HTML file!  I've created the script tags for you, but you have to add something to it!
*/

function hello() {
 var sayHello = prompt();
	if (sayHello === 'Hello') {
	alert('Hello World');
    document.write("you did it!")
	} else {
	  alert("Incorrect input!");
	  }
}
hello();
