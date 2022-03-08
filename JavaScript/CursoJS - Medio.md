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
Son una serie de métodos que nos devuelven información acerca de la locación de los archivos y documentos de la página web.