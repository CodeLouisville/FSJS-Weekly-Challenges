function hello(input){//create function
  if(input==="Hello")
    return "Hello World!";
  else return "Incorrect input!";
}//control and return statements

var user_enter=prompt("Please enter a word!");//Prompt user for input and store variable

var i=hello(user_enter);//Call function

alert(i);//Alert user results
