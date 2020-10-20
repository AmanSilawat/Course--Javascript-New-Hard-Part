// Genrator function
function *genFun(val) {
    let coinA = val || 10;
    let coinB = yield coinA;
    let coinC = yield 2 + coinB;  // 2 + 8
    yield coinC;
}

let nextElement = genFun(5);
let res1 = nextElement.next(); // 5
let res2 = nextElement.next(8); // 10
let res3 = nextElement.next(50); // 50
// let res4 = nextElement.next();

console.log(res1, res2, res3);