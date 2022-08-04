![Logo.png](Logo.jpeg)

# Curso de Javascript - Nivel Medio
Este es un curso de Javascript completo, en esta segunda entrega se pretende explicar como trabajar con java

---

## 1. DEFINICIONES
Las páginas web modernas interactúan con sus usuarios a través de la integración de casillas interactivas, menús desplegables o diapositivas. JavaScript entra en acción en caso de que los contenidos dinámicos de esta índole se integren en páginas HTML y ello supone dar un paso más allá de HTML y CSS, puesto que permite que se evalúen las interacciones de los usuarios y que los contenidos de las páginas web se recarguen, se actualicen o se modifiquen. Las ventajas de introducir Javascript en el código de nuestra aplicación es:


- Interacción mínima con el servidor:
Es un hecho bien conocido que si quieres optimizar el rendimiento de un sitio web, la mejor manera es reducir la comunicación con el servidor. JavaScript ayuda en este sentido al validar la información que ingresa el usuario en el lado del cliente. Solo envía solicitudes al servidor después de ejecutar las comprobaciones de validación iniciales. Como resultado, el uso de recursos y la cantidad de solicitudes al servidor se reduce significativamente.

- Interfaces más completas y fáciles de usar
Al usar JavaScript, puedes crear interfaces interactivas del lado del cliente. Por ejemplo, agregar controles deslizantes, presentaciones de diapositivas, efectos al poner el cursor sobre objetos, funciones de arrastrar y soltar, etc.

- Retroalimentación inmediata para el usuario
Al usar JavaScript, puedes asegurarte de que los usuarios obtengan una respuesta inmediata. Por ejemplo, imaginemos que un usuario ha rellenado un formulario y ha dejado un campo vacío. Sin la validación de JavaScript, tendrán que esperar a que la página se vuelva a cargar solo para darse cuenta de que dejaron un campo vacío. Sin embargo, con JavaScript, serán alertados al instante.

---

## 2. Insertar JavaScript en HTML:
Hay dos formas de incluir JavaScript en HTML y hacer que funcionen juntos. Ahora que hemos hablado sobre JavaScript y hemos visto cuáles pueden ser algunas de sus ventajas, echemos un vistazo a algunas de las formas en que podemos conectar JavaScript con HTML.




---

## 3. DOM: Document Object Model.
Las siglas DOM significan Document Object Model, o lo que es lo mismo, la estructura del documento HTML. Una página HTML está formada por múltiples etiquetas HTML anidadas una dentro de otra formando un árbol de etiquetas relacionadas entre sí, que se denomina árbol DOM (o simplemente DOM).

Cuando en desarrollo web nos referimos al DOM, nos referimos a esta estructura, que podemos modificar de forma dinámica desde Javascript, añadiendo nuevas etiquetas, modificando o eliminando otras, cambiando sus atributos HTML, añadiendo clases, cambiando el contenido de texto, etc...

El objeto document 
En Javascript, la forma de acceder al DOM es a través de un objeto llamado document, que representa el árbol DOM de la página o pestaña del navegador donde nos encontramos. En su interior pueden existir varios tipos de elementos, pero principalmente serán  o :

 no es más que la representación genérica de una etiqueta: HTMLElement.
 es una unidad más básica, la cuál puede ser  o un nodo de texto.

1. Nodo: Es cualquier etiqueta del cuerpo del documento, como un parrafo o los imputs.
2. HTML o Document: Es el nodo raíz del cual salen todos.
3. Los comentarios y los atributos de las etiquetas definen nodos, pero lo veremos solo como informacion asociada al elemento HTML.

## Métodos de seleccion de elementos:
Son formas de seleccionar elementos y se aplican al documento. Veamos algunas de ellas:
```javascript
const valor = document.getElementById("idDelElementoHTML"); //Selecciona un elemento por ID.
const valor = document.getElementsByTagName("p");           //Devuelve una coleccion de elementos, en este o de los elementos "p" que existan.

const valor = document.querySelector(".card .parrafoPrincipal");  //Selecciona el elemento que coincida con los selectores CSS dados.
const valor = document.querySelectorAll(".parrafo");              //Selecciona todos los elementos con la clase parrafo y nos devuelve una lista de nodos.
```

## Métodos para definir, obtener y eliminar valores de atributos. 
Son métodos que se aplican elemento y como bien dice el título, sirven para definir, obtener y eliminar valores de atributos. Veamos algunos de ellos.
```javascript
//Se seleccionan los elementos que contengan la clase ".claseImput" con el método de seleccion de elementos ".querySelector()".
const inputEnHTML = document.querySelector(".claseImput");

//.setAtribute() - Modifica el valor de un atributo. En este caso cambia el tipo del imput
inputEnHTML.setAttribute("type", "text");

//.getAtribute() - Devuelve el valor de un atributo. En este caso devuelve el valor del atributo.
var valorDelAtributo = inputEnHTML.getAttribute("type");

//Remueve el atributo seleccionado de un elemento. Ahora el input no tiene entre sus atributos el "type".
inputEnHTML.removeAttribute("type");
```

