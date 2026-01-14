import 'bootstrap/dist/css/bootstrap.min.css';

const form = document.getElementById('registrationForm');
const message = document.getElementById('message');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  form.reset();

  message.classList.remove('d-none');

  setTimeout(() => {
    message.classList.add('d-none');
  }, 3000);
});