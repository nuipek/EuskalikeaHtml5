var producto1 = [];
producto.nombre = "Mesa camilla";
producto.referencia="1-12345";
var producto2=[];
producto3.nombre = "Cama";
producto3.referencia="1-12346";
var producto3 = [];
producto3.nombre = "Silla";
producto3.referencia="1-12347";

var productos = [producto1,producto2,producto3];

$.noConflict();
jQuery(document).ready(function($) {
    $("#contactForm").on("submit",validarFormularioContacto);




/* En esta seccion declaramos las funciones que utilizar jQuery */
    $("#borrartodos").click(function(event){

    }); // asi definimos una funcion anonima

    function validarFormularioContacto(){
        //recoger los valores de la vista
        var pdni = $("#dni").val();
        var pnombre = $("#nombre").val();
        var papellidos = $("#apellidos").val();
        var ptelefono = $("#telefono").val();

        //evaluarlos
        var dniValido=    validarDni(pdni); //en funcion de si estan bien o mal o se envia o no
        var nomValido =   validarNombre(pnombre);
        var apeValido =   validarApellido(papellidos);
        var teleValido =   validarTelefono(ptelefono);

        if(dniValido && nomValido &&  apeValido && teleValido){
            // $("#contactForm").submit();//se envia el Formulario(Consumir REST)
        }else {
            if (!dniValido){
                //mostar mensaje de error
                $("#dni").siblings("div.text-error").text("El DNI esta mal formado");
                //text y html
            }

            if (!nomValido){
                //mostar mensaje de error
                $("#nombre").siblings("div.text-error").text("El nombre tiene que tener 3 caracteres.");
                //text y html
            }
            if (!apeValido){
                //mostar mensaje de error
                $("#apellidos").siblings("div.text-error").text("Los apellidos tienen que tener 2 caracteres cada uno.");
                //text y html
            }

            if (!teleValido){
                //mostar mensaje de error
                $("#telefono").siblings("div.text-error").text("El telefono tiene que tener 9 numeros.");
                //text y html
            }
        }
        return false;
    }
});

/* Aqui van declaradas las funciones que no utilizan jQuery */

function validarDni(dni) {
    var valido =true;
    numero = parseInt(dni.substr(0,dni.length-1),10);
    letr = dni.substr(dni.length-1,1);
    numero = numero % 23;
    letra='TRWAGMYFPDXBNJZSQVHLCKET';
    letra=letra.substring(numero,numero+1);
    if (letra!=letr.toUpperCase()) {
        valido = false;
    }
    return valido;
}

function validarNombre(nombre){
    const pattern = new RegExp(/[a-zA-Z]{3,}/);
    var valido =pattern.test(nombre);
    return valido ;
}

function validarApellido(apellidos){
    const pattern = new RegExp(/[a-zA-Z]{2,}\s[a-zA-Z]{2,}/);
    var valido = pattern.test(apellidos);
    return valido ;
}

function validarTelefono(telefono){
    var valido = true;
    const pattern = new RegExp(/\d{9}/);
    if (telefono!=""){
        valido = pattern.test(telefono);
    }
    return valido;

}