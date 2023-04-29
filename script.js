const isPlayerPickCorrect = (player_selection) => {
    if (player_selection == "ROCK" || player_selection == "PAPER" || player_selection == "SCISSORS") {
        return true;
    }
    alert("Please input a correct answer");
    return false;
}

const getPlayerPick = () => {
    let player_selection;
    
    do {
        player_selection = prompt("Rock, Paper, Scissors! Which one do you want to pick?\n 1. (R)ock\n 2. (P)aper\n 3. (S)cissors");
        if (player_selection === null) {
            return false;
        } else {
            player_selection = player_selection.toUpperCase().trim();
            if (player_selection == 1 || player_selection == "R" || player_selection == "ROCK") {
                player_selection = "ROCK";
            } else if (player_selection == 2 || player_selection == "P" || player_selection == "PAPER") {
                player_selection = "PAPER";
            } else if (player_selection == 3 || player_selection == "S" || player_selection == "SCISSORS") {
                player_selection = "SCISSORS";
            }
        }
    } while (!isPlayerPickCorrect(player_selection));
    
    return player_selection;
}

const computerPlay = () => {
    const array_of_numbers = new Uint32Array(1);
    const random_number = crypto.getRandomValues(array_of_numbers);

    switch (random_number % 3) {
        case 0:
            return "ROCK";
        case 1:
            return "PAPER";
        case 2:
            return "SCISSORS";
    }
}

const startRound = (player_selection, computer_selection, player_round_win, computer_round_win) => {
    let round_result = {
        player_round_win: player_round_win,
        computer_round_win: computer_round_win,
    };
    console.log(`Player picks ${player_selection}`);
    console.log(`Computer picks ${computer_selection}`);
    if (player_selection == "ROCK") {
        if (computer_selection == "ROCK") {
            console.log("It\'s a DRAW!");
            alert(`Player picks ${player_selection}\nComputer picks ${computer_selection}\n\nIt\'s a DRAW!`);
        } else if (computer_selection == "PAPER") {
            round_result.computer_round_win += 1;
            console.log("Computer WIN! PAPER beats ROCK");
            alert(`Player picks ${player_selection}\nComputer picks ${computer_selection}\n\nComputer WIN! PAPER beats ROCK`);
        } else if (computer_selection == "SCISSORS") {
            round_result.player_round_win += 1;
            console.log("You WIN! ROCK beats SCISSORS");
            alert(`Player picks ${player_selection}\nComputer picks ${computer_selection}\n\nYou WIN! ROCK beats SCISSORS`);
        }
    } else if (player_selection == "PAPER") {
        if (computer_selection == "ROCK") {
            round_result.player_round_win += 1;
            console.log("You WIN! PAPER beats ROCK");
            alert(`Player picks ${player_selection}\nComputer picks ${computer_selection}\n\nYou WIN! PAPER beats ROCK`);
        } else if (computer_selection == "PAPER") {
            console.log("It\'s a DRAW!");
            alert(`Player picks ${player_selection}\nComputer picks ${computer_selection}\n\nIt\'s a DRAW!`);
        } else if (computer_selection == "SCISSORS") {
            round_result.computer_round_win += 1;
            console.log("Computer WIN! SCISSORS beats PAPER");
            alert(`Player picks ${player_selection}\nComputer picks ${computer_selection}\n\nComputer WIN! SCISSORS beats PAPER`);
        }
    } else if (player_selection == "SCISSORS") {
        if (computer_selection == "ROCK") {
            round_result.computer_round_win += 1;
            console.log("Computer WIN! ROCK beats SCISSORS");
            alert(`Player picks ${player_selection}\nComputer picks ${computer_selection}\n\nComputer WIN! ROCK beats SCISSORS`);
        } else if (computer_selection == "PAPER") {
            round_result.player_round_win += 1;
            console.log("YOU WIN! SCISSORS beats PAPER");
            alert(`Player picks ${player_selection}\nComputer picks ${computer_selection}\n\nYou WIN! SCISSORS beats PAPER`);
        } else if (computer_selection == "SCISSORS") {
            console.log("It\'s a DRAW!");
            alert(`Player picks ${player_selection}\nComputer picks ${computer_selection}\n\nIt\'s a DRAW!`);
        }
    }
    return round_result;
}

