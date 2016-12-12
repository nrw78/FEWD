/**
* Part 1 - Together:
*/

// 1. Remove the highlight class from #box2 (use the .removeClass() method)


// 2. Select the anchor within #box3. Change the HTML to 'jQuery!'


/**
* Part 1 - Now you try:
*/

// 1. Add the .highlight class to #box4 (use the .addClass() method)
$('#box4').addClass('highlight');

// 2. Make the text color of the strong tag within #box2 green (use the .css() method)

$('#box2 strong').css('color, green');
/**-----------------------------------------------------------------------------------------------*/


/**
*
* Part 2 - Together:
*
*/

// 1. When the anchor within #box3 is clicked
	// a) Slide toggle #box4
	// b) Fade out #box1 slowly
	// (when user clicks a tag)
$('#box3 a').on('click', function() {
	// Do what is listed here
	$('#box4').slideToggle();
	$('#box1').fadeOut('slowly');
});

/**
*
* Part 2 - Now you try:
*
*/

// 1. When the h2 is clicked on
	// a) Slide up the h2
	// b) Add the snazzy class to the h1
	$('h2').on('click', function () {
		$('h2').slideUp();
		$('h1').addClass('snazzy');
	})
