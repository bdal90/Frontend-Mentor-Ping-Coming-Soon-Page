const formEl = document.querySelector('.form');
const inputEl = document.querySelector('.input');
const btnEl = document.querySelector('.btn');
const errorMsgEl = document.querySelector('.error-msg');

formEl.addEventListener('submit', (e) => {
    e.preventDefault();

    validateInput();
});

const isEmail = (input) => {
    const email = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return email.test(input);
}

const setError = (input, message) => {
    const inputField = input.parentElement;
    inputField.classList.remove('show-success');
    inputField.classList.add('show-error');
    const error = inputField.querySelector('.error-msg');
    error.textContent = message;
};

const setSuccess = (input) => {
    const inputField = input.parentElement;
    inputField.classList.remove('show-error');
    inputField.classList.add('show-success');
    const error = inputField.querySelector('.error-msg');
    error.textContent = '';
};

const validateInput = () => {
    const emailValue = inputEl.value.trim();

    if (emailValue === '' || !isEmail(emailValue)) {
        setError(inputEl, 'Please provide a valid email address')
    } else {
        setSuccess(inputEl)
    }
};