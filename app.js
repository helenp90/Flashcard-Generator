const inquirer = require("inquirer");
const library = require("./cardLibrary.json");
const BasicCard = require("./BasicCard.js");
const ClozeCard = require("./ClozeCard.js");

function openMenu() {
    inquirer.prompt([{
            type: "list",
            message: "What type of flashcard do you want to create?",
            choices: ["Basic Card", "Cloze Card"],
            name: "cardType"
        }]).then(function (appData) {
                var cardType = appData.cardType;
                console.log(cardType);



            }