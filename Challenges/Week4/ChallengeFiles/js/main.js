function openBlock (id) {
    var block = document.getElementById(id);
    var blocks = document.getElementById("main_content").getElementsByTagName("div");

    for (var y = 0; y < blocks.length; y++) {
        blocks[y].style.display = "none";
    }
    block.style.display = "block";
    
    // TODO: remove the "active" class from all of the li elements inside the menu
	var menuList = $('#menu li');
	var menuLink = document.getElementById("menu_item_" + id);
	menuList.removeClass('active');
	
	
    // TODO: add the class"active" class to the li element that contains the link that was clicked
	for (var i =0; i < menuList.length; i++) {
		 
		 menuList[i].className = '';
		// menuLink.click().className = "active";

	};
	 menuLink.parentNode.className = "active";
	  

}

// TODO: add the "hover" class to the menu items when you hover over them
	 $( '#menu a').hover(
		function() { $( this ).addClass('hover'); },
		function() { $(this).removeClass('hover');
		}); 


// TODO: set up the tooltip plugin on all of the links in the menu
$( "#menu a" ).tooltip({
  show: { effect: "blind", duration: 800 }
});
