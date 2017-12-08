$(document).ready(function () {
			  $(".navbar-toggle").on("click", function () {
				    $(this).toggleClass("active");
			  });
		});

var elForm = document.getElementByClass('comment_form');

$(function(){
  $("#successMessage").hide();
  $("#sendMessage").on("click", function(){
      $("#successMessage").show();
  });
});    

  