const getGameResult = (player_selection, player_round_win, computer_round_win) => {
    if (player_selection === false) {
        console.log("");
        console.log("Game\'s stopped");
        console.log("");
        console.log("Computer WINS");
        alert("Game\'s stopped. Player quits.\n\nCOMPUTER WINS");
    } else {
        console.log("");
        console.log("GAME OVER");
        console.log("");
        console.log(`PLAYER ${player_round_win} - COMPUTER ${computer_round_win}`);
        if (player_round_win > computer_round_win) {
            console.log("CONGRATULATIONS! YOU WIN THE GAME")
            alert(`GAME OVER\nPLAYER ${player_round_win} - COMPUTER ${computer_round_win}\n\nCONGRATULATIONS! YOU WIN THE GAME`);
        } else if (computer_round_win > player_round_win) {
            console.log("COMPUTER WIN THE GAME! TRY AGAIN NEXT TIME")
            alert(`GAME OVER\nPLAYER ${player_round_win} - COMPUTER ${computer_round_win}\n\nCOMPUTER WIN THE GAME! TRY AGAIN NEXT TIME`);
        } else {
            console.log("THE GAME\'S DRAW! NO ONE WINS")
            alert(`GAME OVER\nPLAYER ${player_round_win} - COMPUTER ${computer_round_win}\n\nTHE GAME\'S DRAW! NO ONE WINS`)
        }
    }
}

const isDecisionCorrect = (play_again_decision) => {
    if (play_again_decision == "Y" || play_again_decision == "YES" || play_again_decision == "N" || play_again_decision == "NO") {
        return true;
    }
    return false;
}

const playAgain = (player_selection) => {
    if (player_selection === false) {
        console.log("Thank you for playing! Come again next time.");
        alert("Thank you for playing! Come again next time.");
    } else {
        let play_again_decision;

        do {
            play_again_decision = prompt("Do you want to play again? (Y)es / (N)o");
            if (play_again_decision === null) {
                console.log("Thank you for playing! Come again next time.");
                alert("Thank you for playing! Come again next time.");
                return false;
            } else {
                play_again_decision = play_again_decision.toUpperCase().trim();
            }
        } while (!isDecisionCorrect(play_again_decision));

        if (play_again_decision == "Y" || play_again_decision == "YES") {
            console.clear();
            game();
        } else if (play_again_decision == "N" || play_again_decision == "NO") {
            console.log("Thank you for playing! Come again next time.");
            alert("Thank you for playing! Come again next time.");
            return false;
        }
    }
}

const game = () => {
    let player_selection;
    let computer_selection;
    let player_round_win = 0;
    let computer_round_win = 0;

    console.log("WELCOME TO ROCK, PAPER, SCISSORS GAME!");
    alert("WELCOME TO ROCK, PAPER, SCISSORS GAME!");
    console.log("GAME START");
    alert("GAME START");

    for (let i = 0; i < 5; i++) {
        console.log("");
        console.log(`PLAYER ${player_round_win} - COMPUTER ${computer_round_win}`);
        console.log("");

        if (i == 0) {
            console.log("1st round");
            alert(`1st round\n PLAYER ${player_round_win} - COMPUTER ${computer_round_win}`);
        } else if (i == 1) {
            console.log("2nd round");
            alert(`2nd round\n PLAYER ${player_round_win} - COMPUTER ${computer_round_win}`);
        } else if (i == 2) {
            console.log("3rd round");
            alert(`3rd round\n PLAYER ${player_round_win} - COMPUTER ${computer_round_win}`);
        } else {
            console.log(`${i+1}th round`);
            alert(`${i+1}th round\n PLAYER ${player_round_win} - COMPUTER ${computer_round_win}`);
        }

        player_selection = getPlayerPick();
        if (player_selection === false) { //Player Quit (Click cancel)
            console.log("Player quits.");
            break;
        }
        computer_selection = computerPlay();

        let game_state = startRound(player_selection, computer_selection, player_round_win, computer_round_win);
        player_round_win = game_state.player_round_win;
        computer_round_win = game_state.computer_round_win;
    }

    getGameResult(player_selection, player_round_win, computer_round_win);
    playAgain(player_selection);
}

game();