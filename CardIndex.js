//Require the npm
var BasicCard = require('./BasicCard');
var ClozeCard = require('./ClozeCard');
var inquirer = require('inquirer');

//Initialize the loop variales
var j = 1;
var k = 1;

//Generate questions for Basic Cards
var card1 = new BasicCard("What is the capital of France?", "Paris");
var card2 = new BasicCard("What is the capital of Mexico?", "Mexico City");
var card3 = new BasicCard("What is the capital of Spain?", "Madrid");
var card4 = new BasicCard("What is the capital of England?", "London");

//Generate questions for ClozeCard
var cloze1 = new ClozeCard("Bogota is the Capital of Colombia", "Bogota");
var cloze2 = new ClozeCard("Quito is the Capital of Ecuador", "Quito");
var cloze3 = new ClozeCard("Brasilia is the Capital of Brazil", "Brasilia");
var cloze4 = new ClozeCard("Ottawa is the Capital of Canada", "Ottawa");

//Inquire the user if they want Basic Cards or Close Cards
inquirer
  .prompt([
    {
      type: "checkbox",
      message: "What kind of flashcards do you prefer?",
      choices: ["Basic Cards", "Close Cards"],
      name: "card"
    }
  ]).then(function(inquirerResponse) {

//This is the Funciton if they select Basic Cards
    if (inquirerResponse.card[0] === "Basic Cards") {  

    function flashCards() {
        if (j < 5)
        inquirer
        .prompt([
            {
            type: "input",
            message: eval("card"+ j + ".front"),
            name: "response"+ j,
            }
        ]).then(function(inquirerResponse) {
            if (eval("inquirerResponse.response"+j) === eval("card"+ j + ".back")) {  
                console.log("Correct!");   
            } else {
                console.log("Incorrect!");
            }
            j++;
            flashCards();
        }); 

        }

//This is done recursively
        flashCards();

    } else {

//It is a similar approach for the ClozeCard choice
        function closeCards() {
        if (k < 5)
        inquirer
        .prompt([
            {
            type: "input",
            message: eval("cloze"+k+".partial"),
            name: "response"+ k,
            }
        ]).then(function(inquirerResponse) {
            if (eval("inquirerResponse.response"+k) === eval("cloze"+k+".cloze")) {  
                console.log("Correct!");   
            } else {
                console.log("Incorrect!");
            }
            k++;
            closeCards();
        }); 

        }

        closeCards();
    }

});
