//#Week 6 JQuery Code Challenge


//Objects
	var boxy = function(h, w){
		this.height = h;
		this.width = w;
	};	
boxy.prototype.area = function(h = this.height,w = this.width){
	return h * w;
}:
 boxy.prototype.areaIncrease: function(){
	  this.height ++;
	  this.width ++;
  };
  boxy.prototype.areaDecrease: function(){ 
	  this.height --;
	  this.width --;
  };
  
 boxy.prototype.heightIncrease: function(){ 
	  this.height ++;	
  };
  boxy.prototype.widthIncrease: function(){ 
	  this.width ++;	  
  };
  boxy.prototype.heightDecrease: function(){ 
	  this.height --;	  
  };
  boxy.prototype.widthDecrease: function(){ 
	  this.width --;	  
  };
  
  
//Code Challenge:
//Create an object named "Box" with 3 properties, height, width, volume

//Create 2 buttons for Height. The first button decreases the Box Height by 1. The second button increases the Box Height by 1.

//Create a button that prints the object and its attributes to the page (use the span "output".
 
//Extra credit
//Create interactive buttons to decrease or increase the Width and Volume