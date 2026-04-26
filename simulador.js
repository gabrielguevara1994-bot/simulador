function calcular() {
    // Leer valores
    let ingresos = parseFloat(document.getElementById("txtIngresos").value) || 0;
    let egresos = parseFloat(document.getElementById("txtEgresos").value) || 0;
    let monto = parseFloat(document.getElementById("txtMonto").value) || 0;
    let plazo = parseFloat(document.getElementById("txtPlazo").value) || 0;
    let tasa = parseFloat(document.getElementById("txtTasaInteres").value) || 0;

    // Procesar
    let disponible = calcularDisponible(ingresos, egresos);
    let capacidad = calcularCapacidadDePago(disponible);
    let interes = calcularInteresSimple(monto, tasa, plazo);
    let total = calcularTotalPagar(monto, interes);
    let cuota = calcularCuotaMensual(total, plazo);

    // Mostrar resultados
    texto("spnDisponible", disponible);
    texto("spnCapacidadPago", capacidad);
    texto("spnInteresPagar", interes);
    texto("lblTotalValor", total);
    texto("lblCuotaValor", cuota);

    // Veredicto
    let mensaje = document.getElementById("lblMensaje");
    if (mensaje) {
        if (aprobarCredito(capacidad, cuota) && cuota > 0) {
            mensaje.innerText = "CREDITO APROBADO";
            mensaje.style.color = "#10b981";
        } else {
            mensaje.innerText = "CREDITO RECHAZADO";
            mensaje.style.color = "#ff0055";
        }
    }
}

