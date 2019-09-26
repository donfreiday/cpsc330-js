# cpsc330-javascript

Class presentation on JavaScript

---

## Topics

### Background

Brief history, use cases.

### Future

Evolving language, ECMAScript etc

### Debugger

Browser developer console (ctrl+shift+k in Firefox)

<https://www.w3schools.com/js/js_debugging.asp>

### Variables

Dynamic vs static typed languages

Paste this in the developer console ([source](https://stackoverflow.com/questions/57456188/why-is-the-result-of-ba-a-a-tolowercase-banana))

```javascript
document.write(('b' + 'a' + + 'a' + 'a').toLowerCase());
```

Block scope, `let` keyword

Hoisting: variable declarations are 'hoisted' to the top -> variables can be used BEFORE they're declared.

Establishing invariants: `const`

#### Arrays

#### Objects

`this` keyword

#### typeof

#### null vs undefined

---

### Operators

Arithmetic, assignment, string, comparision, bitwise.

---

### Control structures

// Stolen from [w3schools](https://www.w3schools.com/js/js_loop_for.asp)

#### `for` - loops through a block of code a number of times

```javascript
for (i = 0; i < 5; i++) {
  text += "The number is " + i + "<br>";
}
```

#### `for/in` - loops through the properties of an object

```javascript
var person = {fname:"John", lname:"Doe", age:25};

var text = "";
var x;
for (x in person) {
  text += person[x];
}
```

#### `for/of` - loops through the values of an iterable object

```javascript
// Over array
var cars = ['BMW', 'Volvo', 'Mini'];
var x;

for (x of cars) {
  document.write(x + "<br >");
}

// Over string
var txt = 'JavaScript';
var x;

for (x of txt) {
  document.write(x + "<br >");
}
```

#### `while` - loops through a block of code while a specified condition is true

```javascript
while (i < 10) {
  text += "The number is " + i;
  i++;
}
```

#### `do/while` - also loops through a block of code while a specified condition is true

```javascript
do {
  text += "The number is " + i;
  i++;
}
while (i < 10);
```

---

### Comments

---

### Output

Console, DOM manipulation

---

### Functions

Regular functions

```javascript
hello = function() {
  return "Hello World!";
}
```

Arrow functions

```javascript
hello = () => {
  return "Hello World!";
}
```



---

### Responding to HTML events (maybe?)

---

### Regular expressions

---

### Error handling

throw, try, catch, finally.

---

### Webassembly

WebAssembly (abbreviated Wasm) is a binary instruction format for a stack-based virtual machine. Wasm is designed as a portable target for compilation of high-level languages like C/C++/Rust, enabling deployment on the web for client and server applications.

---

### emscripten

Compile C/C++ to Javascript WebASM via LLVM. Awesome, too complex for presentation?

---

### Frameworks

Node.js, React.js

---

### Strict mode (ECMA 5)

maybe. can prevent errors.

---

### AJAX

maybe.

---

### JQuery

maybe.