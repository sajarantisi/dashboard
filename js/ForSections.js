// JavaScript source code


$(function() {
    var header = $(".aftertopmenu");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 100) {
            header.addClass("header-alt");
        } else {
            header.removeClass("header-alt");
        }
    });
});


$('#navbarSupportedContent .nav-link').click(function() {
    $('#navbarSupportedContent .nav-link').removeClass('active');
    $(this).addClass('active');
});


// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

$(document).ready(function() {
    $(window).scrollTop(0);
});

/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

$(document).ready(function() {
    $("#about-section").click(function() {
        $('html,body').animate({
                scrollTop: $(".about-section").offset().top + 160
            },
            'slow');
    })
    $("#work-section").click(function() {
        $('html,body').animate({
                scrollTop: $(".work-section").offset().top
            },
            'slow');
    })
    $("#info-section").click(function() {
        $('html,body').animate({
                scrollTop: $(".info-section").offset().top
            },
            'slow');
    })
    $("#contact-section").click(function() {
        $('html,body').animate({
                scrollTop: $(".contact-section").offset().top
            },
            'slow');
    })
    $('.dropdown2').click(function() {
        $('.dropdown-menu2').toggleClass('show');
    });

    $('.dropdown1').click(function() {
        $('.dropdown-menu1').toggleClass('show');
    });
});