//create function

function hello() {
	//Prompt user for input and store variable
    var greeting = prompt("Say Hello", "");
	//control and return statements
    if (greeting == "Hello") {
        document.getElementById("msg").innerHTML =
        greeting + " World!";
		//Alert user results
        alert(greeting + " World!");

    }else {
        document.getElementById("msg").innerHTML =
        "Incorrect input!";
		//Alert user results
        alert("Incorrect input!");
       }
}



