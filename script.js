// console.log("Hello World!!!") 
// console.log('Hello World!!!');


// prompt('Ingrese cualquier cosa')

/* Variables */

// var nombre = 'Jaime Zapata'
// console.log(nombre)
// var nombre = prompt('Ingrese el nombre de alguien: ')
// console.log(nombre)

/*  */

// var numeroUno = parseInt(prompt('Ingrese un numero: '))
// var numeroDos = parseInt(prompt('Ingrese un numero: '))
// console.log(numeroUno + numeroDos)

// console.log('2' + 2 + '2')
// console.log((2 + 2) + '2')
// console.log((2 + 2) - '2')
// console.log('2' + '2' - '2')

/* Tipos de datos */

// var variable = 23
// console.log(typeof (variable))
// var variable = '23'
// console.log(typeof (variable))
// var variable = true
// console.log(typeof (variable))
// var variable
// console.log(typeof (variable))
// var variable = null
// console.log(typeof (variable))


/* Condicionales */
// if (5 > 5) {
//     console.log('Esto es un un condicional simple')
// } else if (5 < 5) {
//     console.log('Este es el condicional anidado')
// } else {
//     console.log('Esto es un condicional compuesto')
// }
// let opcion = prompt('Seleccione la opción: 1 , 2, 3, 4')
// switch (opcion) {
//     case '1':
//         console.log('Esta es la opción 1')
//         break
//     case 2:
//         console.log('Esta es la opción 2')
//         break
//     case 3:
//         console.log('Esta es la opción 3')
//         break
//     case 4:
//         console.log('Esta es la opción 4')
//         break
//     default:
//         console.log('No existe el caso')
//         break
// }

// let edad = 18
// let resultado = edad >= 18 ? true : false
// console.log(resultado)

// for (let index = 0; index < 5; index++) {
//     console.log('Esta es la vuelta: ' + index)
// }

// var numero = prompt('Ingrese el numero de la tabla de multiplicar: ')
// for (let index = 0; index <= 10; index++) {
//     console.log(numero + ' * ' + index + ' = ' + (numero * index))
// }

// var sumaSalario = 0
// for (var index = 1; index <= 5; index++) {
//     var salario = Number(prompt('Ingrese su salario: '))
//     sumaSalario += salario
// }
// console.log('El promedio salarial es: ' + (sumaSalario / (index-1)))

// var index = 1
// var sumaSalario = 0
// while (index <= 5) {
//     var salario = Number(prompt('Ingrese su salario: '))
//     sumaSalario += salario
//     index++
// }
// console.log('El promedio salarial es: ' + (sumaSalario / (index - 1)))


// var index = 1
// var contador = 1
// var sumaSalario = 0
// while (index == 1) {
//     var salario = Number(prompt('Ingrese su salario: '))
//     sumaSalario += salario
//     var opcion = Number(prompt('Desea ingresar otro salario? \n1 = Si\n2 = No'))
//     contador++
//     if (opcion == 2) {
//         index = 2
//     }
// }
// console.log('El promedio salarial es: ' + (sumaSalario / (contador - 1)))


// var index = 7
// var sumaSalario = 0
// do {
//     var salario = Number(prompt('Ingrese su salario: '))
//     sumaSalario += salario
//     index++
// } while (index <= 5)
// console.log('El promedio salarial es: ' + (sumaSalario / (index - 1)))

let nombre = 'Jaime Zapata'
let edad = 33
if (edad >= 18) {
    let salario = 900000
}
console.log(nombre + ' Tiene un salario de ' + salario)