// Async functions -----
//async function always returns a promise.
async function f1() { return 1; }
async function f2() { return Promise.resolve(1); }
function f3() { return 3;}

console.log( f1() ); // Promise {<fulfilled>: 1}
console.log( f1().then() ); // Promise {<panding>}
console.log( f1().then(alert) ); // alert popup : 1
console.log( f2().then(alert) ); // alert popup : 2
console.log( f3() ); // 3


// Await -----
// works only inside async functions
async function fun() {
	console.log("Me first");
	const data = await fetch('http://twitter.com/will/tweets/1');
	console.log(data);
}
fun();
console.log("me second");
// => output:
// me first
// me second
// hi