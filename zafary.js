const user = window.document.querySelector('#user')
const clave = window.document.querySelector('#clave')
const boton = window.document.querySelector('#button');
boton.addEventListener('click', login);

function login() {
  const user = window.document.querySelector('#user');
  const clave = window.document.querySelector('#clave');
  const textValue = user.value;
  const textValue1 = clave.value;
  console.log(textValue);
  console.log(textValue1);
  user.value= '';
  clave.value='';
  user.focus();


if (textValue === 'ejemplo@gmail.com' && textValue1==='123456'){
  console.log( 'puedes ingresar al sistema');
}
else{

console.log('no puedes ingrear');
  
}
    
  }
  
  