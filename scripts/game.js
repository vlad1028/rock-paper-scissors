class GameToken {
    static Rock = new GameToken("rock");
    static Paper = new GameToken("paper");
    static Scissors = new GameToken("scissors");

    constructor(name) {
        this.name = name;
    }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function getComputerChoice() {
    const tokens = Object.keys(GameToken);
    return tokens[getRandomInt(0, tokens.length)];
}

function getToken(stringRepresentation) {
    const string = stringRepresentation.toLowerCase();
    switch (string) {
        case "rock":
            return GameToken.Rock;
        case "paper":
            return GameToken.Paper;
        case "scissors":
            return GameToken.Scissors;
        default:
            console.log("Wrong game token!");
    }
}

console.log(getToken("ROCK"));
console.log(getToken("Rock"));
console.log(getToken("rock"));
console.log(getToken("paper"));
console.log(getToken("scissors"));
getToken("wrongToken");

function beats(token) {
    switch (token) {}
}

function playRound(playerSelection, computerSelection) {
    // your code here!
  }
   
  const playerSelection = "rock";
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));