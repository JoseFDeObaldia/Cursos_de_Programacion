# Curso de Javascript - Nivel Medio
Este es un curso de Javascript completo, siguiendo los contenidos del edutuber "Lucas Dalto". Esta es la segunda entrega del curso donde se busca un mid level en este lenguaje.

## Objeto Window:
Window es el objeto de Javascript en la más alta jerarquia del arbol de javascript. Hace referencia a la ventana del navegador y de el dependen otros objetos como el DOM, a través de la propiedad document.

Veamos los métodos y propiedades que este objeto contiene:
1. Metodo open(), nos permite abrir una ventana nueva, recibe como parámetro una url.
2. Método close(), nos permite cerrar la ventana actual, o mejor dicho cierra la ventana en la que fue llamado.
3. Método closed() nos indica si la ventana referenciada esta cerrada o no. Devuelve un valor booleano.
4. Método stop() detiene la carga de recursos en el contexto de navegación actual.
5. Método alert() muestra un cuadro de alerta con el contenido especificado y un botón Aceptar.
6. Método print() abre un cuadro de dialogo para imprimir el documento actual.
7. Método prompt() abre un cuadro de diálogo con un mensaje y una casilla para que el usuario ingrese un dato. Recibe un parámetro string con el mensaje a imprimir y nos devuelve un string con lo que el usuario haya escrito.
8. Método confirm() abre un cuadro de diálogo con un mensaje el cual lo pasamos por parámetros y dos botones: Aceptar y Cancelar.

```javascript
//Método open, abrimos una ventana con la URL de youtube.
window.open('https://www.youtube.com');

//Método close(), nos cierra la ventana en la que se lo llama.
let ventana = window.open('https://www.youtube.com');
ventana.close();

//Método closed(), nos informa si la ventana refenciada esta cerrada o no.
let ventana = window.open('https://www.google.com');
ventana.closed() //nos devuelve false

ventana.close();
ventana.closed(); //devuelve true

//Método stop() detiene la carga de la página.
window.stop();

//alert(), nos da alertas emergentes. Se puede colocar con o sin window.
window.alert('Hola mundo');
alert('Hola mundo');

//Print. Nos permite imprimir el documento actual.
window.print();

//Prompt, nos da una alerta emergente que contiene además un input. Devuelve el valor de input.
let valorDevuelto = prompt('Coloca el primer valor');
let valorDevuelto = window.prompt('Coloca el segundo valor');

//Confirm, nos muestra un cuadro de alerta solicitando una confirmación. Devuelve un valor booleano.
let respuesta = window.confirm('Estás seguro de salir de este sitio web?');
if (respuesta == true){
    window.close()
} else {}
```

Sigamos viendo algunos métodos y propiedades del objeto window.
9. screen() devuelve una referencia al objeto de la pantalla asociado con la ventana.
10. screenLeft() devuelve la distancia horizontal entre el borde izquierdo del navegador y el borde izquierdo de la pantalla. Posicion relativa del navegador y el borde de la pantalla del monitor. 
11. screenTop() devuelve la distancia vertical entre el borde superior del navegador y el borde superior de la pantalla. Posicion relativa del navegador y el borde de la pantalla del monitor.
12. scrollX devuelve la cantidad de pixeles que el documento se ha desplazado horizontalmente.
13. scrollY devuelve la cantidad de pixeles que el documento se ha desplazado verticalmente.
14. scroll() desplaza la ventana a un lugar particular en el documento.
15. resizeBy() cambia el tamaño de la ventana actual en una cantidad especifica.
16. resizeTo() redimensiona dinámicamente la ventana.
17. moveBy() mueve la ventana en una ubicación relativa.
18. moveTo() mueve la ventana en una ubicacion absoluta.

Estas propiedades las veremos más adelante a detalle.

## Location:
Son una serie de métodos que nos devuelven información acerca de la locación de los archivos y documentos de la página web. devuelven un valor por lo que se pueden guardar en una constante.
```javascript
//Devuelve el href (URL) de la página actual.
window.location.href();

//Devuelve el nombre del dominio del servidor web.
window.location.hostname();

//Devuelve la ruta y el nombre del archivo de la página actual.
window.location.pathname();

//Devuelve el protocolo web utilizado.
window.location.protocol();

//Carga un nuevo documento
window.location.assign();
```

## Eventos:
En la programación tradicional, las aplicaciones se ejecutan secuencialmente de principio a fin para producir sus resultados. Sin embargo, en la actualidad el modelo predominante es el de la programación basada en eventos. Los scripts y programas esperan sin realizar ninguna tarea hasta que se produzca un evento. Una vez producido, ejecutan alguna tarea asociada a la aparición de ese evento y cuando concluye, el script o programa vuelve al estado de espera

