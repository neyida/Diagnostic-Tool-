function submitForm(event) {
    event.preventDefault();
    
    // Retrieve form data 
    const formData = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        email: document.getElementById('email').value,
        parentEmail: document.getElementById('parentEmail').value,
        phoneNumber: document.getElementById('phoneNumber').value,
        gradeLevel: document.getElementById('gradeLevel').value,
        satPsat: document.getElementById('satPsat').value,
    };

    // Thanlk you message
    const thankYouMessage = `Thank you, ${formData.firstName} ${formData.lastName}, for submitting your diagnostic! We are working on analyzing your information. We should reach out to you soon with personalized results from your Diagnostic.`;

    // Display thank you message
    document.getElementById('messageForm').style.display = 'none';
    const thankYouElement = document.getElementById('thankYouMessage');
    thankYouElement.textContent = thankYouMessage;
    thankYouElement.style.display = 'block';

    //redirect to a different page after 10 seconds 
    setTimeout(() => {
        window.location.href = 'https://peaceofpilearning.com/';
    }, 10000);
}
