
if (localStorage.getItem("idioma") === null) // Si no hay cookie de idioma, la creamos por primera vez
    localStorage.setItem("idioma", "es");

function idioma() {

    // ACCEDEMOS AL ARCHIVO SERVER-SIDE CON AJAX
    var file = null;
    var xmlhttp = new XMLHttpRequest();
    if (localStorage.getItem("idioma") === "es") {
        xmlhttp.open("GET", 'json/ES.json', false); // Cargamos el Json en nuestro File
    }
    else if (localStorage.getItem("idioma") === 'en') {
        xmlhttp.open("GET", 'json/EN.json', false);
    }
    xmlhttp.send();
    if (xmlhttp.status == 200) {
        file = xmlhttp.responseText;
    }

    const obj = JSON.parse(file); // Parseamos el modelo Json a un Objeto manipulable


    // HEADER - GLOBAL
    try {
        document.getElementById('tituloPagina').innerHTML = obj.header.title;
        document.getElementById('textoRegister').innerHTML = obj.header.register;
        document.getElementById('textoLogin').innerHTML = obj.header.login;
    } catch (error) { }
    try {
        document.getElementById('textoLogoff').innerHTML = obj.header.logoff;
    } catch (error) { }

    // FOOTER - GLOBAL
    try {
        document.getElementById('textoFooter').innerHTML = obj.footer;
    } catch (error) { }

    /************************** INDICE PAGE **************************/
    try {
        document.getElementById('textoUserLogin').innerHTML = obj.indicePage.user;
        document.getElementById('textoIndice').innerHTML = obj.indicePage.title;
        // ACORDEON
        document.getElementById('textoMTitle1').innerHTML = obj.indicePage.modulo1Title;
        document.getElementById('textoModulo1').innerHTML = obj.indicePage.modulo1Content;
        document.getElementById('textoMTitle2').innerHTML = obj.indicePage.modulo2Title;
        document.getElementById('textoModulo2').innerHTML = obj.indicePage.modulo2Content;
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
        document.getElementById('textoLTitle').innerHTML = obj.loginPage.title;
        document.getElementById('textoLEmail').innerHTML = obj.loginPage.email;
        document.getElementById('textoLPass').innerHTML = obj.loginPage.pass;
        document.getElementById('textoLBtnSubmit').innerHTML = obj.loginPage.btnSubmit;
    } catch (error) { }
}