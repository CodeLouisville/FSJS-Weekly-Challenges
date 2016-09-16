//create function

  //control and return statements

//Prompt user for input and store variable

//Call function

//Alert user results

function ProcessMessage(msg)
{
  if (msg === "Hello")
  {
    alert("Hello World");
  }
  else
    alert("You didn't say Hello");
    
  console.log(msg);
}

var message;

message = prompt();

ProcessMessage(message);
