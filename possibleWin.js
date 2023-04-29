const checkWinPossibilities = (player_round_win, computer_round_win, round) => {
    if (player_round_win == 3 || computer_round_win == 3) {
        return true;
    } else if (round == 3 && ((player_round_win == 2 && computer_round_win == 0) || (player_round_win == 0 && computer_round_win == 2))) {
        return true;
    }
    return false;
}