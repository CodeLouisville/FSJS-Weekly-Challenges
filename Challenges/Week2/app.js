//create function
  //control and return statements

//Prompt user for input and store variable

//Call function

//Alert user results
var $correct = false;
alert("Greetings friend!");

var $input = function(){
    $guess = 0;
    while(!$correct){
    $userInput = prompt("We sincerely request your valuable input: ");
    $response = "HELLO";
        if($userInput.toUpperCase() == $response){
            alert($userInput + " World");
            $correct = true;
            console.log("Guess:" + $guess);
        } else{
            alert("Sorry, that is not the valuable input we were hoping for:");
            var $tryAgain = prompt("Would you like to quit: yes or no?");
            $guess++;
            if($tryAgain.toUpperCase() == 'NO' || $tryAgain.toUpperCase() == 'N' ){
                break;
            }
        }        
    }
    return $guess;
}

$input();