### Complete JS guide

#### 1-Introduction section
- What is the JS?

- How does the web page work?

- JS in Action?

- how is js executed?

- what this means Dynamic ? Weekly Typed?

- JS runs on a host environment
google's javescript engine without browser(v8) = nodejs

- V8 takes the JavaScript code, compiles it into machine code, and then executes it. This process allows Node.js to run JavaScript efficiently on the server side, just as V8 allows for fast execution of JavaScript in the browser.


- what is course content
- how to get the most out of the course?

- javascript vs java
- client side (Browser) vs server side (Nodejs)
- Why Browser-side first?

- Abrif history of js history?

- ECMAScript vs JavaScript
- ECMA is standards organization
js is the most famous ECMAScript implementation(others would be action script or jscript)

- Each 





- Garbag Collector 
- any variable should deleted after creation else memory leak causes
- languages that has garbage collector resposible of 
deleting variables after creation instead of you
- but what if don't understand this concept also may causes memory even if your language has garbage collector

for example
function memLeak(){
	this.var = "my name is ahmed"
}


JIT or just in time compiler

Compilation vs Interpration vs Just-In-Time

in compilation: user runs executable file (.exe) 
in interpration: program execute automatically 
in just in time: source code converted to machine code and just in time execute the program

JavaScript now is  just in time language not interpreted language

- js is multiple paradigm language (procedure, OOP, functional )
- paradigm like a mind set of the programming way(writing code)


- js is prototype OOP based language Not Classical OOP Language
- there is no class is a prototype object
- that means the relation between child object and parent object can changed in runtime
- relation can be for example method inherited from the parent class
	- even child class can change its parent class in runtime(but Not Recommended)



- First Class Function 
- pass function as a argument to another function
- in other words means pointer to function
```js
function handleClick(){
	console.log("Button Clicked);
}
const btn = document.querySelector("#mybutton");
btn.addEventListener("click", ChandleClick);
```


```js
function sayHello()
{
console.log("hello");
}
const greet = sayHello();
```


### What is the JS Engine?
is a software component inside browser that builds or compiler js source code into machine code
there are several js engines such as ()
most famous js engine is V8 (Google Chrome's js engine)
- V8 engine is a open source
- v8 is the js engine inside (chrome, edge, nodejs)


AST is a tree Data structure


[AST explorer](https://astexplorer.net/)


- inside js engine

call stack item or element is called execution context (like function call)
and first execution context in call stack is global or anonymous execution context


