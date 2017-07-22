/***************************/
//@Author: Adrian "yEnS" Mato Gondelle & Ivan Guardado Castro
//@website: www.yensdesign.com
//@email: yensamg@gmail.com
//@license: Feel free to use it, but keep this credits please!					
/***************************/

$(document).ready(function(){
	$(".menu > li").click(function(e){
		switch(e.target.id){
			case "about":
				//change status & style menu
				$("#about").addClass("active");
				$("#games").removeClass("active");
				$("#music").removeClass("active");
				$("#texts").removeClass("active");
				//display selected division, hide others
				$("div.about").fadeIn();
				$("div.games").css("display", "none");
				$("div.music").css("display", "none");
				$("div.texts").css("display", "none");
			break;
			case "games":
				//change status & style menu
				$("#about").removeClass("active");
				$("#games").addClass("active");
				$("#music").removeClass("active");
				$("#texts").removeClass("active");
				//display selected division, hide others
				$("div.about").css("display", "none");
				$("div.games").fadeIn();
				$("div.music").css("display", "none");
				$("div.texts").css("display", "none");
			break;
			case "music":
				//change status & style menu
				$("#about").removeClass("active");
				$("#games").removeClass("active");
				$("#music").addClass("active");
				$("#texts").removeClass("active");
				//display selected division, hide others
				$("div.about").css("display", "none");
				$("div.games").css("display", "none");
				$("div.music").fadeIn();
				$("div.texts").css("display", "none");
			break;
			case "texts":
				//change status & style menu
				$("#about").removeClass("active");
				$("#games").removeClass("active");
				$("#music").removeClass("active");
				$("#texts").addClass("active");
				//display selected division, hide others
				$("div.about").css("display", "none");
				$("div.games").css("display", "none");
				$("div.music").css("display", "none");
				$("div.texts").fadeIn();
			break;
		}
		//alert(e.target.id);
		return false;
	});
});