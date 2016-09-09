//create function
  //control and return statements
function talk(input) {
    if (input === "Hello") {
        return "Hello World";
    } else {
        return "I'm sorry, I don't understand you.";
    }
}
//Prompt user for input and store variable
var input = prompt("Tell me something!");

//Call function
var response = talk(input);

//Alert user results
alert(response);