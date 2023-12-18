let correctness = [];
let answers = ["option1", "option1", "option4", "option1", "option4", "option2", "option4", "option3", "option4", "option1"];
let options = [
    ["8x^2-7x-4", "8x^2+7x-4", "8x^4-7x^2-4", "8x^4+7x^2-4"],
    ["5x^2-2x+3", "5x^2+2x+3", "-x^2-2x-11", "-x^2+2x-11"],
    ["x-4", "x-2", "x-1", "x+4"],
    ["(x-3)(x-2)", "(x-5)(x-1)", "(x+6)(x-1)", "(x-3)(x+2)"],
    ["$3.50", "$4.00", "$4.50", "$5.00"],
    ["5x", "1.05x", "1.005x", "0.5x"],
    ["-16", "-14", "14", "16"],
    ["-7", "-5", "3", "9"],
    ["-5", "0", "5/2", "4"],
    ["y= - ⅔ x +3", "y= -3/2x +3", "y=  ⅔ x +3", "y= - 3/2x +3"]
];
let index = 0

/**
 * Sets the question, question image, and answer options for the quiz.
 */
function setQuestion() {
    
        let correctOption = answers[index];

        // Collects current data from the quiz object
        let chosenAnswer = getSelectedOption();
        console.log(chosenAnswer);
        // Stores correctness in an array
        console.log(correctOption);
        console.log(chosenAnswer === correctOption);
        if (chosenAnswer === correctOption) {
            correctness.push(true);
        } else {
            correctness.push(false);
        }
        index+= 1;
        
        if(index < answers.length){
            setUp();
        }
        if (index === answers.length) {
            let result = document.getElementById('result');
            result.textContent = "You got " + correctness.filter(Boolean).length + " out of " + correctness.length + " correct!";
                
        }
    
}

function getSelectedOption() {
    let optionElements = document.getElementsByName('option');
    let selectedOption;

    for (let i = 0; i < optionElements.length; i++) {
        if (optionElements[i].checked) {
            selectedOption = optionElements[i].value;
            break;
        }
    }

    return selectedOption;
}
let timesRan = 0
function setUp(){
    console.log(timesRan+= 1)
    console.log(index)
    // Set question image
    let questionImg = document.getElementById('questionImg');
    questionImg.src = "./imgQuestion/question-" + (index + 1) + "-Diag.png";

    // TODO: Add code to set the question image

    // Set answer options
    for (let i = 0; i < options[0].length; i++) {
        console.log(i)
        document.getElementById('option' + (i + 1)).textContent = options[index][i];
    }
}

function outputCSV(filepath){
    
    let csvContent = "data:text/csv;charset=utf-8,";
    
    rows.forEach(function(rowArray) {
        let row = rowArray.join(",");
        csvContent += row + "\r\n";
    });
}