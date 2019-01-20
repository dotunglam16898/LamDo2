// $(window).scroll(function () {
//     var top = $(document).scrollTop();
//     var height = 300;
//     if (top > height) {
//         $('.navbar-fixed-top').addClass('menu-scroll');
//     } else {
//         $('.navbar-fixed-top').removeClass('menu-scroll');
//     }
// });


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

function showPage(){
  $(".preload").hide();
  $(".showPage").show();
}

$(window).load(function(){
  var myTime = setTimeout(showPage,2000); 
});

