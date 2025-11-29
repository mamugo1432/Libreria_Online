const showError = (input, message) => {
  const formField = input.parentElement;
  formField.classList.remove('success');
  formField.classList.add('error');
  const error = formField.querySelector('small');
  error.textContent = message;
};

const showSuccess = (input) => {
  const formField = input.parentElement;
  formField.classList.remove('error');
  formField.classList.add('success');
  const error = formField.querySelector('small');
  error.textContent = '';
};

const isRequired = (text) =>{
return text.trim()!="";
}

const checkUsername = (inputUsername) =>{

    let valid = false;
    if(!isRequired(inputUsername.textContent)){
        showError(inputUsername, "Username cannot be empty");
    }else{
        showSuccess(inputUsername);
        valid=true;
    }
    return valid;
}

const checkPassword = (inputPassword) =>{

    let valid = false;
    if(!isRequired(inputPassword.textContent)){
        showError(inputPassword, "Password cannot be empty");
    }else{
        showSuccess(inputPassword);
        valid=true;
    }
    return valid;
}

const debounce = (fn, delay = 500) => {
  let timeoutId;
  return (...args) => {
    // Cancelar el temporizador anterior si existe
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    // Configurar un nuevo temporizador
    timeoutId = setTimeout(() => {
      fn.apply(null, args)
    }, delay);
  };
};

form.addEventListener('input', debounce(function (e) {
  switch (e.target.id) {
    case 'username':
      checkUsername(e.target);
      break;
    case 'password':
      checkPassword(e.target);
      break;
  }}));