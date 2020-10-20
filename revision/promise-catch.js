fetch('https://ohhRongeApi')
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err)); // TypeError: Failed to fetch
