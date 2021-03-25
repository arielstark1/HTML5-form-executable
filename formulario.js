let form = document.querySelector('#form');
console.log(form);
form.addEventListener('submit',function(evento){
    evento.preventDefault();


    let hayError = false;
    console.log(form);
    if (form.Card.value === '') 
    {
        form.Card.classList.add('is-invalid');
        document.querySelector('#error_Card').innerHTML = "Debe Ingresar un numero";
        hayError = true;
    }
    else if (!/^[0-9\s]*$/.test(form.Card.value)) {
    
        form.Card.classList.add('is-invalid');
        document.querySelector('#error_Card').innerHTML = "Debe Ingresar un numero valido sin letras ni caracteres especiales ";
        hayError = true;
    }
    else
    {
        form.Card.classList.remove('is-invalid');
    } 


    if (form.cvc.value === '') 
    {
        form.cvc.classList.add('is-invalid');
        document.querySelector('#error_cvc').innerHTML = "Debe Ingresar un numero";
        hayError = true;
    }
    else if (!/^[0-9]*$/.test(form.cvc.value)) {
    
        form.cvc.classList.add('is-invalid');
        document.querySelector('#error_cvc').innerHTML = "Debe Ingresar un numero valido sin letras ni caracteres especiales ";
        hayError = true;
    }
    else
    {
        form.cvc.classList.remove('is-invalid');
    } 


    if (form.amount.value === '') 
    {
        form.amount.classList.add('is-invalid');
        document.querySelector('#error_amount').innerHTML = "Debe Ingresar un numero";
        hayError = true;
    }
    else if (!/^[0-9]*$/.test(form.amount.value)) {
    
        form.amount.classList.add('is-invalid');
        document.querySelector('#error_amount').innerHTML = "Debe Ingresar un numero valido sin letras ni caracteres especiales ";
        hayError = true;
    }
    else
    {
        form.amount.classList.remove('is-invalid');
    } 

        


    if (form.name.value === '') 
    {
        form.name.classList.add('is-invalid');
        document.querySelector('#error_name').innerHTML = "Debe Ingresar una palabra";
        hayError = true;
    }
    else if (!/^[a-zA-Z\s]*$/.test(form.name.value)) {
    
        form.name.classList.add('is-invalid');
        document.querySelector('#error_name').innerHTML = "Debe Ingresar una palabra sin numeros ni caracters especiales ";
        hayError = true;
    }
    else
    {
        form.name.classList.remove('is-invalid');
    } 

    if (form.lastname.value === '') 
    {
        form.lastname.classList.add('is-invalid');
        document.querySelector('#error_lastname').innerHTML = "Debe Ingresar una palabra";
        hayError = true;
    }
    else if (!/^[a-zA-Z\s]*$/.test(form.lastname.value)) {
    
        form.lastname.classList.add('is-invalid');
        document.querySelector('#error_lastname').innerHTML = "Debe Ingresar una palabra sin numeros ni caracteres especiales ";
        hayError = true;
    }
    else
    {
        form.lastname.classList.remove('is-invalid');
    } 

    
   

    if (form.city.value === '') 
    {
        form.city.classList.add('is-invalid');
        document.querySelector('#error_city').innerHTML = "Debe Ingresar una palabra";
        hayError = true;
    }
    else if (!/^[a-zA-Z\s]*$/.test(form.name.value)) {
    
        form.city.classList.add('is-invalid');
        document.querySelector('#error_city').innerHTML = "Debe Ingresar una palabra sin numeros ni caracteres especiales ";
        hayError = true;
    }
    else
    {
        form.city.classList.remove('is-invalid');
    } 

    if (form.province.value === '') 
    {
        form.province.classList.add('is-invalid');
        document.querySelector('#error_province').innerHTML = "Debe Ingresar una provincia";
        hayError = true;
    }
    else if (!/^[0-9]*$/.test(form.province.value)) {
    
        form.province.classList.add('is-invalid');
        document.querySelector('#error_province').innerHTML = "Debe Ingresar una provincia valida para su region ";
        hayError = true;
    }
    else
    {
        form.province.classList.remove('is-invalid');
    } 


    if (form.postalcode.value === '') 
    {
        form.postalcode.classList.add('is-invalid');
        document.querySelector('#error_postalcode').innerHTML = "Debe Ingresar un numero";
        hayError = true;
    }
    else if (!/^[0-9]*$/.test(form.postalcode.value)) {
    
        form.postalcode.classList.add('is-invalid');
        document.querySelector('#error_postalcode').innerHTML = "Debe Ingresar un numero valido sin letras ni caracteres especiales ";
        hayError = true;
    }
    else
    {
        form.postalcode.classList.remove('is-invalid');
    }
    
    if (form.mensaje.value === '') 
    {
        form.mensaje.classList.add('is-invalid');
        document.querySelector('#error_mensaje').innerHTML = "Debe Ingresar una palabra";
        hayError = true;
    }
    else if (!/^[a-zA-Z\s]*$/.test(form.mensaje.value)) {
    
        form.mensaje.classList.add('is-invalid');
        document.querySelector('#error_mensaje').innerHTML = "Debe Ingresar una palabra  sin numeros ni caracteres especiales ";
        hayError = true;
    }
    else
    {
        form.mensaje.classList.remove('is-invalid');
    } 



})

/* const formulario = document.getElementById('formulario');
const inputs=document.querySelectorAll( '#formulario' );



const expresiones={
  usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

form.addEventListener('submit', (evento) => {
const validarFormulario= (e) => {
    switch (e.target.name){
        case "card":

             if(e.target.value===''){
                e.target.classList.add('is-invalid');

             }
             else{


             }
        break;
        case "cvc":
            validarCampo(expresiones.cvc, e.target, 'cvc');
        break;
        case "monto":
            validarCampo(expresiones.usuario, e.target, 'monto');
        break;
        case "name":
            validarCampo(expresiones.usuario, e.target, 'name');
        break;
        case "last-name":
            validarCampo(expresiones.usuario, e.target, 'last-name');
        break;
        case "city":
            validarCampo(expresiones.usuario, e.target, 'city');
        break;
        case "state":
            validarCampo(expresiones.usuario, e.target, 'state');
        break;
        case "postal-code":
            validarCampo(expresiones.usuario, e.target, 'postal-code');
        break;
        case "mensaje":
            validarCampo(expresiones.usuario, e.target, 'mensaje');
        break;

    }

  }




inputs.forEach((input)=>{
  input.addEventListener('keyup',validarFormulario);
  input.addEventListener('blur',validarFormulario);
    console.log();
  });


formulario.addEventListener('submit',(e)=>{
  e.preventDefault();
});

const validarFormulario =() =>{
  switch(e.target.name){
    case "usuario":
      console.log('Funciona');
    break;
  }
}

} */