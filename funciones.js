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
        alert("El campo 'email' no puede estar vacio.");
        $("#email").focus();
        return false;
    }
    if ($("#pass").val() == "") {
        alert("El campo 'Contraseña' no puede estar vacio.");
        $("#pass").focus();
        return false;
    }
    if ($("#Compañía").val() == "") {
        alert("El campo 'Compañía' no puede estar vacio.");
        $("#Compañía").focus();
        return false;
    }
    if ($("#Teléfono").val() == "") {
        alert("El campo 'Teléfono' no puede estar vacio.");
        $("#Teléfono").focus();
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

$(document).ready(function() {
    $("#botonenviar2").click(function() {
        if (validarForm2()) {
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
$(document).ready(function() {
    $('.zoom').hover(function() {
        $(this).addClass('transition');
    }, function() {
        $(this).removeClass('transition');
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

function Diamond() {
    window.open("Diamond.html", "_self");
}

function Phantasy() {
    window.open("Phantasy.html", "_self");
}

function Backstage() {
    window.open("Backstage.html", "_self");
}

function Pet() {
    window.open("Pet.html", "_self");
}

function Gegege() {
    window.open("Gegege.html", "_self");
}

function Boruto() {
    window.open("Boruto.html", "_self");
}

function One_Piece() {
    window.open("One_Piece.html", "_self");
}

function Ishuzoku() {
    window.open("Ishuzoku.html", "_self");
}

function Kyokou() {
    window.open("Kyokou.html", "_self");
}

function Black_Clover() {
    window.open("Black_Clover.html", "_self");
}

function Re_Zero() {
    window.open("Re_Zero.html", "_self");
}

function Hachi_nan() {
    window.open("Hachi_nan.html", "_self");
}

function Plunderer() {
    window.open("Plunderer.html", "_self");
}

function Infinite() {
    window.open("Infinite.html", "_self");
}

function Kaguya_sama() {
    window.open("Kaguya_sama.html", "_self");
}

function Shironeko() {
    window.open("Shironeko.html", "_self");
}

function Isekai() {
    window.open("Isekai.html", "_self");
}

function Ahiru() {
    window.open("Ahiru.html", "_self");
}

function Gleipnir() {
    window.open("Gleipnir.html", "_self");
}

function Dorohedoro() {
    window.open("Dorohedoro.html", "_self");
}

function validarForm2() {

    if ($("#email2").val() == "") {
        alert("El campo 'email' no puede estar vacio.");
        $("#email2").focus();
        return false;
    }
    if ($("#pass2").val() == "") {
        alert("El campo 'Contraseña' no puede estar vacio.");
        $("#pass2").focus();
        return false;
    }
    window.open("index.html", "_self");
    return true;
}

function Ghost() {
    window.open("Ghost.html", "_self");
}

function Accel() {
    window.open("Accel.html", "_self");
}

function eye() {
    window.open("eye.html", "_self");
}

function sai() {
    window.open("sai.html", "_self");
}

function Hoken() {
    window.open("Hoken.html", "_self");
}

function Buddy() {
    window.open("Buddy.html", "_self");
}

function zero() {
    window.open("zero.html", "_self");
}

function youkoso() {
    window.open("youkoso.html", "_self");
}

function akame() {
    window.open("akame.html", "_self");
}

function no_game() {
    window.open("no_game.html", "_self");
}