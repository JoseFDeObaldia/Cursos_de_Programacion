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
Conceptualmente un callback es una funcion que se pasa a otra función como un argumento y que luego se innvoca dentro de la función mayot para completar algun tipo de rutina o acción. Es decir es una función dentro de otra función.

- Una función "callback" es aquella que es pasada como argumento a otra función para que sea "llamada de nuevo" (call back) en un momento posterior.

- Una función que acepta otras funciones como argumentos es llamada función de orden-superior (High-Order), y contiene la lógica para determinar cuándo se ejecuta la función callback.

Es la combinación de estas dos la que nos permite ampliar nuestra funcionalidad.
```javascript
//Función de orden superior: Llamamos a la función por parámetros y la ejecutamos dentro de la high order function.
function funcionOrdenSuperior (funcionCallback) {
    let nombre = "juan";

    funciónCallback(nombre);
}

//ejecutamos la high order function pasandole por parámetros la funcionCallback, la cual imprime "Mi nombre es", seguido del nombre que le pasemos por parámetros.
funcionOrdenSuperior = (function funcionCallback (nombre) {
    console.log(`Mi nombre es: ${nombre}`);
});
```
Notesé que en este caso la high order function posee dentro la logica que llama a la funcionCallback y ya le asigna un parámetro para esa función. El parámetro nombre con el valor "Juan". POdriamos escribir la funcion de callback con la sintaxis de funciones flecha.

Veamos otro ejemplo de un callback para tomar datos de un arreglo.
```javascript
//Un arreglo con objetos, cada objeto simula ser un post de una aplicación.
const posts = [
    {   "userId": 36001,
        "id": 1,
        "title": "lorem ipsum" },

    {   "userId": 00546,
        "id": 2,
        "title": "lorem ipsum dolor sit" },
    
    {   "userId": 12508,
        "id": 3,
        "title": "lorem ipsum dolor sit" }
];

//high order function, le pasamos el id y el parámetro del callback. La función obtiene el objeto post correspondiente al ID y luego llama a la función callback.
function findPostById (id, callback) {
    const post = posts.find(item => item.id === id);

    callback(post);
}

//Llamamos a la high order function y le pasamos por parámetros la función callback que imprimira el objeto post, la misma está escrita como arrow function.
findPostById = (1, (post) => {
    console.log(post);
});
```
Existe un problema al trabajar con callbacks y es que al trabajar datos, por ejemplo para validarlos, se genera un codigo espagueti muy poco legible y confuso. Pensemos en que sucederia si ejecutamos callbacks dentro de callbacks.
La forma de solucionarlo es con las promesas, las cuales veremos a continuación.


## Promesas:
Son una evolucion de los callbacks y resuelven el problema de la legibilidad del código.
Las promesas son un objeto que a su vez tienen dos callbacks dentro, `resolve` y `reject`. Donde resolve representa la finalizacion de una operación asincrona y reject el fracaso de una operacion asincrona.

Su funcionamiento es simple:
- Creamos una nueva instancia de la clase "Promise", y le pasamos dos parámetro a nuesto objeto (el cual llamaremos promesa).
- 
```javascript
//creamos una variable para efectuar un condicional
var nombre = "pedro";

//creamos un objeto promise y lo guardamos en la variable promesa. La variable "promesa" es una nueva instancia de Promise.
const promesa = new Promise((resolve,reject) => {

    //si la función se cumple, se ejecuta el método resolve, que en este caso nos devuelve el valor de la variable nombre, caso contrario se ejecuta el método reject, el cual nos da un mensaje de error.
    if(nombre == "pedro") {
        resolve(nombre);
    } else {
        reject("Lo siento, el nombre no es pedro");
    }
});

//Imprimimos lo que nos devuelva el objeto promesa colocando al lado de "promesa" los métodos then() para el resolve y catch() para el reject.
console.log(promesa.then().catch());
```
Con esto podemos realizar las mismas operaciones que con los callbacks, pero sin el código anidado.

## Async y Await:
Antes de ver este nuevo tema debemos dejar en claro que con el uso de promesas y las palabras reservadas `async` y `àwait`, el código javascript comenzará a ser asíncrono. Es decir que se ejecutará la peticion de la promesa en segundo plano, pero el resto del código seguirá corriendo.
Lo anterior es útil cuando estas peticiones se realizan a la base de datos, veamos un ejemplo de uso de async y await.
```javascript
//creamos un campo de datos
const data = [
    prop1: "valor 1",
    prop2: 25,
    prop3: false
];

//Creamos una promesa que retorne el objeto datos.
const obtenerDatos = ()=> {
    return new Promise(resolve,reject) => {
        resolve(datos);
    };
}

//creamos una función asincrona que muestre el resultado con await,
const mostrarResultado = async ()=> {
    resultado = await obtenerDatos();
    console.log(resultado);
}

//Ejecutamos la funcion mostrar resultado.
mostrarResultado();
```
Notese que con el uso de await nos libramos de usar los métodos `.then()` y `.catch()`.

