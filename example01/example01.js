// JavaScript source code
var button1 = document.getElementById("button1");
button1.addEventListener("click", setBackground);

function setBackground() {
    document.body.style.backgroundColor = getRandomColor();
}

function setForeground() {

}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}