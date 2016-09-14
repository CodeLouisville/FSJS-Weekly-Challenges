function openBlock (id) {
    var block = document.getElementById(id);
    var blocks = document.getElementById("main_content").getElementsByTagName("div");

    for (var y = 0; y < blocks.length; y++) {
        blocks[y].style.display = "none";
    }
    block.style.display = "block";
    
    // TODO: remove the "active" class from all of the li elements inside the menu
    // TODO: add the "active" class to the li element that contains the link that was clicked
    var link = document.getElementById("menu_item_" + id);
    var listItems = document.getElementById("menu").getElementsByTagName("li");

    for (var x = 0; x < listItems.length; x++) {
        listItems[x].className = "";
    }
    link.parentNode.className = "active";
}

// TODO: add the "hover" class to the menu items when you hover over them
$('#menu a').hover(function () {
        $(this).addClass('hover');
    }, function () {
        $(this).removeClass('hover');
    });

// TODO: set up the tooltip plugin on all of the links in the menu
$('#menu a').tooltip({
    delay: 1000
});