## Peticiones HTTP:
Una petición HTTP es una solicitud que enviamos desde nuestra página web a un servidor. El servidor luego nos dará una respuesta

## Datos estructurados JSON:
JSON significa "javascript object notacion" y es la forma que tenemos con javascript para enviar datos. La notación de archivos JSON es similar a la de un array asociativo, solo que tanto los nombres de variables como los valores de las variables estan entre comillas. Esto es debido a que los servidores tienen problemas para leer strings que no esten encerrados entre comillas.

```javascript
//Array Asociativo.
const array = {
    nombre1: "pedro",
    nombre2: "juan",
    nombre3: "lucia"
}

//Notacion JSON.
const datos = {
    "nombre1": "pedro", 
    "nombre2": "juan",
    "nombre3": "lucia"
}
```
Cuando trabajamos con archivos JSON, para poder enviarlos debemos serializarlos, es decir convertirlos en un string. Esto se hace colocando comillas al contenido del objeto. Por ejemplo:
```json
//JSON serializado.
const datos = '{
    "nombre1": "pedro", 
    "nombre2": "juan",
    "nombre3": "lucia"
}';

//JSON des-serializado.
const datos = {
    "nombre1": "pedro", 
    "nombre2": "juan",
    "nombre3": "lucia"
};
```
usando la funcion `.stringify()` serializamos el JSON, usando la función `.parse()` des-serializamos el JSON.

Algunos navegadores como internet explorer no soportan JSON por lo que para estos navegadores se utilizan funciones ``.polyfill` las cuales convierten datos JSON en funciones.

Cabe aclarar además que existen muchos polyfill para convertir distintos tipos de datos.

## AJAX:
Cuando realizamos peticiones HTTP el navegador se refrezca cada vez que el servidor nos de una respuesta.
Ajax nos permite realizar peticiones HTTP y recibir datos pero evitando que la página se refrezque, esto es lo más óptimo.

#### Objeto XMLHttpRequest:
El objeto XMLHttpRequest es un objeto que nos permite realizar peticiones a bases de datos.

Para realizar una petición a un servidor debemos:
1. realizar una nueva instancia del objeto "XMLHttpRequest".
2. A esta nueva instancia agregarle el evento "readystateChange" junto con la función a ejecutar.
3. ejecutar el método `.open` en el objeto instanciado especificando el método de petición (en este caso 'GET' y el archivo que queremos recibir.).
4. Ejecutar el método ``.send()` el cual envia la petición.
5. La función a ejecutar en el eventListener deberia tener al menos las dos validaciones básicas. Verificar que el readyState tenga un valor de tres o cuatro y validar que el codigo de status sea 200.

Los métodos HTTP son formas de enviar y recibir datos. Existen muchos métodos y cada uno se implementa de manera distinta, los más conocidos son `get` y `post`.

El objeto XMLHttpRequest posee muchos métodos, entre ellos `.open()`, `.send()`, etc.

El objeto XMLHttpRequest además posee muchos atributos, entre ellos podemos nombrar el `readyState`, que es un atributo que nos dice el estado de nuestra solicitud. Con un valor de 1 la peticion se envió correctamente, con 2 la petición se recibio en el servidor correctamente, con 3 se proceso la petición y con 4 se obtuvo una respuesta. Otro atributo es el `status`, el cual tiene muchos valores o códigos posibles. Con 200 significa que la petición se realizo correctamente y tenemos un archivo recibido, con 404 significa que no se encontró el archivo buscado en el servidor.

Veamos todo lo anterior en unas lineas de código:
```javascript
const peticion = new XMLHttpRequest();

peticion.addEventListener("readyStateChange", ()=> {
    if(peticion.readyState == 4 && peticion.status == 200) {
        console.log(peticion.response);
    } else {
        alert("Ocurrio un error en la petición");
    }
});

peticion.open("GET", "archivoQueDebemosBuscar.txt");

peticion.send();
```
La forma ejemplificada anteriormente es la más antigua y manual. Actualmente se utiliza el evento "load" para ejecutar peticiones, veamos como se implementa con este nuevo evento:
```javascript
const peticion = new XMLHttpRequest();

peticion.addEventListener("load", ()=> {
    let respuesta;

    if(peticion.status == 200) {
        respuesta = peticion.response();
    } else {
        respuesta = "Lo siento, no se encontró el recurso";
    }

    console.log(respuesta);
});

peticion.open("GET", "archivoEnElServidor.txt");

peticion.send();
```
## ActiveXObject:
El objeto XMLHttpRequest no es soportado por internet explorer, por lo que para este navegador se dispuso de un método llamado "ActiveXObject". Debido a que internet explorer no es muy usado actualmente debemos crear un condicional que verifique si estamos en este navegador.
```javascript
if (window.XMLHttpRequest) {
    peticion = new XMLHttpRequest();
} else {
    peticion = new ActiveXObject("Microsoft.XMLHTTP");
}
```
Con el código anterior decimos que si el objeto XMLHttpRequest existe en window, entonces que se cree una nueva instancia del mismo, caso contrario estariamos navegando en internet explorer y por lo tanto instanciamos el objeto ActiveXObject.
El resto de los pasos vistos para efectuar las peticiones se mantiene igual.

