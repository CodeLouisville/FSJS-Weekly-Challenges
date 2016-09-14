function openBlock (id) {
    var block = document.getElementById(id);
    var blocks = document.getElementById("main_content").getElementsByTagName("div");

    for (var y = 0; y < blocks.length; y++) {
        blocks[y].style.display = "none";
    }
    block.style.display = "block";
    
    // TODO: remove the "active" class from all of the li elements inside the menu
    // TODO: add the "active" class to the li element that contains the link that was clicked

}

// TODO: add the "hover" class to the menu items when you hover over them


// TODO: set up the tooltip plugin on all of the links in the menu

