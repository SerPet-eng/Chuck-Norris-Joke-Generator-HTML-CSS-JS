const buttonEl = document.getElementById('button-el');
const textEl = document.getElementById('monitor');

const limitRequest = 50;
let currentJokeIndex = 0;
const jokeURL = "https://api.chucknorris.io/jokes/random";
const jokeArray = [];

// Fetching Jokes
const fetchJokes = async () => {
    try {
        const responses = await Promise.all(Array.from({ length: limitRequest }, () => fetch(jokeURL)));
        const jsonData = await Promise.all(responses.map(response => response.json()));
        jokeArray.push(...jsonData.map(data => data.value));
    } catch (error) {
        console.error(error);
    }
};

fetchJokes();

// Button Action
buttonEl.addEventListener('click', () => {
    textEl.textContent = jokeArray[currentJokeIndex];
    currentJokeIndex = (currentJokeIndex + 1) % jokeArray.length;
});