## Atributos Globales:
Son los atributos que poseen todos los elementos HTML. Se los utiliza dentro de los métodos de seleccion de elementos.

1. class - Lista de clases del elemento separadas por espacios.
2. contentEditable - Indicamos si el elemento puede ser modificable por el usuario. Valor Booleano
3. dir - Indica la direccionalidad del texto.
4. hidden - Indica si el elemento aún no es, o ya no es relevante.
5. id - Define un identificado único.
6. style - Contiene declaraciones de estilo CSS para ser aplicadas al elemento.
7. tabIndex - Indica si el elemento puede obtener un focus de input. Es decir si se puede seleccionar o no.
8. title - Contiene un texto con informacion relacionada al elemento al que pertenece.


## Atributo Style:
Este atributo nos permite modificar el código CSS o lo que es lo mismo, los estilos de un elemento.
```javascript
//Seleccionamos los elementos con la clase ".titulo".
const titulo = querySelector(".titulo");

//modificamos los estilos del elemento titulo, que posee la clase ".titulo".
titulo.style.color = red;
titulo.style.color = "#fff";
titulo.style("color", "#fff");
titulo.style.backgroundColor = "#000";
```
Notese que el uso del guion medio en javascript no esta permitido, por lo que a las propiedades CSS como "background-color", debemos escribirlas con camel case, de este modo nos queda "backgroundColor".

## Class List:
Es un método con muchas funciones menores, el cual nos permite modificar las clases asociadas a algun elemento. Esto nos es  útil cuando trabajamos con frameworks como bootstrap.
```javascript
const titulo = querySelector(".titulo");

titulo.classList.add("grande");       //Añade una clase, en este caso la clase "grande".
titulo.classList.remove("grande");    //Remueve una clase, en este caso la clase "grande".
let valor = titulo.classList.item(2); //Devuelve la clase del índice especificado, si hay tres clases devolvera la segunda y la guardara en la variable valor.
titulo.classList.contains("grande");         //Verifica si el elemento posee o no, la clase especificada. Devuelve un valor booleano.
titulo.classList.replace("grande", "chico"); //Reemplaza una clase por otra. En este caso la clase "grande" por la clase "chico". Si la clase "grande" no existe, nos devuelve true.

titulo.classList.toggle("grande", true);     
/*Si no tiene la clase especificada, la agrega, si ya la tiene, la elimina. Trabaja con valor booleano. 
El segundo parámetro es opcional y es para forzar que deje o quite la clase siempre, con "true" deja siempre la clase y con "false" elimina siempre la clase. 
Este segundo parámetro no lo soportan todos los navegadores antiguos.*/
```
## Obtenicion y Modificacion de Elementos:
```javascript
let result = titulo.textContent; //Devuelve el texto de cualquier nodo, sin el estilo CSS.
let result = titulo.innerHTML;   //Devuelve el contenido de un elemento. Se lo puede pasar por consola.
let result = titulo.outerHTML;   //Devuelve el código HTML completo del elemento. Se lo puede pasar por consola.
```

## Creación de Elementos:
```javascript
const item = document.createElements("LI");                                  //Creamos un elemento "li";
const textoDelItem = document.createTextNode("Este es un item de la lista"); //Creamos un nodo con texto.
const fragmento = document.createDocumentFragment();                         //Creamos una porcion de código HTML. 
```
De los tres metodos de creacion de elementos el más util es ".createDocumentFragment()", la ventaja del mismo es que podemos crear muchos elementos y agregarlos a todos de una vez. De este modo la PC no tiene que regenerar la interfaz cadda vez que se agrega algo nuevo.
Veamos por ejemplo un uso práctico de createDocumentFragment() para crear 20 elementos "li".
```javascript
const contenedor = document.querySelector(".contenedor"); //Seleccionamos un elemento contenedor, el cual almacenara todos los nuevos elementos.
const fragmento = document.createDocumentFragment();      //Creamos una variable que almacenara la fracción de nuestro documento.

//Creamos veinte elementos "li" que contengan el texto "este es un elemento de la lista" y los agregamos al fragmento.
for (let i = 0; i < 20; i++) {
    const item = document.createElement("LI");
    item.innerHTML = "Este es un item de la lista";
    fragmento.appendChild(item);   
}
//Agregamos el fragmento al contenedor.
contenedor.appendChild(fragmento);
//Sobreescribimos el contenedor y lo imprimimos en pantalla.
document.write(contenedor);
```

