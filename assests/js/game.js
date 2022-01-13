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
};

fight();