# Curso de CSS:
Este archivo es un esquematico de como crear hojas de estilo en cascada con CSS, aqui es donde damos estilo y diseño a nuestras páginas web. Este archivo se realizo siguiendo el curso de CSS del edutuber Lucas Dalto.

CSS funciona con instrucciones que se componen de un selector ("que selecciona elementos html") y un grupo de propiedades a cambiar, encerradas entre llaves ("las que modifican el aspecto de nuesto elemento html").

## Selectores:
Selectores: Hay varios tipos de selectores en CSS, estos se utilizan de acuerdo a la necesidad. En general se recomienda utilizar mayormente un solo tipo de selector para evitar conflictos entre las instrucciones. A continuación nombraremos los distintos tipos de selectores existentes:

1. Selector de Tipo: se seleccionan los elementos por el tipo de etiqueta.
2. Selector por clase: selecciona todos los elementos que en el archivo HTML5 tienen el atributo class="nombreDeLaClase" es decir tienen la clase "nombreDeLaClase".
3. Selector por ID: selecciona el elemento que en el archivo HTML5 tenga el atributo id="identificador" es decir, selecciona el elemento que tenga el ID identificador. No se debe utilizar este selector para varios elementos, o lo que es lo mismo, no es permitido que haya varios elementos con el mismo ID, ya que esto es una mala práctica en programacion y conduce a muchos errores. El ID debe ser único.
4. Selector por atributo: selecciona los elementos en HTML5 que compartan el atributo y el valor. Por ejemplo utilizamos el atributo atributo ="valor".
5. Seleccion por descendiente: es una combinacion de los demas selectores combinados para dar mas especificidad, los selectores se colocan en orden descendiente, con el menos especifico a la izquierda y el más especifico a la derecha. Supongamos una etiqueta div con la clase  class="container" que contiene una etiqueta de parrafo entre otras cosas más, para seleccionar solo la etiqueta parrafo deberiamos asignarle un ID, pero como esto es rebuscado cuando hay muchos elementos podemos seleccionar primero el div con la clase container, dejar un espacio y luego seleccionar la etiqueta "p" del parrafo buscado.
6. Por Pseudoclases: son selectores que activan la modificacion cuando sucede algun evento especifico. Un ejemplo de esto es cuando deseamos cambiar el color de un texto segun el ratón pase encima del mismo. Esto lo hacemos con la pseudoclase hover.
7. Selector universal: Selecciona todos los elementos. Solo modifica los atributos que no se hayan definido por otro selector antes. Es decir si cambiamos el color de una caja y luego cambiamos los colores de todos los elementos, el selector universal no va a variar el color de esa caja porque el atributo ya estaba definido. Se utiliza en general al inicio de la hoja de estilos.

```css
//selector de tipo.
h1 {color: black;}

//Selector por clase.
.nombreDeLaClase{color: black;}

//selector por ID.
#identificador{color: black;}

//Selector por atributo.
[atributo="valor"]{color: black;}

//Selector por descendiente. Seleccionamos el container y luego el párrafo dentro de él.
.container p {color:  black;}

//Selector por pseudoclases.
p:hover {color: black;}

//Selector universal.
*	{color: black;}
```

Estos electores tienen cada uno un nivel de importancia. A continuación listamos los selectores mencionados del menos prioritario arriba al más prioritario abajo, siendo el `!important` el selector mas prioritario o con más jerarquia.
1. elementos y pseudo-elementos: es decir los selectores por tipo.
2. clases, pseudo-clases y atributos
3. identificadores:  selectores por ID
4. estilos en linea:  es cuando se modifica el estilo desde el propio archivo HTML
5. !important: se utiliza colocando la palabra !important al lado del valor de la propiedad, en el espacio dentro de las llaves.

Si queremos colocar dos selectores para un mismo grupo de propiedades, podemos colocar los dos selectores antes de las llaves y separarlos por una coma. Por ejemplo:
```css
p, h1, h6 {
    font-size: 1.5rem;
}
```
Todos los p, h1 y h6 tendrán ahora un tamaño de fuente de 1.5 rem o 24px.

## Unidades de Medida:
En CSS tenemos dos tipos de unidades de medida, las unidades fijas como son los pixeles (px) o los milimetros (mm),  y las medidas relativas, las cuales dependen de la caja contenedora como son los porcentajes (50% del contenedor, 30% del contenedor, etc) o los em y los rem.
Veamos primero un ejemplo de las medidas absolutas o fijas que podemos utilizar en css:
```css
.caja1 {
	font-size: 20px; /*Pixeles*/
	font-size: 2mm;  /*Milimetros*/
	font-size: 1cm;  /*Centimetros*/
	font-size: 1in;  /*Una pulgada*/
	font-size: 1pt;  /*Un punto es aproximadamente 1/72 de pulgada*/
}
```
Las medidas relativas son mejores para el diseño responsive, pero es más complejo dominar su uso:
```css
.caja1 {
	width: 100vw;      /*Anchura del 100% de la ventana gráfica. vw=viewport width*/
	height: 100vh;     /*Alto del 100% de la ventana gráfica. vh=viewport height*/

	font-size: 50%;    /*Letra del 50% del contenedor*/
	font-size: 1em;    /*em es relativo al tamaño de la fuente del elemento raiz (elemento padre directo), por defecto 1 rem es 16px*/
	font-size: 1rem;   /*rem es una medida configurable, por defecto 1rem = 16px*/
}
```

## Propiedades de Texto:
Listaremos ahora en un trozo de código la mayoria de las propiedades de texto utilizadas en CSS.
```css
p {
	font-size: 20px;
	font-family: Georgia;
	line-height: 2;
	font-weight: 400;
	font-size: 2em;

	color:  red;

	text-align: center;
	text-align: justify;
	text-align: left;
	text-align: right;

	letter-spacing: 1px;   /*Genera espaciados entre las letras*/
}
```
Para colocar otras tipografias, podemos importarlas de un sitio como google, ingresamos a "goolge fonts" y elegimos una. Copiamos uego la etiqueta y la importamos ya sea en la hoja de estilos o en el archivo HTML. Luego toca implementarla. Cabe aclarar que es conveniente colocar dos tipografias separadas por una coma, para el caso de que no se encuentre la primera, se utilice la segunda.
```css
p {
	font-family: 'Georgia', sans-serif;
}
```

