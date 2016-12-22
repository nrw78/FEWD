$('h1').html('Winter is here');

$('#color-p').css('background', 'blue');

$('div').addClass('the-north');

$('#walker').on('click', function (){
	$('#walker').hide();
});

// Bonus steps: 
// on click, read input
// compare to answer
// if danaerys, right
// else, wrong

$('button').on('click', function () {
	var input= $('input').val();
		if(input === 'danaerys') {
			$('#coolest-character')
		}
})