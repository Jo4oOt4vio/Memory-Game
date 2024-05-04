const input = document.querySelector('.login__input');
const button = document.querySelector('.login__button');
const form = document.querySelector('.login-form');

const validateInput = ({ target }) => { 
  if (target.value.length >= 3) { /*Nome maior ou igual a 3 letras, e botão funcional*/
    button.removeAttribute('disabled');
    return;
  }

  button.setAttribute('disabled', '');
}

const handleSubmit = (event) => {
  event.preventDefault(); /*bloqueia o evento padrão do formulario*/

  localStorage.setItem('player', input.value); /*salva as informaçoes no local storage*/
  window.location = 'pages/game.html';
}

input.addEventListener('input', validateInput);
form.addEventListener('submit', handleSubmit);