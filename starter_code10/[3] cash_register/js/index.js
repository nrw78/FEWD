// Create a global variable for the total
var total=0;
// var total = function add(newEntry1, newEntry2, newEntry3) {
// 	var result = newEntry + newEntry;
// }

$('button').on('click', function() {
	var input = $('#newEntry').val();
	input = parseFloat(input);
	input = input.toFixed(2);	
	$('#entries').append("<th>"+input+"</th");
	
	total = total + parseFloat(input);
	$('#total').html('$'+total);

	console.log(total);
});
// // Create a function you can run when you submit the field Hint: .submit() in jQuery
// $('form').submit(function () {
// 	var input = $('#newEntry').val();
// 	input = parseFloat(input);
// 	input = input.toFixed(2);	
// });
// In your enter function, remember we can use .append() in jQuery to add things to HTML elements

// Remember parseFloat() and toFixed() to deal with formatting numbers. This will come in handy when dealing with displaying a "currency friendly" format (HINT: create an additional function to format your number into a "currency friendly" format)

//this is an example of using a special function to return currency instead of the code above ('button').on('click', function() {
// 	var input = $('#newEntry').val();
// 	input = parseFloat(input);
// 	input = convertsToCurrency(input);	

// 	$('#entries').append("<th>"+input+"</th");
	
// 	total = total + parseFloat(input);
// 	$('#total').html('$'+total)

// function convertsToCurrency(num1) {
// 	var currency = num1.toFixed(2);
// 	return currency
// }

// 1. Make global variable for total

// 2. Get #newEntry input values

// 3. Convert string values to numbers as floats - because decimals

// 4. Use .toFixed method to set number to 2 decimal places

// 5. Append number to html

// 6. add to total

// 7. display total

// 8. reset/clear form

// #entries = all the numbers entered so far
// #newEntry = new var input
// #total = 