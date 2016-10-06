//#Week 6 JQuery Code Challenge

//Objects
		
//Code Challenge:
//Create an object named "Box" with 3 properties, height, width, volume.
//Create 2 buttons for Height. The first button decreases the Box Height by 1. The second button increases the Box Height by 1.
//Create a button that prints the object and its attributes to the page (use the span "output".
 
//Extra credit
//Create interactive buttons to decrease or increase the Width and Volume

var box = {
    height:1,
    width:1,
    volume:1,
};
$('select').on('change', function() {
    if($('select[name="dimension"]').val() == 'Width'){
         $('.add').click(function(){
            box.width +=1;
            console.log(box.width);
            var boxWidth = box.width*10+100;
            $('.box').css("width", boxWidth); 
            $('#printResults').css('display', 'none');
         });

        $('.minus').click(function(){
            box.width -=1;
            console.log(box.width);
            var boxWidth = box.width*10 +100;
            $('.box').css("width", boxWidth);
            $('#printResults').css('display', 'none');
        });

    } 
    if($('select[name="dimension"]').val() == 'Height'){
        $('.add').click(function(){
            box.height +=1;
            console.log(box.height);
            var boxHeight = box.height*10+100;
            $('.box').css("height", boxHeight);  
            $('#printResults').css('display', 'none');
        });
            $('.minus').click(function(){
            box.height -=1;
            console.log(box.height);
            var boxHeight = box.height*10 +100;
            $('.box').css("height", boxHeight);
            $('#printResults').css('display', 'none');
        });
    }
    if($('select[name="dimension"]').val() == 'Volume'){
        $('.add').click(function(){
            box.volume +=1;                                     
            $('#printResults').css('display', 'none');
        });
            $('.minus').click(function(){
            box.volume -=1;            
            $('#printResults').css('display', 'none');
        });
    }
});

$('.print').click(function(){
    $results = "<ul>";
    $results += "<li>Height: " + box.height + " in.</li>";
    $results += "<li>Width: " + box.width + " in.</li>";
    $results += "<li>Volume: " + box.volume + " in.</li>";
    $results += "</ul>";
    
    document.getElementById("printResults").innerHTML = $results;
    $('#printResults').css('display', 'block');
    
});

