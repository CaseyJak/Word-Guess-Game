


let wordBank = ["navi", "mastersword", "triforce", "zelda", "link", "hyrule", 
                "ganon", "midna", "tinkle", "fi", "power", "courage", "wisdom"];              




    // Computer Chooses Random Word
window.onload = function setGame(){
    let randomWord = wordBank[Math.floor(Math.random()*wordBank.length)];
    let gameAnswer = randomWord.split("");
    let blankAnswer = [];
        for (let i=0; i < gameAnswer.length; i++) {
            blankAnswer.push("_");
            document.querySelector(".guessBox").innerHTML = blankAnswer.join(" ");
        }
    let chances = 6;
    let wrong = [];

    document.querySelector(".chances").innerHTML=chances;
    document.querySelector(".wrong").innerHTML=wrong;

    console.log("randomWord: " + randomWord);
    console.log("gameAnswer: " + gameAnswer);

    // User Game Loop


    document.onkeyup = function playerGuesing(event) {
        let alpha = ["a", "b", "c", "d", "e", "f", "g", 
        "h", "i", "k", "l","m", "n", "o", "p", "q", "r", 
        "s", "t", "u", "v", "w", "x", "y", "z"]
        let userGuess = event.key;
            if (alpha.includes(userGuess)) {
                chances--;
                wrong.push(userGuess);
                for ( let i=0; i<gameAnswer.length; i++)
                if (userGuess === gameAnswer[i]){
                    chances++;
                    blankAnswer[i]= userGuess;
                    document.querySelector(".guessBox").innerHTML = blankAnswer.join(" ");
                    if (blankAnswer.join("") === randomWord) {
                        alert("You win! Winning word: " + randomWord);
                        setGame();
                    }
                }
                console.log("blankAnswer: " + blankAnswer);
                console.log("gameAnswer: " + gameAnswer);
                    console.log("wrong: " + wrong);
                    document.querySelector(".wrong").innerHTML=wrong;
                    document.querySelector(".chances").innerHTML=chances;
                }
            else (alert ("invalid statment"))
            if (chances < 1) {
                alert("You lose!");
                setGame();
            }
    }

        /*
        for (let j=0; j<alpha.length;j++)
        if (userGuess !== alpha[j]){                       //if user presses a non letter key
            alert("invalid selection");                  //tells player it's an invalid selection
        } 
        else if (userGuess === alpha[j]){               //if user presses a letter key
            for (let k=0; k<gameAnswer.length;k++)       //checks to see if player choose a correct letter
            if (userGuess === gameAnswer[k]) {           //if user guesses correct
            blankAnswer[i] = gameAnswer[k];          //replace blank space with correct letter
            if (gameAnswer = blankAnswer) {          //if player has all the letters
                alert("You win!");                   //user wins
                setGame();                           // resets game
            }
        
            else if (userGuess !== gameAnswer[k]){      //if user guess wrong
            chances--;                              //player counter goes down by 1
            wrong.push(userGuess);
                if (chances < 1) {                      //if player runs out of live
                alert("You lose!");                 //player loess
                setGame();                          //resets game
            }
        }
    }         
    }    */
}


     

        /* maybe for game play 
    let playersGuess=

    if(gameWord) */





