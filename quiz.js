let correctness = [];
let answers = ["option1", "option4", "option2"];
let question = ["What is the first positive number?", "What is 2 + 3?", "What is 158-1?"];
let options = [[1, 2, 3, 4], [1, 2, 3, 5], [156, 157, 158, 159]];
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
        
        if(index < question.length){
            setUp();
        }
        if (index === question.length) {
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
    questionImg.src = "imgQuestion/question" + (index + 1) + ".png";

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