//? Question 1: Write a program that take two numbers & add them in a new variable. Show the result in your browser.

// var num1 = parseInt(prompt("Enter the first number: "));
// var num2 = parseInt(prompt("Enter the second number."));

// var result = num1 + num2;
// document.write("Sum of " + num1 + " and " + num2 + " is " + result);

//? Question 2: Repeat task1 for subtraction, multiplication, division & modulus.

// var num1 = parseInt(prompt("Enter the first number: "));
// var num2 = parseInt(prompt("Enter the second number."));
// var result = num1 * num2;
// document.write("Multiplication of " + num1 + " and " + num2 + " is " + result);

// var num1 = parseInt(prompt("Enter the first number: "));
// var num2 = parseInt(prompt("Enter the second number."));
// var result = num1 / num2;
// document.write("Division of " + num1 + " and " + num2 + " is " + result);

// var num1 = parseInt(prompt("Enter the first number: "));
// var num2 = parseInt(prompt("Enter the second number."));
// var result = num1 - num2;
// document.write("Subraction of " + num1 + " and " + num2 + " is " + result);

// var num1 = parseInt(prompt("Enter the first number: "));
// var num2 = parseInt(prompt("Enter the second number."));
// var result = num1 % num2;
// document.write("Modulus of " + num1 + " and " + num2 + " is " + result);

//? Question 3: Do the following using JS Mathematic Expressions
//a. Declare a variable.
//b. Show the value of variable in your browser like “Value after variable declaration is: ??”.
//c. Initialize the variable with some number.
//d. Show the value of variable in your browser like “Initial value: 5”.
//e. Increment the variable.
//f. Show the value of variable in your browser like “Value after increment is: 6”.
//g. Add 7 to the variable.
//h. Show the value of variable in your browser like “Value after addition is: 13”.
//i. Decrement the variable.
//j. Show the value of variable in your browser like “Value after decrement is: 12”.
//k. Show the remainder after dividing the variable’s value by 3.

// var hello;
// document.write('Value after variable declaration is undefined <br>');

// var hello = 12;
// document.write('Initial value: ' + hello + '<br>');

// hello++;
// document.write('Value after increment: ' + hello + '<br>');

// var hello = hello + 7;
// document.write('Value after addition: ' + hello + '<br>');

// hello--;
// document.write('Value after decrement: ' + hello + '<br>');

// var hello = hello % 3;
// document.write('The remainder is: ' + hello + '<br>');

//? Question 4: Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie.

// var ticketPrice = 600;
// var fiveTicketCost = ticketPrice * 5;

// document.write('Total cost to buy 5 tickets to movie is ' + fiveTicketCost + 'PKR');

//? Question 6:The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
//a. Store a Celsius temperature into a variable.
//b. Convert it to Fahrenheit & output “NNoC is NNoF”.
//c. Now store a Fahrenheit temperature into a variable.
//d. Convert it to Celsius & output “NNoF is NNoC”.

// var tempCelsius = 32;
// var convertFahrenheit = (tempCelsius * 9/5) + 32;
// document.write(tempCelsius + 'C is ' + convertFahrenheit + 'F' + '<br>');

// var tempFahrenheit = 68;
// var convertCelsius = (tempFahrenheit - 32) * 5/9;
// document.write(tempFahrenheit + 'F is ' + convertCelsius + 'C');

//? Question 7:Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables
//a. Price of item 1
//b. Price of item 2
//c. Ordered quantity of item 1
//d. Ordered Quantity of item 2
//e. Shipping charges
//Compute the total cost & show the receipt in your browser.

// document.write("<h1>Shopping Cart</h1>");
// var itemOnePrice = parseInt(prompt("Enter the First item price."));
// var itemOneQuantity = parseInt(prompt("Enter the order quantity of First item."));
// document.write('Price of item One: ' + itemOnePrice + "<br>");
// document.write('Quantity of item One: ' + itemOneQuantity + "<br>");

// var itemSecondPrice = parseInt(prompt("Enter the Second item price."));
// var itemSecondQuantity = parseInt(prompt("Enter the order quantity of Second item."));
// document.write('Price of item Two: ' + itemSecondPrice + "<br>");
// document.write('Quantity of item Two: ' + itemSecondQuantity + "<br>");

