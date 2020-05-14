function RegresarIN() {
    window.open("index.html", "_self");
}

function RegresarSe() {
    window.open("Series.html", "_self");
}

function RegresarEn() {
    window.open("Emision.html", "_self");
}

function RegresarSuscrp() {
    window.open("suscripcion.html", "_self");
}

function RegresarOk() {
    window.open("ok.html", "_self");
}

function validarForm() {
    if ($("#nombre").val() == "") {
        alert("El campo 'Nombre' no puede estar vacio.");
        $("#nombre").focus();
        return false;
    }
    if ($("#apellidos").val() == "") {
        alert("El campo 'Apellidos' no puede estar vacio.");
        $("#apellidos").focus();
        return false;
    }
    if ($("#direccion").val() == "") {
        alert("El campo 'Direccion' no puede estar vacio.");
        $("#direccion").focus();
        return false;
    }
    if (!$("#mayor").prop('checked')) {
        alert("Tiene q ser mayor de 18 años.");
        return false;
    }
    if ($("#email").val() == "") {
        alert("El campo 'mail' no puede estar vacio.");
        $("#email").focus();
        return false;
    }
    if ($("#pass").val() == "") {
        alert("El campo 'Contraseña' no puede estar vacio.");
        $("#pass").focus();
        return false;
    }

    RegresarOk();
    return true;
}
$(document).ready(function() {
    $("#botonenviar").click(function() {
        if (validarForm()) {
            if ($("#fracaso").is(":visible")) {
                $("#fracaso").fadeOut();
            }
            $("#exito").delay(500).fadeln("slow");
        } else {
            if ($("#exito").is(":visible")) {
                $("#exito").fadeOut("fast");
            }
            $("#fracaso").delay(500).fadeln("slow");
            $("#fracaso").delay(5000).fadeOut("slow");
        }
    });
});

function yesterday() {
    window.open("yesterday.html", "_self");
}

function otome() {
    window.open("otome.html", "_self");
}

function arte() {
    window.open("arte.html", "_self");
}

function Bungou() {
    window.open("Bungou.html", "_self");
}

function Shokugeki() {
    window.open("Shokugeki.html", "_self");
}

function Kakushigoto() {
    window.open("Kakushigoto.html", "_self");
}

function Gekokujou() {
    window.open("Gekokujou.html", "_self");
}

function Tamayomi() {
    window.open("Tamayomi.html", "_self");
}