Los eventos se pueden definir como toda interacción que asignamos a nuestra página web. Por ejemplo podemos asignar un evento de click a algún boton de nuestro html y asociarlo a una lista de instrucciones.

Existen varias formas de asignar eventos, la mas antigua es utilizando "event handlers" y agregar el código javascript directamente al archivo html.
```html
<button onclick="alert('Has dado un click');">Click Aquí</button>
```
Tambien se puede agregar un evento con "event handlers" como función directamente en el archivo app.js es decir en el script. Esto no es recomendado ya que a la hora de solucionar problemas con los eventos se hace muy dificil encontrar la porción de código con el error.
```html
<button class="clickear">CLick Aquí</button>
```
```javascript
const button = document.querySelector(".clickear");

//notese el uso de la arrow function.
button.onclick ()=> {
    alert("Has dado un click");
}
```

La forma correcta de agregar eventos es utilizando "event Listeners", al agregar `addEventListener` a un componente en javascript, se dice que estamos "añadiendo una escucha" y el objeto estará a la espera de que se produzca un evento.
```javascript
const button = document.querySelector('.clickear');

//notese que las únicas funciones permitidas aquí son las tradicionales. Si deseamos añadir una arrow function debemos pasarla como parámetro.
button.addEventListener('click', saludar);

function saludar () {
    alert('hola');

    //Si luego de ejecutar ele evento deseamos eliminar la escucha, podemos agregar la siguiente linea de código.
    button.removeEventListener('click', saludar);
}
```

## Flujo de eventos:
En el caso de asignarle eventos a varios elementos anidados, es necesario establecer un flujo de eventos ya que si se activa un elemento click sobre un contenedor que esta a su vez dentro de otro contenedor. Ambos contenedores estarian a la escucha de un click dentro de ellos. Es decir se activarian ambos eventos. El flujo que se define en estas situaciones es ejecutar los eventos desde el más especifico primero al menos especifico. Veamoslo con un ejemplo.
```html
<!-- Colocamos tres elementos anidadados. -->
<div class="contenedor1">
    <div class="contenedor2">
        <button class="boton">Click aquí<button>
    </div>
</div>
```
```javascript
const contenedor1 = document.querySelector('.contenedor1');
const contenedor2 = document.querySelector('.contenedor2');
const boton = document.querySelector('.boton');

contenedor1.addEventListener('click', e() =>{
    alert('Diste un click en el contenedor 1');
});
contenedor2.addEventListener('click', e() =>{
    alert('Diste un click en el contenedor 2');
});
boton.addEventListener('click', e() =>{
    alert('Diste un click en el botón');
});
//Si clickeamos el botón se ejecutarán los tres eventos. 
//Se mostrará primero el evento del botón por ser el más especifico, luego será el contenedor 2 y por último el contenedor 1.
```
Si agregamos un tercer parámetro en el método `.addEventListener()` con el valor true, logramos que el evento asociado rompa el flujo de eventos y se ejecute primero. Luego el programa proseguira con el flujo normal.
Si colocamos dentro del evento el método `.stopPropagation()` cortamos el flujo de eventos en el evento actual, los demás eventos no se ejecutan.
```javascript
//se muestra primero el evento contenedor1 y luego se prosigue con el flujo normal.
contenedor1.addEventListener('click', e() =>{
    alert('Diste un click en el contenedor 1');
}, true);
contenedor2.addEventListener('click', e() =>{
    alert('Diste un click en el contenedor 2');
});
boton.addEventListener('click', e() =>{
    alert('Diste un click en el botón');
});
```
```javascript
//se ejecuta solamente el evento boton.
contenedor1.addEventListener('click', e() =>{
    alert('Diste un click en el contenedor 1');
});
contenedor2.addEventListener('click', e() =>{
    alert('Diste un click en el contenedor 2');
});
boton.addEventListener('click', e() =>{
    alert('Diste un click en el botón');
    e.stopPropagation();
});
```

## Lista de eventos:
Existen muchos tipos de eventos, a continuación listaremos algunos de ellos:

#### Eventos del Mouse:
1. 'click' - ocurre con un click
2. 'dblclick' - ocurre con un doble click.
3. 'mouseover' - ocurre cuando el puntero se mueve sobre un elemento o sobre uno de sus hijos.
4. 'mouseout' - ocurre cuando el puntero se mueve fuera de un elemento o de sus elementos hijos.
5. 'contextmenu' - ocurre con un click en el boton derecho de un elemento para abrir un menú contextual.
6. 'mouseleave' - ocurre cuando el puntero se mueve fuera de un elemento. Se ejecuta constantemente.

#### Eventos del Teclado:
1. 'keydown' - ocurre cuando una tecla se deja de presionar.
2. 'keypress' - ocurre cuando una tecla se presiona y se suelta en un elemento.
3. 'keyup' - ocurre despues de que los dos eventos anteriores hayan concluido consecutivamente.

