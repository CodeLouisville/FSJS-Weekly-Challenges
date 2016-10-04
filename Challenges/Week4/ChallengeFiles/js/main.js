function openBlock (id) {
    var block = document.getElementById(id);
    var blocks = document.getElementById("main_content").getElementsByTagName("div");

    for (var y = 0; y < blocks.length; y++) {
        blocks[y].style.display = "none";
    }
    block.style.display = "block";
    $("#menu li").removeClass("active");
};


//change block content based on menu item clicked and highlight the current view
$("#menu li a").click(function(){
    openBlock($(this).attr("id").replace("menu_item_", ""));
    $(this).parent().addClass("active");
});

//highlight the item your mouse is over in the menu
$("#menu li a").hover(
function() {
    $(this).addClass("hover");
  }, function() {
    $(this).removeClass("hover");
  }
);

//tooltip menu plugin
$('#menu a').tooltip({
    delay  : 1000,
    direction : "above"
}

);
