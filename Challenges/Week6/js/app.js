//#Week 6 JQuery Code Challenge

//Objects
		
//Code Challenge:
//Create an object named "Box" with 3 properties, height, width, volume.

// var box = $('#output').addClass('box');
var box = {
	"height": 1,
	"width": 1,
	"volume": 1
};
var output = $('#output');

//Create 2 buttons for Height. The first button decreases the Box Height by 1. The second button increases the Box Height by 1.

$("#HeightDecrease" ).click(function() {
	output.empty();
	box.height--;
 });
 
 $("#HeightIncrease" ).click(function() {
	output.empty();
	box.height++;
 });
 
 $("#WeightDecrease" ).click(function() {
	output.empty();
	box.width--;
 });
 
 $("#WeightIncrease" ).click(function() {
	output.empty();
	box.width++;
 });
 
 $("#VolumeDecrease" ).click(function() {
	output.empty();
	box.volume--;
 });
 
 $("#VolumeIncrease" ).click(function() {
	output.empty();
	box.volume++;
 });
 

//Create a button that prints the object and its attributes to the page (use the span "output".
 $('#Print').click(function() {
	output.append('<b>Height:</b> ' + box.height + '<br>');
	output.append('<b>Width:</b> ' + box.width + '<br>');
	output.append('<b>Volume:</b> ' + box.volume + '<br>');
	
 });
 
//Extra credit
//Create interactive buttons to decrease or increase the Width and Volume