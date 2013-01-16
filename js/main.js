$(document).ready(function(){
    //Create quickview and insert it into document
    $('.quickview-trigger').click(function() {
       var count = $('.quickview').length,
           quickview = $('<div />').addClass('quickview'),
           quickviewContent = $('<span />').addClass('content'),
           quickviewClose = $('<span />').addClass('close').text('X');

        if (count < 3) {
            $(quickviewClose).appendTo(quickview);
            $(quickviewContent).appendTo(quickview);
            $(quickview).appendTo('.quickview-container');
        }

        var url = $(this).attr('href');
        $(quickviewContent).load(url, function(){});
    });

    //Close quickview on clicking "close"
    $('.close').live('click', function(){
        $(this).parent().remove();
    });

    //Count quickviews and apply applicable classes
    $('.close, .quickview-trigger').live('click', function(){
        //Count how many elements have a class of .quickview
        var count = $('.quickview').length;

        //Remove old classes, then add count as a class to body
        $('body').removeClass().addClass('qv-count-' + count);

        //If length >= 1, add class of .in-quickview to wrapper
        //If length == 0, remove cass of .in-quickview from wrapper
        if (count >= 1) {
            $('.wrapper').addClass('in-quickview');
        }
        else{
            $('.wrapper').removeClass('in-quickview');
        }
    });

    //Quickview hover
    $('.product').hover(
        function(){
            $(this).addClass("hover");
        },
        function () {
            $(this).removeClass("hover");
        });
});