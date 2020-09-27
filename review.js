// Async functions -----
//async function always returns a promise.
async function f1() { return 1; }
async function f2() { return Promise.resolve(1); }
function f3() { return 3;}

// UNCOMMENT AND CHECK RESULT ----
// console.log( f1().then() ); // Promise {<panding>}
// console.log( f1().then(alert) ); // alert popup : 1
// console.log( f2().then(alert) ); // alert popup : 2
// console.log( f3() ); // 3


// Await -----
// works only inside async functions
async function fun() {
	console.log("Me first");
	const data = await fetch('https://jsonplaceholder.typicode.com/todos/1');
	console.log(data);
}
fun();
console.log("me second");
// => output:
// me first
// me second
// hi

// .
// .
// callback hell
let data = fetch('https://jsonplaceholder.typicode.com/todos/1');
data.then((data)=>{
	data.json().then((data1)=>{  // callback hell
		console.log(data1);
	});
}).catch((err)=>{
	console.log(err);
});


// .
// .
// async await
// async function funcName(url){
//     const response = await fetch(url);
// 	var data = await response.json();
// 	console.log(data);
// }

// funcName('https://jsonplaceholder.typicode.com/todos/1');



// .
// .
// try genrators funciton
function* genFun() {
	const num = 10;
	const newNum = yield num;
	yield 5 + newNum;
	yield 6;
}

let getFun = genFun();

console.log(getFun);
console.log(getFun.next());
console.log(getFun.next(2));