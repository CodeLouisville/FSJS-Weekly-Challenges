function addPokemon(name) {
    $(`
        <li class="poke-card">
            <h3 class="name">${name}</h3>
        </li>
    `).appendTo('#pokemon');
};

function showPokemonDetail(name) {
    $('.poke-card').hide();
    var spriteUrl = null;
    var pokeName = null;
    var pokeType = null;

    $.getJSON(`http://pokeapi.co/api/v2/pokemon/${name}`,function(data){
        pokeName = data.name;
        spriteUrl = data.sprites.front_default;
        pokeType = data.types[0].type.name;
            $(`
                <div id="poke-detail">
                    <img src="${spriteUrl}">
                    <h3 class="name">${pokeName}</h3>
                    <p>${pokeType}</p>
                </div>
            `).appendTo('#pokemon');
    });


};

function hidePokemonDetail() {
    $('#poke-detail').remove();
    $('.poke-card').show();
}



var prevList = null;
var nextList = null;

// 1.)  Use the PokéAPI from http://pokeapi.co along with jQuery's getJSON function to retrieve the first 20 Pokémon.
// 1.1)  Use the addPokemon function to show each of the Pokémon names that were retrieved.  
//Hint: Learn how to access resources via the documentation http://pokeapi.co/docsv2/#resource-lists

function displayPokes(resource) {
    $.getJSON(resource, function(data) {
            prevList = data.previous;
            nextList = data.next;
            data.results.forEach(function(pokemon){
            addPokemon(pokemon.name);
        });
    }).done(function(){
        $('.poke-card').click(function(){
            var selectedPokemon = $(this).find('h3').text();
            showPokemonDetail(selectedPokemon);
        });
    });

}

// 2.)  Use jQuery to create a click handler for the next and previous buttons.
// 2.1) Use the "next" and "previous" properties of the pokemon resource object to get the next or previous list of Pokémon.
// 2.2) When a user clicks next or previous, remove all existing Pokémon from the ul element and add the new list of Pokémon.  
// 2.3) Use jQuery to disable the next/previous buttons if there are no more Pokémon to retrieve in that direction.  

$('#previous, #next').click(function(){
    $('.poke-card').remove();

    if(this.id === 'previous' && prevList) {
        displayPokes(prevList);
    }

    if(this.id === 'next' && nextList) {
        displayPokes(nextList);
    }
});



//Initial display of Pokémon
displayPokes('http://pokeapi.co/api/v2/pokemon');


/*  Super Awesome Bonus!
    When you click on a Pokémon name, hide all the names and show a larger card that contains details about that Pokémon such as their sprite (picture), name,
    type or anything else you would like to include.  Add a way to go back to the list when your're done looking at the detail.

    Be creative, you can style/arrange the detail information however you like! 
*/

