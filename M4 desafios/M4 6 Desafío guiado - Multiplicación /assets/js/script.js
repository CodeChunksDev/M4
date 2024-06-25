
// funcion validar número y mostrar resultado 
let calcular = (num) => {
    // validar numero rango 1 - 20
    if (num < 1 || num > 20) {
        console.log("número ingresado fuera del rango 1 - 20, acutalice la página");
        // corta proceso de la función
        return false;
    }

    // luego de validación, continúa
    for (let i = 0; i <= num; i++) {

        // multiplica por cada iteracion * n° ingresado
        let producto = i * num;

        // mostrar resultado en consola
        console.log(`
            ${i} * ${num} = ${producto}
        `);
    }

    // factorial
    for (let i = 1; i <= num; i++) {

        // acumulador para resultado
        let res = 1;

        for (let j = 1; j <= i; j++) {
            // calcular factorial
            res = res * j;
        }
        // mostrar factorial
        console.log("factorial de: " + i + " es: " + res);
    }

    console.log("para calcular nuevamente, actualizar página");
};

// variables
var numero = prompt("ingrese el número: ");

// llamar funcion
calcular(numero);

// console.log("número ingresado: " + numero);

