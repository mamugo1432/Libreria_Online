export const showError = (input, message) => {
  const formField = input.parentElement;
  formField.classList.remove('success');
  formField.classList.add('error');
  const error = formField.querySelector('small');
  error.textContent = message;
};

export const showSuccess = (input) => {
  const formField = input.parentElement;
  formField.classList.remove('error');
  formField.classList.add('success');
  const error = formField.querySelector('small');
  error.textContent = '';
};

export const isRequired = (text) =>{
return text.trim()!="";
}

export const checkUsername = (inputUsername) =>{

    let valid = false;
    if(!isRequired(inputUsername.value)){
        showError(inputUsername, "Username cannot be empty");
    }else{
        showSuccess(inputUsername);
        valid=true;
    }
    return valid;
}

export const checkPassword = (inputPassword) =>{

    let valid = false;
    if(!isRequired(inputPassword.value)){
        showError(inputPassword, "Password cannot be empty");
    }else{
        showSuccess(inputPassword);
        valid=true;
    }
    return valid;
}

export const debounce = (fn, delay = 500) => {
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
export const evenForm = () =>{
   const form = document.getElementById('form');
form.addEventListener('input', debounce(function (e) {
  switch (e.target.id) {
    case 'username':
      checkUsername(e.target);
      break;
    case 'password':
      checkPassword(e.target);
      break;
  }}));
  return;
}