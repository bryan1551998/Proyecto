//Variables JQuery
var userName;
var surname;
var password;
var email;
var fechaNacimiento;
var dni;
var telf;

//Valiales cookie 
var userNameCookie;
var surnameCookie;
var passwordCookie;
var emailCookie;
var fechaNacimientoCookie;
var dniCookie;
var telfCookie;

//Variables regex
var regExpTel = /^[6|7](\d){8}$/
var regExpDni = /^(\d){8}[aA-zZ]$/
var regExpEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/


//Validar campos

function register() {

    userName = $('#userName').val();
    surname = $('#surname').val()
    password = $('#password').val();
    email = $('#email').val();
    fechaNacimiento = $('#fechaNacimiento').val();
    dni = $('#dni').val();
    telf = $('#telf').val();

    result = [userName,
        surname,
        password,
        email,
        fechaNacimiento,
        dni,
        telf]
    console.log(result)
    return result;
}


//Llamar a la funcion register del archivo register.js
function obtenerDatos() {

    alert("a")
    v = register()
    
    
    //Guardar variables
    userNameCookie = v[0];
    surnameCookie = v[1]
    passwordCookie = v[2];
    emailCookie = v[3];
    fechaNacimientoCookie = v[4];
    dniCookie = v[5];
    telfCookie = v[6];

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

        location.href = './modulos.html'


    } else {
        alert('Error de sesion!!!')
    }

}
function validarCampos() {
    var bool = true
    if (regExpEmail.test($('#email').val()) == false) {
        alert('no valid M')
        bool = false
    }
    if (regExpDni.test($('#dni').val()) == false) {
        alert('no valid D ')
        bool = false
    }
    if (regExpTel.test($('#telf').val()) == false) {
        alert('no valid N')
        bool = false
    }
    if (!bool) {
        cerrarSesion()
        return false
    }
    else {
        alert('valid')
        obtenerDatos()
        return true

    }
}