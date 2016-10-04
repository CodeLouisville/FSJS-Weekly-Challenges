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
    $('.poke-card').remove();
    $.getJSON(pokedexPrev, function addPokemon(pokeName) {
        for (i = 0; i < pokeName.results.length; i++)
            $(`<li class="poke-card"><h3 class="name">${pokeName.results[i].name}</h3></li>`).appendTo('#pokemon');
        pokedexNext = pokeName.next;
        pokedexPrev = pokeName.previous;
    }); 
});

$("#next").click(function () {
    $('.poke-card').remove();
    $.getJSON(pokedexNext, function addPokemon(pokeName) {
        for (i = 0; i < pokeName.results.length; i++)
            $(`<li class="poke-card"><h3 class="name">${pokeName.results[i].name}</h3></li>`).appendTo('#pokemon');
        pokedexNext = pokeName.next;
        pokedexPrev = pokeName.previous;
    });
});