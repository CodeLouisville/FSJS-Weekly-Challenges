var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if(xhr.readyState === 4 && xhr.status === 200) {
    var pokemon = JSON.parse(xhr.responseText);
   var pokeName[];
    for (var i=0; i<results.length; i += 1) {
      pokeName += results[i].name;
    }
  }
};
xhr.open('GET', 'http://pokeapi.co/api/v2/pokemon/');
xhr.send();






  

   
          {
    "results": [{
        "url": "http://pokeapi.co/api/v2/pokemon/1/",
        "name": "bulbasaur"
    }]
}) 

// 1.1)  Use the addPokemon function to show each of the Pokémon names that were retrieved.  
//Hint: Learn how to access resources via the documentation http://pokeapi.co/docsv2/#resource-lists
  .done(function addPokemon(name) {
    $(`
        <li class="poke-card">
            <h3 class="name">${name}</h3>
        </li>
    `).appendTo('#pokemon');
})
  .fail(function( jqxhr, textStatus, error ) {
    var err = textStatus + ", " + error;
    console.log( "Request Failed: " + err );
});