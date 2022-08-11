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
var regExpPassword = /[aA-zZ|\d]{3,}/;
var regExpTel = /^[6|7](\d){8}$/;
var regExpDni = /^(\d){8}[aA-zZ]$/;
var regExpEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;


//Programa
function programa() {

    if (validarCampos()) {
        obtenerDatos()
        localStorange()
        limpiarForm()
    }

}

//Registrarse
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

//Validar Campos
function validarCampos() {
    var bool = true

    $('#errorPassword').text('')
    $('#errorEmail').text('');
    $('#errorDNI').text('');
    $('#errorTelf').text('');

    if (regExpPassword.test($('#password').val()) == false) {
        $('#errorPassword').text('Mínimo 4 carateres (a-z,A-Z,0-9)');
        bool = false
    }
    if (regExpEmail.test($('#email').val()) == false) {
        $('#errorEmail').text('Email obligatorio ejm: user@user.com');
        bool = false
    }
    if (regExpDni.test($('#dni').val()) == false) {
        $('#errorDNI').text('DNI obligatorio ejm: 42524597K');
        bool = false
    }
    if (regExpTel.test($('#telf').val()) == false) {
        $('#errorTelf').text('Telf obligatorio ejm: 661778995');
        bool = false
    }
    if (!bool) {
        swal("Error", "Por favor complete los campos", "error");
        return false
    }
    else {
        swal("Usuario Creado", "¡Ya puedes iniciar sesión!", "success");
        return true
    }
}


//Llamar a la funcion register del archivo register.js
function obtenerDatos() {

    v = register()

    //Guardar variables
    userNameCookie = v[0];
    surnameCookie = v[1]
    passwordCookie = v[2];
    emailCookie = v[3];
    fechaNacimientoCookie = v[4];
    dniCookie = v[5];
    telfCookie = v[6];

}

//Crear localStorange
function localStorange() {

    localStorage.setItem("user", userNameCookie)
    localStorage.setItem("surname", surnameCookie)
    localStorage.setItem("password", passwordCookie)
    localStorage.setItem("email", emailCookie)
    localStorage.setItem("fechaNacimiento", fechaNacimientoCookie)
    localStorage.setItem("dni", dniCookie)
    localStorage.setItem("telf", telfCookie)

}

//Validar el form con el localStorage
function validarLogin() {

    if ($('#password').val() == localStorage.getItem("password") &&
        $('#email').val() == localStorage.getItem("email")) {

        location.href = './Indice.html'

    } else {
        swal("Error", "Credenciales incorretas", "error");
    }
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

function limpiarForm() {

    $('#userName').val("")
    $('#surname').val("")
    $('#password').val("")
    $('#email').val("")
    $('#fechaNacimiento').val("")
    $('#dni').val("")
    $('#telf').val("")

}