## Métodos de Childs:
Son métodos que se aplican especificamente a los hijos de algún elemento.
```javascript
//Devuelve el primer hijo del contenedor, tambien cuenta como elementos a los espacios en blanco.
const primerHijo = contenedor.firstChild();

//Devuelve el ultimo hijo del contenedor, tambien cuenta como elementos a los espacios en blanco.
const ultimoHijo = contenedor.lastChild();

//Devuelve el primer elemento hijo. No tiene en cuenta los espacios.
const elementoHijo = contenedor.firstElementChild();

//Devuelve el ultimo elemento hijo. No tiene en cuenta los espacios.
const elementoHijo = contenedor.lastElementChild();

//Devuelve todos los nodos hijos en un node list, cuenta los espacios.
const elementoHijo = contenedor.childNodes();

//Devuelve todos los elementos secundarios, no cuenta ni los espacios, ni el texto, ni los comentarios. Lo devuelve en un HTML collection
const elementoHijo = contenedor.children();


//Uso de ".replaceChild()" Seleccionamos el h2 antiguo, creamos un h2 nuevo y luego efectuamos el reemplazo.
const h2_antiguo = document.querySelector(".h2");
const h2_nuevo = document.createElement("H2");
const parrafo = contenedor.replaceChild(h2_nuevo, h2_antiguo); 
//Con replaceChild reemplazamos en el contenedor el h2_antiguo y colocamos el h2_nuevo.


//Eliminamos el elemento h2_nuevo del contenedor.
contenedor.removeChild(h2_nuevo);

//Verifica si el contenedor tiene elementos hijos o no. Si tiene hijos devuelve true, sino devuelve false.
let respuesta = contenedor.hasChildNodes();
if(respuesta == verdadero) {
    alert("Contenedor tiene hijos");
} else {
    alert("Contenedor no tiene hijos");
}
```

## Propiedades de Parents:
```javascript
console.log(h2_antiguo.parentElement());  //Esta propiedad selecciona el elemento HTML padre de un hijo especificado.
console.log(h2_antiguo.parentNode());     //Selecciona el nodo padre de un hijo especificado. Util en casos donde el padre no es una etiqueta HTML.
```
## Propiedades de "Siblings" o elementos hermanos.
```javascript
console.log(h2_antiguo.nextSibling());            //Muestra el siguiente nodo hermano.
console.log(h2_antiguo.previousSibling());        //Muestra el anterior nodo hermano.
console.log(h2_antiguo.nextElementSibling());     //Muestra el siguiente elemento hermano.
console.log(h2_antiguo.previousElementSibling()); //Muestra el anterior nodo hermano.
```

## Closest.
Por ultimo veamos otra propiedad curiosa. Closest selecciona el elemento ascendente mas cercano con la clase que coincida con nuestro selector. Es util para seleccionar el elemento padre mas cercano.
```javascript
//Seleccionamos el elemento con la clase ".div__3", el cual esta encerrado dentro de un ".div__2".
const div = document.querySelector(".div__3");

//Imprimimos el elemento padre más cercano a nuestro elemento con la clase ".div__3", este elemento es un .div__2
console.log(div.closest(".div__3"));
```
En este caso guardamos en la variable "div" un div__3 que esta encerrado dentro de un div__2. Usando la propiedad closest se imprimiría en pantalla "div__2".



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
En la programación tradicional, las aplicaciones se ejecutan secuencialmente de principio a fin para producir sus resultados. Sin embargo, en la actualidad el modelo predominante es el de la programación basada en eventos. Los scripts y programas esperan sin realizar ninguna tarea hasta que se produzca un evento. Una vez producido, ejecutan alguna tarea asociada a la aparición de ese evento y cuando concluye, el script o programa vuelve al estado de espera.

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

## Peticiones Post:
Del mismo modo en el realizamos una petición HTTP con el método "GET", podemos hacerlo con otro método llamado "POST".
Las diferencias entre los dos métodos son, entre otras, que mientras el método get envia los datos a traves de la url y por lo tanto la cantidad de datos a enviar es limitada, con el método post los datos se envian de manera independiente y su longitud es ilimitada.

## API:
Una API es una interfaz de programación, es decir es un intermediario que nos facilita tareas de programación.

## Fetch API:
La API de fetch es una interfaz JS que nos permite realizar consultas a bases de datos; trabaja con promesas y devuelve siempre una promesa encapsulada, por lo que deberemos formatearla a un archivo json.
```javascript
//creamos un fetch que se guardará en la variable petición.
const peticion = fetch("https://recursos.com");

peticion
    .then(respuesta => respuesta.json());
    .then(respuesta => console.log(respuesta));

//el primer then formatea la respuesta a JSON y el segundo then la imprime.

//si deseamos formatear a texto usamos .text()
```
Fetch tiene el metodo HTTP get por defecto, para cambiar el método debemos pasarle por parámetros un array con configuración.
```javascript
const peticion = fetch("https://recursos.com", {
    method: "POST",
    body: `{
        "nombre" : "Lucas",
        "apellido" : "dalto"
    }`,
    headers: {"Content-type" : "application/json"}
});

peticion
    .then(res =>res.json());
    .then(res => console.log(res));
```


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


Finn de la parte mid-level, vamos Joseee!!