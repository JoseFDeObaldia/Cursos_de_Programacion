# Curso HTML:
Este es un curso del lenguaje de marcado HTML, extraido del edutuber Lucas Dalto. El presente archivo debe serir de esquema para crear documentos en HTML5, siempre se debe tener en cuenta que una página en HTML no debe ser atractiva sino estar bien estructurada, ya que los estilos los damos con CSS.

## Estructura Básica:
Un documento HTML posee la siguiente estructura básica y tiene dos partes principales, el HEAD que es lo que "no se ve" y el BODY que es "todo lo que se ve en nuestra página web".

```html
<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<p>¡Hola Mundo!</p>
</body>
</html>   
```
La etiqueta meta charset utf-8 indica el tipo de codificación de la página y nos permite visualizar carácteres diacríticos, la etiqueta !DOCTYPE nos indica que la version de html con la que estamos trabajando es la version 5. Luego el parámetro lang="es" nos indica que la página web esta en español.

## Head:
En el espacio head de la pagina web, agrupamos todo lo que sean configuraciónes, metadatos (datos útiles para indexar en buscadores), el titulo del documento, las hojas de estilo relacionadas(texto CSS que les da estilos a nuestros elementos HTML). En resumen, todo lo que "no se ve en el display".

```html
<head> 
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	
	<meta name="keywords" content="palabraClave1, palabraClave2, comprar, vender, venta, compra, anuncio">
	<meta name="description" content="Acá va la descripción del sitio web">
	<meta name="author" content="José De Obaldía">
	<meta name="copyright" content="Empresa Inc.">

	<meta name="robots" content="noindex">
	<meta name="robots" content="nofollow">

	<link rel="icon" href="CursohTML img/imagen.ico">
	<link rel="stylesheet" type="text/css" href="StyleSheet.css">
	<link rel="stylesheet" type="text/css" href="normalize.css">

	<title>Aqui va el titulo de la página web</title>
</head>
```
Algunas consideraciones:
1. Etiquetas Meta: La palabra "meta" significa metadatos. Estas etiquetas guardan datos asociados a la página web, los cuales sirven para el motor de busqueda, la codificación (UTF-8), los derechos de autor, el copyright, si la página puede ser indexada en buscadores o no (páginas ocultas), etc.
2. Las etiquetas LINK sirven para enlazar otros archivos con el archivo HTML actual, por ejemplo linkear el archivo xxxxxx.ico, para el ícono de la página web, las hojas de estilo CSS, etc. Se pueden enlazar scripts aquí, pero los más óptimo es hacerlo al final del documento.
3. 	La etiqueta title coloca el titulo de la página web, es importante elegir bien su contenido ya que estas etiquetas son indexadas por los buscadores.

## Body:
Aqui va el BODY o el cuerpo de la página web, es decir todos los elementos que son directamente visuales y con los cuales podemos interactuar.

Cabe resaltar que una página web en general esta compuesta de varias secciones, en general se distinguen las siguientes:
1. `<header>` o cabecera: contiene la barra de navegación, el menú principal y usualmente el logo de la compania.
2. La etiqueta `<section>`que es una sección de contenido de la página web. Puede haber varias de ellas.
3. El `<main>` que es la sección de contenido con mayor importancia. Solo puede haber un solo main en la página web. Esta etiqueta es un elemento nuevo y no esta soportado en todos los navegadores, es recomendable añadirle el role="main" para añadirle mayor accesiblidad al sitio web, este parámetro esta bajo la convencion aria de accesibilidad web.
4. El `<aside>` o la barra lateral con información complementaria y posiblemente submenús.
5. El `<footer>` o pie de página, que usualmente posee los formularios de contacto y el copyright.

Las etiquetas DIV son contenedores y se utilizan para ordenar en bloques los elementos de la página web. No ocupan casi espacio por lo que podemos poner los que necesitemos. No debemos pasarnos ya que de no ser necesarios, simplemente estariamos agregando complejidad al código innecesariamente. Esta es una mala práctica muy común.
```html
<body>
    <header></header>
    <main role="main"></main>
    <section></section>
    <section></section>
    <section></section>
    <aside></aside>
    <footer></footer>
</body>
```
## Etiquetas de Título: h1, h2, h3, ... ,h6:
Las etiquetas de titulo se utilizan para colocar títulos a las diferentes secciones de nuestra página web, es importante entender que las etiquetas `h#`, son utilizadas por los buscadores para indexar el contenido por lo que deben usarse solo colocar titulos o subtitulos a manera de estructurar nuestro contenido.
```html
	<h1>Titulo H1</h1>
	<h2>Titulo H2</h2>
	<h3>Titulo H3</h3>
	<h4>Titulo H4</h4>
	<h5>Titulo H5</h5>
	<h6>Titulo H6</h6>
```

