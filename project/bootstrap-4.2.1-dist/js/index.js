$(window).scroll(function () {
    var top = $(document).scrollTop();
    var height = 300;
    if (top > height) {
        $('.navbar-fixed-top').addClass('menu-scroll');
    } else {
        $('.navbar-fixed-top').removeClass('menu-scroll');
    }
});
$(document).ready(function() {
		$('.table-counter').counterUp({
			delay: 10,
			time: 10000
		});
	});