## typeoff():
Este es un método que nos devuelve el tipo de dato de la variable que le damos por parámetros.

## Peticiones Post:
Del mismo modo en el realizamos una petición HTTP con el método "GET", podemos hacerlo con otro método llamado "POST".
Las diferencias entre los dos métodos son, entre otras, que mientras el método get envia los datos a traves de la url y por lo tanto la cantidad de datos a enviar es limitada, con el método post los datos se envian de manera independiente y su longitud es ilimitada.

## Fetch:
Fetch es otro objeto que nos permite realizar peticiones, actualmente este objeto esta reemplazando a AJAX. Fetch trabaja con promesas y devuelve siempre una promesa encapsulada por lo que deberemos formatearla a un archivo json.

```javascript
//creamos un fetch que se guardará en la variable petición.
const peticion = fetch("https://recursos.com");

peticion
    .then(respuesta => respuesta.json());
    .then(respuesta => console.log(respuesta));

//el primer then formatea la respuesta a JSON y el segundo then la imprime.

//si deseamos formatear a texto usamos .text()
```
Notese que utilizamos metodos distintos para desencapsular archivos JSON y promesas. Con JSON usamos stringify y parse. Con promesas usamos `.json()`.

Fetch tiene el metodo HTTP get por defecto, para cambiar el método debemos pasarle por parámetros un array con configuración.
```javascript
fetch("https://recursos.com", {
    method: "POST",
    body: `{
        "nombre" : "Lucas",
        "apellido" : "dalto"
    }`,
    headers: {"Content-type" : "application/json"}
});


    .then(res =>res.json());
    .then(res => console.log(res));


//Otra forma más legible:
let headers = {
    method: "POST",
    body: `{"nombre" : "Lucas","apellido" : "dalto"}`,
    headers: {"Content-type" : "application/json"}

fetch("https://recursos.com", headers);

    .then(res =>res.json());
    .then(res => console.log(res));
```

## Axios:
Es una libreria que nos permite crear peticiones, es una tercera opción mucho más actual que AJAX y Fetch. Axios esta basada en promesas pero utiliza la tecnologia XMLHttpRequest, la gracia de esta libreria es que optimiza tanto el código que practicamente no pesa nada. Se puede encontrar el código fuente en github.

Al descargar axios se lo puede insertar en el documento con un script. Se aconseja colocar el script al inicio de todos los demás para asegurarnos que todo funcione. Ya que no podemos ejecutar funciones que todavia no fueron creadas.

Veamos en pocas lineas como usar esta libreria de forma elemental.
```javascript
//solicitando el txt por GET
axios("informacion.txt")
    .then(res => console.log(res.data));

//solicitando el txt por POST
axios.post("informacion.txt")
    .then(res => console.log(res.data));

//Enviando un objeto JSON a un servidor del sitio web
axios.post("https://reqres.in/api/users", {"nombre": "lucas", "apellido": "ramirez"})
    .then(res => console.log(res));

//tambien podemos colocar más configuracion dentro del objeto y no solo usarlo para enviar solamente informacion.
axios("https://reqres.in/api/users", {
    method: "post",
    data: {"nombre": "lucas"}
})
    .then(res => {console.log(res)});
```

## Fetch y Axios con Async y Await:
Se puede combinar fetch con axios y operaciones asincronas para de este modo aprovechar async y await, ya que en consultas grandes que consumen muchos recursos, un tiempo excesivo de espera genera un error en axios.


## Operador .this()
El operador this es una forma de llamar al objeto contexto de JavaScript en el cual se está ejecutando el código actual. Es decir hace referencia al elemento en el que se esta ejecutando.
Si this se usa en el contexto de ejecucion global (fuera de cualquier funcion u objeto), este operador se refiere al objeto global.

Ejemplos de uso de ``.this` en contextos locales o de funciones.
```javascript
//Un ejemplo
function f1(){
  return this;
}

f1() === window; // objeto global


//otro ejemplo.
var o = {
  prop: 37,
  f: function() {
    return this.prop;
  }
};

console.log(o.f()); // logs 37
```

Ejemplos de uso de `.this` en contextos globales.
```javascript
console.log(this.document === document); // true

// En los navegadores web, el objeto window también es un objeto global:
console.log(this === window); // true

this.a = 37;
console.log(window.a); // 37
```
El valor de this permanecera en el estado en el que se encuentre actualmente si se trabaja en modo estricto.

Finn de la parte mid-level, vamos Joseee!!