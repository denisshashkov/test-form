import IMask from 'imask';
import { sendRequest } from './sendFormData';

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const message = document.getElementById('message');
const formControl = document.querySelector('.form__input-control');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  validateInputs();

  if (formControl.classList.contains('error')) {
    return;
  } else {
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    sendRequest(data, form);
  }
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = message;
  inputControl.classList.add('error');
  inputControl.classList.remove('success');
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');
  errorDisplay.innerText = '';

  inputControl.classList.remove('error');
};

const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const validateInputs = () => {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const phoneValue = phone.value.trim();
  const messageValue = message.value.trim();

  if (usernameValue === '') {
    setError(username, 'Укажите ваше имя');
  } else {
    setSuccess(username);
  }

  if (emailValue === '') {
    setError(email, 'Укажите ваш email');
  } else if (!isValidEmail(emailValue)) {
    setError(email, 'Укажите валидный email');
  } else {
    setSuccess(email);
  }

  if (phoneValue === '') {
    setError(phone, 'Укажите ваш телефон');
  } else {
    setSuccess(phone);
  }

  if (messageValue === '') {
    setError(message, 'Напишите ваше сообщение');
  } else {
    setSuccess(message);
  }
};

//МАСКА ТЕЛЕФОНА
const phoneMask = new IMask(phone, {
  mask: '+{375}(29)000-00-00',
});
