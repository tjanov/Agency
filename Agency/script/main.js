$(document).ready(function() {

	$('.burger').on('click', function(event) {
		event.preventDefault()
		$('body').addClass('overflow')
		$('.menu').addClass('is-active')
		$('.overlay').addClass('is-active')
	})

	$('.overlay').on('click', function() {
		$('.menu').removeClass('is-active')
		$('.overlay').removeClass('is-active')
		$('body').removeClass('overflow')
	})

	// $('.stats_comment').slick()

});

// $(window).on('load', function() {

});
