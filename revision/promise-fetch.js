// Promise Obj
let promise = fetch('https://jsonplaceholder.typicode.com/todos/1');

// callback hell
promise // 
    .then((res) => {
        getData = res.json(); // get JSON data
        return getData;
    })
    .then((jsonData) => {
        console.log(jsonData); // print json data
    });


// Anoter way to use fetch
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(data => console.log(data));