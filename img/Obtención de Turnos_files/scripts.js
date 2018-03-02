function MM_swapImgRestore() { //v3.0
    var i, x, a = document.MM_sr;
    for (i = 0; a && i < a.length && (x = a[i]) && x.oSrc; i++)
        x.src = x.oSrc;
}

function MM_preloadImages() { //v3.0
    var d = document;
    if (d.images) {
        if (!d.MM_p)
            d.MM_p = new Array();
        var i, j = d.MM_p.length, a = MM_preloadImages.arguments;
        for (i = 0; i < a.length; i++)
            if (a[i].indexOf("#") != 0) {
                d.MM_p[j] = new Image;
                d.MM_p[j++].src = a[i];
            }
    }
}

function MM_findObj(n, d) { //v4.01
    var p, i, x;
    if (!d)
        d = document;
    if ((p = n.indexOf("?")) > 0 && parent.frames.length) {
        d = parent.frames[n.substring(p + 1)].document;
        n = n.substring(0, p);
    }
    if (!(x = d[n]) && d.all)
        x = d.all[n];
    for (i = 0; !x && i < d.forms.length; i++)
        x = d.forms[i][n];
    for (i = 0; !x && d.layers && i < d.layers.length; i++)
        x = MM_findObj(n, d.layers[i].document);
    if (!x && d.getElementById)
        x = d.getElementById(n);
    return x;
}

function MM_swapImage() { //v3.0
    var i, j = 0, x, a = MM_swapImage.arguments;
    document.MM_sr = new Array;
    for (i = 0; i < (a.length - 2); i += 3)
        if ((x = MM_findObj(a[i])) != null) {
            document.MM_sr[j++] = x;
            if (!x.oSrc)
                x.oSrc = x.src;
            x.src = a[i + 2];
        }
}

function MM_jumpMenu(targ, selObj, restore) { //v3.0
    eval(targ + ".location='" + selObj.options[selObj.selectedIndex].value + "'");
    if (restore)
        selObj.selectedIndex = 0;
}


/**
 * Verifica caracteres numericos
 *
 */
function chkNumeric(strString)
{
    //  check for valid numeric strings 	
    var strValidChars = "0123456789";
    var strChar;
    var blnResult = true;

    if (strString.length == 0)
        return false;

    //  test strString consists of valid characters listed
    //  above
    for (i = 0; i < strString.length && blnResult == true; i++)
    {
        strChar = strString.charAt(i);
        if (strValidChars.indexOf(strChar) == -1)
        {
            blnResult = false;
        }
    }
    return blnResult;
}


/**
 * Verifica caracteres validos de una fecha
 *
 */
function validoCaracteres(strString)
{
    //  check for valid numeric strings  
    var strValidChars = "0123456789/-";
    var strChar;
    var blnResult = true;

    //  test strString consists of valid characters listed
    //  above
    for (i = 0; i < strString.length && blnResult == true; i++)
    {
        strChar = strString.charAt(i);
        if (strValidChars.indexOf(strChar) != -1)
        {
            blnResult = false;
        }
    }
    return blnResult;
}


/**
 * Realiza la validacion de una fecha
 *
 */