## Header:
Contiene la barra de navegación y usualmente el logotipo de la empresa.

Vemos tambien el uso de la etiqueta `<nav></nav>` con el menú de navegación. Los distintos items del menú se agrupan con la etiqueta `<ul></ul>` "unordered list", estos items se declaran luego con la etiqueta `<li></li>` "link".
En general cada enlace del menu nos lleva a otra página web que es una subpágina de la primera.

Las etiquetas `<a></a>` "anchor", sirven para linkear seeciones de la misma página web o establecer un vinculo a otras páginas web. No deben confundirse con las etiquetas LINK, ya que estas últimas enlazan archivos de instrucciones y configuración. El atributo `target="_BLANCK"` indica al navegador que abra el link en una nueva pestaña.
```html
<header>
		<nav>
			<ul>
				<li><a href="PaginaDeInicio.html" target="_BLANCK">Inicio</a></li>
				<li><a href="PaginaDeConfiguracion.html" target="_BLANCK"></a>Configuración</li>
				<li><a href="PaginaConFormularioDeContacto.html" target="_BLANCK"></a>Contacto</li>
			</ul>
		</nav>
	</header>
```

## Section:
Es una seccion principal de la pagina web, pueden haber varias secciones en el body de nuestra página web, aqui van las imagenes los textos y todo con lo que el usuario busca interactuar.
La etiqueta `<article></article>` nos sirve para agrupar trozos de código completamente independientes entre sí, por ejemplo distintos articulos en una página de ventas o distintas entradas en un blog.

```html
<section>
    <article>
		Artículo
	</article>
</section>
```

## Aside:
Las barras laterales o `<aside></aside>` en una página web son útiles para mostrar información complementaria y submenús.
```html
<aside>
	<h5>Información complementaria</h5>
	<p>Submenú: Configura tu búsqueda</p>
	<a href="">Categoria</a>
	<a href="">Tipo</a>
	<a href="">Palabras Clave</a>
</aside>
```
## Footer:
Otra etiqueta semántica muy importante es la etiqueta de `<footer></footer>` o pie de página, en general esta lleva información de contacto, links de interés y derechos de autor.
```html
<footer>
	<p>Seguinos en nuestras redes sociales:</p>
	<a href="https://instagram.com" target="_BLANK">Instagram</a>
	<a href="https://facebook.com" target="_BLANK">Facebook</a>
	<a href="https://www.youtube.com" target="_BLANK">Youtube</a>
	<p>©Todos los derechos Reservados - Propiedad de Anunciate Inc.</p>

	<p>Enviar correo al desarrollador:</p>
	<a href="mailto:josesuli@gmail.com">josesuli@gmail.com</a>
</footer>
```
El valor mailto nos redirigirá a nuestra casilla de correo para enviarle un email al desarrollador. Esto puede ser muy interesante.

## Listas OL y listas UL:
En html podemos hacer uso de dos tipos de listas, las listas ordenadas `<ol></ol>` y las no ordenadas `<ul></ul>`.
En el siguiente link tenemos un ejemplo de lista ordenada con dos ítems. Cada uno de ellos contiene una imagen, un título h4 y un pie de imagen con información complementaria.

- Con el parámetro `value` indicamos desde que número queremos que empiece la lista. Con la propiedad `style` podemos asignar un estilo para los ditintos tipos de numeracion que existen.
- EL parámetro `src` indica la dirección de un archivo, este puede estar en la web o almacenado localmente. Los parametros `width` y `height` cofiguran el tamaño de la caja que contiene la imagen, en general estos valores se deben configurar con CSS y no de forma nativa.

