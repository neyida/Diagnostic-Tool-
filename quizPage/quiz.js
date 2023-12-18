let correctness = [];
let correctAnswers = ["option1", "option1", "option4", "option1", "option4", "option2", "option4", "option3", "option4", "option1"];
let chosenAnswers = [];
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
function getResults() {
    
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
        
        if(index < answers.length){
            setUp();
        }
        if (index === answers.length) {
            let result = document.getElementById('result');
            result.textContent = "You got " + correctness.filter(Boolean).length + " out of " + correctness.length + " correct!";
                
        }
        window.location.href = 'informationPage-frontend.html';

}

/**
 * Retrieves the selected option from a group of radio buttons.
 * @returns {string} The value of the selected option.
 */
function getSelectedOption() {
    fo
    let optionElements = document.getElementsByName('options' + (index + 1));
    let selectedOption;
    for (let i = 0; i < optionElements.length; i++) {
        if (optionElements[i].checked) {
            selectedOption = optionElements[i].value;
            break;
        }
    }

    return selectedOption;
}

function outputCSV(filepath){
    
    let csvContent = "data:text/csv;charset=utf-8,";
    
    rows.forEach(function(rowArray) {
        let row = rowArray.join(",");
        csvContent += row + "\r\n";
    });
}
function createQuizPage() {
    // create greater div for border
    let aestheticDiv = document.createElement('div');
    aestheticDiv.classList.add('aesthetic');
    // Create quizPage div
    let quizPageDiv = document.createElement('div');
    quizPageDiv.classList.add('quizPage');
    aestheticDiv.appendChild(quizPageDiv)
    // Create quizQuestions div
    let quizQuestionsDiv = document.createElement('div');
    quizQuestionsDiv.classList.add('quizQuestions');
    quizQuestionsDiv.id = 'question';
    quizPageDiv.appendChild(quizQuestionsDiv);

    // Create questionImg element
    let questionImgElement = document.createElement('img');
    questionImgElement.id = 'questionImg';
    questionImgElement.src = './imgQuestion/question-' + (index + 1) +'-Diag.png';
    questionImgElement.alt = 'Practice Question';
    quizQuestionsDiv.appendChild(questionImgElement);

    // Create quizAnswers div
    let quizAnswersDiv = document.createElement('div');
    quizAnswersDiv.classList.add('quizAnswers');
    quizAnswersDiv.id = 'options' + (index + 1);
    quizPageDiv.appendChild(quizAnswersDiv);

    // Create py div
    let pyDiv = document.createElement('div');
    pyDiv.classList.add('py');
    quizAnswersDiv.appendChild(pyDiv);

    // Create radio options
    for (let i = 0; i < 4; i++) {
        let labelElement = document.createElement('label');
        let inputElement = document.createElement('input');
        inputElement.type = 'radio';
        inputElement.classList.add('option-input', 'radio');
        inputElement.name = 'example';
        inputElement.checked = true;
        labelElement.appendChild(inputElement);

        let spanElement = document.createElement('span');
        spanElement.id = 'option' + (i + 1);
        spanElement.textContent = options[index][i]
        labelElement.appendChild(spanElement);

        pyDiv.appendChild(labelElement);
    }



    // Append quizPage div to the DOM
    document.body.appendChild(aestheticDiv);
    index++;

}
function createSubmitButton(){
    // Create submitButton button
    let submitButton = document.createElement('button');
    submitButton.classList.add('submitButton');
    submitButton.id = 'next';
    submitButton.textContent = 'Submit';
    submitButton.onclick = getResults;
    document.body.appendChild(submitButton);
}