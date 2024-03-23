
const STORAGE_KEY = 'feedback-form-state';

const formEl = document.querySelector('.feedback-form');
const textarea = formEl.querySelector('textarea');
const email = formEl.querySelector('input[type="email"]');
const btnEl = formEl.querySelector('button');

formEl.addEventListener('input', onTextareaInput);
formEl.addEventListener('submit', onSubmit);

populateTextarea();

let formData = {};
function onTextareaInput(event) {
  formData = {
    email: email.value.trim(),
    message: textarea.value.trim(),
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateTextarea() {
    const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (savedData) {
        email.value = savedData.email || '';
        textarea.value = savedData.message || '';
    }
}

function onSubmit(event) {
  event.preventDefault();

  if (email.value.trim() !== '' && textarea.value.trim() !== '') {
    const submittedData = {
      email: email.value.trim(),
      message: textarea.value.trim(),
    };
    console.log(submittedData);

    localStorage.removeItem(STORAGE_KEY);
    email.value = '';
    textarea.value = '';
  } else {
    console.log('Обидва елементи форми мають бути заповнені');
  }
}