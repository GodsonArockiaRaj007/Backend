// Task 1: Variable Declaration & Reassignment

var a = 10;
let b = 20;
const c = 30;

a = 100;
console.log(a); 
b = 200; 
console.log(b)
// c = 300 
// console.log(c)    Output-->  Uncaught TypeError: Assignment to constant variable.




// Task 2: Scope Challenge

let global = "global scoped";

function scope() {
  let functional = "functional scoped";

  if (1) {
    var varblock="var block";
    let block = "block scoped";
    console.log(global);
    console.log(functional);
    console.log(block);
  }
  
  console.log(global);
  console.log(functional);
  //console.log(block);    output-->   Uncaught ReferenceError: block is not defined
  console.log(varblock)  // it executes because var keyord is functional scoped
}

scope();
console.log(global);
// console.log(functional);    output-->   Uncaught ReferenceError: functional is not defined





// Task 3: Lexical Scope

const outer = () => {
  let num1=10

  const inner = () => {
    let num2=20;

    const add = () => {
      console.log(num1+num2);
    };
    add() // add() is declared inside the inner so it can be only accessible only inside inner
  };
  inner() // inner() is only accessible inside outer
};

outer()





// Task 4: Scope Chain Search

const company = "SLA";

const level1 = () => {
  const level2 = () => {
    const level3 = () => {
      console.log(company);
    };
    level3();
  };
  level2();
};

level1();

// JavaScript searches for company in level3(), then level2(), then level1(), and finally finds it in the global scope through the scope chain.



// Task 5: Hoisting Prediction

console.log(hoist);  // undefined
var hoist = 100;

// Explanation:
// Memory Phase : a → undefined
// Execution Phase : a = 100





// Task 6: TDZ Investigation

// console.log(name);  output-->Uncaught ReferenceError: Cannot access 'username' before initialization
let name = "Sudhan";

// Explanation:
// TDZ starts : beginning of scope containing the variable declaration
// TDZ ends : when variable initialized
// Reference error occurs because access before initialization 





// Task 7: Execution Context

const greet = () => {
  console.log("Hello");
};

greet();



// step 1:Global Execution Context Created

// step 2:greet() Invoked

// step 3:Function Execution Context Created

// step 4:console.log("Hello")

// step 5:Output: Hello

// step 6:Function Execution Context Destroyed

// step 7:Execution Complete


// Global Execution Context (GEC) --> Created when a JavaScript program starts. Stores variables,objects,functions
// Function Execution Context (FEC) --> Created whenever a function is called. Stores local variables and destroyed automatically after function executed







// Task 8: Type Conversion Challenge

console.log("10" + 5);    // "105" because + refers concatenation
console.log("10" - 5);    // 5 because 10 converted to number
console.log(true + 1);    // 2  because true=  1
console.log(false + 10);  // 10 because false = 0
console.log(Number("100")); // 100 explicit type conversion
console.log(String(500)); // "500" explicit type conversion





// Task 9: Primitive vs Non-Primitive

// Primitive:
let str = "hello";                  //String
let num = 10;                       //Number
let bool = true;                    //Boolean
let und;                            //Undefined
let nul = null;                     //Null
let big = 10n;                      //Bigint
let sym = Symbol("id");             //Symbol

// Non-Primitive:
let obj = { name: "Godson",
            age:21,                 //Object
            course:"MERN"
            };
let arr = [1,2,3];                  //Array
let fn = function(){};              //Function

// Explanation:
// Storage:
// Primitive : Stack
// Non-Primitive : Heap (reference)






// Task 10: Complete Interview Scenario

let n1 = 10;

const outer1 = () => {
  let n2 = 20;

  if (1) {
    const n3 = 30;
    console.log(n1+n2+n3); // 60
  }

  function inner1() {
    console.log("10" + 5); // 105
  }

  inner1();
};

outer1();

console.log(n4); // undefined
var n4 = 100;

console.log(n5); //  Uncaught ReferenceError: Cannot access 'n5' before initialization
let n5 = 200;


// 1.Memory Creation Phase

// n1 → undefined
// outer1 → function
// n4 → undefined
// n5 → TDZ


// 2.Execution Phase

// n1 = 10
// outer1 runs
// inner1 runs
// n4 = 100
// n5 initialized later


// 3.Scope Creation

// Global
// outer()
// block
// inner()


// 4.Variable Lookup Process

// first look for variable local then it searches in parent atlast only globally
// local -->parent --> global


// 5.Final Output

// 60
// 105
// undefined
//  Uncaught ReferenceError: Cannot access 'n5' before initialization







// Bonus Interview Task

var a = 10;

const outer = () => {
  let b = 20;

  const inner = () => {
    console.log(a);        // 10
    console.log(b);        // 20
    console.log("5" + 2);  // "52"
  };

  inner();
};

outer();