let correctness = [];
let correctAnswers = ["option1", "option1", "option4", "option1", "option4", "option2", "option4", "option3", "option4", "option1"];
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
        let chosenAnswers = getSelectedOption();
        for(let i = 0; i < chosenAnswers.length; i++){
            if (chosenAnswers[i] === correctAnswers[i]) {
                correctness.push(true);
            } else {
                correctness.push(false);
            }
        }
        
        // Removes current quiz page
        window.location.href = '../infoPage/informationPage-frontend.html';

    
}

/**
 * Retrieves the selected option from a group of radio buttons.
 * @returns {string} The value of the selected option.
 */
function getSelectedOption() {
    let chosenAnswers = [];
    for (let i = 0; i < correctAnswers.length; i++) {
        let optionElements = document.getElementsByName('question' + (i + 1));
        console.log(optionElements);
        for(let optionNum = 0; optionNum < 4; optionNum++){
            if (optionElements[optionNum].checked) {
                chosenAnswers.push(optionElements[optionNum].value);
                break;
            }
        }
    }
    return chosenAnswers;
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
        inputElement.name = 'question' + (index + 1);
        //inputElement.checked = true;
        labelElement.appendChild(inputElement);

        let spanElement = document.createElement('span');
        spanElement.id = 'option' + (i + 1);
        spanElement.textContent = options[index][i]
        labelElement.appendChild(spanElement);

        pyDiv.appendChild(labelElement);
    }

     // Create chyron div
     //NEWWWWW THING 
    let chyronDiv = document.createElement('div');
    chyronDiv.classList.add('chyron');
     chyronDiv.textContent = 'Question #';
     document.body.appendChild(chyronDiv);

     window.addEventListener('scroll', function () {
        updateChyron(chyronDiv, index);
    });

    let quizBody = document.getElementById("quizBody");
    // Append quizPage div to the DOM
    quizBody.appendChild(aestheticDiv);
    // Create horizontal line break
    quizBody.appendChild(document.createElement('hr'));
    index++;
    console.log(index)
}
function createSubmitButton(){
    // Create submitButton button
    let submitButton = document.createElement('button');
    submitButton.classList.add('submitButton');
    submitButton.id = 'next';
    submitButton.textContent = 'Submit';
    submitButton.onclick = getResults;
    document.getElementsByClassName("quizBody").appendChild(submitButton);
}
/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }

function updateChyron(chyronDiv, index) {
    const totalQuestions = 10;
    // Get the current question index based on scroll position
    let currentQuestionIndex = Math.ceil(window.scrollY / window.innerHeight);
    
    // Update the chyron content based on the current question index
    if (currentQuestionIndex === totalQuestions - 1) {
        chyronDiv.textContent = 'Scroll to Submit';
    } else {
        chyronDiv.textContent = 'Question ' + (currentQuestionIndex + 1);
    }
}
