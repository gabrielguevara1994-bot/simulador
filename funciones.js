function calcularDisponible(ingresos,egresos){
let disponible=ingresos-egresos
if (disponible<0){
    disponible=0;
}
return disponible;
}

function calcularCapacidadDePago(montoDisponible){
    let capasidadDePago=montoDisponible/2;
    return capasidadDePago;
}

function texto(id,variable){
    let text1 = document.getElementById(id);
    text1.innerText=variable.toFixed(2);

}


function calcularInteresSimple(monto, tasa, plazo) {
   
    let tasaDecimal = tasa / 100;
    let interes = plazo * monto * tasaDecimal;
    
    return interes;
}

function calcular() {
    
    let monto = parseInt(document.getElementById("txtMonto").value) || 0;
    let plazo = parseInt(document.getElementById("txtPlazo").value) || 0;
    let tasa = parseInt(document.getElementById("txtTasa").value) || 0;
 
    let interesCalculado = calcularInteresSimple(monto, tasa, plazo);

    texto("spnInteresPagar", interesCalculado);
}

function calcularTotalPagar(monto, interes) {
    return monto + interes + 100; 
}