// $(document).ready(function(){

// }); cach 1

// $(function(){
// 	$("p").css("color","red"); lay ra roi thay doi thuoc tinh(2 doi so)
// 	$("body #text").css("border","1px solid black");
// 	$(".red").css("font-size","20px");
// 	 $("#text").css("color","blue");

// });
$(function(){
	$("input").click(function(){
		$("#menu").children().eq(1).next().css("color","red");
		// $(".red").width("50%");
		// $(".red").height("150px");
		// $(".red").css("color","red"); //thay doi css
		// $(".red").html("test"); //thay doi noi dung inner HTML
		// $("input").attr("value","test") //thay doi thuoc tinh
		// $("input").attr("id","red"); 
		// $("input").addClass("blue");
		// $("input").removeClass("red");
		// $(this).attr("value","java")
	});
	// $(window).resize(function(){
	// 	alert("test<br/>");
	// }

});