function chkDate_(field)
{
    var checkstr = "0123456789";
    var DateField = field;
    var Datevalue = "";
    var DateTemp = "";
    var seperator = ".";
    var day;
    var month;
    var year;
    var leap = 0;
    var err = 0;
    var err_msg = '';
    var i;


    if (DateField.length == 0)
    {
        return true;
    }

    if (validoCaracteres(DateField) == true)
    {
        DateValue = DateField.value;
        /* Delete all chars except 0..9 */
        for (i = 0; i < DateValue.length; i++) {
            if (checkstr.indexOf(DateValue.substr(i, 1)) >= 0) {
                DateTemp = DateTemp + DateValue.substr(i, 1);
            }
        }
        DateValue = DateTemp;
        /* Always change date to 8 digits - string*/
        if (DateValue.length == 6) {
//            alert (DateValue);
//            DateValueTemp = DateValue.substr(0,4);
//            alert (DateValueTemp);
//            DateValueTemp = + '20' + DateValue.substr(4,2); 
//            DateValue = DateValueTemp;
            err = 666;
        }
        if (DateValue.length != 8) {
            err = 19;
        }
        /* year is wrong if year = 0000 */
        year = DateValue.substr(4, 4);
        if (year == 0) {
            err = 20;
        }
        /* Validation of month*/
        month = DateValue.substr(2, 2);
        if ((month < 1) || (month > 12)) {
            err = 21;
        }
        /* Validation of day*/
        day = DateValue.substr(0, 2);
        if (day < 1) {
            err = 22;
        }
        /* Validation leap-year / february / day */
        if ((year % 4 == 0) || (year % 100 == 0) || (year % 400 == 0)) {
            leap = 1;
        }
        if ((month == 2) && (leap == 1) && (day > 29)) {
            err = 23;
        }
        if ((month == 2) && (leap != 1) && (day > 28)) {
            err = 24;
        }
        /* Validation of other months */
        if ((day > 31) && ((month == "01") || (month == "03") || (month == "05") || (month == "07") || (month == "08") || (month == "10") || (month == "12"))) {
            err = 25;
        }
        if ((day > 30) && ((month == "04") || (month == "06") || (month == "09") || (month == "11"))) {
            err = 26;
        }
        if (year < 1800 || year > 2100)
        {
            err = 27;
        }
        //* if 00 ist entered, no error, deleting the entry */
        //if ((day == 0) && (month == 0) && (year == 00)) {
        //    err = 1; day = ""; month = ""; year = ""; seperator = "";
        //}
        /* if no error, write the completed date to Input-Field (e.g. 13.12.2001) */
        if (err == 0) {
            return true;
        }
        /* Error-message if err != 0 */
        else {
            //err_msg = 'Fecha Incorrecta';
            //alert (err_msg);
            return false;
        }
    }
    else
    {
        return false;
    }

}

/**
 * Realiza la validaciones de la ventana inicial
 *
 */
function verificarVentanaInicial(idioma)
{
    if (document.getElementById('pais') &&
            document.getElementById('dia') &&
            document.getElementById('mes') &&
            document.getElementById('anio') &&
            document.getElementById('documento') &&
            document.getElementById('codigo_seguridad'))
    {
        var pais = document.getElementById('pais');
        var dia = document.getElementById('dia');
        var mes = document.getElementById('mes');
        var anio = document.getElementById('anio');
        var documento = document.getElementById('documento');
        var codigo_seguridad = document.getElementById('codigo_seguridad');
        var fecha_nacimiento = document.getElementById('fecha_nacimiento');

        switch (idioma)
        {
            case 'ES':
                var mensaje = 'Por favor complete todos los campos';
                var mensaje2 = 'Por favor seleccione una opcion';
                var mensajeFormatoFecha = 'Atencion, El formato de la fecha debe ser dd/mm/aaaa';
                var mensajeFormatoNumero = 'El documento debe ser el nro sin puntos. ej 23434453';
                var mensajeIngresarLetras = 'Apellidos/Nombres, debe ingresar solo letras';
                var mensajeIngresarNumeros = 'Debe ingresar solo numeros';
                break;

            case 'PO':
                var mensaje = 'Por Favor complete todos os campos';
                var mensaje2 = 'Por Favor selecione uma opcion';
                var mensajeFormatoFecha = 'Atenca, o formato da data deve ser dd/mm/aaaa';
                var mensajeFormatoNumero = 'A carteira deve ser o numero sem puntos';
                var mensajeIngresarLetras = 'Sobrenomes/Nomes, deve ingressar somente letras';
                var mensajeIngresarNumeros = 'Deve ingressar somente numeros';
                break;

            case 'EN':
                var mensaje = 'Please fill in all the gaps';
                var mensaje2 = 'Please select an option';
                var mensajeFormatoFecha = 'Atention, date format must be dd/mm/yyyy';
                var mensajeFormatoNumero = 'Document must be a number without special characters';
                var mensajeIngresarLetras = 'Last names/Names, you must enter only letters';
                var mensajeIngresarNumeros = 'You must enter only numbers';
                break;
        }

        if (pais.value.length == 0)
        {
            alert(mensaje);
            pais.focus();
            return false;
        }
        if (pais.value == '0')
        {
            alert(mensaje2);
            pais.focus();
            return false;
        }

        if (dia.value.length == 0)
        {
            alert(mensaje);
            dia.focus();
            return false;
        }

        if (dia.value != "" &&
                !chkNumeric(dia.value))
        {
            alert(mensajeIngresarNumeros);
            dia.value = "";
            dia.focus();
            return false;
        }

        if (mes.value.length == 0)
        {
            alert(mensaje);
            mes.focus();
            return false;
        }

        if (mes.value != "" &&
                !chkNumeric(mes.value))
        {
            alert(mensajeIngresarNumeros);
            mes.value = "";
            mes.focus();
            return false;
        }

        if (anio.value.length == 0)
        {
            alert(mensaje);
            anio.focus();
            return false;
        }

        if (anio.value != "" &&
                !chkNumeric(anio.value))
        {
            alert(mensajeIngresarNumeros);
            anio.value = "";
            anio.focus();
            return false;
        }

        fecha_nacimiento.value = dia.value + '-' + mes.value + '-' + anio.value;
        if (chkDate_(fecha_nacimiento) == false)
        {
            alert(mensajeFormatoFecha);
            dia.focus();
            return false;
        }

        if (documento.value.length == 0)
        {
            alert(mensaje);
            documento.focus();
            return false;
        }

        if (codigo_seguridad.value.length == 0)
        {
            alert(mensaje);
            codigo_seguridad.focus();
            return false;
        }

    }
    else
    {
        alert('Verificar validaciones');
        return false;
    }
    return true;
}



