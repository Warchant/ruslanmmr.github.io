$(document).ready(function() {
	$('.form_bottom a').click(function(event) {
        event.preventDefault();
        $(".form_bottom .form").toggleClass("active");
});
});

$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "../php/mail.php", //Change
			data: th.serialize()
		}).done(function() {
			window.location.href = "http://www.google.com";
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});