## Propiedades de Caja:
De ahora en más continuaremos ejemplificando las propiedades CSS colocando un trozo de código. En este apartado veremos las propiedades de caja.
```css
h2 {
	background-color: #a22;
	padding: 20px; /*Distancia entre el texto y la caja, un numero los cuatro padding de 20px, dos numeros eje y" y eje "x", cuatro numeros top, right, bottom, left*/
	height: 100px; /*Altura*/
	width: 100px; /*Ancho*/
	text-align: center; /*Centra el texto en la caja*/
	margin: 15px; /*Distancias entre caja y caja, aplican las mismas reglas para el orden de los valores que en el padding*/
	margin: auto; /*Centra la caja*/

	border-radius: 5px; /*Bordes redondeados*/
	border: 4px, solid, blue; /*Grosor del borde, tipo de borde y color de borde*/

	opacity: 0.1;/*Es la transparencia de la caja, con 0 desaparece y 1 es el color pleno, los decimales son los intermedios*/

	box-sizing: border-box;
	box-shadow: 2px, 3px, 5px, 0, black; /*Desplazamiento en x, desplazamiento en y, desenfoque, cuanto de borde tendra la sombra, color*/
	text-shadow: 2px, 2px, 3px, black; /*Dezplazamiento en x, desplazamiento en y, desenfoque, color*/	
	transform: rotate(45deg); /*Rotacion (la propiedad transform tiene muchos otros atributos)*/
}
```



## Outline:
Es una propiedad que permite enmarcar elementos dando un borde a la caja con la diferencia de que `outline` no mueve los demas elementos para dar espacio al nuevo borde, simplemente lo superpone arriba.
```css
.caja1 {
	outline: 5px, solid, red;  /*grosor, tipo de borde, color*/
}
```

## Position:
Con la propiedad position podemos colocar los elementos en distintas partes de la pantalla. Al hacerlo nuestro elemento adquiere 4 nuevas propiedades que referencian la caja a un valor en absoluto en la pantalla respecto a su contenedor. Estas propiedades son `top`, `left`, `right` y `bottom`. Las mas importantes por orden de prioridad son top y left. Si estas no están declaradas el buscador pasará a mirar las propiedades bottom y right respectivamente. En general para que position fixed y sticky funcionen, las dimensiones de la caja deben estar definidas.

- Position relative: Da una posicion relativa a donde debiese estar posicionado este elemento en la pantalla. El elemento se mueve y además guarda el espacio que le corresponde por defecto.
```css
.caja1 {
	position: relative;
	top:  15px; 
	left: 20px;
}
```
- Position Absolute: Da una posicion relativa a la ubicacion del elemento padre. Si no hay elemento padre se utiliza la etiqueta de body.
```css
.caja1 {
	position: absolute;
	top:  115px; 
	left: 50px;
}
```
- Position Fixed: Da una posicion respecto a lo que estamos viendo en el explorador, es decir no se posiciona respecto a los demas elementos del documento, sino respecto a la pantalla del explorador. Por lo que si se hace scroll el elemento se seguira viendo en el mismo lugar.
```css
.caja1 {
	position: fixed;
	top:  15px; 
	left: 20px;
}
```
- Position Sticky: Es una mezcla entre static y fixed, la caja se comporta como position: relative mientras no se hace scroll, luego de hacer scroll si la caja esta por ser tapada por el navegador entonces esta cambia su comportamiento y se vuelve fixed.
```css
.caja1 {
	position: sticky;
	top:  15px; 
	left: 20px;
}
```


## Z-index:
El valor de la propiedad z-index nos ordena los elementos cuando estos se enciman o apilan. Un numero más alto significa que la caja esta mas arriba. Se necesita declarar la posicion del elemento para poder usar esta propiedad.
```css
.caja1 {
	z-index: 2;
}
```

## Overflow:
Overflow o excedente es una propiedad que nos permite definir que sucede con el contenido de una caja cuando este no entra en ella, esto funciona tanto con texto como con imagenes y otros elementos. Existen varios valores para la propiedad overflow, estos son: `auto` (donde el explorador coloca las barras de scroll del contenido si es necesario), `scroll` (donde las barras de scroll estan activas siempre), `hidden` (donde lo que sobra del contenido se oculta y no aparece la barra de scroll) y luego por ultimo el valor por defecto `visible` (donde el  contenido se muestra y sobresale de la caja).
```css
.caja1{
	overflow: auto;
	overflow: visible;
	overflow: hidden;
	overflow: scroll;

	overflow-x: scroll;
	overflow-y: scroll;
}
```

## Float:
Esta es una propiedad que permite que los elementos floten a la izquierda o a la derecha del contenedor que los enmarca, sin importar el orden que este ocupa en el mismo. Actualmente esta en desuso ya que hay maneras más optimas de hacerlo y que no generan tantos problemas.
```css
.caja1{
	float: left;
	float: right;
}
```

## Pseudo-elementos y pseudo-clases:
1. Pseudoelementos: Son selectores que aplican a "elementos" que forman parte de otros elementos verdaderos, por ejemplo la primer letra de un parrafo, la ultima linea de un texto, etc. A continuación jemplificaremos algunos de ellos los cuales estarán referenciados a un parrafo `p`. Cabe aclarar que los primeros 4 pseudoelementos funcionan solo con etiquetas de tipo bloque.
```css
p::first-line {
	font-size: 3em;
}
p::first-letter {
	font-size: 3em;
}
p::placeholder {
	font-size: 3em;
}
p::selection {
	font-size: 3em;
}
p::before {
	font-size: 3em;
	content: "contenido extra que aparece antes del p";
}
p::after {
	font-size: 3em;
	content: "contenido extra que aparece despues del p";
}
.items:nth-child(6) {
	padding: 10px;
}
```
La propiedad nth-child modifica un elemento segun su posicion en un grupo de elementos hermanos. Si en html declaramos 10 items en un mismo contenedor podemos modificar el segundo contenedor con `nth-child (2)`


