// CPSC330 JavaScript Example 1
var button1 = document.getElementById("button1");
button1.addEventListener("click", setBackground);

////////////////////////////////////////////////////////////////////
// Write code here to add an event listener to button2's click event
////////////////////////////////////////////////////////////////////
var button2 = document.getElementById("button2");
button2.addEventListener("click", setForeground);

// Sets document background color
function setBackground() {
    var color = getRandomColor();
    document.getElementById("backgroundColorHeader").innerHTML = "Background: " + color;
    document.body.style.backgroundColor = color;
}

// Sets document background color
function setForeground() {
    ////////////////////////////////////////////////////////////////////
    // Fill in code to change document foreground color here
    ////////////////////////////////////////////////////////////////////
    var color = getRandomColor();
    document.getElementById("foregroundColorHeader").innerHTML = "Foreground: " + color;
    document.body.style.color = color;
}

// Returns a random color.
// From https://stackoverflow.com/a/1484514
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}