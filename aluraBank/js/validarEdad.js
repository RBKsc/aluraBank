export default function esMayorEdad (campo){
    let fechaNacimiento = new Date (campo.value);
    //console.log (validarEdad(fechaNacimiento));
    if (!validarEdad(fechaNacimiento)){
        campo.setCustomValidity("Debes ser mayor de edad")
    }
}

function validarEdad (fecha){
    const fechaActual= new Date ();
    const fechaMas18 = new Date (fecha.getUTCFullYear()+18, fecha.getUTCMonth(), fecha.getUTCDate());
   
    return fechaActual >= fechaMas18;
}