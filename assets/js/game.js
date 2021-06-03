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
    var damage = randomNumber(playerAttack - 3, playerAttack);
    enemyHealth = Math.max(0, enemyHealth - damage);
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
    var damage = randomNumber(enemyAttack -3, enemyAttack)
    playerHealth = Math.max(0, playerHealth - damage);

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
        playerMoney = Math.max(0, playerMoney - 10);
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
 
// function to start a new game
var startGame = function() {
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;
   
   enemyHealth = randomNumber(40, 60);
   for(var i = 0; i < enemyNames.length; i++) {
       if (playerHealth > 0) {
           //let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
           window.alert("Welcome to Robot Gladiators! Round " + ( i + 1 ) )

           // pick new enemy to fight based on the index of the enemyNames array
           var pickedEnemyName = enemyNames[i];
           
           // reset enemyHealth before starting new fight
           enemyHealth = Math.floor(Math.random() * 21) + 40;

           //use debugger to pause script from running and check what's going on at that moment in the code
           // debugger;

           // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
           fight(pickedEnemyName);
        
        } else {
            window.alert("You have lost your robot in battle! Game Over");
            break;
        }
        var pickedEnemyName = enemyNames[i];
        enemyHealth = 50;
        fight(pickedEnemyName);
        // if we're not at the last enemy in the array
        if (playerHealth > 0&& i < enemyNames.length - 1) {
            // ask if player wants to use the store before next round
            var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");

            // if yes, take them to the store() function
            if (storeConfirm){
               shop();
            }
        }

    }
    // after the loops ends, player is either out of health or ennemies to fight, so run the endGame functiom
    endGame();

   };

   // function to end the entire game
   var endGame = function() {
       window.alert("The game has now ended. Let's see how you did!");
       // if player is stil alive, player wins!
       if (playerHealth > 0) {
           window.alert("Great job, you've survived the game! You now have a scrore of " + playerMoney + "." );
       }
       else {
           window.alert("You've lost your robot in battle.");
       }

       var playAgainConfirm = window.confirm("Would you like to play again?");

       if (playAgainConfirm) {
           // restart the game
           startGame();
       }
       else {
           window.alert("Thank you for playing Robot Gladiators! Come back soon");
       }

   };
   
   var shop = function(){
       // ask player what they'd like to do
       var shopOptionPrompt = window.prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
       );
       switch (shopOptionPrompt) {
          case "REFILL": // new case
          case "refill":
            if (playerMoney >= 7) {
               window.alert("Refilling player's health by 20 for 7 dollars.");
               
               //increase health and decrease money
               playerHealth = playerHealth + 20;
               playerMoney = playerMoney -7;
            }
            else {
                window.alert("You don't have enough money!");
            }

            break;
            case "UPGRADE": // new case
            case "upgrade":
                if (playerMoney >= 7) {
                window.alert("Upgrading player's attack by 6 for 7 dollars.");
                
                // increase attack and decrease money
                playerAttack = playerAttack + 6;
                playerMoney = playerMoney - 7;
                }
                else {
                    window.alert("You don't have enough money!");
                }

                break;
            case "LEAVE": // new case
            case "leave":
                window.alert("Leaving the store.");
                break;
            default:
                window.alert("You did not pick a valid option. Try again.");
                shop();
                break;
       }
   };

   // function to generate a random numeric value 
   var randomNumber = function() {
       var value = Math.floor(Math.random() * (21)) + 40;

       return value
       
   };

   //start the game when the pages loads
   startGame();