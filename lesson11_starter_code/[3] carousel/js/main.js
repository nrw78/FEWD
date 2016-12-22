// set array of images
var images = ['images/image_1.jpg', 'images/image_2.jpg', 'images/image_3.jpg', 'images/image_4.jpg', 'images/image_5.jpg', 'images/image_6.jpg']
var index=0

// Set next button behavior:
	// if user clicks on next button, set function to go up 1 index in array
$('#next').on('click', function (){
	if (index>=5) {
		index = 0;
		$("img").attr("src", images[index]);
	}
	else {
	index+=1
	$("img").attr("src", images[index]);
}
});

$('#prev').on('click', function () {
	if (index>0) {
		$('#prev').rattr('disabled', false);
	index-=1
		$("img").attr("src", images[index]);}
	else {
		index-=1
		$("img").attr("src", images[index]);
	}
});
// index = index + [1]
// Set prev button behavior:
	// if user clicks on prev button, set function to go back one index in array


// if user clicks on prev && index is  > 5, index = 0


// if user clicks on #upvote, #votes + 1, else nothing

// function showNext (images[0,1,2,3,4,5]) {
// 	index = index + images[];
// }
	
	
// 	console.log(images[0]);

// $('#next').on('click', function (){
// 	index = (index + 1) % images.length;
// 	console.log(images[index]);
