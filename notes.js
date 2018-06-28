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
var str = `My name is ${name}, and I like the color ${blue}`//use back ticks, (same button as tilde).


//Questions: None


//Day 3:

//array.map will look at each item in an array and will return a new array, it does not alter the original array. It gives you access to each element, index, and the array itself.
array.map(function(element, index, array){})
//You would have to create a new variable/array so it returns something ie:
let newArray = array.map(function(element, index, array){ //you do not need to include all these parameters, its just in that order it accesses different parts of the array.
    return element + 2
})
//this will give us a new array (a copy) but now it will have the sum of each element (because we are adding by 2).


//array.filter will look at each item in the array like array.map does, but here we have to return a condition (truthy or falsy). Also like map it does not
//change the original array, but it will return a modified copy depending on the conditions we give it. ie:
let arr = [1,2,3,4,50]
let newArr = arr.filter(function(element, index, array){ //you do not need to include all these parameters, its just in that order it accesses different parts of the array.
    return element > 3
})
//here is another example of filter, that will only return evens out of an array:
let filterArray = [1, 2, 3, 4, 5, 6]
let newArray = filterArray.filter((evens) => {
  return evens % 2 === 0;
})
console.log(newArray)


//array.reduce will go through all items in the array but it will only return one thing. It looks like this:
let arr = [1,2,3,4,5]
let sum = arr.reduce(function(total,element,index){//total by default represents the first item in the array, but you could define where it starts.
    return total + element;
})
//here we added all the numbers together in the array, and it returned 15.
//total by default represents the first item in the array, but you could define where it starts ie:
let nums = [1,2,3,4]
let totalFromArray = nums.reduce((total, nextElement) => {
  return total + nextElement
}, 10)//here you change total
console.log(totalFromArray)
//without changing total, you get 10 as the result of the function, but by putting 10 there, you will get 20.
//You will rarely use array.reduce, but you should know how it works just in case but dont devote a lot of mental capacity to it.

//here is a cool thing where you can use all three on one array:
let challengeArray = [1,2,3,4,5,6]

let results = challengeArray
                .map(elem => elem * 5)
                .filter(elem => elem % 2 !==0)
                .reduce((total, elem) => total + elem);
console.log(results)
//looks super cool, the result is 45 (in case you were wondering).


//delete is pretty straight forward, you just have to put the delete keyword before the statement:
delete obj.name;//here you will delete name from the obj.


//a for in loop will loop over an object, ie:
for(let prop in object){}
//or
for(let key in object){}
//you probably wont use this very often but it is good to know, but dont devote a lot of time to it.


//Object.assign() :
let me = { name: "Josh"}
let copy = Object.assign({}, me) //this will take the me object and dump its contents into the new object inside of copy=Object.assign, you can put as many objects here as you
//want.
//We will go into this more in depth later when we are using react. This is just meant to expose us to it so we are aware of it.


// Destructuring will pull properties off of an object:
let toDestructure = {
    name: 'Jake',
    age: undefined,
    height: "5 ft and 11 3/4 inches"
  }
  let { name, age, height } = toDestructure//this is creating seperate variables for each property in the object that will have the same values of what is in the object.
  console.log(name, age, height)
  //object destructuring is used to make your life more convenient as a coder, this is really usefull and cool. You can now call these as variables and get their
  //values returned to you.


  //A class is a blueprint for creating an object, here is an example:
  class BluePrint {
    constructor(){//the constructor is the set up method. It builds the object.
        this.number = 10//the "this" keyword is just a place holder for the object being created.
    }
  }
  let newObj = new BluePrint()
  newObj.number //would return 10


  //Questions:


  //Day 4: