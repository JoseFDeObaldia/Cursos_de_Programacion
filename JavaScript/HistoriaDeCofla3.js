//Problema 1: Sistema de celulares.
class celulares {
	constructor(color,peso,rdp,rdc,ram) {
		this.color = color;
		this.peso = peso;
		this.rdp = rdp;
		this.rdc = rdc;
		this.ram = ram;
		this.encendido = false;
	}
	encendido() {
		if (encendido == false) {
			alert("celular encendido");
			encendido = true;
		} else {
			alert("celular apagado");
			encendido = false;
		}
	}
	reiniciar() {
		if (this.encendido == true) {
			alert("reiniciando celular");
		} else {
			alert("el celular esta apagado");
		}
	}
	tomarFoto() {
		alert("foto tomada con una resolucion de: " + this.rdc);
	}
	tomarVideo() {
		alert("video tomado con una resolucion de: " + this.rdc);
	}
	mostrarInfo() {
		return `
		Color: <b>${this.color}</b><br>
		Peso: <b>${this.peso}</b><br>
		Resolucion de Pantalla: <b>${this.rdp}</b><br>
		Resolucion de Cámara: <b>${this.rdc}</b><br>
		Memoria RAM: <b>${this.ram}</b><br>
		`;
	}
}

const celular1 = new celulares("rojo", "160g", "5'", "full HD", "2GB");
const celular2 = new celulares("azul", "120g", "5.2'", "480p", "3GB");
const celular3 = new celulares("gris", "134g", "5.7'", "HD", "2GB");

/*celular1.encendido();
celular1.tomarFoto();
celular1.tomarVideo();
celular1.reiniciar();
celular1.encendido();
*/
document.write(celular1.mostrarInfo() + "<br>");
document.write(celular2.mostrarInfo() + "<br>");
document.write(celular3.mostrarInfo() + "<br>");