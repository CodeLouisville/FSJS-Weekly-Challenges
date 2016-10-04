var hello = prompt("Say hello why don't you?!")//Prompt user for input and store variable

function inputCheck (){
    if (hello.toLowerCase() === "hello"){
        alert("Hello World!");
    } else {
        alert("That's not quite what I was looking for...");
    }
};

inputCheck();

