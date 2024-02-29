// Función para calcular factorial
const calcularFactorial = (num) => {
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }
    return factorial;
}

//1. Preguntar al usuario por el número y asegurarnos que sea un número
const numeroUser = parseInt(prompt("Ingrese un número del 1 al 20"))

// 2. Validar el rango del 1 y 20
if (numeroUser >= 1 && numeroUser <= 20) {
    console.log("Todo es correcto")

    // 3. Realizar los calculos de la tabla
    for (let i = 1; i <= numeroUser; i++) {
        console.log(`${i} x ${numeroUser} = ${i * numeroUser}`)
    }

    // 4. Pintar el factorial
    for (let i = 1; i <= numeroUser; i++) {
        console.log(`Factorial de ${i} es ${calcularFactorial(i).toLocaleString()}`)
    }

} else {
    console.log("No es correcto")
}