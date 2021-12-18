function computerPlay() {
    let i = Math.floor(Math.random() * 3);
    switch (i) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }
}