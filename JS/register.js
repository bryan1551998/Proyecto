var userName;
var surname;
var password;
var email;
var fechaNacimiento;
var dni;
var telf;

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


