//Problema 1: Validacion de invitados en una fiesta.
let free = false;

const validarCliente = time => {
    let edad = prompt("Cual es tu edad?");
    if (edad >= 18) {
        if (time >= 2 && time < 7 && free == false) {
            alert("Podes Pasar gratis.");
        } else {
            alert("Son las: " + time + " horas. Podes pasar pero tenes que pagar la entrada");
        }
    } else {
        alert("Lo siento, eres menor de edad y no puedes pasar");
    }
}

validarCliente(23);
validarCliente(18);
validarCliente(01);
validarCliente(4);

//Problema 2: Sistema de asistencia de alumnos.
let cantidad = prompt("¿Cuantos alumnos son?");
let alumnosTotales = [];

for (i = 0; i < cantidad; i++) {
    alumnosTotales[i] = [prompt("Nombre del Alumno" + (i+1)), 0];
}

const tomarAsistencia = (nombre,p)=>{
	let presencia = prompt(nombre);
	if (presencia == "p" || presencia == "P") {
	    alumnosTotales[p][1]++;
	}
}

for (i = 0; i < 30; i++) {
	for (alumno in alumnosTotales) {
	tomarAsistencia(alumnosTotales[alumno][0],alumno);
	}
}

for (alumno in alumnosTotales) {
	let resultado = `${alumnosTotales[alumno][0]}:<br>
    ________Presentes: <b>${alumnosTotales[alumno][1]}</b> <br>
    ________Ausencias: <b>${30 - alumnosTotales[alumno][1]} </b>`;
	if (30 - alumnosTotales[alumno][1] > 18) {
	resultado+= "<b style='color:red'>REPROBADO POR INASISTENCIAS</b><br><br>";
	} else {
	resultado+= "<br><br>";
	}
	document.write(resultado);
}



//Problema 3: Calculadora simple.
const sumar = (num1,num2)=>{
	return parseInt(num1) + parseInt(num2);
}
const restar = (num1,num2)=>{
	return parseInt(num1) - parseInt(num2);
}
const dividir = (num1,num2)=>{
	return parseInt(num1) / parseInt(num2);
}
const multiplicar = (num1,num2)=>{
	return parseInt(num1) * parseInt(num2);
}

alert("¿Que operación deseas realizar?");
let operacion = prompt("1: suma,  2: resta,  3: división,  4: multiplicación");

if (operacion == 1) {
	let numero1 = prompt("primer número para sumar");
	let numero2 = prompt("segundo número para sumar");
	resultado = sumar(numero1,numero2);
	alert(`tu resultado es ${resultado}`);
}
else if (operacion == 2) {
	let numero1 = prompt("primer número para restar");
	let numero2 = prompt("segundo número para restar");
	resultado = restar(numero1,numero2)
	alert(`tu resultado es ${resultado}`);
}
else if (operacion == 3) {
	let numero1 = prompt("primer número para dividir");
	let numero2 = prompt("segundo número para dividir");
	resultado = dividir(numero1,numero2)
	alert(`tu resultado es ${resultado}`);
}
else if (operacion == 4) {
	let numero1 = prompt("primer número para multiplicar");
	let numero2 = prompt("segundo número para multiplicar");
	resultado = multiplicar(numero1,numero2)
	alert(`tu resultado es ${resultado}`);
}
else {
	alert("no se ha encontrado la operación")
}
