


let wordBank = ["Navi", "Mastersword", "Triforce", "Zelda", "Link", "Hyrule", 
                "Ganon", "Midna", "Tinkle", "Fi", "Power", "Courage", "Wisdom"];              




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
    console.log("blankAnswer: " + blankAnswer);

    // User Game Loop


    document.onkeyup = function playerGuesing(event) {
        let alpha = ["a", "b", "c", "d", "e", "f", "g", 
        "h", "i", "k", "l","m", "n", "o", "p", "q", "r", 
        "s", "t", "u", "v", "w", "x", "y", "z"]
        let userGuess = event.key;
            if (alpha.includes(userGuess)) {
                for ( let i=0; i<gameAnswer.length; i++)
                if (userGuess === gameAnswer[i]){
                    blankAnswer[i]= userGuess;
                    document.querySelector(".guessBox").innerHTML = blankAnswer.join(" ");
                }
                else {
                    wrong=userGuess;
                    chances--;
                    console.log("wrong: " +wrong[i]);
                    console.log("chances: " + chances)
                }
            }
            else (alert ("invalid statment"))
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





