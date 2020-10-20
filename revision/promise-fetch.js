// Promise Obj
let promise = fetch('https://jsonplaceholder.typicode.com/todos/1');

promise // 
    .then((res) => {
        getData = res.json(); // get JSON data
        return getData;
    })
    .then((jsonData) => {
        console.log(jsonData); // print json data
    });
