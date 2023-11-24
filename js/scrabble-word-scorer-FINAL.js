// Scrabble Word Scorer

// get the dom elements and have input call function:
const input = document.querySelector('input');
input.addEventListener('search', calcScrabbleScore);
input.focus(); // make the cursor blink in the input box\
const h2 = document.querySelector('h2');
// define the function that runs when user hits enter:
function calcScrabbleScore() {
    let word = input.value; // save the user input to a variable
     // check if the input box is empty (empt  string "" is falsey):
    if(!word) {
        // give feedback and adjust font size to fit box
        h2.textContent = "Enter Word";
        h2.style.fontSize = "20px"; 
        return;
    }
    // check if the entered word exceeds 15 chars
    if(word.length > 15) {
        // give feedback and adjust font size to fit box
        h2.textContent = "Word is too long!";
        h2.style.fontSize = "20px";
        return;
    }
    // check if dictionary of 180K words has the entered word:
    if(!scrabbleDictionaryArr.includes(word)) {
        // give feedback and adjust font size to fit box
        h2.textContent = "Word is not in Scrabble Dictionary!";
        h2.style.fontSize = "16px";
        return;
    }
    // the word entered by the user is in the dictionary, so:
    // split the word into an array of individual letters
    const lettersArr = word.split("");
    let score = 0; // for adding up word score, letter by letter
    // loop array of letters, one letter at a time:
    for(let i = 0; i < lettersArr.length; i++) {
        let L = lettersArr[i].toUpperCase(); // save current letter to uppercase
        // the 26 letter keys are all uppercase, so L has to be uppercase 
        // look up letter score as value of letter key, and add it to score
        score += letterValuesObj[L];
    }
    // output score and adjust font size to fit box
    h2.style.fontSize = "36px";
    h2.textContent = score;
}