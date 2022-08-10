function cambiarNombre() {
    $('#userLogin').text('Hola ' + localStorage.getItem("user"))
}



document.cookie = "nombre=oeschger";
document.cookie = "comida_preferida=tripa";
function alertCookie() {
    alert(document.cookie); // visualizar: nombre=oeschger;comida favorita=tripa

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



