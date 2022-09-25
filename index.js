//primero, llamamos cada elemento por su ID
const form = document.getElementById('form');
const usuario = document.getElementById('usuario');
const email = document.getElementById('email');
const contrasena = document.getElementById('contrasena');
const contrasena2 = document.getElementById('contrasena2');

//Se hace un event listener, para prevenir el submit default del boton
form.addEventListener('submit', e=>{
    e.preventDefault();

    validateInputs();
});

//se despliega un error, el cual recibe un atributo html y despliega un error generico
const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

//en el caso de que no salga error, crearemos un metodo de success, basicamente es lo mismo que el anterior, solo que 
//no despliega ningun mensaje, por ello tiene un text vacio, y remueve el error, pero añade el success
const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

//validamos que el mail tenga los caracteres requeridos en un mail, esta es una expresion generica
const isValidEmail = email =>{
 const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
 return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const usuarioValue = usuario.value.trim();//se usa trim para eliminar los espacios vacios
    const emailValue = email.value.trim();
    const contrasenaValue = contrasena.value.trim();
    const contrasena2Value = contrasena2.value.trim();

    //validacion del usuario, si el usuario esta vacio, llamamos al metodo set error, si tiene algo, llamamos al metodo setsuccess
    if(usuarioValue === ''){
        setError(usuario, 'el nombre de usuario es obligatorio')
    }else{
        setSuccess(usuario);
    }

    if(emailValue === ''){
        setError(email, 'el email es obligatorio')
    }else if(!isValidEmail(emailValue)){
        setError(email, 'el mail esta malo');
    }else{
        setSuccess(email);
    }

    if(contrasenaValue === ''){
        setError(contrasena, 'la contraseña es obligatoria')
    }else if(contrasenaValue.length < 8 ){
        setError(contrasena, 'La contraseña debe tener al menos 8 caracteres');
    }else{
        setSuccess(contrasena)
    }

    if(contrasena2Value === ''){
        setError(contrasena2, 'confirme la contraseña')
    }else if(contrasena2Value !== contrasenaValue){
        setError(contrasena2, 'la contraseña no coincide');
    }else{
        setSuccess(contrasena2)
    }

};