/**
 * Realiza la validaciones de la ventana intermedia
 *
 */
function verificarVentanaIntermedia(idioma)
{
    if (document.getElementById('banda_horaria'))
    {
        return true;

        /*var banda_horaria = document.getElementById('banda_horaria');
         
         switch (idioma)
         {
         case 'ES':
         var mensaje  = 'Por favor complete todos los campos';
         var mensaje2 = 'Por favor seleccione una opcion';
         break;
         
         case 'PO':
         var mensaje  = 'Por Favor complete todos os campos';
         var mensaje2 = 'Por Favor selecione uma opci㯧;	
         break;
         
         case 'EN':
         var mensaje  = 'Please fill in all the gaps';
         var mensaje2 = 'Please select an option';
         break;
         }
         
         if (banda_horaria.value.length == 0 )
         {
         alert(mensaje);
         banda_horaria.focus();
         return false;
         }	
         if (banda_horaria.value == '0')
         {
         alert(mensaje2);
         banda_horaria.focus();
         return false;
         }*/
    }
    else
    {
        alert('Verificar validaciones');
        return false;
    }
    return true;
}





/**
 * Realiza la validaciones de la ventana de tramites de dni
 *
 */
function verificarVentanaDni()
{

    var tipo_tramite_dni = document.getElementById('tipo_tramite_dni');

    if (tipo_tramite_dni.value.length == 0)
    {
        alert('Debe seleccionar el tipo de tr᭩te');
        tipo_tramite_dni.focus();
        return false;
    }

    return true;
}



/**
 * Realiza la validaciones de la ventana de tramites de dni
 *
 */
function verificarResidencia()
{

    var rad_residencia_si = document.getElementById('id_rad_residencia_si');
    var rad_residencia_no = document.getElementById('id_rad_residencia_no');

    if ((rad_residencia_si.checked === false) && (rad_residencia_no.checked === false))
    {
        alert('Debe seleccionar una respuesta');
        return false;
    }

    return true;
}





/**
 * Realiza la validaciones de la confirmacion del turno
 *
 */
