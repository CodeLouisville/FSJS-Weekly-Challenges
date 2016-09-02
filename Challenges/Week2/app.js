//create function
  //control and return statements

//Prompt user for input and store variable

//Call function

//Alert user results
var $correct = false;
alert("Greetings friend!");

while(!$correct){
    $userInput = prompt("We sincerely request your valuable input: ");
    $response = "HELLO";
        if($userInput.toUpperCase() == $response){
            alert($userInput + " World");
            $correct = true;
        } else{
            alert("Sorry, that is not the valuable input we were hoping for:");
            var $tryAgain = prompt("Would you like to try again: yes or no?");
            if($tryAgain.toUpperCase() == 'NO' || $tryAgain.toUpperCase() == 'N' ){
                break;
            }
        }
}