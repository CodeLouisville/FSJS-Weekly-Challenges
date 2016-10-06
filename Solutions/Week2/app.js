function getWelcomeMessage(value) {

  if(value == 'Hello')
  {
    return "Hello world!"
  }
  else{
    return "You didn't say hello :("
  }
}
var val = prompt("Type 'Hello'")
alert(getWelcomeMessage(val));
