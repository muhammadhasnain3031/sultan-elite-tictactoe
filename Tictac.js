let currentPlayer = 'x';
let array = Array(9).fill(null);
let image1 = 'tick.png.avif'; // Apni files check kar lena
let image2 = 'cross.png';
let gameActive = true;

function checkWinner() {
    const winningPattern = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    for (let pattern of winningPattern) {
        const [a, b, c] = pattern;
        if (array[a] && array[a] === array[b] && array[a] === array[c]) {
            return array[a];
        }
    }
    return null;
}

function handleClick(element) {
    let id = Number.parseInt(element.id);

    if (array[id] === null && gameActive) {
        array[id] = currentPlayer;

        let img = document.createElement('img');
        img.src = currentPlayer === 'x' ? image1 : image2;
        element.appendChild(img);

        let winner = checkWinner();

       if (winner) {
    let winnerName = (winner === 'x') ? "Tick" : "Cross";
    
    document.getElementById('status').innerText = `🏆 Winner is ${winnerName}!`;
    document.getElementById('status').style.color = "#00d2ff";
    gameActive = false;
    return;
}

        if (!array.some(e => e === null)) {
            document.getElementById('status').innerText = "🤝 It's a Draw!";
            gameActive = false;
            return;
        }

        currentPlayer = currentPlayer === 'x' ? 'o' : 'x';
        document.getElementById('status').innerText = `Player ${currentPlayer.toUpperCase()}'s Turn`;
    }
}