let score = 0;
let upgradeCost = 10;
let upgradeCount = 0;

const scoreDisplay = document.getElementById("score");
const upgradeButton = document.getElementById("upgrade-button");
const upgradeAvailable = document.getElementById("upgrade-available");
const clickerButton = document.getElementById("clicker-button");

clickerButton.addEventListener("click", () => {
    score++;
    scoreDisplay.textContent = `Очки: ${score}`;
    
    if (score >= upgradeCost) {
        upgradeButton.disabled = false;
    }
});

upgradeButton.addEventListener("click", () => {
    if (score >= upgradeCost) {
        score -= upgradeCost;
        upgradeCount++;
        scoreDisplay.textContent = `Очки: ${score}`;
        upgradeAvailable.textContent = upgradeCount;

        // Увеличиваем стоимость следующего улучшения
        upgradeCost = Math.floor(upgradeCost * 1.5);
        upgradeButton.textContent = `Увеличить доход: ${upgradeCost} очков`;
        
        if (score < upgradeCost) {
            upgradeButton.disabled = true;
        }
    }
});