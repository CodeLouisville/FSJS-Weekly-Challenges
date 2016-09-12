//create function

function hello() {
	//Prompt user for input and store variable
    var greeting = prompt("Say Hello", "");
	//control and return statements
    if (greeting.toLowerCase() === "hello") {
        document.getElementById("msg").innerHTML =
        greeting.charAt(0).toUpperCase()+greeting.slice(1) + " World!";
		//Alert user results
        alert(greeting.charAt(0).toUpperCase()+greeting.slice(1) + " World!");

    }else {
        document.getElementById("msg").innerHTML =
        "Sorry, \"" + greeting + "\" isn't correct!";
		//Alert user results
        alert("Sorry, \"" + greeting + "\" isn't correct!");
       }
}
hello();



