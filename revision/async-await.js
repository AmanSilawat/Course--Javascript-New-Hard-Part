// Async Await
async function asyncFetch() {
    let resData = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    let data = await resData.json();
    console.log(data);
}
asyncFetch();