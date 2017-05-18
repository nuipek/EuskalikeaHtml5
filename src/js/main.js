
import $ from 'jquery';
// export for others scripts to use
window.$ = $;
window.jQuery = window.$;
/*
import $ from "jquery";
window.jQuery = window.$ = $;
*/
//var $ = require('jquery');
//require("bootstrap");

//$.noConflict();

var producto1 = {};
producto1.nombre = "Mesa camilla";
producto1.referencia="1-12345";
producto1.precio=25.5;
producto1.descripcion="Mesa camilla enorme";
producto1.color = "blanco";

var producto2={};
producto2.nombre = "Cama";
producto2.referencia="1-12346";
producto2.precio=364.5;
producto2.descripcion="cama doble";
producto2.color = "rojo";
var producto3 ={};
producto3.nombre = "Silla";
producto3.referencia="1-12347";
producto3.precio=87.5;
producto3.descripcion="Silla Fashion";
producto3.color = "verde";

var productos = [producto1,producto2,producto3];

$.noConflict();
$(document).ready(function($) {
    cargarArray();
    $("#contactForm").on("submit",validarFormularioContacto);
    

    $("#listadoProductos div a:last-child").click(borrarMarcados);

/* En esta seccion declaramos las funciones que utilizar jQuery */
    $("#borrartodos").click(function(event){

        if($(this).is(":checked")){
            $("tbody input[type=checkbox]").prop("checked",true);
            //
            //checked = checked
            //selected= selected
            //
        }else{
            $("tbody input[type=checkbox]").prop("checked",false);
        }

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
    function cargarArray(){
        if(productos.length > 0){
            for(var i=0;i<productos.length;i++){
                var producto = productos[i];
                // añadir el html correspondiente a la pagina
                // --><tr><td>------</td><td>----</td>.....</tr>
                console.log(productos[i]);
                var texto = "<tr><td><input type='checkbox' value='" + i + "'></td><td>" + producto.nombre + "</td><td>" + producto.referencia + "</td><td>" + producto.descripcion + "</td><td>" + producto.color + "</td><td>" + producto.precio + "</td></tr>";
                $("#tablaProductos tbody").append(texto);
            }

            $("#tablaProductos tfoot td").html("<span class='text-error'>Total Productos:" + parseInt(productos.length,10) + "</span>");
        }
        else
        {
            $("#tablaProductos").remove();
            $("#listadoProductos").text("No hay registros en el Array");
        }
    }



    function borrarMarcados(){
        // recoger los checkboxes marcados
        $("#tablaProductos tbody input[type=checkbox]:checked").each(function(){
         var codigo = $(this).val();
         // Llamar al REST
         $(this).parents("tr").remove();
         });
        $("#tablaProductos  tfoot td span").remove();
        $("#tablaProductos tfoot td").html("<span class='text-error'>Total Productos:"+ $("tbody tr").length,10+"</span>");
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