2. Pseudoclases: Son selectores que realizan un cambio en el diseño cuando ocurre un evento, como por ejemplo que se haga click en un enlace. Se dice que estos selectores están a la escucha de un evento.
```css
.caja1:hover {
	color: red; /*La modificacion se activa cuando el raton esta encima del elemento*/
}
a:link {
	color: red; /*Se aplica un color siempre y cuando el link no haya sido visitado*/
}
a:visited {
	color: red; /*Se aplica un color cuando el link ya se haya visitado*/
}
.caja1:active {
	color: red; /*Se activa la propiedad cuando se esta clickeando el elemento, cuando se deja de clickear vuelve a la normalidad*/
}
.caja1:focus {
	color: red; /*Se activan las modificaciones cuando el input esta enfocado, es decir cuando lo clickeamos y esta seleccionado*/
}
```

Utilizando los seudoelementos y las seudoclases se pueden hacer transiciones, por ejemplo si con la pseudoclase hover cambiamos la altura, el ancho y el color de fondo, podemos aplicar la propiedad transition para definir un tiempo en el que ese cambio deba realizarse.
```css
.caja1 {
	height: 200px;
	width: 200px;
	background: slateblue;
	transition: background 1s, height 0.5s, width .5s; /*Definimos los tiempos de cambio de cada propiedad*/
	transition: all 1s; /*Si todas las prop. tienen el mismo tiempo de cambio entonces se puede abreviar de esta manera*/
}
.caja1:hover {
	background: darkslateblue;
	height: 300px;
	width: 300px;
}
```
Veremos esto a detalle más adelante, cabe resaltar que la propiedad `transition` se escribe obligatoriamente en el selector sin el evento.



## Object-fit:
Es una propiedad que sirve para acomodar imagenes cuando su resolucion no coincida con el tamaño del contenedor que la contiene, cada uno de los valores indica una forma de posicionarla.
```css
.caja1 img {
	/*La imagen mantiene su proporcion, y se centra en el contenedor (si el contentedor tiene otra proporcion se veran los espacios faltantes)*/
    object-fit: contain;

    /*Pone la resolucion de la imagen original*/
	object-fit: none;

    /*La imagen mantiene su proporcion, se centra y rellena todo el contenedor recortando la imagen*/
	object-fit: cover;

    /*Realiza contain o none, dependiendo de cual deja la resolucion mas baja*/
	object-fit: scale-down;
}
```

## Object-position: 
Coloca la imagen ladeada hacia la derecha, izquierda, arriba o abajo. Tambien se pueden dar medidas relativas y descentrar la imagen del punto central:
```css
.caja1 {
	object-position: left;
	object-position: right;
	object-position: top;
	object-position: bottom;

    /*dando valores numericos*/
	object-position: -1em;
}
```

## Tipos de cursor: 
Existen distintos tipos de cursor que se pueden aplicar cuando el raton se posicione por ejemplo, arriba de un elemento:
```css
.caja1:hover {
	cursor: all-scroll; /*se puede aplicar cuando el raton este sobre una imagen*/
	cursor: zoom-in; /*se puede usar cuando buscamos hacer un zoom en la página web*/
	cursor: progress; /*se puede usar cuando mostramos una pantalla de carga*/
	cursor: context-menu;
	cursor: col-resize; /*se puede aplicar cuando buscamos recortar una imagen horizontalmente*/
	cursor: copy; /*se puede usar cuando tenemos que copiar algo*/
}
```
Existe una lista completa de todos los tipos de cursores y se encuentra en la siguiente página web:
[Link](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_cursor "Tipos de cursores").
 
## Colorización:
Existen varias formas de dar un color en css, tanto usando los colores predeterminado y con nombre, con la función RGB y RGBA, con hexadecimales, etc. Si bien es interesante aprender las distintas nomenclaturas para colorizar, una forma práctica es mezclar el color visualmente y luego buscar su codigo de color.
Con visual studio code esto se puede hacer de manera sencilla dejando el cursor encima del color a modificar.
```css
.caja1 {
	color: #ff0000;            //Hexadecimal
	color: rgb(170, 200, 34);  //RGB
	color: rgba(25,57,72,0.1); //rgba
	color: pink;               //Colores predeterminados
}
```

## Inherit:
Cuando a una propiedad, cualquiera sea, le damos el valor inherit, le estamos diciendo que herede el valor de esa propiedad de su caja padre.


## Flexbox:
Es una nueva forma de maquetar las páginas web, lo que hacemos con flexbox es que nuestros contenedores tengan, valga la redundancia, más flexibilidad. 

- Cuando le damos a un contenedor `display: flex;` este contenedor se comportara como un bloque, pero sus cajas hijas no lo harán, ellas serán cajas flexibles o flex-items, y esto funcionara así para todas las cajas que son hijas directas de la caja flex (no funciona con cajas nietas, bisnietas, etc).
- Las cajas en flexbox se adaptan al tamaño de su contenedor y en base a su contenido de manera automática, (si una caja tiene más contenido ocupara una mayor porción del contenedor).
- Flexbox tiene dos ejes, el main axis (x), y el cross axis (y), los cuales tienen una dirección (como los vectores), el main axis tiene un main-start a la izquierda y un main-end a la derecha, luego el cross axis tiene un cross-start arriba y un cross-end abajo. Esto es crucial para ordenar los elementos.

#### Propiedades de flexbox para el contenedor.
Flexbox agrega una gran cantidad de nuevas propiedades a los elementos. Es importante indicar, que todas las propiedades que veremos a continuación se aplican al contenedor y no a los flex-items.

