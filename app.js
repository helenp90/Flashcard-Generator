// inquirer, and import constructor files.

const inquirer = require("inquirer");
const library = require("./cardLibrary.json");
const BasicCard = require("./BasicCard.js");
const ClozeCard = require("./ClozeCard.js");


// including file system
var fs = require("fs");


//try for error catching
try {
    //flag setting
    var isBasic = true;

    //User entry. They determine whether the card is basic or closed.
    if (process.argv[2].toLowerCase() === "basic") {

        // reading BasicCard json object in library
        library = "BasicCard";
    } else if (process.argv[2].toLowerCase() === "cloze") {

        // reading ClozeCard json object in library
        library = "ClozeCard";
        isBasic = false;
    } else {
        console.log("ERROR: You have to type either 'Basic' or 'Cloze' after 'node main.js'....")
        return
    }

    //invoke readFile function
    //utf8 decoding
    fs.readFile(library, "utf8", function (error, data) {
        if (error) throw error


        //for each index in array split between question and answer
        //user Constructor to build flashcard objects
        dataArr.forEach(element => {

            //split flashcard string by question/answer
            let flashcardArr = library

            console.log("FLASHCARD\n=========================================");

            //instantiating appropriate object based on user entry
            if (isBasic) {
                var basicCard = new basicCardObj(flashcardArr[0], flashcardArr[1].trim());
                basicCard.showFrontBack(); //print flashcard
            } else {
                var clozeCard = new clozeCardObj(flashcardArr[0], flashcardArr[1].trim());
                clozeCard.showCard(); //print flashcard
            }

            console.log("=========================================\n");
        });
    })
    //catch all error 
} catch (err) {
    console.log("Looks like something went wrong.\nMake sure you type 'Basic' or 'Cloze' after 'node main.js'...")
}