```html
<ol>
	<li value="35" style="list-style-type: lower-alpha;">
	    <img src="https://www.imagen.com" width="100px" height="100px">
		<h4>Fotografia 1</h4>
		<h5>Información Complementaria</h5>
	</li>

	<li>
	    <img src="CursoHTML img/imagen1.jpg" width="100px" height="100px">
		<h2>Fotografia de ejemplo 2</h2>
		<h4>Información complementaria</h4>
	</li>
</ol>
```
Para colocar una direccióon en un archivo local debemos tener en cuenta lo siguiente. Si el archivo a referenciar está en la misma carpeta, basta con nombrarlo. Si el archivo está en otra carpeta hacia adelante, se debe colocar algo así "carpetaImagenes/moneda.jpg". Luego si el archivo está en una carpeta atrás se colocaria algo así "../moneda.jpg".


## Párrafos y etiqueta Span:
La etiqueta `<p></p>` se utiliza para colocar un párrafo de texto, la etiqueta `<span></span>` es un contenedor en línea y sirve para aplicar estilo al texto o agrupar elementos en línea. En general se utiliza para referenciar trozos de texto que se encuentran dentro de un escrito muy largo.

Luego existen la etiquetas `<br>`, con la cual nosotros realizamos saltos de linea en nuestro contenido, y las etiquetas `<hr>` con las cuales colocamos barras horizontales para así poder separar trozos de la página web. Hoy en dia no es muy utilizada y pueden ser considerada mala práctica si se utilizan demasiado.
```html
<p>Párrafo 1</p>
<br>
<p>Párrafo 2</p>
<hr>
<p>Párrafo 3</p>
```

Luego existen otras etiquetas de texto que nos ayudan a dar formato al documento, a continuación están ejemplificadas:
```html
<b>Negrita</b>
<i>Itálica</i>
<strike>Texto Tachado</strike>
<small>Letra pequeña</small>
```


## Audio y Videos:
Para linkear archivos de audio y videos utilizamos las etiquetas `<audio></audio>` y `<video></video>` respectivamente. Estas etiquetas las veremos con los siguientes ejemplos.
```html
<!--Ejemplo de linkear un video y un audio, el parametro controls permite la visualizacion de los controles de video-->

<video src="https://www.youtube.com" controls=""></video>
<audio src="https://www.spotify.com" controls=""></audio>
```

## Imágenes:
El siguiente es un ejemplo de una imágen que utiliza todos los atributos habituales, es interesante conocer esta estructura en profundidad.
El parámetro `alt` sirve para mostrar un cuadro de error con texto en caso de no estar el archivo de la imagen, esto es muy importante para el SEO. La etiqueta `title` sirve para mostrar el texto de "El perro Lucas" cuando el ratón este encima de la imagen.
```html	
<img src="cursoHtml/img/imagen3.png" width=200px height=250px alt="PerroLucas" title="El perro Lucas">
```
## Referenciar secciones del sitio web.
Para páginas con secciones de contenido muy largas es interesante poder linkear algunas de estas secciones con etiquetas anchor `a`. De este modo ofrecemos un pequeño mapa del contenido del sitio. Un uso muy extendido de esta práctica se da en el sitio web wikipedia.

En este caso de uso la etiqueta anchor recibe un parámetro href con un ID repesentado por una almohadilla seguido del id propiamente dicho.
De este modo la etiqueta realizará una busqueda por ID entre todos los elementos de la página web actual, es decir busca un elemento en la pagina web que posea el ID "1234", los ID deben ser únicos.
```html
<a href="#1234"><b>Click aquí para ir al contenido destacado</b></a><br>

<p id="1234" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dolores minus, eum, ea minima doloremque tempora possimus nam ipsum tempore natus fugiat debitis nobis quam unde pariatur. Pariatur, impedit dolorem. </p>			
```

## Formularios:
Los formularios en html son parte fundamental en la toma de datos de los usuarios. Se declaran con la etiqueta `<form></form>` y dentro tienen distintos tipos de entradas o inputs `<input></input>` cada uno con una configuración particular.
Existen muchos tipos de input, nombramos algunos importantes y usados:
1. Text: con un cuadro de texto.
2. Password: con un cuadro de contraseña.
3. Email: con un cuadro para introducir un email (la entrada debe tener el formato mail).
4. Date: un cuadro para introducir una fecha.
5. Button, un botón.
6. Search, un cuadro para introducir una búsqueda, se puede utilizar como cuadro de texto.
7. Tel, para introducir un telefono.
8. Submit: un boton de enviar.
9. Textaera: un area de texto. Util para pedirle al usuario un comentario.

