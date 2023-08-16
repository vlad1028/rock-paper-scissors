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

for (let i = 0; i < 5; i++) {
    console.log(getComputerChoice());
}