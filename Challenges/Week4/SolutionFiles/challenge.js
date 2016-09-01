// Create a new div of class "planet" and set its background color
// to the color of your choice.  Then, append it to the body in the DOM.

// One Answer:

var newPlanet = document.createElement("div");
newPlanet.className = "planet";
newPlanet.style.backgroundColor = "red";
document.body.appendChild(newPlanet);

// Create a new div of class "moon" and append it to the planet in the DOM.

// One Answer:

var newMoon = document.createElement("div");
newMoon.className = "moon";
newPlanet.appendChild(newMoon);
