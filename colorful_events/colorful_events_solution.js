// CPSC330 JavaScript: Colorful Events

// Add an event listener to randomize background button;
// in this case we call a function defined below.
var btnRandomBg = document.getElementById("btnRandomBg");
btnRandomBg.addEventListener("click", randomBackground);
function randomBackground() {
    var color = getRandomColor();
    bgPicker.value = color;
    document.body.style.backgroundColor = color;
};

// Add an event listener to background color picker;
// in this case we use an anonymous function
var bgPicker = document.getElementById("bgPicker");
bgPicker.addEventListener("input", function () {
    document.body.style.backgroundColor = bgPicker.value;
});

////////////////////////////////////////////////////////////////////////////////////////

function randomForeground() {
    // (1) Fill in code to change document foreground color here
    // Hint: The foreground color is determined by document.body.style.color
    var color = getRandomColor();
    document.body.style.color = color;
    fgPicker.value = color;

};
// (2) Write code here to add an event listener to btnRandomFg's click event
var btnRandomFg = document.getElementById("btnRandomFg");
btnRandomFg.addEventListener("click", randomForeground);

// (3) Write code here that uses an anonymous function to handle fgPicker's input event using an anonymous function
var fgPicker = document.getElementById("fgPicker");
fgPicker.addEventListener("input", function () {
    document.body.style.color = fgPicker.value;
});

// (4) Add an event listener to btnLoud and make Lorem Ipsum all caps
// (5) Bonus: use a regex to change periods to exclamation points!
// (5) Hint: str.replace(/foo/g, "bar") will replace all occurrences of foo with bar in the string str
// (5) Hint again: remember, . is a special character in regexes
var btnLoud = document.getElementById("btnLoud");
btnLoud.addEventListener("click", function () {
    var p = document.getElementById("loremIpsum");
    var s = p.innerHTML;
    s = s.toUpperCase();
    s = s.replace(/\./g, "!");
    s = s.bold();
    s = s.fontsize(7);
    p.innerHTML = s;
    
});

////////////////////////////////////////////////////////////////////////////////////////

// Returns a random color.
// From https://stackoverflow.com/a/1484514
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};