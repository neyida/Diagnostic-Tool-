// Purpose: To store the user's diagnostic information in the database
function submitForm(event) {
  event.preventDefault();
  var currentDate = new Date();
  var dateTimeString = currentDate.toLocaleString();
  // Retrieve form data 
  const formData = {
      firstName: document.getElementById('firstName').value,
      lastName: document.getElementById('lastName').value,
      studentEmail: document.getElementById('studentEmail').value,
      parentEmail: document.getElementById('parentEmail').value,
      phoneNumber: document.getElementById('phoneNumber').value,
      gradeLevel: document.getElementById('gradeLevel').value,
      satPsat: document.getElementById('satPsat').value,
      time: dateTimeString
  };

  // Thank you message
  const thankYouMessage = `Thank you, ${formData.firstName} ${formData.lastName}, for submitting your diagnostic! 
  
  Our team is diligently analyzing the information you provided. Expect to hear from us soon with personalized results tailored to your diagnostic.
  
  In the meantime, you will be redirected to our homepage shortly to explore more information about our programs and offerings.`;

  fetch('http://localhost:3000/storeUserInputs', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ formData: formData }),
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
  // Display thank you message
  document.getElementById('messageForm').style.display = 'none';
  const thankYouElement = document.getElementById('thankYouMessage');
  thankYouElement.textContent = thankYouMessage;
  thankYouElement.style.display = 'block';

  //redirect to a different page after 12 seconds 
  /*setTimeout(() => {
      window.location.href = 'https://peaceofpilearning.com/';
  }, 12000);*/
}
