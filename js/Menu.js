//Open arrow
$(".arrow").click(function(){
	$(".menu").css({
	display:"block"
	},1000)
	$(".colordiv").css({
		display:"block"
	})
	$(".arrow").fadeOut(200)
$(".menu").animate({
	width:25+"%"
},1000)
	$(".arrow1").fadeIn(1500)
console.log($(".menu").offset().left)
})
//Close
$(".arrow1").click(function(){	
	$(".arrow1").fadeOut(200)
$(".menu").animate({
	width:0,
},1000).fadeOut(100)
	$(".arrow").fadeIn(1000)
})
//Background color change
$("#bgconf").click(function(){
	let i=$("#bgcolor").val()
	$("html,body").css({
		background:i
	})
})

