//function addPokemon(name) {
//    $(`
//        <li class="poke-card">
//            <h3 class="name">${name}</h3>
//        </li>
//    `).appendTo('#pokemon');
//};

var pokedex = "http://pokeapi.co/api/v2/pokemon/";
var pokedexNext;
var pokedexPrev;


$.getJSON(pokedex, function addPokemon(pokeName) {
    for (i = 0; i < pokeName.results.length; i++)
        $(`<li class="poke-card"><h3 class="name">${pokeName.results[i].name}</h3></li>`).appendTo('#pokemon');
    console.log(pokeName);
    pokedexNext = pokeName.next;
    pokedexPrev = pokeName.previous;
});


// 2.2) When a user clicks next or previous, remove all existing Pokémon from the ul element and add the new list of Pokémon. 
$("#previous").click(function () {
    console.log("prev clicked");
    $.getJSON(pokedexPrev, function addPokemon(pokeName) {
        for (i = 0; i < pokeName.results.length; i++)
            $(`<li class="poke-card"><h3 class="name">${pokeName.results[i].name}</h3></li>`).appendTo('#pokemon');
        pokedexNext = pokeName.next;
        pokedexPrev = pokeName.previous;
    });
    // pokeName.previous;
});

$("#next").click(function () {
    $.getJSON(pokedexNext, function addPokemon(pokeName) {
        for (i = 0; i < pokeName.results.length; i++)
            $(`<li class="poke-card"><h3 class="name">${pokeName.results[i].name}</h3></li>`).appendTo('#pokemon');
        pokedexNext = pokeName.next;
        pokedexPrev = pokeName.previous;
    });
});
// 2.1) Use the "next" and "previous" properties of the pokemon resource object to get the next or previous list of Pokémon.

// 2.3) Use jQuery to disable the next/previous buttons if there are no more Pokémon to retrieve in that direction.