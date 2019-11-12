// CPSC330 JavaScript: Forms

var ul = document.getElementById("list");

var btnSubmit = document.getElementById("btnSubmit");
btnSubmit.addEventListener("click", function () {
    // (1) Fill in code here to add the form contents to our ul
    // Hint: ul is provided above in global scope
    //       li's can be created with document.createElement("li")
    //       Add text to li with document.appendChild(str)
    //       Add li to ul with ul.appendChild(li)
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(firstName + " " + lastName));
    ul.appendChild(li);
});
