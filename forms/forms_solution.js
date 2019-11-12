// CPSC330 JavaScript: Forms

function appendName(form) {
    // (1) Fill in code here to add the form contents to our ul
    // Hint: Find ul with document.getElementById()
    //       var fname = form.firstName.value;
    //       li's can be created with document.createElement("li")
    //       Add text to li with document.appendChild(str)
    //       Add li to ul with ul.appendChild(li)  
    var firstName = form.firstName.value;
    var lastName = form.lastName.value;
    var ul = document.getElementById("list");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(firstName + " " + lastName));
    ul.appendChild(li);
};
