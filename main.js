{
    let form = document.querySelector('#myForm');
    // ...
  
    // otro bloque de código
    {
      let otherForm = document.querySelector('#otherForm'); // Cambiar el nombre de la variable
      // ...
    }
  }
  
   
  
const otherform = document.getElementById('quote-form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const message = document.getElementById('message');

   
form.addEventListener('submit', (e) => {
  e.preventDefault();
  sendQuote();
});

function sendQuote() {
  const formData = new FormData();
  formData.append('name', name.value);
  formData.append('email', email.value);
  formData.append('phone', phone.value);
  formData.append('message', message.value);
  
  // Aquí puedes agregar código para enviar los datos a un servidor o mostrar una confirmación de envío al usuario.
  
  form.reset();
}
    

  

    
  
const form = document.getElementById('complaint-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const complaintInput = document.getElementById('complaint');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  if (validateForm()) {
    // Enviar el formulario
    console.log('Formulario válido. Enviando...');
  } else {
    // Mostrar mensaje de error
    console.log('Formulario inválido. Por favor, revisa los campos marcados.');
  }
});

function validateForm() {
  let valid = true;
  
  if (!nameInput.checkValidity()) {
    nameInput.classList.add('invalid');
    valid = false;
  } else {
    nameInput.classList.remove('invalid');
  }
  
  if (!emailInput.checkValidity()) {
    emailInput.classList.add('invalid');
    valid = false;
  } else {
    emailInput.classList.remove('invalid');
  }
  
  if (!phoneInput.checkValidity()) {
    phoneInput.classList.add('invalid');
    valid = false;
  } else {
    phoneInput.classList.remove('invalid');
  }
  
  if (!complaintInput.checkValidity()) {
    complaintInput.classList.add('invalid');
    valid = false;
  } else {
    complaintInput.classList.remove('invalid');
  }
  
  return valid;
}
`
  document.querySelector('#dolar').addEventListener('click', function(){
    obtenerDatos();
  })
  function obtenerDatos(){
    let url ='https://mindicador.cl/api/dolar' ;
    const api = new XMLHttpRequest();
    api.open('GET', url,true);
    api.send();
    api.onreadystatechange =function(){
        if(this.status == 200 && this.readyState == 4){
            let datos = JSON.parse(this.responseText);
            console.log(datos.serie);
            let resultado = document.querySelector('#resultado');
            resultado.innerHTML = " ";
            for(let item of datos.serie){
                resultado.innerHTML += `<li>$(item.fecha)</li>`;
            }
        }
    }

    
  }