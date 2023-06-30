import throttle from "lodash.throttle";
const form = document.querySelector('.feedback-form');

form.addEventListener('submit', onSubmit)
form.addEventListener('input', throttle(handlerInput, 500));

const data = JSON.parse(localStorage.getItem('feedback-form-state')) ?? {};

    form.elements.message.value = data.message || "";
    form.elements.email.value = data.email || "";

function handlerInput(evt) {
    data[evt.target.name] = evt.target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(data));
};

function onSubmit(evt) {
    evt.preventDefault();
    console.log(JSON.parse(localStorage.getItem('feedback-form-state')) || {});
    localStorage.removeItem('feedback-form-state');
    form.reset();
}