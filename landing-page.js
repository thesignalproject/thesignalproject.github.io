/*jslint browser: true*/
/*global $, jQuery, alert*/



$(document).ready(function() {
    console.log('scripts active')
    });


//resizing sidebar

$(window).on("load, resize", function() {
    var viewportWidth = $(window).width();
    var viewportHeight = $(window).height();
    if (viewportWidth < 640) {
            $("#sidebar-flex").removeClass("flex-column").addClass("flex-row").addClass('justify-content-center');
            $("#sidebar").removeClass("sidebar-lg").addClass("sidebar-sm")
            $("#sidebar-wrapper").removeClass("sidebar-wrapper-lg").addClass("sidebar-wrapper-sm")
            $('#sidebar-wrapper').insertAfter('#site-button')
            console.log('small screen')
    } else {
            $("#sidebar-flex").removeClass("flex-row").addClass("flex-column").removeClass('justify-content-center');
            $("#sidebar").removeClass("sidebar-sm").addClass("sidebar-lg")
            $("#sidebar-wrapper").removeClass("sidebar-wrapper-sm").addClass("sidebar-wrapper-lg")
            $('#sidebar-wrapper').insertBefore('#jumbo')
            console.log('bigscreen')
    }
});  
    
    
    



