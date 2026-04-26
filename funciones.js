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