El parámetro `required` nos dice que el campo no debe estar vacio para poder ser enviado, el parámetro `type` nos dice el tipo de input, el parametro `name` nos da el nombre del input (sirve para procesar los datos en JS), el parametro `value` nos da un imput por defecto y el parámetro `placeholder` nos sirve para dar un input por defecto que se vea en color gris claro.

```html
<form action="/formulario.php" method="GET">
	<input type="text" value="Nombre" name="Contacto" required="" placeholder="Nombre">

	<input type="search" id="search" name="search">

	<input type="password" name="Password">
	<input type="tel" value="telefono" id="tel" name="tel">
	<input type="email" name="Email" required="">
	<input type="date" name="Fecha">
    <input type="button" name="Boton" value="Boton">
    <input type="submit" name="Enviar">
	<input type="radio" name="BotonDeRadio">
	<input type="checkbox" name="BotonDeCheckbox">
	<input type="file" name="BotonParaSeleccionarUnDocumento">

    <!--Textarea: le damos dimensiones con los parámetros rows y cols. Es mejor hacerlo con CSS -->
	<textarea rows="10" cols="50"></textarea>
</form>
```
Por último cuando construimos formularios es interesante colocar una etiqueta de texto al lado del input para que estos últimos puedan ser identificados de mejor manera. En estos casos se utiliza la etiqueta `<label></label>`.
Luego para fijar el foco en el input en caso de que nuestro usuario sea un poco torpe y no pueda dar click exactamente sobre el input se puede realizar lo siguiente:
1. Colocar la propiedad for al `label` que este al lado del `input` o hacerlo directamente en el contenedor `div` que encierre al `input`.
2. Colocar un ID al input, de modo que si se cliquea al label, el click se redirecciona con el parámetro `for` al `input`.

```html
<form>
    <label for="Nombre" accesskey="">Inserte Nombre:</label>
    <input id="Nombre" type="text" name="Nombre">
</form>
```
El atributo `accesskey` permite usar una tecla de atajo para acceder a este elemento desde el teclado.

Por último podemos agregar una ruta en la etiqueta de form con la propiedad action, para asi cuando se presione el boton de submit, los datos se envien. Para esto debemos agregar la propiedad action y colocar la carpeta de destino de los datos action="formulario.php" y luego colocar la propiedad method que sera el metodo de transferencia de los datos, si colocamos method="GET", los datos se enviaran pegados a la URL, y si colocamos method="POST", los datos se enviaran en las cabeceras. Esto se verá en un curso posterior de back-end.


## Tablas:
El uso de tablas antiguamente era muy extendido, actualmente cayo en desuso pero es interesante saber como estan construidas las mismas.
Para aprender sobre el uso de tablas en HTML veremos el siguiente ejemplo completo de una tabla, pero antes tengamos en cuenta los siguientes apartados:
1. El parámetro `border` agrega un borde a las celdas de la tabla.
2. Las etiquetas `tr` son una fila completa y las etiquetas `td` son las distintas secciones o columnas dentro de las filas. En conjunto esto nos da una tabla.
3. La etiqueta `caption` coloca un título a la tabla, no importa en que parte de la tabla se coloque, esta siempre se vera al inicio de la misma.
4. Los contenedores `thead` y `tbody` indican respectivamente, la cabecera de la tabla y el cuerpo de la tabla. Usar estas etiquetas es interesante ya que algunos exploradores habilitan un scroll cuando la tabla es muy grande. Además de la tan importante ventaja del SEO.
5. Las etiquetas `th` configuran la celda como parte del encabezado de la tabla por lo que el texto se colocará en negrita y el texto se centrara automáticamente.
6. El contenedor `tfoot` nos agrupa el renglon final de la tabla, es decir los totales.

```html
<table border="1px">
	<caption>Título de Tabla</caption>
				
	<!--thead agrupa los elementos de la cabecera de mi tabla-->
	<thead>
		<tr>
			<th>Nombre<</th>
			<th>Apellido</th>
			<th>Email</th>
			<th>Edad</th>
			<th>Ciudad</th>
		</tr>
	</thead>
	
    <!--tbody agrupa los elementos del cuerpo de la tabla-->
	<tbody>
		<tr>
	        <td>Esteban</td>
			<td>Quito</td>
			<td>estebanquito@yahoo.com</td>
			<td>16</td>
			<td>Corrientes</td>
		</tr>

		<tr>
			<td>Juan</td>
			<td>Perez</td>
			<td>juanperez@gmail.com</td>
			<td>21</td>
			<td>Resistencia</td>
		</tr>

		<tr>
			<td>Lucas</td>
			<td>Gomez</td>
			<td>lucasgomez12@hotmail.com</td>
			<td>24</td>
			<td>Rosario</td>
		</tr>
	</tbody>

	<!--tfoot agrupa el renglon final de las tablas, es decir los totales-->
	<tfoot>
		<tr>
			<td>Total: 3 nombre</td>
			<td>Total: 3 apellidos</td>
			<td>Total: 3 emails</td>
			<td>Promedio 20,33 años</td>
			<td>3 ciudades distintas</td>
		</tr>
	</tfoot>
</table>
```

