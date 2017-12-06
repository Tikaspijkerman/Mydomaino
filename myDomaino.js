$(document).ready(function () {
			  $(".navbar-toggle").on("click", function () {
				    $(this).toggleClass("active");
			  });
		});
$(document).ready(function () {
	$(".send-button").on("click", function showDiv() {
		document.getElementById('thankyouDiv').style.display = "block";
	}
