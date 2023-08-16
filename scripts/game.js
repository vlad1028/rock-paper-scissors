class GameToken {
    static Rock = new GameToken("Rock");
    static Paper = new GameToken("Paper");
    static Scissors = new GameToken("Scissors");

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

function beats(token) {
    switch (token) {
        case GameToken.Rock:
            return GameToken.Scissors;
        case GameToken.Paper:
            return GameToken.Rock;
        case GameToken.Scissors:
            return GameToken.Paper;
        default:
            console.log("Wrong game token!");
    }
}

function playRound(playerSelection, computerSelection) {
    const playerToken = getToken(playerSelection);
    const computerToken = getToken(computerSelection);

    if (playerToken === computerToken) {
        return "Draw! You both chose " + playerToken.name + ".";
    } else if (beats(playerToken) === computerToken) {
        return "You Won! " + playerToken.name + " beats " + computerToken.name + ".";
    } else {
        return "You Lose! " + computerToken.name + " beats " + playerToken.name + ".";
    }
  }
   
  const playerSelection = "rock";
  const computerSelection = getComputerChoice();
  console.log(computerSelection);
  console.log(playRound(playerSelection, computerSelection));