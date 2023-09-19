document.addEventListener('DOMContentLoaded', function() {
    const jokeText = document.getElementById('jokeText');
    const fetchButton = document.getElementById('fetchButton');

    // Function to fetch a random joke
    function fetchRandomJoke() {
        fetch('https://v2.jokeapi.dev/joke/Any')
            .then(response => response.json())
            .then(data => {
                let joke;
                if (data.type === 'single') {
                    joke = data.joke;
                } else if (data.type === 'twopart') {
                    joke = `${data.setup}<br>${data.delivery}`;
                } else {
                    joke = 'No joke available.';
                }
                jokeText.innerHTML = joke;
            })
            .catch(error => {
                console.error('Error fetching joke:', error);
                jokeText.innerHTML = 'Error fetching joke.';
            });
    }

    // Add a click event listener to the fetch button
    fetchButton.addEventListener('click', fetchRandomJoke);

    // Initial fetch of a random joke on page load
    fetchRandomJoke();
});