1. Flex direction: Es un indicativo de como se van a ordenar las cajas en nuestro contenedor flex
```css
.contenedor {
	display: flex;

	/*Valor por defecto: Las cajas se ordenan de izq a der,  y se ajustan al contenido, buscando igualar sus alturas*/
	flex-direction: row;

	/*Las cajas se ordenan de der a izq, y se ajustan al contenido buscando igualar sus alturas*/
	flex-direction: row-reverse;

	/*Las cajas se ordenan de arriba a abajo y se ajustan al contenido buscando igualar sus anchos*/
	flex-direction: column;

	/*Las cajas se ordenan de abajo hacia arriba, y se ajustan al contenido buscando igualar sus anchos*/
	flex-direction: column-reverse;
}
```
2. Flex Wrap: Especifica si los elementos "hijos" son obligados a permanecer en una misma línea o pueden fluir en varias líneas. Util cuando la resolucion no permite que se muestren todos en una linea.
```css
.contenedor {
	display: flex;

	/*Fluyen en una linea, si no están definidas las dimensiones de los flex-items, estos se encogen hasta cero, si están definidas entonces los flex-items se desbordan del contenedor*/
	flex-wrap: nowrap;

	/*Al achicar el tamaño del contenedor, estas cajas fluyen a la linea de abajo*/
	flex-wrap: wrap;

	/*Las cajas fluyen hacua arriba al achicar el contenedor*/
	flex-wrap: wrap-reverse;
}
```
3. Flex flow: Es un shorthand que abrevia flex-direction y flex-wrap. Se coloca primero el valor de `flex-direction` y luego el valor de `flex-wrap`.
```css
.contenedor {
	display: flex;
	flex-flow: column wrap;
}
```
4. Justify Content: Define cómo el navegador distribuye el espacio entre y alrededor de los items flex, a lo largo del eje principal de su contenedor.
```css
.contenedor {
	/*Los items flex se colocan comenzando desde el inicio del eje principal*/
	justify-content: flex-start;

	/*Los items flex se colocan comenzando desde el final del eje principal*/
	justify-content: flex-end;

	/*Los items flex son colocados hacia el centro del eje, se alinean al ras entre sí y en torno al centro de la línea.*/
	justify-content: center;

	/*Los items flex se distribuyen uniformemente sobre la línea, el espacio adyacente entre dos items es el mismo*/
	justify-content: space-between;

	/*Los items flex se alinean uniformemente de tal manera que el espacio entre dos items adyacentes es el mismo. El espacio vacío anterior al primer item y posterior al último item equivale a la mitad del espacio entre dos items adyacentes. El margin entre cada caja es igual*/
	justify-content: space-around;
}
```
5. Align Items: Asi como justify content alinea los elementos en el main axis, esta propiedad lo hace en el cross-axis.
```css
.contenedor {
	align-items: flex-start; /*Coloca las cajas arriba al inicio del cross axis*/
	align-items: flex-end;   /*Coloca las cajas abajo al fin del cross axis*/
	align-items: center;     /*Centra las Cajas verticalmente*/
	align-items: stretch;    /*Propiedad por defecto: Estira el contenedor a todo lo largo del cross axis*/
	align-items: baseline;   /*Todos los elementos flexibles son ajustados de modo que sus bases queden alineadas.*/
}
```
6. Align Content: Util para alinear los elementos con mas de una linea en el cross-axis. No es válida para elementos de una linea.
```css
.contenedor {
	/* Ajusta las líneas desde el inicio del cross axis */
	align-content: flex-start;

	/* Ajusta las líneas desde el final del cross-axis (eje transversal)*/
	align-content: flex-end;

	/* Ajusta las líneas alrededor del centro del eje transversal */
	align-content: center;

	/* Distribuye las líneas a lo largo del eje transversal, de principio a fin */
	align-content: space-between;

	/* Distribuye las líneas a lo largo del eje transversal, igualmente espaciados */
	align-content: space-around;

	/* Estira las líneas para que ocupen el eje transversal completo */
	align-content: stretch;
}
```
#### Flexbox: Propiedades reservadas a los flex-items:
Vistas ya las propiedades reservadas al contenedor flex, veremos las propiedades reservadas para los flex-tems:

1. Align Self: La propiedad align-self alinea los elementos flexibles de la línea flexible actual, reemplazando el valor de align-items. Si el límite transversal de alguno de los elementos está definido como auto, el valor de align-self es ignorado.
```css
.flex-item {
	align-self: auto;
	align-self: flex-start;
	align-self: flex-end;
	align-self: center;
	align-self: baseline;
	align-self: stretch;
}
```
2. Min-Width, min-height: Define un ancho mínimo para mi caja flexible. Esta propiedad no es de flexbox pero es interesante verla junto con este.
```css
.flex-item {
	min-width: 300px;
	min-height: 200px;
}
```
3. flex Basis: La propiedad de CSS flex-basis especifíca la base flexible, la cual es el tamaño inicial de un elemento flexible. Ésta propiedad determina el tamaño de una caja de contenidos a no ser que se haya especificado de otra forma.
```css
.flex-item {
	flex-basis: 100px;
}
```
4. Flex Grow: Si definimos las dimensiones de las cajas en uno de los ejes, y en este eje sobra espacio debido a que la resolucion es mucho mayor, podemos utilizar flex grow para que reparta el espacio sobrante a las cajas, esto lo hace sumando la porcion del sobrante que le indiquemos al width de nuestro flex-item. La utilidad de esto es que la propiedad se refrezca siempre que modifiquemos el tamaño del flex-container, con lo que podemos ajustar las cajas dinamicamente.
Para asignarle una porcion del espacio sobrante a una de las cajas debemos colocarlo en forma de fracciones de una suma. Por ejemplo si tenemos tres cajas y queremos darle el 2/4 parte del espacio sobrante a la primera y 11/4 a la segunda y a la tecera hariamos lo siguiente.
```css
.caja-flex-1 {
	flex-grow: 2;
}
.caja-flex-2 {
	flex-grow: 1;
}
.caja-flex-3 {
	flex-grow: 1;
}
```
En cambio si queremos repartir el sobrante equitativamente le dariamos 1/3 del espacio sobrante a cada caja. Esto es:
```css
.caja-flex-1 {
	flex-grow: 1;
}
.caja-flex-2 {
	flex-grow: 1;
}
.caja-flex-3 {
	flex-grow: 1;
}

/*Notese que esto se puede abreviar dando una clase para los flex item.*/
.flex-item {
	flex-grow: 1;
}
```
5. Flex shrink: La propiedad CSS flex-shrink especifica el factor de contracción de un flex item. Los flex items se encogerán para llenar el contenedor de acuerdo a un número cuando el tamaño por defecto de los flex-items sea mayor al de su contenedor flex-container.
```css
.flex-item {
	flex-shrink: 2;
	flex-shrink: 0.6;
}
```

