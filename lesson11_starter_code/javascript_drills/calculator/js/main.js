var num1;
var num2;
var total;

$('#plus').on('click', function(){
	set_nums();	
	add();
});

$('#minus').on('click', function () {
		set_nums();
		subtract();
});

$('#times').on('click', function (){
	set_nums();
	times();
});

$('#divide').on('click', function (){
	set_nums();
	divide();
})

function add() {
	total = num1 + num2;
	$('#answer').html(total);
}

function subtract() {
	total = num1 - num2;
	$('#answer').html(total);
}

function times () {
	total = num1 * num2;
	$('#answer').html(total);
}

function divide (){
	total = num1 / num2;
	total = total.toFixed(3);
	$('#answer').html(total);
}

function set_nums(){
	num1 = parseInt($('#num1').val());
	num2 = parseInt($('#num2').val());
}