function verificarConfirmarTurno(idioma, verificar_reincidencia)
{
    if (
            document.getElementById('fecha_disponible') &&
            document.getElementById('apellidos') &&
            document.getElementById('nombres') &&
            document.getElementById('pais') &&
            document.getElementById('dia') &&
            document.getElementById('mes') &&
            document.getElementById('anio') &&
            document.getElementById('documento') &&
            document.getElementById('tel') &&
            document.getElementById('sexo'))
    {
        var banda_horaria = document.getElementById('banda_horaria');
        var fecha_disponible = document.getElementById('fecha_disponible');
        var apellidos = document.getElementById('apellidos');
        var nombres = document.getElementById('nombres');
        var pais = document.getElementById('pais');
        var dia = document.getElementById('dia');
        var mes = document.getElementById('mes');
        var anio = document.getElementById('anio');
        var documento = document.getElementById('documento');
        var sexo = document.form1.sexo;
        var telefono = document.getElementById('tel');

        switch (idioma)
        {
            case 'ES':
                var mensaje = 'Por favor complete todos los campos';
                var mensaje2 = 'Por favor seleccione una opcion';
                var mensajeFormatoFecha = 'Atencion, El formato de la fecha debe ser dd/mm/aaaa';
                var mensajeFormatoNumero = 'El documento debe ser el nro sin puntos. ej 23434453';
                var mensajeIngresarLetras = 'Apellidos/Nombres, debe ingresar solo letras';
                var mensajeIngresarNumeros = 'Debe ingresar solo numeros';
                break;

            case 'PO':
                var mensaje = 'Por Favor complete todos os campos';
                var mensaje2 = 'Por Favor selecione uma opcion';
                var mensajeFormatoFecha = 'Atencao, o formato da data deve ser dd/mm/aaaa';
                var mensajeFormatoNumero = 'A carteira deve ser o numero sem puntos';
                var mensajeIngresarLetras = 'Sobrenomes/Nomes, deve ingressar somente letras';
                var mensajeIngresarNumeros = 'Deve ingressar somente numeros';
                break;

            case 'EN':
                var mensaje = 'Please fill in all the gaps';
                var mensaje2 = 'Please select an option';
                var mensajeFormatoFecha = 'Atention, date format must be dd/mm/yyyy';
                var mensajeFormatoNumero = 'Document must be a number without special characters';
                var mensajeIngresarLetras = 'Last names/Names, you must enter only letters';
                var mensajeIngresarNumeros = 'You must enter only numbers';
                break;
        }

        if (fecha_disponible.value.length == 0)
        {
            alert(mensaje);
            fecha_disponible.focus();
            return false;
        }

        if (fecha_disponible.value == '0')
        {
            alert(mensaje2);
            fecha_disponible.focus();
            return false;
        }

        if (apellidos.value.length == 0)
        {
            alert(mensaje);
            apellidos.focus();
            return false;
        }

        if (nombres.value.length == 0)
        {
            alert(mensaje);
            nombres.focus();
            return false;
        }

        if (telefono.value.length == 0)
        {
            alert(mensaje);
            telefono.focus();
            return false;
        }

        if (pais.value.length == 0)
        {
            alert(mensaje);
            pais.focus();
            return false;
        }
        if (pais.value == '0')
        {
            alert(mensaje2);
            pais.focus();
            return false;
        }

        if (dia.value.length == 0)
        {
            alert(mensaje);
            dia.focus();
            return false;
        }

        if (dia.value != "" &&
                !chkNumeric(dia.value))
        {
            alert(mensajeIngresarNumeros);
            dia.value = "";
            dia.focus();
            return false;
        }

        if (mes.value.length == 0)
        {
            alert(mensaje);
            mes.focus();
            return false;
        }

        if (mes.value != "" &&
                !chkNumeric(mes.value))
        {
            alert(mensajeIngresarNumeros);
            mes.value = "";
            mes.focus();
            return false;
        }

        if (anio.value.length == 0)
        {
            alert(mensaje);
            anio.focus();
            return false;
        }

        if (anio.value != "" &&
                !chkNumeric(anio.value))
        {
            alert(mensajeIngresarNumeros);
            anio.value = "";
            anio.focus();
            return false;
        }

        if (documento.value.length == 0)
        {
            alert(mensaje);
            documento.focus();
            return false;
        }

        if (sexo[0].checked === false &&
                sexo[1].checked === false)
        {
            alert(mensaje);
            return false;
        }
        /*
         if (verificar_reincidencia == 'si')
         {
         var tipo_antecedente = document.getElementById('rad_tipo_antecedente');
         var antecedente_r    = document.getElementById('rad_tipo_antecedente_r');
         var antecedente_p    = document.getElementById('rad_tipo_antecedente_p');
         var nro_reincidencia = document.getElementById('nro_reincidencia');
         var letra_policia    = document.getElementById('letra_policia');
         var nro_policia      = document.getElementById('nro_policia');
         
         if (antecedente_r.checked)
         {			   			   
         if (nro_reincidencia.value.length == 0)
         {
         alert('Debe ingresar el Tramite de Reincidencia');
         nro_reincidencia.focus();
         return false;
         }
         
         }// cierra if antecedente r
         else  
         {
         if (antecedente_p.checked)
         {				   
         if (letra_policia.value.length == 0)
         {
         alert('Debe ingresar la letra del Control de Policia');
         letra_policia.focus();
         return false;
         }
         
         if (nro_policia.value.length == 0)
         {
         alert('Debe ingresar el numero del Control de Policia');
         nro_policia.focus();
         return false;
         }
         }// cierra if antecedente p
         }		  
         
         }// cierra if verificar reincidencia
         */
    }
    else
    {
        alert('Verificar validaciones');
        return false;
    }
    return validarMail(document.getElementById('mail').value);
}

