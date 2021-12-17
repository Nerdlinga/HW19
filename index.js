$( modal ).load(function() {
    //run modal

    $('body').on('click', '#modal', function() { //must use on, as the lightbox element is inserted into the DOM
        $('#modal').hide();
    });

 
    $('close').on('click', '#modal', function() { //must use on, as the lightbox element is inserted into the DOM
        $('#modal').hide();
    });
