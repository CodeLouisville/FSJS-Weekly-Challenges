function addPokemon(name) {
    $(`
        <li class="poke-card">
            <h3 class="name">${name}</h3>
        </li>
    `).appendTo('#pokemon');
};

//Using these variables to store the url of the next and previous list of Pokémon
var prevList = null;
var nextList = null;

//This will hide the list of Pokémon and insert new html to show Pokémon detail. 
function showPokemonDetail(name) {
    $('.poke-card').hide();
    $('#previous, #next').hide();
    //$('#back').show();
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
                    <ul id="stats"></ul>
                    <button id="back" class="btn">Back</button>
                </div>
            `).appendTo('#pokemon');
            
            data.stats.forEach(function(stat){
                $(`
                    <li class="poke-card">
                        <strong>${stat.stat.name}: </strong> ${stat.base_stat}
                    </li>
                `).appendTo('#stats');
            });

    });


};

function hidePokemonDetail() {
    $('#poke-detail').remove();
    $('.poke-card').show();

    $('#previous, #next').show();
    //$('#back').hide();
}


//Displays a list of Pokémon given a resource URL
function displayPokes(resource) {
    $.getJSON(resource, function(data) {
            prevList = data.previous;
            nextList = data.next;
            data.results.forEach(function(pokemon){
                addPokemon(pokemon.name);
            });

            if(!prevList) {
                $('#previous').prop("disabled", true);
            } else { $('#previous').prop("disabled", false); }

            if(!nextList) {
                $('#next').prop("disabled", true);
            } else { $('#next').prop("disabled", false); }

    }).done(function(){
        $('.poke-card').click(function(){
            var selectedPokemon = $(this).find('h3').text();
            showPokemonDetail(selectedPokemon);
        });
    });

}

//Register a click handler for the previous and next buttons.  
$('#previous, #next').click(function(){
    $('.poke-card').remove();

    if(this.id === 'previous' && prevList) {
        displayPokes(prevList);
    }

    if(this.id === 'next' && nextList) {
        displayPokes(nextList);
    }
});


//Using on instead of click to look for events triggered by elements created after the DOM was loaded.  
$('#pokemon').on('click', '#back', function() {
    hidePokemonDetail();
});


//Initial display of Pokémon
displayPokes('http://pokeapi.co/api/v2/pokemon');