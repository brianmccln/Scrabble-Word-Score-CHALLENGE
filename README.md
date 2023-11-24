## Scrabble Word Scorer  - CHALLENGE
This little app lets users enter a 2-15 letter word in the
text input box and get its Scrabble score svalue.  
This CHALLENGE version does NOT contain the JavaScript code.  
This CHALLENGE version is for YOU to try to make work by coding the JS.

### Srabble Concept:
In the game of Scrabble, each player has tiles.  
Each tile has a letter, with a numeric value.  
The most commonly used letters, such as A, E, O, N, S and T  have a value of just 1.  
Less frequently used letters are worth more.  
X is 8 and Z is 10, for example.  
By spelling out words on the game board, players score  
points equal to the value of their words.    
So, if you spell ZOOS, you get 13 points.  
Existing words can be used to help make new words,   
crossword puzzle-style.  
So, you could use one of the O's in ZOO to start spelling  
a word that starts with "O", such as OXEN, which would be  
worth 11 points.  
There are more than 180,000 words in the Scrabble dictionary.  
This includes plural versions of all nouns (zoo and zoos).  


#### User Interface / User Experience:  
- User types a word in the input box
- Score appears below in the h2

#### HTML : DONE  
#### CSS : DONE  
#### JavaScript : YOU DO

#### The challenge if for you to write the JS  
that makes the word score appear when the user  
enters a word and hits Enter.  
There is no Submit button, because this is an input  
box of type **'search'**, which means it has a  
**'search' event** that runs when you hit the Enter key.  
You need to make the 'search' event call a function  
that calculates and outputs the Scrabble score for the  
entered word. If just gibberish is entered, or if the word  
is too long, the output should say so.  

#### First things first: Come up with an Alorithm:  
- Inspect the two datasets carefully:  
- **dictionary.js** contains an array of all 180K Scrabble words  
- **letter-values.js** contains an object of 26 letter-value pairs   
You need to figure out how to use these datasets in your code? 
- Write out what the program need to do, step-by-step.  
- Your Algo should read like an outline, like a to-do list  
- Then fill in with code, so the notes become code comments  
- Test your progress by logging to the console frequently.  


