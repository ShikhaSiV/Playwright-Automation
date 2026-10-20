//print the even num b/w 100 to 200


/*let gameNum =25;
let userNum = prompt("Guess the game number");
while (userNum != gameNum){
    userNum = prompt(" you entered the wrong number, guess the correct one:");

}
console.log("Congratulations, You have gussed the correct number"); */


//String

//let str = "MYNAMEIS SHIKHA";
//let str2 = "yourageisthree"; 

//Arrays

/*let marks = [97,82,73,64,45];
console.log(marks);*/





/*let cities = ["delhi", "mumbai", "pune", "hyd"]
for(let city of cities)
{
    console.log(city);
}*/

/*function MyFunction() 
{
    console.log("Apna collage");
    console.log("I am learning JS ");

}
MyFunction();*/

//Sun of 2 num through function

/*function sum(x,y)
{
    console.log(x+y); 
}*/


//Arrow function

/*function sum(a,b)
{
    return a*b;
}
const arrowMulti=(a,b) =>
{
    console.log(a*b);
};*/

/*class Parent {
    hello() {
        console.log("hello");
    }
}

class Child extends Parent {}
let obj= new Child();*/

//let promise = new Promise ((resolve, reject) => {
//    console.log("This is a promise to deliver ur product");
  //  resolve("Delivered");
//});


const URL = "https://www.freepublicapis.com/api/random";

let promise = fetch(URL);
console.log(promise);