6. Flex: Es un shorthand que abrevia las tres propiedades anteriores. Al invocarla debemos pasarle como primer parametro el valor de flex-grow (que naturalmente repartira equitativamente el espacio), como segundo valor el de flex-shrink y como tercer parametro el valor de blex-basis. Esta propiedad necesita obligatoriamente que le pasemos el primer parámetro al menos.
```css
.flex-item {
	flex: 1 0 50px;
}
```
7. Order: Esta propiedad ordena los elementos que se encuentran en el main axis, cuando mayor sea su valor de order la caja se encontrara más al final del main axis, sin importar el orden en que fue declarada. Informalmente podemos decir que funciona como la propiedad z-index pero en el main axis.
```css
.caja-flex-1 {
	order: 50;
}
.caja-flex-2 {
	order: 1;
}
```
Con el código anterior la caja-flex-1 se mostrara a la derecha de la caja-flex-2 aunque se haya declarado despues. Notese que si cambiamos el modo en el que corren los ejes con flex-direction esta propiedad se puede utilizar en el eje vertical, de derecha a izquierda, etc.

## CSS-GRID:
Es otro valor de la propiedad display, en donde el container cuya propiedad sea `display: grid;` le dara a sus elementos hijos directos, nuevas propiedades. Se dice que el contenedor con display grid es un "grid-container" porque el mismo a partir de ahora estara segmentado en grillas internas.

Algunos conceptos para tener en cuenta:
- Grid Item: Son todos los elementos que estan dentro del grid-container y no tienen que necesariamente estar relacionados con cada una de las celdas del grid-container.
- Grid Cell: Son cada una de las celdas de la grilla.
- Grid Track: Hay dos grid-track, grid-column y grid-row, son cada columna o fila que haya en nuestra grilla. El total de los grid-track es la suma de las filas y columnas. En general se denominan simplemente como filas y columnas.
- Grid Area: Son un conjunto de celdas que nosotros seleccionemos, la condicion es que las celdas involucradas deben ser consecutivas.
- Grid Line: Son las lineas divisorias de nuestra griila, las cuales marcan la separacion entre las distintas filas y las distintas columnas.

#### Propiedades que se aplican al grid container:
1. Con `template-rows` y `template-columns` generamos las filas y columnas de nuestra grilla.
```css
.container {
	display: grid;

	/*Se crean tres filas de 150px*/
	grid-template-rows: 150px 150px 150px;

	/*usando la funcion repeat (que es como un bucle) se crean 3 filas de 150px y una cuarta fila de 75px*/
	grid-template-rows: repeat(3, 150px) 75px;
}
```
Se pueden utilizar unidades de medida relativas o mezclar unidades. Se recomienda usar fr para ajustar las columnas automaticamente
```css
	grid-template-columns: 1em 1fr;
	grid-template-columns: 50% 50%;
	grid-template-columns: 100px 1fr;
}
```
Notesé que para el trabajo con css-grid existe una nueva unidad de medida llamada "fr", la misma indica un valor de una fraccion del espacio disponible. Por ejemplo, si construimos tres columnas con un valor de 1fr cada una, el espacio disponible dentro del contenedor asignara un tercio a cada columna y estas se ajustaran de manera flexible.
Del mismo modo si a una de ellas le asignamos 2fr y dejamos las dos restantes con 1fr, entonces el espacio del grid-container se divide en 4 asignando la mitad del espacio a una columna y un cuarto del espacio a las dos columnas restantes.

2. `grid-row-gap` y `grid-column-gap` son dos propiedades que se resumen en el shorthand `grid-gap` y generan espacios entre las celdas, pero no entre el contenedor. De manera informal trabaja como la propiedad margin.
```css
.container {
	grid-row-gap: 30px;
	grid-column-gap: 10px;

	grid-gap: 10px 5px;
	/*si se coloca un solo valor los valores de gap de column y row se igualan.*/
}
```

#### Propiedades que se aplican a los grid-items:
1. `grid-row` y `grid-column` son propiedades que definen el tamaño de nuestros componentes si deseamos que ocupen más de una celda. Por ejemplo, si queremos que un elemento ocupe las dos primeras columnas de mi tabla en "ancho" y en "alto" ocupe solo una, lo que hacemos es lo siguiente:
```css
.grid-item:first-child {
	grid-row: 1 / 2;     /*El elemento inicia en la linea 1 de las filas y termina en la linea 2 de las filas*/
	grid-column: 1 / 3;  /*El elemento inicia en la linea uno y termina en la linea tres*/
}
```
Existe otra forma de definir esto, y hace uso de la palabra reservada span, con esto la declaracion de elementos es mas intuitiva:
```css
.grid-item:nth-child(6){
	grid-column: 1 / span 3; /*Arranca en la linea uno y ocupa tres columnas*/
}
```
Al definir elementos de esta manera debemos tener en cuenta que si un elemento ocupa mas de una celda, este empujará a los otros corriendolos de su lugar.

#### Grid implicito: 
Cuando tenemos una grilla y por algún motivo nos sobran items en ella, debemos hacer uso del "grid implícito", un conjunto de propiedades que configuran la grilla si la cantidad de elementos en ella sobrepasan los espacios disponibles.

