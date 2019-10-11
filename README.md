# cpsc330-javascript

Class presentation on JavaScript

---

## Topics


### History

JavaScript was created by Brendan Eich in 1995 during his time at Netscape Communications. It was inspired by Java, Scheme and Self.

Early design choices like automatic semicolon insertion (ASI), the event loop, lack of classes, unusual inheritance (prototypical) and type coercion are laughed at by people who have not taken the time to understand the thinking behind them.

Even Brendan Eich, the creator of the language, is occasionally apologetic for design decisions he made for the language.

What was meant to be a Scheme for the browser turned into something very different. The pressure to close the deal with Sun and make Mocha a scripting companion to Java forced Eich's hand. A Java-like syntax was required, and familiar semantics for many common idioms was also adopted. So Mocha was not like Scheme at all. It looked like a dynamic Java, but underneath it was a very different beast: a premature lovechild of Scheme and Self, with Java looks.

The prototype of Mocha was integrated into Netscape Communicator in May 1995. In short time, it was renamed to LiveScript. At the moment, the word "live" was convenient from a marketing point of view. In December 1995, Netscape Communications and Sun closed the deal: Mocha/LiveScript would be renamed JavaScript, and it would be presented as a scripting language for small client-side tasks in the browser, while Java would be promoted as a bigger, professional tool to develop rich web components.

https://medium.com/@benastontweet/lesson-1a-the-history-of-javascript-8c1ce3bffb17
https://auth0.com/blog/a-brief-history-of-javascript/


### Java-like syntax

Java-like Syntax
Although keeping the syntax close to Java was not the original idea behind JavaScript, marketing forces changed that. In retrospective, although a different syntax might have been more convenient for certain features, it is undeniable that a familiar syntax has helper JavaScript gain ground easily.

Compare this Java example:

```Java
public class Sample {
  public static void main(String[] args) {
    System.out.println("Hello world!");
    try {
      final MissileSilo silo = new MissileSilo("silo.weapons.mil");
      silo.launchMissile(args[0]);
    } catch(Exception e) {
      System.out.println("Unexpected exception: " + e);
    }
  }
}
```

To this (modern) JavaScript example:

```Java
console.log('Hello world');
try {
  const silo = new MissileSilo('silo.weapons.mil');
  silo.launchMissile(process.argv[0]);
} catch(e) {
  console.log('Unexpected exception' + e);
}
```

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


### References


https://www.w3schools.com/js/
