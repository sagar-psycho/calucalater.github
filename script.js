function addNumbers() {
    // Get input values
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);

    // Check if the input is valid
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('result').innerHTML = "Please enter valid numbers.";
        document.getElementById('explanation').innerHTML = "";
    } else {
        // Perform addition and display result
        var sum = num1 + num2;
        document.getElementById('result').innerHTML = "Sum: " + sum;
        document.getElementById('explanation').innerHTML = "The sum of " + num1 + " and " + num2 + " is calculated as " + num1 + " + " + num2 + " = " + sum + ".";
    }
}
// subtraction
function performSubtraction() {
    // Get input values
    var num3 = parseFloat(document.getElementById('num3').value);
    var num4 = parseFloat(document.getElementById('num4').value);

    // Check if the input is valid
    if (isNaN(num3) || isNaN(num4)) {
        document.getElementById('result1').innerHTML = "Please enter valid numbers.";
        document.getElementById('explanation1').innerHTML = "";
    } else {
        // Perform subtraction and display result1
        var difference = num3 - num4;
        document.getElementById('result1').innerHTML = "Result: " + difference;
        document.getElementById('explanation1').innerHTML = "The difference of " + num3 + " and " + num4 + " is calculated as " + num3 + " - " + num4 + " = " + difference + ".";
    }
}
// Mu
function performMultiplication() {
    // Get input values
    var num5 = parseFloat(document.getElementById('num5').value);
    var num6 = parseFloat(document.getElementById('num6').value);

    // Check if the input is valid
    if (isNaN(num5) || isNaN(num6)) {
        document.getElementById('result3').innerHTML = "Please enter valid numbers.";
        document.getElementById('explanation3').innerHTML = "";
    } else {
        // Perform multiplication and display result3
        var product = num5 * num6;
        document.getElementById('result3').innerHTML = "Sum: " + product;
        document.getElementById('explanation3').innerHTML = "The product of " + num5 + " and " + num6 + " is calculated as " + num5 + " * " + num6 + " = " + product + ".";
    }
}
// Divsion
function performDivision() {
    // Get input values
    var num7 = parseFloat(document.getElementById('num7').value);
    var num8 = parseFloat(document.getElementById('num8').value);

    // Check if the input is valid
    if (isNaN(num7) || isNaN(num8)) {
        document.getElementById('result4').innerHTML = "Please enter valid numbers.";
        document.getElementById('explanation4').innerHTML = "";
    } else {
        // Check for division by zero
        if (num8 === 0) {
            document.getElementById('result4').innerHTML = "Cannot divide by zero.";
            document.getElementById('explanation4').innerHTML = "";
        } else {
            // Perform division and display result
            var quotient = num7 / num8;
            document.getElementById('result4').innerHTML = "Quotient: " + quotient;
            document.getElementById('explanation4').innerHTML = "The quotient of " + num7 + " divided by " + num8 + " is calculated as " + num7 + " / " + num8 + " = " + quotient + ".";
        }
    }
}
// Tables
function generateTable() {
    // Get input value
    var num9 = parseInt(document.getElementById('num9').value);

    // Check if the input is valid
    if (isNaN(num9)) {
        document.getElementById('result5').innerHTML = "Please enter a valid num9ber.";
    } else {
        // Generate and display the multiplication table
        var tableHTML = "<h2>Multiplication Table for " + num9 + "</h2><table border='1'>";
        for (var i = 1; i <= 20; i++) {
            tableHTML += "<tr><td>" + num9 + " x " + i + "</td><td>" +  "= " + (num9 * i) + "</td></tr>";
        }
        tableHTML += "</table>";
        document.getElementById('result5').innerHTML = tableHTML;
    }
}
// speak function
function speak(){
    let synth = window.speechSynthesis;
    let voice = new SpeechSynthesisUtterance(document.getElementById('textarea').value);
    let sounds = synth.getVoices();
    console.log(sounds)
    voice.voice = sounds[4];
    synth.speak(voice);
}
window.onload = function() {
    document.getElementById('textarea').value = ''; // Clear the textarea
};