Puede darse el caso de que realicemos una grilla de 12 celdas y tengamos 14 items, en este caso sucederá que los items sobrantes se colocarán por defecto en una nueva fila sin formato. Con las propiedades del grid implícito buscamos solucionar este inconveniente.
```css
.grid-container {
	grid-auto-rows: 150px;   /*Funciona como el template rows pero para el grid implícito*/
	grid-auto-columns: 35px; /*Funciona como el template columns, pero para el grid implícito*/
	grid-auto-flow: row;     /*Los items sobrantes van a una nueva fila (por defecto)*/
	grid-auto-flow: column;  /*Los items sobrantes van a una nueva columna*/

	/*Si quedan huecos en nuestro grid y el grid-implicito no puede rellenarlo, entonces se utiliza la propiedad dense en donde un algoritmo detecta el item que quepa, más cercano, y lo coloca en el hueco.*/
	grid-auto-flow: dense;
}
```
#### Grid Dinámico: 
Es una forma de customizar nuestra grilla para generar estructuras dinámicas, de este modo le agregamos muchas funcionalidades.
```css
.container {
	/*min.content: El grosor de las columnas se ajusta al contenido mínimo.Tres columnas cada una con el ancho mínimo que permitan sus respectivos contenidos*/
	grid-template-columns: repeat(3, min-content);

	/*max-content: El grosor de las columnas o filas se ajusta al contenido máximo. Tres columnas cada una con el ancho máximo que permitan sus respectivos contenidos*/
	grid-template-columns: repeat(3, max-content);

	/*minmax: Coloca ancho mínimo y ancho máximo*/
	grid-template-rows: repeat(3, minmax(1fr, 300px));
	grid-template-rows: repeat(3, minmax(min-content, max-content));

	/*auto-fill: genera nuevas columnas (o filas)o las borra, cada vez que debido a un cambio en la resolucion de la pantalla, esto lo requiera*/
	grid-template-rows: repeat(auto-fill, minmax(min-content, max-content));

	/*auto-fit: trabaja igual que auto-fill, pero cuando ya no se pueden generar más columnas (o filas), porque no hay tantos items, entonces pasa a escalar los items para que ocupen todo el ancho del grid-container*/
	grid-template-columns: repeat(auto-fit, minmax(min-content, max-content));
}
```

#### Alineacion en grid: 
Hay varias formas de alinear nuestros elementos en CSS-Grid:
```css
.container {
	/*alinear los elementos como grupo respecto a su grid-container*/
	justify-content: start; /*eje horizontal (main-axis), sus valores son: start, center, end, etc*/
	align-content: center;  /*eje vertical (cross-axis), sus valores son: start, center, end, etc*/

	/*para alinear los items, tiene una jerarquia menor que justify-content y align-content*/
	justify-items: start;   /*start, center, end*/
	align-items: center;    /*start, center, end*/
}
/*Se puede alinear cada item independientemente de los demas con las propiedades justify-self y align-self vistas anteriormente*/
.grid-item:first-child {
	justify-self: center;
	align-self: start;
}
```

#### Grid Areas:
Se pueden ralizar tablas asignando distintas areas para usos reservados, la forma de hacerlo es la siguiente. Primero trabajamos con el grid-container y construimos la grilla:
```css
.container {
	display: grid;

	/*Creamos una grilla de tres columnas y cuatro filas, donde cada celda tiene un nombre*/
	grid-template-areas: 
	"header" "header" "header"
	"main" "main" "aside" 
	"main" "main" "aside" 
	"footer" "footer" "footer";
}
```
con la propiedad grid-area asignamos a cada uno de los items un area, formada por todas las celdas que compartan el nombre del valor.
```css
.grid-item:first-child {
	grid-area: header;
}
.grid-item:nth-child(2) {
	grid-area: main;
}
.grid-item:nth-child(3) {
	grid-area: aside;
}
.grid-item:last-child {
	grid-area: footer;
}
```

#### Grid Lines:
En ocasiones para trabajar con items que ocupan más de una celda debemos utilizar grid-row y grid-column y luego pasarle como valor el numero de la linea. Como esto es anti-intuitivo en grid de granes dimensiones entonces buscamos darles nombres especificos a las lineas de la siguiente manera:
```css
.container {
	display: grid;

	/*asignamos los nombres de las lineas colocandolos entre corchetes y en el lugar donde se van a ubicar*/
	grid-template-rows: [linea1] 150px [linea2] 150px [linea3] 150px [linea4];
	grid-template-columns: [inicio] 150px [final];
}
.grid-item:first-child {

	/*pasamos el nombre de la linea en vez del numero de linea. Esto es más intuitivo*/
	grid-column: inicio / final;
	grid-row: linea1 / linea3;
}
```

## Responsive Design:
1. Media queries: son condicionales de css y se utilizan cuando se desea modificar la página web o aplicación en función del tipo de dispositivo o de características y parámetros específicos (como la resolución de la pantalla o el ancho del viewport del navegador).
Su sintaxis es simple, se escribe `@media`, luego el tipo de media querie (all y screen son los más utilizados), un operador y luego la condicion. Veamos unos ejemplos:

