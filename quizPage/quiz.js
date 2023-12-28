let correctness = [];
const correctAnswers = ["A", "A", "A", "D", "D", "B", "D", "C", "D", "B"];
let options = [
    ["A", "B", "C", "D"],
    ["A", "B", "C", "D"],
    ["A", "B", "C", "D"],
    ["A", "B", "C", "D"],
    ["A", "B", "C", "D"],
    ["A", "B", "C", "D"],
    ["A", "B", "C", "D"],
    ["A", "B", "C", "D"],
    ["A", "B", "C", "D"],
    ["A", "B", "C", "D"]
];

let index = 0



/**
 * Creates a quiz page with questions and answers.
 */
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
     chyronDiv.textContent = 'Question 1';
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
    document.getElementById("quizBody").appendChild(submitButton);
}

/**
 * Retrieves the selected option from a group of radio buttons.
 * @returns {string} The value of the selected option.
 */
function getSelectedOption() {
    let chosenAnswers = [];
    for (let i = 0; i < correctAnswers.length; i++) {
        let optionElements = document.getElementsByName('question' + (i + 1));

        for (let optionNum = 0; optionNum < 4; optionNum++) {
            if (optionElements[optionNum].checked) {
                // Assuming the label text contains the letter (A, B, C, D)
                const labelElement = optionElements[optionNum].closest('label');
                const labelText = labelElement.textContent.trim();
                
                // Extract the letter from the label text
                const selectedLetter = labelText.charAt(0).toUpperCase();
                chosenAnswers.push(selectedLetter);
                break;
            }
        }
    }
    return chosenAnswers;
}

/**
 * Sets the question, question image, and answer options for the quiz.
 */
function getResults() {
    const chosenAnswers = getSelectedOption();
    for(let i = 0; i < chosenAnswers.length; i++){
        if (chosenAnswers[i] === correctAnswers[i]) {
            correctness.push(true);
        } else {
            correctness.push(false);
        }
    }
    var currentDate = new Date();
    var dateTimeString = currentDate.toLocaleString();
    console.log(correctness, chosenAnswers, correctAnswers);
    const quizResults = {
        answersCorrect: correctness,
        answersChosen: chosenAnswers,
        answerKey: correctAnswers,
        timeStamp: dateTimeString
    }

    console.log(quizResults)

    fetch('http://localhost:3000/storeQuizResults', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({quizResults }),
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
    window.alert(correctness);
    // Moves to info page after submission to send results to
    window.location.href = '../infoPage/informationPage-frontend.html';


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
    let currentQuestionIndex = Math.ceil(((window.scrollY) / window.innerHeight)*1.66);
    
    // Update the chyron content based on the current question index
    if (currentQuestionIndex === totalQuestions - 1) {
        chyronDiv.textContent = 'Submit';
    } else {
        chyronDiv.textContent = 'Question ' + (currentQuestionIndex + 1);
    }
}
