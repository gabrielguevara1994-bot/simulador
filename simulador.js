

function calcular() {
    let monto = parseInt(document.getElementById("txtMonto").value) || 0;
    let plazo = parseInt(document.getElementById("txtPlazo").value) || 0;
    let tasa = parseInt(document.getElementById("txtTasa").value) || 0;

    let interesGenerado = calcularInteresSimple(monto, tasa, plazo);

    let totalAPagar = calcularTotalPagar(monto, interesGenerado);

    texto("lblInteresValor", interesGenerado);
  
    texto("lblTotalValor", totalAPagar);
}


