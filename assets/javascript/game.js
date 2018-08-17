


let wordBank = ["Navi", "Mastersword", "Triforce", "Zelda", "Link", "Hyrule", 
                "Ganon", "Midna", "Tinkle", "Fi", "Power", "Courage", "Wisdom"];              

function setGame(){

    let chances = 6;

    let wrong = [];

    // Computer Chooses Random Word

    let randomWord = wordBank[Math.floor(Math.random()*wordBank.length)];

    let gameAnswer = randomWord.split("");

    let blankAnswer = [];
        for (let i=0; i < gameAnswer.length; i++) {
        blankAnswer.push("_");
    }

    // User Game Loop

    let alpha = ["a", "b", "c", "d", "e", "f", "g", 
    "h", "i", "k", "l","m", "n", "o", "p", "q", "r", 
    "s", "t", "u", "v", "w", "x", "y", "z"]

    document.oneupkey = function playerGuesing (event) {
        let userGuess = event.key;
        if (userGuess !== alpha){                       //if user presses a non letter key
            alert("invalid selection")                  //tells player it's an invalid selection
        } 
        else if (userGuess === alpha){               //if user presses a letter key
        for (let i=0; i<gameAnswer.length;i++)       //checks to see if player choose a correct letter
        if (userGuess === gameAnswer[i]) {           //if user guesses correct
            blankAnswer[i] = gameAnswer[i];          //replace blank space with correct letter
            if (gameAnswer = blankAnswer) {          //if player has all the letters
                alert("You win!");                   //user wins
                setGame();                           // resets game
            }
        }
        else if (userGuess !== gameAnswer[i]){      //if user guess wrong
            chances--;                              //player counter goes down by 1
            wrong.push(userGuess);
            if (chances < 1) {                      //if player runs out of live
                alert("You lose!");                 //player loess
                setGame();                          //resets game
            }
        }            
    }
    }
    console.log("gameAnswer: " + gameAnswer);
    console.log("randomWord: " + randomWord);
    console.log("blankAnswer: " + blankAnswer);
    }

        /* maybe for game play 
    let playersGuess=

    if(gameWord) */



