let correctness = [];
let answers = [1, 5, 157];
let question = ["What is the first positive number?", "What is 2 + 3?", "What is 158-1?"];
let options = [[1, 2, 3, 4], [1, 2, 3, 5], [156, 157, 158, 159]];

function setQuestion(index) {
    let correctOption = answers[index];

    // Collects current data from the quiz object
    let chosenAnswer = getSelectedOption();

    // Stores correctness in an array
    if (chosenAnswer === correctOption) {
        correctness.push(true);
    } else {
        correctness.push(false);
    }

    // Set question image
    let question = document.getElementById('questionImg');
    question.src = "imgQuestion/question" + (index + 1) + ".png";


    // Set answer options
    let optionElements = document.getElementsByName('option');
    for (let i = 0; i < optionElements.length; i++) {
        optionElements[i].value = options[index][i];
        optionElements[i].innerHTML = options[index][i];
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