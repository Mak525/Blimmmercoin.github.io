javascript
let score = 0;
let fuel = 100;

function createAirplane() {
    const airplane = document.createElement('div');
    airplane.classList.add('airplane');
    airplane.style.left = Math.random() * (window.innerWidth - 50) + 'px';
    airplane.style.top = Math.random() * (window.innerHeight - 50) + 'px';
    
    airplane.addEventListener('click', () => {
        score += 10;
        updateScore();
        airplane.remove();
        createAirplane();
    });

     document.getElementById('game-container').appendChild(airplane);
}

function updateScore() {
    document.getElementById('score-value').textContent = score;
}

function updateFuel() {
    fuel = Math.max(0, fuel - 1);
    document.getElementById('fuel-value').textContent = fuel;
    if (fuel === 0) {
        alert('Game Over! Your score: ' + score);
        resetGame();
    }
}

function resetGame() {
    score = 0;
    fuel = 100;
    updateScore();
    document.getElementById('fuel-value').textContent = fuel;
}