function validarMail(mail) {

    var filter = /^[A-Za-z][A-Za-z0-9_.\-]*@[A-Za-z0-9_\-]+\.[A-Za-z0-9_.]+[A-za-z]$/;

    if (filter.test(mail))
    {
        if (confirm("Confirma la operacion ?")) {
            return true;
        }
        return false;
    }
    else
    {
        alert("Por favor, ingrese una direcci�n de mail correcta.");
        return false;
    }
}


/**
 * Realiza la validaciones de la ventana donde controla la jurisdiccion
 *
 */
function verificarVentanaJurisdiccion(idioma)
{
    switch (idioma)
    {
        case 'ES':
            var mensaje2 = 'Por favor seleccione una opcion';
            break;

        case 'PO':
            var mensaje2 = 'Por Favor selecione uma opcion';
            break;

        case 'EN':
            var mensaje2 = 'Please select an option';
            break;
    }

    if (document.getElementById('provincia') &&
            document.getElementById('municipio') &&
            document.getElementById('tipo_turno'))
    {
        var provincia = document.getElementById('provincia');
        var municipio = document.getElementById('municipio');
        var tipo_turno = document.getElementById('tipo_turno');

        if (tipo_turno.value.length == 0)
        {
            alert(mensaje2);
            tipo_turno.focus();
            return false;
        }
        if (tipo_turno.value == '0')
        {
            alert(mensaje2);
            tipo_turno.focus();
            return false;
        }
        if (provincia.value.length == 0)
        {
            alert(mensaje2);
            provincia.focus();
            return false;
        }
        if (provincia.value == '0')
        {
            alert(mensaje2);
            provincia.focus();
            return false;
        }
        if (municipio.value.length == 0)
        {
            alert(mensaje2);
            municipio.focus();
            return false;
        }
        if (municipio.value == '0')
        {
            alert(mensaje2);
            municipio.focus();
            return false;
        }
    }
    else
    {
        alert(mensaje2);
        return false;
    }

    // TURNO 13 = "DNI y/o PASAPORTE ESPECIAL EXTRANJEROS"
    if (tipo_turno.value == 13) {
        muni = municipio.value.split('#');
        if (muni[1] == 1) {
            if ($('.img_ba_confirm').val() == 1) {
                return true;
            } else {
                $('.img_ba_confirm').val(1);
                $('.show_form').hide();
                $('.show_img_ba').show();
                return false;
            }
        } else {
            return true;
        }
    } else {
        return true;
    }

}



/**
 * Muestra u oculta los datos de antecedentes penales
 *
 */
function mostrarAntecedente(tipo)
{
    switch (tipo)
    {
        case 'R':
            document.getElementById('antecedente_reincidencia').style.display = "";
            document.getElementById('antecedente_policia').style.display = "none";

            document.getElementById('letra_policia').value = "";
            document.getElementById('nro_policia').value = "";
            break;

        case 'P':
            document.getElementById('antecedente_reincidencia').style.display = "none";
            document.getElementById('antecedente_policia').style.display = "";

            document.getElementById('nro_reincidencia').value = "";
            break;

    }


}
/*
 *Valida la pantalla 1 del consulta express
 */
function validar_pantalla_1(formulario) {

    //alert('validar_pantalla_1');return false;
    ///*
    if (!document.getElementById("id_nro_orden").value.length) {
        alert('Debe ingresar un numero de orden');
        return false;
    }
    if (!document.getElementById("id_dia_nacimiento").value.length) {
        alert('Debe ingresar un dia de nacimiento');
        return false;
    }
    if (!document.getElementById("id_mes_nacimiento").value.length) {
        alert('Debe ingresar un mes de nacimiento');
        return false;
    }
    if (!document.getElementById("id_anio_nacimiento").value.length) {
        alert('Debe ingresar un anio de nacimiento');
        return false;
    }

    //var fecha = document.getElementById("id_dia_nacimiento").value + "/" + document.getElementById("id_mes_nacimiento").value + "/" + document.getElementById("id_anio_nacimiento").value;

    //if( fecha ){ //_chkdate//alert('La fecha ingresada no es valida');//return false;}
    //*/

    return true;
}
