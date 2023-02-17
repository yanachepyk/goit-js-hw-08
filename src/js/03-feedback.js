import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');

const initialFormData = JSON.parse(localStorage.getItem('feedback-form-state'));

if (initialFormData) {
  Object.keys(initialFormData).forEach(key => {
    form.elements[key].value = initialFormData[key];
  });
}

const handleFormChange = function (event) {
  let formData = JSON.parse(localStorage.getItem('feedback-form-state'));

  if (formData !== null) {
    formData[event.target.name] = event.target.value;
  } else {
    formData = { [event.target.name]: event.target.value };
  }

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

const handleFormSubmit = event => {
  event.preventDefault();

  const { email, message } = event.target.elements;
  const userEmail = email.value;
  const userMessage = message.value;
  console.log({ email: userEmail, message: userMessage });
  event.target.reset();
  localStorage.removeItem('feedback-form-state');
};

form.addEventListener('input', throttle(handleFormChange, 500));

form.addEventListener('submit', handleFormSubmit);
