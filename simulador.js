

function calcular(){
    let ingresos=parseFloat(document.getElementById("txtIngresos").value);
    let egresos=parseFloat(document.getElementById("txtEgresos").value);

    let disponible =calcularDisponible(ingresos,egresos)

    //const elemento = document.getElementById("spnDisponible");
    //elemento.innerText=disponible;

     texto("spnDisponible",disponible);

    let capasidadDePago=calcularCapacidadDePago(disponible);
    //const elemento = document.getElementById("spnCapacidadPago");
    //elemento.innerText=capasidadDePago;
    texto("spnCapacidadPago",capasidadDePago);
}


