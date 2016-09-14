$('#menu a').tooltip();

$('.tooltip-left').tooltip({
    direction: "left"
});

$('.tooltip-below').tooltip({
    direction: "below"
});

$('.tooltip-above').tooltip({
    direction: "above"
});

$('.tooltip-delay-500').tooltip({
    delay: 500
});

$('.tooltip-delay-2000').tooltip({
    delay: 2000
});

$('.tooltip-data-attribute').tooltip();

$('.tooltip-custom-text').tooltip({
    title: "This was passed as an option in JavaScript!"
});

$('.tooltip-title').tooltip();
