//Here I will take notes for class... (double space breaks in comments/code are seperating note topics or trians of thought)


//Day 1:

//Function expressions like this:
var add = function(){}
//are not recognized by the computer until it reaches that point in the code, where as declaraitions (like this):
function add(){}
//are known by the computer the second the program runs, it does not need to read down the code to know it exists like it does
//with functon expressions.


//The "this" keyword is what is used in a method to access things in an object:
var obj ={
    name:"josh",
    age:93,
    x: function(){
        this.name;
    }
}
obj.x();
//as shown above^^^^.


//Loop through array backwards:
var array=[1,3,5,53,3,2,2,3,4];
for(let i = array.length-1;i>=0;i--){
    const element=array[i];
}
//this is used to eliminate eliments from an array, whereas loopin through an array forwards it usually adds things or returns
//things from the array.


//These 2 following functions are the same:
function add(x,y){
    return x+y;
}
//and:
let add2 = (x,y) => x+y;
//these arrow functions are generally used as paramaters to, or inside normal functions like the top one.


//Callback are functions and should be invoked as such, and can even take in paramaters. They can also be used to complete
//tasks that will take time to complete, and when it is done it will tell the user who invoked it.


//Questions: 
//array.forEach()?? Whats the syntax/what does it do??
//setTimeout? is it just a javascript tool?


//Day 2:

//The difference between let and var is its scope... var is a function scope, and let is limited to the block,statement,
//or expression on which it is used. Var can define it globally define it "globally".


//Ternary operator:
let myAge = 15;
let canDrive = myAge >= 16 ? true : false;
// this is the same as an if statement, it can sometimes be more clean and easy in some instances.
//another example: (first the if statement way, then the ternary way)
// let greeting = ''
// let name = 'Sally Sue'
// if(name === 'Jane Lorain') {
//   greeting = 'Hey Jane!'
// } else {
//   greeting = " ... you're not Jane.... "
// }
// TERNARY HERE:
let name = 'Sally Sue'
let greeting = name === "Jane Lorain" ? "Hey Jane!" : "... you're not jane...";
//You can nest ternary statements, but if you have to do that it is then more efficient to just use if statements.
//Ternarys are good if they are single lined and easy to read, otherwise if statemnts are better.


//Push adds onto the end of an array, Unshift adds onto the begginning of an array...
// Pop removes a value from the end of an array, and shift removes a value from the begginning of an array.
// Splice will remove something from the indexes passed in and replace it with something ie:
array.splice(2, 4, "hi"); //this will remove items from 2-4, and then place hi inside the array (you can put multiple items).
//Slice will copy your array, and it will also take in arguments and start/stop copying from the indexes you give it ie:
array.slice(2,5); //this will copy from index 2 up to 5 of the array. Slice does not manipulate the array, it simply copies it
// and returns it.


//You can concatenate like this (which is easier):
var name = "Josh"
var color = "blue"
var str = `My name is ${name}, and I like the color ${blue}`//use back ticks, (same button as tidle).


//Questions:


//Day 3: