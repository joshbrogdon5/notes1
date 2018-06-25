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


//
