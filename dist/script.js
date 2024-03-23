const inputField = document.getElementById('name');
inputField.addEventListener('focus', () => {
  inputField.placeholder = ''; // Hide placeholder when focused
});
inputField.addEventListener('blur', () => {
  if (inputField.value === '') {
    inputField.placeholder = 'First Name'; // Show placeholder when blurred if no value is entered
  }
});
