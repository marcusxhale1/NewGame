var playerName = window.prompt("What is your name?");
var playerHealth = 100; 
var playerAttack = 10; 
var playerMoney = 10; 

console.log(playerName, playerAttack, playerHealth);

var enemyName = window.prompt("Who is your enemy?");
var enemyHealth = 50;
var enemyAttack = 12;
console.log(enemyName, enemyHealth, enemyAttack);

var fight = function() {
    window.alert("Welcome to the game of life!");
    var promptFight = window.prompt("Would you like to fight and rise up against life or would you like to sleep through life and be a loser?");
   if (promptFight === "fight" || promptFight === "FIGHT") {
       enemyHealth = enemyHealth - playerAttack;
       console.log(
           playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
       );

       if (enemyHealth <= 0) {
           window.alert(enemyName + "is dead, but be weary, he will come back alive in a different form. A form you have never seen.");
       } else {
           window.alert(enemyName + " still has " + enemyHealth + " health left. Kill this MF before it kills you.");
       }

       playerHealth = playerHealth - enemyAttack;
       console.log(
           enemyName + "attacked " + playerName + "." + playerName + " now has " +playerHealth + "health reamining. What are you going to do? Are you going to stay down and sleep, or are you going to get back up and fight?"
       );
       if (playerHealth <= 0) {
           window.alert(playerName + "is temporarily out of commission, but they'll be back stronger than ever. We don't ever quit!");

       }
       else {
           window.alert(playerName + "still has " + enemyHealth + " health left. You need to kill this MF. Come back stratgetically, and stronger!");
       }
   }
   else if (promptFight === "Sleep" || promptFight === "SLEEP"){
       var confrimSkip = window.confirm("Are you sure you want to skip this specific life battle?");
       if(confrimSkip) {
       window.alert(playerName + "has chosen to skip this life battle!");
       playerMoney = playerMoney - 2;
       }

   } else{
       fight();
   }
};

fight();