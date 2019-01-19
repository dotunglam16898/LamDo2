$(window).scroll(function () {
    var top = $(document).scrollTop();
    var height = 300;
    if (top > height) {
        $('.navbar-fixed-top').addClass('menu-scroll');
    } else {
        $('.navbar-fixed-top').removeClass('menu-scroll');
    }
});
// $(window).load(function () {
//         $(".loaded").fadeOut();
//         $(".preloader").delay(1000).fadeOut("slow");
//     });
// 
// // scroll Up

//     $(window).scroll(function () {
//         if ($(this).scrollTop() > 600) {
//             $('.scrollup').fadeIn('slow');
//         } else {
//             $('.scrollup').fadeOut('slow');
//         }
//     });

//     $('.scrollup').click(function () {
//         $("html, body").animate({scrollTop: 0}, 1000);
//         return false;
//     });         
// $(window).scroll(function () {
//         if ($(this).scrollTop() > 600) {
//             $('.scrollup').fadeIn('slow');
//         } else {
//             $('.scrollup').fadeOut('slow');
//         }
//     });

//     $('.scrollup').click(function () {
//         $("html, body").animate({scrollTop: 0}, 1000);
//         return false;
//     });     

$(function() {
  //Simple filter controls
  $('.simplefilter li').click(function() {
    $('.simplefilter li').removeClass('active');
    $(this).addClass('active');
  });
  //Multifilter controls
  $('.multifilter li').click(function() {
    $(this).toggleClass('active');
  });
  //Shuffle control
  $('.shuffle-btn').click(function() {
    $('.sort-btn').removeClass('active');
  });
  //Sort controls
  $('.sort-btn').click(function() {
    $('.sort-btn').removeClass('active');
    $(this).addClass('active');
  });
  
});
// $(document).on("scroll", function () {
//     if ($(document).scrollTop() > 120) {
//         $("nav").addClass("smaller");
//     } else {
//         $("nav").removeClass("smaller");
//     }
// });
