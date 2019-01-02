$(function(){
	$(".plus").click(function(){
		$(this).parent().parent().next().show('3000');
		$(this).css("display","none");
		$(this).siblings().css("display","block");

	});

	$(".minus").click(function(){
		$(this).parent().parent().next().hide('3000');
		$(this).css("display","none");
		$(this).siblings().css("display","block");	
	});
});