async function loadData() {
    try {
        const url = 'https://api.chucknorris.io/jokes/random';
        const fetchJoke = await fetch(url);
        console.log(fetchJoke);
        const data = await fetchJoke.json();
        console.log(data);
        console.log(data.value);
        const space = document.getElementById('loadingJoke');
        space.innerHTML = data.value;
    } catch(error) {
        console.log(error);
    }
    
}

const button = document.getElementById('loadJokeBtn').addEventListener('click', loadData);