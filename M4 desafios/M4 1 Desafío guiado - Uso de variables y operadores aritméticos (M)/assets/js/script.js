
// calculadora
function calculos(val) {

    // rescatar datos
    let num1 = parseInt(document.getElementById("inputNum1").value);
    let num2 = parseInt(document.getElementById("inputNum2").value);
    let res;

    //realizar operación
    if (val == '+') {
        res = num1 + num2;
    } else if (val == '-') {
        res = num1 - num2;
    } else if (val == '*') {
        res = num1 * num2;
    } else if (val == '/') {
        res = num1 / num2;
    } else if (val == '%') {
        res = num1 % num2;
    }

    // mostrar resultado
    res_calculos.innerHTML = res;
};

// grados
function kelvin() {
    // rescatar datos
    let grados = parseInt(document.getElementById("grados").value);
    let conversion;
    //  grados celsius a kelvin 
    // 0 °C + 273.15 = 273.15 K
    conversion = parseFloat(grados + 273.15);

    // mostrar resultado
    res_grados.innerHTML = conversion;
}

function far() {
    // rescatar datos
    let grados = parseInt(document.getElementById("grados").value);
    let conversion;
    // grados celsius a farenheit
    // (0 °C × 9/5) + 32 = 32 °F
    conversion = parseFloat((grados * 9 / 5) + 32);

    // mostrar resultado
    res_grados.innerHTML = conversion;
}


//  Crear un programa que pida al usuario una cantidad de días y que muestre su 
// equivalente en Años, Semanas y Días
// 1 año tiene 365 días
// 1 semana tiene 7 días

function mostrar() {

    // rescatar datos
    let num = parseInt(document.getElementById("dias").value);
    // variables
    let anio = 365;
    let semana = 7;
    let dias = 1;
    let totalAnio = 0;
    let totalSemana = 0;
    let totalDias = 0;

    do {
        // realizar calculo con variables
        if (num >= anio) {
            totalAnio++;
            num = Math.floor(num - anio);

        } else if (num >= semana) {
            totalSemana++;
            num = Math.floor(num - semana);

        } else if (num >= dias) {
            totalDias++;
            num = Math.floor(num - dias);
        }

    } while (num > 0)

    // mostrar resultado
    document.getElementById("res_dias").innerHTML = (
        totalAnio + " Años  " + totalSemana + "  Semanas  " + totalDias + " Días"
    );
}

// solicite al usuario 5 números y realice los cálculos :
// La suma de todos los números.
// El promedio de los 5 números ingresados.

function sumaTotal() {
    // rescatar datos
    let num01 = parseInt(document.getElementById("inputNum01").value);
    let num02 = parseInt(document.getElementById("inputNum02").value);
    let num03 = parseInt(document.getElementById("inputNum03").value);
    let num04 = parseInt(document.getElementById("inputNum04").value);
    let num05 = parseInt(document.getElementById("inputNum05").value);
    let total;

    // realizar suma
    total = (num01 + num02 + num03 + num04 + num05);
    // mostrar resultado
    res_prom.innerHTML = total;
}

function promedio() {
    // rescatar datos
    let num01 = parseInt(document.getElementById("inputNum01").value);
    let num02 = parseInt(document.getElementById("inputNum02").value);
    let num03 = parseInt(document.getElementById("inputNum03").value);
    let num04 = parseInt(document.getElementById("inputNum04").value);
    let num05 = parseInt(document.getElementById("inputNum05").value);
    let total;

    // calcular promedio
    total = (num01 + num02 + num03 + num04 + num05) / 5;
    // mostrar resultado
    res_prom.innerHTML = total;
}