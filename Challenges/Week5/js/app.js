
function addPokemon(name) {
    $(`
         <li class="poke-card">
        <h3 class="name">${name}</h3>
         </li>
     `).appendTo('#pokemon');


};

//The URL of the first 20 Pokémon resource list
var firstListURL="http://pokeapi.co/api/v2/pokemon";
var previousListURL="";
var nextListURL="";
//A function to show the 20 names on the page
function showPokemon(pokemonAPIURL){
  //Get the resorce list from the server
  $.getJSON(pokemonAPIURL,function(data){
    $.each(data.results,function(i,pokemon){
    addPokemon(pokemon.name);
    });//End each
    //Get the URL of the next 20 Pokémon resource list
    nextListURL= data.next;
    //Get the URL of the previous 20 Pokémon resource list
    previousListURL=data.previous;
    //When you click on a name, hide all the other names and show the details about that Pokémon
    $("#pokemon li h3").click(function(){
      //Get the item which is clicked
      var $listItem=$(this).parent();
      //Call showDetail function to show the details
      showDetail($listItem);
    });
  });//End get the resorce list from the server
}//End function

//A function to show the details
function showDetail(listItem){
  //Hide the other names
  listItem.siblings().hide();
  //Hide the previous and next buttons
  listItem.parent().siblings().hide();
  //Create the elements to show the details
  var $basicExperience= $("<h4></h4>").attr("id","basicExperience");
  var $height= $("<h4></h4>").attr("id","height");
  var $weight= $("<h4></h4>").attr("id","weight");
  //Create a button to go back to the list
  var $button= $("<button></button").text("Go Back").addClass("btn");
  $button.click(function(){
    //Remove the elements when click the go back button
    listItem.children("h4,button").remove();
    //Show the other names
    listItem.siblings().show();
    //Show the previous and next button
    listItem.parent().siblings().show();
  });
  listItem.append($basicExperience,$height,$weight,$button);
  //Call the setItemText function to set the elements' text
  setItemText(listItem);
}

function setItemText(item){
  //Get the name of the Pokémon
  var $getPokemonName=item.children(".name").text();
  var pokemonURL="http://pokeapi.co/api/v2/pokemon/"+$getPokemonName+"/";
  //Get the pokemon details from the server
  $.getJSON(pokemonURL,function(data){
    //Set the elements' text
    $("#basicExperience").text("Basic Experience: "+data.base_experience);
    $("#height").text("Height: "+data.height);
    $("#weight").text("Weight: "+data.weight);
  });//End get the pokemon from the server
}

//Call the showPokemon function to show the first 20  name
showPokemon(firstListURL);
//Show the next 20 pokemon's name when clicking the next button
$("#next").click(function(){
  // Disable the next buttons if there are no more Pokémon to retrieve
  if(nextListURL==null){
    $("#next").attr("disable",true);
    alert("No more Pokémon to retrieve in that direction.");
  }
  else{
    //Delete the current 20 names and show the next 20 names
    $('#pokemon').empty();
    showPokemon(nextListURL);
  }
});
//Show the previous 20 names when clicking the previous button
$("#previous").click(function(){
  //Disable the previous buttons if there are no more Pokémon to retrieve
  if(previousListURL==null){
    $("#previous").attr("disable",true);
    alert("No more Pokémon to retrieve in that direction.");
  }else{
    //Delete the current 20 names and show the previous 20 names
    $('#pokemon').empty();
    showPokemon(previousListURL);
  }
});


// 1.)  Use the PokéAPI from http://pokeapi.co along with jQuery's getJSON function to retrieve the first 20 Pokémon.

// 1.1)  Use the addPokemon function to show each of the Pokémon names that were retrieved.
//Hint: Learn how to access resources via the documentation http://pokeapi.co/docsv2/#resource-lists


// 2.)  Use jQuery to create a click handler for the next and previous buttons.

// 2.1) Use the "next" and "previous" properties of the pokemon resource object to get the next or previous list of Pokémon.
// 2.2) When a user clicks next or previous, remove all existing Pokémon from the ul element and add the new list of Pokémon.
// 2.3) Use jQuery to disable the next/previous buttons if there are no more Pokémon to retrieve in that direction.

/*  Super Awesome Bonus!
    When you click on a Pokémon name, hide all the names and show a larger card that contains details about that Pokémon such as their sprite (picture), name,
    type or anything else you would like to include.  Add a way to go back to the list when your're done looking at the detail.

    Be creative, you can style/arrange the detail information however you like!
*/
