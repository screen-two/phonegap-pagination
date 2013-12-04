// JavaScript Document

var theScroll;
function scroll(){
    theScroll = new iScroll('wrapper');
}
document.addEventListener('DOMContentLoaded', scroll, false);

$('#tab-bar a').on('click', function(e){
	e.preventDefault();
	var nextPage = $(e.target.hash);
	page(nextPage); //You need to add this for it to work
	$("#pages .current").removeClass("current");
	nextPage.addClass("current");
});

function page(toPage) {
	var toPage = $(toPage),
	fromPage = $("#pages .current");
	// Halt on existing item click
	if(toPage.hasClass("current") || toPage === fromPage) {
		return;
	};
	// Fade out existing page, on complete fade in destiation content
	$("#pages .current").addClass("fade out").one("webkitAnimationEnd", function(){
		$(this).removeClass("current fade out in");
		toPage.addClass("current fade in").one();
	});
};

// Primary navigation
$('#tab-bar a').on('click', function(e){
	e.preventDefault();
	// Grab and pass existing and destination pages
	var nextPage = $(e.target.hash);
	page(nextPage);
});