#### Eventos de la interfaz.
1. 'error' - ocurre cuando sucede un error durante la carga de un archivo multimedia.
2. 'load' - ocurre cuando un objeto se ha cargado. Funciona con el window y se usa para saber cuando el sitio se cargo correctamente.
3. 'beforeunload' - ocurre antes de que el documento este a punto de descargarse.
4.  'unload' - ocurre una vez que se ha descargado una página.
5. 'resize' - ocurre cuando se cambia el tamaño de la vista del documento. Se activa cada vez que cambie la resolución.
6.  'scroll' - ocurre cuando se mueve la barra de scroll de un elemento
7. 'select' - ocurre despues de que el usuario selecciona alguún texto de `input` o `textarea`.

Veamos el evento `select` para lograr entenderlo mejor:
```html
<input type="text" class="input-prueba">
<div class="seleccionado"></div>
```
```javascript
const input = document.querySelector('.input-prueba');
const contenedor = document.querySelector('.seleccionado');

input.addEventListener("select", (e)=> {
   let start = e.target.selectionStart;
   let end = e.target.selectionStart;
   let textoCompleto = input.value;

   contenedor.innerHTML = textoCompleto.substring(start,end);
});
```


## Temporizadores:
SOn funciones que nos permiten trabajar los intervalos de tiempo, establecer delays, etcétera.
1. `setTimeOut()` esta función nos permite ejecutar una instrucción luego de un determinado tiempo. Recibe como primer atributo una función y como segundo parámetro un delay en milisegundos.
```javascript
//con una función flecha.
setTimeOut(()=>{
    document.write("Hola Mundo");
}, 5000);

//llamando a una función externa (pueder ser flecha o no).
function funcion1 () {
    document.write('Hola Mundo');
}

setTimeOut(funcion1(), 4000);
```
2. `clearTimeOut()`Para hacer que el timeout no se ejecute se puede lograr con la función clear.
```javascript
let temporizador = setTimeOut(()=>{
    document.write("Hola Mundo");
}, 5000);

temporizador.clearTimeOut();
``` 
3. `setInterval()`, es otra función temporizadora que nos permite ejecutar una función cada vez que se cumpla un intervalo de tiempo. Se ejecuta contantemente.
4. `clearInterval()`, esta es la función análoga a clearTimeOut() y nos permite eliminar un temporizador del tipo setInterval.
```javascript
let intervalo = setInterval(()=>{
    document.write("Hello World");
}, 2000);

intervalo.clearInterval();
```

Estos son los cuatro temporizadores existentes en javascript, poseen muchas utilidades pero debido a que consumen en general muchos recursos no se recomienda usarlos excesivamente.

## Contol de Flujo y Manejo de Errores:
Existen sentencias que nos permiten controlar el control del flujo en el que corre nuestro programa informático. Las mas básicas son las sentencias de bloque que se definen con un bloque de código encerrado entre llaves. Estas sentencias crean un nuevo "ámbito", tanto para las variables como para los objetos etc.

Otras sentencias son las sentencias de control if, for, while, switch, etc.

La ultima sentencia de control de flujo es la sentencia try-catch que nos permite manejar errores.

## Sentencia try-catch-finally:
Es una sentencia que nos permite manejar excepciones o errores en nuestro programa. 

En general se utiliza cuando al ejecutar nuestra app se genera un error y el programa se detiene. Para evitar esto encerramos nuestro código en una sentencia `try` y si el mismo nos arroja una excepcion, en vez de detenerse ejecutará otra porción de código encerrada en un `catch`.
Luego existe otra sentencia llamada `finally` que ejecutará una porción de código al final del programa de forma obligatoria.

Bajemos todo esto a un ejemplo:
```javascript
var estado = false;

try {
    let fecha = "8/marzo/2022";
    function imprimir() {
        console.log("Texto impreso en la consola el día: " + fecha);
    }
    imprimir();
}

catch(error) {
    alert('Lo siento ocurrio un error inesperado');
    estado = true;
}

finally {
    if (estado == false) {
        console.log("Programa finalizado con éxito");
    } else {
        console.log("Programa finalizado con errores");
    }
}
```
Luego la sentencia `throw` nos sirve para arrojar errores. El parámetro "error" en el catcha recibe estos errores.
```javascript
try {
    throw ["errorTipo1", "errorTipo2"]
} catch (error) {
    console.log("Lo siento ocurrio un:" +
    e[0] + "en el programa");
}
//Esto nos arrojara por consola: "Lo siento ocurrio un errorTipo1 en el programa."
```

## Callbacks:
Conceptualmente un callback es una funcion dentro de otra función.

```javascript
function prueba(callback) {
    callback('pedro');
}

```