Otras cosas a tener en cuenta sobre las tablas: 
- El contenido de las columnas que están dentro de la fila lo podemos alínear tanto horizontal como verticalmente. Para alinearlo verticalmente utilizaremos el atributo `valign` para poder alinearlo arriba de la celda (“top”), en el centro (“middle”) o debajo (“bottom”).
Para alinearlo horizontalmente utilizaremos el atributo `align`. Con este atributo podremos alinear el contenido de las celdas en el centro (“center”), a la izquierda (“left”), a la derecha (“right”) o justificado (“justify”).
- El parámetro `width` como ya sabemos indicara la anchura de la tabla. Esta anchura la podemos poner en píxeles `width="300px"` o con porcentaje `width="100%"`. 
- Dos parámetros más son `cellspacing="10px"` (que define el espacio entre las celdas de la tabla) y `cellpadding` (que le marca a la tabla el espacio que debe dejar alrededor del texto dentro de una celda). Luego `bordercolor="#808080"` nos indica el color que tendrán los bordes de la tabla.

## Display Block e Inline:
Debemos aclarar que existen dos tipos de etiquetas naturalmente en HTML. Estas son las etiquetas de tipo bloque o `display = block`, las cuales ocupan todo el ancho de página que este disponible y dan un salto de linea, y las etiquetas tipo line o `display = inline`, las cuales ajustan su ancho al contenido y no dan salto de linea.

## Atributos personalizados en HTML:
HTML5 ha introducido al lenguaje de etiquetas HTML la posibilidad de colocarle a un elemento atributos personalizados. Estos atributos personalizados nos permiten añadir información extra a los elementos de nuestro HTML. Simplemente añadiendo un nuevo atributo que comience por data- y seguido del nombre mediante el cual accedemos a esta información complementaria podemos usar esta información desde JavaScript y CSS de forma muy cómoda. Veamos un ejemplo sencillo de esto:
```html
<li data-edad="21" data-pais="ES">Juan Alonso</li>
<li data-edad="37" data-pais="IT">Manuel Alonso</li>
<li data-edad="34" data-pais="MX">Raúl Alonso</li>
<li data-edad="19" data-pais="FR">Luis Alonso</li>
<li data-edad="24" data-pais="IT">Pablo Alonso</li>
<li data-edad="23" data-pais="ES">Pepe Alonso</li>
<li data-edad="21" data-pais="ES">Javier Alonso</li>
```

## Otras etiquetas y consideraciones importantes:
- Etiqueta `button`: Es una etiqueta especifica para botones, con ella reemplazamos el input type="button", esta etiqueta es mucho más personalizable. Sus atributos son un `name` el cual se utiliza para los formularios, un `value` o valor por defecto, un `disabled` que indica si el botón esta habilitado o no y un `accesskey`, el cual nos indica atajos de teclado.
Dentro del button se pueden poner imágenes e íconos:
```html
<button name="nombreDelBoton" value="valorInicial" disabled="" accesskey="">Click Aqui</button>
```

- Etiqueta `svg`: La etiqueta svg se utiliza para graficos vectoriales y dominar su uso requiere especializarse en ello. En general no nos tocara modificar nada dentro de un grafico svg cuando nos topemos con él. Las etiquetas van acompañadas de una etiqueta `<path></path>`, ambas trabajan en conjunto para generar un grafico vectorial.
```html
<svg></svg>
```
- Para insertar emojis en una página web se puede ingresar al siguiente sitio web: https://unicode-table.com/es/ y una vez dentro, seleccionar un emoji y copiarlo. Luego bastará con insertarlo en una etiqueta de texto. Por ejemplo:
```html
<p>Por ejemplo: 🤣</p>
```


Fin del documento, espero sea de ayuda para el futuro jose o para el que lo necesite.


