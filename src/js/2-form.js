const feedback_form_state = "feedback-msg";

const form = document.querySelector(".feedback-form");
const textarea = form.querySelector("textarea");
const input = form.querySelector("input");

form.addEventListener("submit", formSubmit);

textarea.addEventListener("input", onTextareaInput);
populateTextarea();

input.addEventListener("input", onInput);

function formSubmit(event) {
    event.preventDefault();
    console.log("send");

    event.currentTarget.reset();
    localStorage.removeItem(feedback_form_state);
}

function onTextareaInput(event) {
    const formData = {
        email: input.value,
        message: event.target.value
    };
    localStorage.setItem(feedback_form_state, JSON.stringify(formData));
}

function onInput(event) {
    const formData = {
        email: event.target.value,
        message: textarea.value
    };
    localStorage.setItem(feedback_form_state, JSON.stringify(formData));
}

function populateTextarea() {
    const savedData = JSON.parse(localStorage.getItem(feedback_form_state));
    if (savedData) {
        input.value = savedData.email || '';
        textarea.value = savedData.message || '';
    }
}
