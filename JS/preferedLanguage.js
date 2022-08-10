
// ACCEDEMOS AL ARCHIVO SERVER-SIDE CON AJAX
var file = null;
var xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", 'json/ES.json', false); // Cargamos el Json en nuestro File
xmlhttp.send();
if (xmlhttp.status == 200) {
    file = xmlhttp.responseText;
}

const obj = JSON.parse(file); // Parseamos el modelo Json a un Objeto manipulable

// HEADER - GLOBAL
document.getElementById('home').innerHTML = obj.header.home;
document.getElementById('register').innerHTML = obj.header.register;
document.getElementById('login').innerHTML = obj.header.login;
document.getElementById('logoff').innerHTML = obj.header.logoff;

// FOOTER - GLOBAL
document.getElementById('home').innerHTML = obj.header.home;

// ACORDEON
document.getElementById('home').innerHTML = obj.indicePage.modulo1Title;
document.getElementById('home').innerHTML = obj.indicePage.modulo1Title;
document.getElementById('home').innerHTML = obj.indicePage.modulo1Title;
document.getElementById('home').innerHTML = obj.indicePage.modulo1Title;

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