```css
/*si no se agrega el modificador screen entonces por defecto es all*/
@media (min-width: 600px){
	.item{background-color: aqua;}
}

/*el modficador and, nos dice que si el media es una pantalla (screen) y su width es menor a 400px, entonces que ejecute la condicion*/
@media screen and (min-width: 400px){
	.item{background: red;}
}

/*se pueden colocar varias sentencias, con el operador and, se deben cumplir todas las condiciones para que se aplique la modificacion*/
@media screen and (min-width: 400px) and (orientation: landscape) {
	.item {background-color: beige;}	
}

/*Las listas separadas por comas se comportan como el operador or cuando es usado en media queries. Cuando utilice una lista separada por comas y alguno de los queries retorna verdadero, el estilo o la hoja de estilos sera aplicada.*/
@media (min-width: 700px), handheld and (orientation: landscape) {
	.item {background-color: blueviolet;}
}

/*El operador not aplica a todo el media-query y retorna verdadero si es posible, sino retorna false. En este caso si no se cumple "all" y "monocrome", la modificacion no se efectua*/
@media not all and (monochrome) {
	.item {background-color: chocolate;}
}
```
## Transition:
Es una propiedad que nos premite realizar transiciones en nuestras páginas web:
```css
.container {
	width: 300px;

	/*se coloca la o las propiedades a modificar. Se puede colocar all pero esto consume muchos recursos*/
	transition-property: width;

	transition-duration: 1s;           /*duracion de la transicion*/
	transition-delay: 1s;              /*espera hasta que empieze la transicion*/
	transition-timing-function: ease;  /*evolucion de la transicion en el tiempo. Ej: comienza rápido y termina lento, etc.
```
Algunos de los valores de `transition-timing-function` son:
1. linear: transicion evoluciona lineal.
2. ease: más veloz al inicio y lenta al final.
3. ease-in: lenta al inicio y rapida al final.

Luego, el shorthand `transition` nos permite abreviar las 4 propiedades anteriores.
```css
	/* nombre de la propiedad | duración */
	transition: margin-left 4s;

	/* nombre de la propiedad | duración | retardo */
	transition: margin-left 4s 1s;

	/* nombre de la propiedad | duración | función | retardo */
	transition: margin-left 4s ease-in-out 1s;

	/* Aplicar a 2 propiedades */
	transition: margin-left 4s, color 1s;
}
.container:hover {
	/*propiedad que cambia cuando el cursor esta sobre el contenedor*/
	width: 400px;
}
```

## Animaciones:
Para programar animaciones en CSS se recurre a una regla nueva llamada keyframes, veamos la estructura básica de una de ellas: Primero se colocan dos parametros obligatorios a nuestra caja. El nombre de la animacion asociada a la caja y la duracion de la animación.
```css
.caja1 {
	animation-name: animacion1;
	animation-duration: 1s;
}
```
Luego se coloca un `@keyframes` (fotogramas clave) y el nombre de la animacion. A continuación se colocan dos selectores dentro, uno llamado `form` (con las propiedades en su estado inicial) y otro llamado `to` (con las propiedades en su estado final).
```css
@keyframes animacion1 {
	from {
		left: 0;
	} to {
		left: 90%;
	}
}
```
Existen otras propiedades que se colocan en el selector de la caja, estas son:
```css
.caja1 {
	animation-iteration-count: 3; /*la animacion se repite 3 veces*/
	animation-iteration-count: infinite; /*la animacion se repite indefinidamente*/

	animation-direction: normal; /*corre normal, por ejemplo de izq a derecha o de arriba a abajo*/
	animation-direction: reverse; /*corre alrevés, por ejemplo de derecha a izquierda*/
	animation-direction: alternate; /*alterna las direcciones, y empieza normalmente*/
	animation-direction: alternate-reverse; /*alterna las direcciones, y empieza alrevés */

	animation-fill-mode: forwards;
	animation-fill-mode: both;
}
```
Una forma más exacta que el from-to para indicar los fotogramas clave es utilizar porcentajes. De este modo indicamos con más precision las distintas fases de la transicion.
```css
@keyframes animacion2 {
	0% {
		color:aqua;
	} 36% {
		color: azure;
	} 90% {
		color:rgb(170, 200, 34);
	} 100% {
		color: crimson;
	}
}
```

## Cubic Bezier:
Cubic bezier es una propiedad que controla el flujo y la curva de velocidad de una animacion o una transicion. Esta curva se determina dando dos puntos en un plano cartesiano. No veremos la formula de bezier, simplemente daremos valores.
```css
.caja1 {
	/*cubic bezier es un valor del transition-timing-function y del animation-timing-function*/
	animation-timing-function: cubic-bezier(1, 0, 0, 1); /*cubic-bezier(x1,y1,x2,y2)*/
}
```
Se recomienda utilizar generadores de curvas para trabajar con esto, a continuación dejamos un link para este propósito:[Link](https://cubic-bezier.com/#.17,.67,.83,.67*/ "Generador de Cubic Bezier").


## Transform:
Es una propiedad que se utiliza para realizar transformaciones geométricas en elementos, ya sea desplazandolos o escalandolos. Cabe destacar que al utilizar la traslacion con la propiedad `transform`, en vez de utilizar `position`, margin o padding, el movimiento del elemento no afecta a las demas cajas en el flujo de la página y consume considerablemente menos recursos.
```css
.caja1 {
	transform: translateX(2mm);
	transform: translateY(3rem);

	/*El primer parámetro indica el desplazamiento en x, y el segundo el desplazamiento en y*/
	transform: translate(20%, 70px);

	transform: scaleX(1.5);          /*Escala en x, el parámetro es el coeficiente de transformacion*/
	transform: scaleY(1.5);          /*Escala en y*/
	transform: scaleZ(2);            /*Escala en Z*/
	transform: scale(1.5, 1.5);      /*Un valor: escala en x. Dos valores: escala en x, escala en y*/
	transform: scale3d(1.5, 1.5, 2); /*escala en x, escala en y, escala en z*/

	transform: rotateX(1.5turn);     /*rotacion en x*/
	transform: rotateY(60deg);       /*rotacion en y*/
	transform: rotateZ(12grad);      /*rotacion en z*/
	transform: rotate(90deg, 45rad); /*rotacion en x, y*/

	/*es una funcion CSS que define una matriz de transformacion 2D, sus parámetros son: a, b, c, d, tx, ty*/
	transform: matrix();

	/*es una funcion CSS que define una matriz de transformacion 3D del tipo 4x4 homogenea. Sus parámetros son:
	matrix3d(a1, b1, c1, d1, a2, b2, c2, d2, a3, b3, c3, d3, a4, b4, c4, d4)*/
	transform: matrix3d();
}
```

## Clip Path:
Es una propiedad que nos permite crear elementos con formas que no sean rectangulos. Utiliza las funciones circle, ellipse o polygon:
```css
.caja1 {
	clip-path: circle(40%); /*define un circulo usando el radio y su posicion. */
	clip-path: ellipse(130px 140px at 10% 20%); /*define una elipse usando dos radios y la posicion del elemento*/
	clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%); /*define un poligono*/
}
```
/*Para sacar el mayor provecho a esta propiedad lo mejor es utilizar generadores: [Link](https://bennettfeely.com/clippy/*/ "Generador de clip path").

