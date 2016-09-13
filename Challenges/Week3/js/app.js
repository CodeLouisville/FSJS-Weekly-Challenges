$('.answer').hide();

$('.flash-card').hover(
    function() {
        $(this).children('.answer').show()
    },
    function() {
        $(this).children('.answer').hide();
    }
);

//Bonus:  Change the text of the button using jQuery when you toggle the answers on/off. */ 
$('.cheat-button').click(function(){ 
    $('.answer').toggle(); 
});