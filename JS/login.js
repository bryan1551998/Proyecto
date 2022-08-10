var userName;
var surname;
var password;
var email;
var fechaNacimiento;
var dni;
var telf;


//Llamar a la funcion register del archivo register.js
function obtenerDatos() {

    $.getScript('./register.js',
        v = register()
    );

    //Guardar variables
    userName = v[0];
    surname = v[1]
    password = v[2];
    email = v[3];
    fechaNacimiento = v[4];
    dni = v[5];
    telf = v[6];

    crearSesion()

}

//Crear localStorange
function crearSesion() {

    localStorage.setItem("user", userName)
    localStorage.setItem("surname", surname)
    localStorage.setItem("password", password)
    localStorage.setItem("email", email)
    localStorage.setItem("fechaNacimiento", fechaNacimiento)
    localStorage.setItem("dni", dni)
    localStorage.setItem("telf", telf)




}

//Elimina localStorage
function cerrarSesion() {

    localStorage.removeItem("user")
    localStorage.removeItem("surname")
    localStorage.removeItem("password")
    localStorage.removeItem("email")
    localStorage.removeItem("fechaNacimiento")
    localStorage.removeItem("dni")
    localStorage.removeItem("telf")

    location.href = './login.html'
}

//Validar el form con el localStorage
function validarLogin() {

    if ($('#password').val() == localStorage.getItem("password") &&
        $('#email').val() == localStorage.getItem("email")) {
        alert('Credenciales correctas')

        location.href = './indice.html'


    } else {
        alert('Error de sesion!!!')
    }

}

function cambiarNombre() {
    $('#userLogin').text('Hola ' + localStorage.getItem("user"))
}



document.cookie = "nombre=oeschger";
document.cookie = "comida_preferida=tripa";
function alertCookie() {
    alert(document.cookie); // visualizar: nombre=oeschger;comida favorita=tripa

}








/**/
function mostrar() {
    alert(localStorage.getItem("user"))
    alert(localStorage.getItem("surname"))
    alert(localStorage.getItem("password"))
    alert(localStorage.getItem("email"))
    alert(localStorage.getItem("fechaNacimiento"))
    alert(localStorage.getItem("dni"))
    alert(localStorage.getItem("telf"))



}



