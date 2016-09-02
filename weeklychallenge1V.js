
//ask user for input 
alert ("Enter input:");

//create a global variable to store input
var value; 

//when button is clicked get the input from the textfield
function retrieve ()
{
  var txtbox= document.getElementById("txt"); 
  value= txtbox.value;
  checkInput (); 
}

//check if the input is "hello"

function checkInput();
{
  if (value =="Hello")
{
//print hello world

printHellowWorld();
}
else 
{
//print other statement
printOtherStatement();

//alert the user hello world
function printHelloWorld()
{
  alert ("Hello world");
} 

function printOtherStatement(); 
{
alert ("You did not print hello :/");