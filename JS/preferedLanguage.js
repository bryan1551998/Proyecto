
// ACCEDEMOS AL ARCHIVO SERVER-SIDE CON AJAX
var file = null;
var xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", 'json/ES.json', false); // Cargamos el Json en nuestro File
xmlhttp.send();
if (xmlhttp.status == 200) {
    file = xmlhttp.responseText;
}

const obj = JSON.parse(file); // Parseamos el modelo Json a un Objeto manipulable

// HEADER
document.getElementById('home').innerHTML = obj.header.home;
document.getElementById('home').innerHTML = obj.header.home;
document.getElementById('home').innerHTML = obj.header.home;

// ACORDEON
document.getElementById('home').innerHTML = obj.header.home;
document.getElementById('home').innerHTML = obj.header.home;
document.getElementById('home').innerHTML = obj.header.home;
document.getElementById('home').innerHTML = obj.header.home;

// CARRUSEL
document.getElementById('home').innerHTML = obj.header.home;
document.getElementById('home').innerHTML = obj.header.home;
document.getElementById('home').innerHTML = obj.header.home;

document.getElementById('home').innerHTML = obj.header.home;
document.getElementById('home').innerHTML = obj.header.home;
document.getElementById('home').innerHTML = obj.header.home;

document.getElementById('home').innerHTML = obj.header.home;
document.getElementById('home').innerHTML = obj.header.home;
document.getElementById('home').innerHTML = obj.header.home;

// FOOTER
document.getElementById('home').innerHTML = obj.header.home;