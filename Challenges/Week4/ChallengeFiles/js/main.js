var list=document.getElementById("menu");
function openBlock (id) {
    var block = document.getElementById(id);
    var blocks = document.getElementById("main_content").getElementsByTagName("div");

    for (var y = 0; y < blocks.length; y++) {
        blocks[y].style.display = "none";
    }
    block.style.display = "block";

    // TODO: remove the "active" class from all of the li elements inside the menu
    var listActive=list.getElementsByClassName("active");
        listActive[0].removeAttribute("class")

    // TODO: add the "active" class to the li element that contains the link that was clicked
        var anchor= document.getElementById("menu_item_"+id);
        var listClicked= anchor.parentNode;
        listClicked.className="active";
}

//Add a onclick event to all the link
var link=document.querySelectorAll("#menu li a");
for(i=0;i<link.length;i++){
  link[i].onclick=function(){
    var blockId=this.id.substring(10);//The id which was clicked is menu_item_+blockId
    openBlock(blockId);
  };

  // TODO: add the "hover" class to the menu items when you hover over them
  link[i].onmouseover=function(){this.className="hover";};
  link[i].onmouseout=function(){this.removeAttribute("class");};
}

// TODO: set up the tooltip plugin on all of the links in the menu
$('#menu li a').tooltip();
