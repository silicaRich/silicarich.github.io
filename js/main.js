// jQuery to collapse the navbar on scroll
$(window).scroll(function () {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
        $(".navbar-brand").fadeIn();
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
        $(".navbar-brand").fadeOut();
    }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function () {
    $('a.page-scroll').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });


});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function () {
    $('.navbar-toggle:visible').click();
});



//Random quote display
var quotes = [
    '"If it ain\'t fun, don\'t do it"'
    , '"The game\'s not big enough unless it scares you a little." -William Riker'
    , '"Get out of your own way.\"'
    , '"Sucking at something is the first step to being sorta good at something." -Jake the Dog'
    , '"Yeah, I pretty much never sit by the pool anymore." -Marco Polo '
    , '"Don\'t compare your beginning to someone else\'s middle."'
    , '"We are a way for the universe to know itself." -Carl Sagan'
    , '"Life would be boring if it wasn\'t difficult."'
    ,  '"Help! I\'m trapped in JSON!"'
];

$('p.random-quote').text(getQuote());

$('.load-quote').click(function () {
    $('p.random-quote').text(getQuote());
    $('.load-quote').removeClass("rotate");
    $('.load-quote').addClass("rotate");
  //  $('.load-quote').addClass("fa-spin");
});

function getQuote() {
    return quotes[Math.floor(Math.random() * (quotes.length - 0) + 0)];
}


/* PROJECTS SLIDESHOW */

var counter = 0, // to keep track of current slide
    $items = $('.diy-slideshow figure'), // a collection of all of the slides, caching for performance
    numItems = $items.length; // total number of slides

// this function is what cycles the slides, showing the next or previous slide and hiding all the others
var showCurrent = function () {
    var itemToShow = Math.abs(counter % numItems);// uses remainder (aka modulo) operator to get the actual index of the element to show  

    $items.removeClass('show'); // remove .show from whichever element currently has it
    $items.eq(itemToShow).addClass('show');
};

// add click events to prev & next buttons 
$('.next').on('click', function () {
    counter++;
    showCurrent();
});
$('.prev').on('click', function () {
    counter--;
    showCurrent();
});

var data;
 $.ajax({
            url: "https://api.jquery.com/jquery.get/",
            type: "GET",
            crossDomain: true,
         data:data, 
            contentType: 'application/x-www-form-urlencoded',
            success: function (response) {
                var resp = JSON.parse(response)
                alert(resp.status);
            },
            error: function (xhr, status) {
                console.log(xhr, status);
            }
        });