// var shippingCharges = 100;
// document.write('Shipping Charges: ' + shippingCharges + "<br><br>");

// var totalBillOne = itemOnePrice * itemOneQuantity;
// var totalBillTwo = itemSecondPrice * itemSecondQuantity; 

// var totalBill = totalBillOne + totalBillTwo + shippingCharges;
// document.write("Total cost of your order is " + totalBill)

//? Question 8: Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser

// document.write("<h1>Mark Sheet</h1>");
// var totalMarks = parseInt(prompt("Enter the total marks."));
// document.write("Total marks: " + totalMarks + "<br>");

// var obtainedMarks = parseInt(prompt("Enter the obtained marks."));
// document.write("Marks obtained: " + obtainedMarks + "<br>");

// var Percentage = (obtainedMarks/totalMarks) * 100;
// document.write("Percentage: " + Percentage);

//? Question 9:Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees.Perform all calculations in a single expression.(Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee)

// document.write("<h1>Currency in PKR</h1>");
// var usDollar = 104.80;
// var saudiRiyal = 28;

// var convertCurrency = (10 * usDollar) + (25 * saudiRiyal);
// document.write("Total Currency in PKR: " + convertCurrency);

//? Question 10:Write a program to initialize a variable with some number and do arithmetic in following sequence:
//a. Add 5
//b. Multiply by 10
//c. Divide the result by 2
//Perform all calculations in a single expression

// var userNum = parseInt(prompt("Enter the number."));
// var calulation = (userNum + 5) * 10 / 2;

// document.write("Result is " + calulation);

//? Question 11: The Age Calculator: Forgot how old someone is? 
//Calculate it!
//a. Store the current year in a variable.
//b. Store their birth year in a variable.
//c. Calculate their 2 possible ages based on the stored values.
//Output them to the screen like so: “They are either NN or NN years old”.

// document.write("<h1>Age Calculator</h1>");
// var currentYear = parseInt(prompt("Enter the current year."));
// document.write("Current Year: " + currentYear + "<br>");

// var birthYear = parseInt(prompt("Enter the Birth year."));
// document.write("Birth Year: " + birthYear + "<br>");

// var yourAge = currentYear - birthYear;
// document.write("Your Age is: " + yourAge);

//? Question 12:The Geometrizer: Calculate properties of a circle.
//a. Store a radius into a variable.
//b. Calculate the circumference based on the radius, and output “The circumference is NN”.
//(Hint : Circumference of a circle = 2 π r , π = 3.142)
//Calculate the area based on the radius, and output “The area is NN”. (Hint : Area of a circle = π r2, π = 3.142)

// document.write("<h1>The Geometrizer</h1>");
// var radius = parseInt(prompt("Enter the circle radius."));
// document.write("Radius of a circle: " + radius + "<br>");

// var circumCal = 2 * 3.142 * radius;
// document.write("The Circumference is: " + circumCal + "<br>");

// var areaCal = 3.142 * radius * radius;
// document.write("The Area is: " + areaCal); 

//? Question 13: The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder no more.
//a. Store your favourite snack into a variable
//b. Store your current age into a variable.
//c. Store a maximum age into a variable.
//d. Store an estimated amount per day (as a number).
//e. Calculate how many would you eat total for the rest of your life.
//Output the result to the screen like so: “You will need NNNN to last you until the ripe old age of NN”.

// document.write("<h1>The Lifetime Supply Calculator</h1>");
// var snackName = prompt("Enter your Favourite Snack name.");
// document.write(" Favourite Snack: " + snackName + "<br>");

// var currentAge = parseInt(prompt("Enter your current age."));
// document.write("Current Age: " + currentAge + "<br>");

// var estimatedAge = parseInt(prompt("Enter your estimated maximum age."));
// document.write("Estimated Maximum Age: " + estimatedAge + "<br>");

// var amountOfSnack = parseInt(prompt("Enter your amount of Snack per day."));
// document.write("Amount of Snack per day: " + amountOfSnack + "<br>");

// var need = (estimatedAge - currentAge) * amountOfSnack;
// document.write("You will need " + need + " " + snackName + " to last you until the rape old age of " + estimatedAge);