## Background:
Existen algunas propiedades del background que es interesante desglosar, las ejemplificaremos brevemente:
```css
body {
	background-color: #ff0000;
	background-image: url(https://blog.ida.cl/wp-content/uploads/sites/5/2020/04/tamano-redes-blog-655x470.png);

	background-size: cover; /*lo mismo que en object fit*/

	/*Especifica como se posiciona la imagen en el contenedor, recibe dos parametros, la alineacion en x y luego la alineacion en y*/
	background-position: right bottom;

	/*Posiciona la imagen y la mueve respecto a su contenedor. Cuando se realiza el scroll la imagen se mueve*/
	background-attachment: scroll;

	/*Posiciona la imagen y la mueve respecto a su contenedor. Cuando se realiza el scroll la imagen se mueve*/
	background-attachment: fixed;
}
```
Cuando una imagen tiene mucho contenido, el background tiende a ser muy largo. Por lo tanto existe una propiedad que repite la imagen del background si un solo ejemplar de esta no logra llenar todo el contenedor. Esto sucede más cuando background-size tiene el valor contain. Para solucionarlo usamos:
```css
	background-repeat: no-repeat; /*repeat o no-repeat*/
```
Las propiedades `background-clip` y `background-origin` son dos propiedades para indicar el area desde donde se coloca la imagen en nuestro contenedor, tomando en cuenta el padding, el borde, el contenido, etc. `background-clip` recorta la imagen para colocarla y `background-origin` posiciona la imagen para colocarla (luego la recorta).
```css
.fondo {
	background-clip: border-box;
	background-clip: padding-box;
	background-clip: content-box;

	background-origin: border-box;
	background-origin: padding-box;
	background-origin: content-box;
}
```

## Variables:
Por obvias razones es interesante declarar variables en CSS, para hacer esto recurrimos a la siguiente sintaxis: 
Para declararlas se crea un selector root y se conforma una variable dando dos guiones medios seguido del nombre de la variable y su valor. Luego para invocar a la variable en otro selector se llama a la funcion var() y se le da como parámetro el nombre de la variable.
```css
:root {
	--colorDeFondo: #f40;
	--colorDeMenu: #f60;
}
.container {
	background-color: var(--colorDeFondo);
}
```
Estas variables son del tipo global y se pueden utilizar en todo el documento.

Luego, las variables locales sirven solo en el tipo del selector en el que trabajan. Es decir si creamos una variable en un selector tipo "p", esta variable estara disponible solo para los selectores tipo "p".
```css
p  {
	--color-letra: #d55;
}
```

## Filter:
Es una propiedad para dar filtros a las imagenes:
```css
div {
	filter: none;          /*propiedad por defecto, no hace nada*/
	filter: blur(130px);   /*da un desenfoque gaussiano el valor va en px, em o rem*/

	/*da brillo a la imagen, con 0 nada de brillo y 1 el brillo actual, en este caso el brillo es 5 veces más alto*/
	filter: brightness(5);

	/*controla el contraste, 0 es nada de contraste y 1 el contraste actual, aqui seria 1,5 veces de contraste*/
	filter: contrast(1.5);

	/*genera un sombreado en imagenes sin fondo, el box-shadow lo hace en el contenedor*/
	filter: drop-shadow(0px 0px 10px #acc);

	/*escala de grises, 0 es nada y 1 es el máximo. 1 es el valor por defecto. Tmb funciona por porcentajes*/
	filter: grayscale(50%);

	filter: hue-rotate(75deg); /*rota la gama de colores, se da un valor en deg, rad, grad*/
	filter: invert(70%);       /*invierte la gama de colores, 0% es el original y 100% es completamente inverso*/
	filter: opacity(0.6);      /*es la opacidad, en 0 es transparente y en 1 es totalmente opaco*/
	filter: saturate(200%);    /*saturacion, 0% es nada, 100% es normal, y más que 100% es una gran saturacion*/
	filter: sepia(0.9);        /*sepia, 0 es nada y 1 es máximo*/
}
```

## Scroll Behavior:
Cuando damos un enlace por ID a una seccion de la página que está más abajo, podemos hacer que la transicion sea más suave, esto se logra haciendo que el scroll entre el boton por ID y la seccion de la página a la que queremos ir se haga de manera más lenta:
```css
.body {
	scroll-behavior: smooth;  /*La propiedad se la da al container que contenga el scroll*/
}
```

## User Selected:
Con esta propiedad controlamos si el usuario puede seleccionar algún elemento o texto:
```css
.container p {
	user-select: none;
}
```

## Función calc():
La funcion `calc();` nos permite realizar calculos sencillos (suma, resta, producto y cociente) y nos ahorra el trabajo de las unidades, para así tener todo más optimizado.
```css
section {
	height: calc(100% - 2*10px);
}
```

## Selectores Avanzados:
Hay formas de establecer relaciones entre selectores para más especificidad:
```css
.contenedor > p {
	/*Con el simbolo mayor que, seleccionamos los elementos que son hijos directos de .contenedor*/
	color: #0000ff;
}


div + p {
	/*Aqui seleccionamos el elemento hermano que este inmediatamente despues del div. Esto se llama hermano adjunto*/
	color: #ff0000;
}


div ~ p {
	/*Con este simbolo seleccionamos todos los elementos hermanos "p" que estén despues del div*/
	color: #ff0000;
}
```

Fin del curso, espero que esto te ayude mucho a progresar!!