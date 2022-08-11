
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
try {
    document.getElementById('textoHome').innerHTML = obj.header.home;
    document.getElementById('textoRegister').innerHTML = obj.header.register;
    document.getElementById('textoLogin').innerHTML = obj.header.login;
    //document.getElementById('textoLogoff').innerHTML = obj.header.logoff;
} catch (error) { }

// FOOTER - GLOBAL
try {
    document.getElementById('textoFooter').innerHTML = obj.footer;
} catch (error) { }

/************************** INDICE PAGE **************************/
try {
    // ACORDEON
    document.getElementById('textoMTitle1').innerHTML = obj.indicePage.modulo1Title;
    document.getElementById('textoModulo1').innerHTML = obj.indicePage.modulo1Content;
    document.getElementById('textoMTitle2').innerHTML = obj.indicePage.modulo2Title;
    document.getElementById('textoModulo2').innerHTML = obj.indicePage.modulo2Content;

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
} catch (error) { }

/************************** REGISTER PAGE **************************/
try {
    document.getElementById('textoTitle').innerHTML = obj.registerPage.title;
    document.getElementById('textoName').innerHTML = obj.registerPage.name;
    document.getElementById('textoSurname').innerHTML = obj.registerPage.surname;
    document.getElementById('textoPass').innerHTML = obj.registerPage.pass;
    document.getElementById('textoEmail').innerHTML = obj.registerPage.email;
    document.getElementById('textoBirth').innerHTML = obj.registerPage.birth;
    document.getElementById('textoDni').innerHTML = obj.registerPage.dni;
    document.getElementById('textoTel').innerHTML = obj.registerPage.tel;
    document.getElementById('textoBtnSubmit').innerHTML = obj.registerPage.botonSubmit;
} catch (error) { }

/************************** LOGIN PAGE **************************/
try {
    document.getElementById('textoTitle').innerHTML = obj.loginPage.title;
    document.getElementById('textoEmail').innerHTML = obj.loginPage.email;
    document.getElementById('textoPass').innerHTML = obj.loginPage.pass;
    document.getElementById('textoBtnSubmit').innerHTML = obj.loginPage.btnSubmit;
} catch (error) { }
