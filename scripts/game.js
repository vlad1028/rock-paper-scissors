class GameToken {
    static Rock = new GameToken("Rock");
    static Paper = new GameToken("Paper");
    static Scissors = new GameToken("Scissors");

    constructor(name) {
        this.name = name;
    }
}

class GameResult {
    static Win = new GameResult("Win");
    static Loose = new GameResult("Loose");
    static Draw = new GameResult("Draw");

    constructor(result) {
        this.result = result;
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

function getRoundResult(playerSelection, computerSelection) {
    const playerToken = getToken(playerSelection);
    const computerToken = getToken(computerSelection);

    if (playerToken === computerToken) {
        return GameResult.Draw;
    } else if (beats(playerToken) === computerToken) {
        return GameResult.Win;
    } else {
        return GameResult.Loose;
    }
}

function getResultString(result, playerSelection, computerSelection) {
    switch (result) {
        case GameResult.Win:
            return "You Won! " + playerSelection + " beats " + computerSelection + ".";
        case GameResult.Loose:
            return "You Lose! " + computerSelection + " beats " + playerSelection + ".";
        case GameResult.Draw:
            return "Draw! You both chose " + playerSelection + ".";
    }
}

const roundsList = document.querySelector('#roundsList');
const playerPoints = document.querySelector('#playerPoints');
const computerPoints = document.querySelector('#computerPoints');
const drawPoints = document.querySelector('#drawPoints');
const buttons = Array.from(document.querySelectorAll('button.selection'));

function printRoundResult(resultString) {
    const li = document.createElement('li');
    li.textContent = resultString;
    roundsList.appendChild(li);
}

function updatePoints(roundResult) {
    switch (roundResult) {
        case GameResult.Draw:
            drawPoints.textContent++;
            break;
        case GameResult.Win:
            playerPoints.textContent++;
            break;
        case GameResult.Loose:
            computerPoints.textContent++;
            break;
    }
}

function playRound(playerSelection) {
    const computerSelection = getComputerChoice();
    const result = getRoundResult(playerSelection, getComputerChoice());
    updatePoints(result);
    printRoundResult(getResultString(result, playerSelection, computerSelection));
}

buttons.forEach(button => button.addEventListener('click', (e) => playRound(button.textContent)));