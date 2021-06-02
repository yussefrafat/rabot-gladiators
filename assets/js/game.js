// Game States
// "WIN" - Player robot has defeated all enemy-robots
//    * Fight all enemy-robots
//    * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less


var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this 
console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roberto", "Amy Android", "Robo Trumblea"]
var enemyHealth = 50;
var enemyAttack = 12;



var fight = function(enemyName) {
    while(playerHealth > 0 && enemyHealth > 0) {
    // ask player if they'd like to fight or run
    var promptFight =  window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    // if player choses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT" || promptFight === "Fight") {
    // remove enemy's health by subtracting the amout set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );

    // check enemy's health 
   // if the enemy-robot's health is zero or less, exit from the fight loop.
   if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
        playerMoney = playerMoney +20;
        break
    
    }else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }
    // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
    playerHealth = playerHealth - enemyAttack;

    // Log a resulting message to the console so we know that it worked.
    console.log(
        enemyName + " attacked " + playerName + " now has " + playerHealth + " health remaining.");

    // check players health
    if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
        break;
    } else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }


// if player pciks "skip" confirm and then stop the loop 
} if (promptFight === "skip" || promptFight === "SKIP" || promptFight === "Skip") {
    // confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    // if yes (true), leave fight 
    if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        /// subtract money from playerMoney for skipping 
        playerMoney = playerMoney - 10;
        console.log("playerMoney", playerMoney);
        break;
    }

    // if no (false), ask question again by running fight() again
    else {
        fight();
    }

}
    
    }

};
   for(var i = 0; i < enemyNames.length; i++) {
       var pickedEnemyName = enemyNames[i];
       enemyHealth = 50;
       fight(pickedEnemyName);

   }


