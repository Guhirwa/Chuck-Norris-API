async function loadData(url) {
    try {
        const fetchJoke = await fetch(url);
        console.log(fetchJoke);
        const json = fetchJoke.json();
        console.log()
    } catch(error) {
        console.log(error);
    }
    
}
    
loadData('https://api.chucknorris.io/jokes/random')