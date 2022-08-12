function cambiarNombre() {

}


function detectarCookieSesion() {
    if (localStorage.getItem("cookieSesion") === "true") {
        $('#userLogin').text('Hola ' + localStorage.getItem("user"))
    }
    else
        location.href = './registro.html'
}


/*PRUEBAS*/
function mostrar() {
    alert(localStorage.getItem("user"))
    alert(localStorage.getItem("surname"))
    alert(localStorage.getItem("password"))
    alert(localStorage.getItem("email"))
    alert(localStorage.getItem("fechaNacimiento"))
    alert(localStorage.getItem("dni"))
    alert(localStorage.getItem("telf"))



}



