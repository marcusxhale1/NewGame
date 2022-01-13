var playerName = window.prompt("What is your name?");
var playerHealth = 100; 
var playerAttack = 10; 

console.log(playerName, playerAttack, playerHealth);

var enemyName = window.prompt("Who is your enemy?");
var enemyHealth = 50;
var enemyAttack = 12;
console.log(enemyName, enemyHealth, enemyAttack);

var fight = function() {
    window.alert("Welcome to the game of life!");
    enemyHealth = enemyHealth - playerAttack;

    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    )
    if (enemyHealth <= 0){
        window.alert(enemyName + " has died!");
    }
    else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }
    playerHealth = playerHealth - enemyAttack;

    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );
    if (playerHealth <= 0){
        window.alert(playerName + "is temporarily out of commission. He'll be back though. I promise.");
    }
    else {
        window.alert(playerName + " still has " + playerHealth + " health left. He's coming back stronger. Best believe.");
    }


};

fight();