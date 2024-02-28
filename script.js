const words = ['jake', 'ray', 'amy', 'rosa', 'charles', 'terry']; //put your words here
let chosenWord = words[Math.floor(Math.random() * words.length)];
let guessedWord = '_'.repeat(chosenWord.length);
let attempts = 6;
let hint = 'b99 char' //put your hint here

document.getElementById('word').innerText = guessedWord;

document.getElementById('letters').innerText = 'Remaining attempts: ' + attempts;

document.getElementById('letterst').innerText = 'Total number of letters: ' + chosenWord.length;

document.getElementById('hint').innerText = 'The hint is: ' + hint;

document.addEventListener('keypress', function(event) {
    let char = event.key.toLowerCase();
    if (attempts > 0 && guessedWord.includes('_')) {
        if (chosenWord.includes(char)) {
            for (let i = 0; i < chosenWord.length; i++) {
                if (chosenWord[i] === char) {
                    guessedWord = guessedWord.substr(0, i) + char + guessedWord.substr(i + 1);
                }
            }
            document.getElementById('word').innerText = guessedWord;
        } else {
            attempts--;
            document.getElementById('letters').innerText = 'Remaining attempts: ' + attempts;
            if (attempts === 0) {
                alert('You lost! The word was: ' + chosenWord);
            }
        }
        if (!guessedWord.includes('_')) {
            alert('Congrats! You won!');
        }
    }
});
