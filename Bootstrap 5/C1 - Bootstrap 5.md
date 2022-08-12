![Logo.png](Logo.png)

# CURSO DE BOOTSTRAP 5
Bootstrap 5 es un conjunto de herramientas que nos permiten maquetar páginas web de forma más rápida. Para ello añadimos a nuestro proyecto un paquete con hojas de estilo y scripts ya desarrollados por el equipo de bootstrap, y de los cuales podemos extraer utilidades.

Bootstrap nacio para facilitar el maquetado de nuestras webs. La forma para hacerlo es asignar a nuestras etiquetas HTML distintas clases, las cuales ya poseen sus propios estilos preformados. El uso eficiente de estas clases ya creadas genera una codificación mucho más sencilla y eficiente.

Cabe destacar que para cada componente, toda la informacion de sus estilos la podemos encontrar en la documentación de bootstrap.  [Documentacion de Bootstrap 5](URL "https://www.getbootstrap.com")

El comprender esta metodología es comprender
el corazón de bootstrap 5.

---

## 1. BREAKPOINTS NORMALIZADOS
Bootstrap trae personalizados una serie de puntos de quiebre para marcar la diferencias en distintos tipos de pantallas, esto es muy útil al trabajar con diseños web responsive.

|Tamaño|Acrónimo|Resolución|
|:---:|:---:|:---:|
|x-small | ninguno | pantallas < 576px |
|small | "sm" | pantallas >= 576px |
|medium | "md" | pantallas >= 768px |
|large | "lg" | pantallas >= 992px |
|extra large | "xl" | pantallas >= 1200px |
|extra extra large | "xxl" | pantallas >= 1400px |

```scss
$grid-breakpoints: (
  xs: 0,
  sm: 576px,
  md: 768px,
  lg: 992px,
  xl: 1200px,
  xxl: 1400px
);
```

---

## 2. CONTAINER
Los contenedores son un bloque de construcción fundamental en Bootstrap, ellos agrupan los demas elementos, y alinean el contenido dentro de la ventana gráfica.

Si nosotros asignamos a un bloque contenedor la clase `container`, la hoja de estilos de bootstrap se encargará de darle un _margin_ automatico. El _margin_ asignado será "responsive" y se adaptara para ser de menor tamaño en dispositivos pequeños, o al contrario, ser proporcionalmente más grande en dispositivos de resoluciones "xl" o "xxl".

Tambien podemos utilizar variantes de container, como `container-lg` o `container-fluid` si deseamos personalizar más esta herramienta.

```html
    <div class="container">
        <h1>Hola mundo</h1>
    </div>

    <div class="container">
        <h1>Hola mundo</h1>
    </div>
```

---

## 3. GRID - SISTEMA DE COLUMNAS
Los sitios web en bootstrap se van a dividir en 12 columnas implicitas, que nos permitiran repartir nuestro contenido a lo ancho del monitor.

Veamos un ejemplo: Creemos un div en nuestro navegador, el cual tendrá la clase `.row`. Esto le indica a la grilla de bootstrap que haremos una nueva fila. Luego, dentro de la fila, coloquemos 12 divs más los cuales van a tener cada uno una clase de `col-1`. Esto indica que dentro de esa grilla, cada div tendrá un ancho de una de las doce columnas.

```html
    <div class="container">
        <div class="row">
            <div class="col-1 border">1</div>
            <div class="col-1 border">1</div>
            <div class="col-1 border">1</div>
            <div class="col-1 border">1</div>
            <div class="col-1 border">1</div>
            <div class="col-1 border">1</div>
            <div class="col-1 border">1</div>
            <div class="col-1 border">1</div>
            <div class="col-1 border">1</div>
            <div class="col-1 border">1</div>
            <div class="col-1 border">1</div>
            <div class="col-1 border">1</div>    
        </div>
    </div>   
```
Si visualizamos esto en el navegador veremos que se crea una fila con 12 cajas, las cuales ocuparán cada una, una porción de nuestro sitio web en ancho.

Si deseamos hacer por ejemplo 3 columnas y que estas ocupen porciones distintas podemos hacer lo siguiente.
```html
    <div class="container">
        <div class="row">
            <div class="col-3 border">3 porciones</div>
            <div class="col-2 border">2 porciones</div>
            <div class="col-6 border">6 porciones</div>
            <div class="col-1 border">1 porción</div>   
        </div>
    </div>   
```
Por último, si queremos agregar más filas y que los elementos en ella tengan todos porciones distintas, esto tambien está permitido por bootstrap.
```html
    <div class="container">
        <div class="row">
            <div class="col-1 border">1 porciones</div>
            <div class="col-5 border">5 porciones</div>
            <div class="col-4 border">4 porciones</div>
            <div class="col-2 border">2 porción</div>   
        </div>

        <div class="row">
            <div class="col-2 border">2 porciones</div>
            <div class="col-2 border">2 porciones</div>
            <div class="col-2 border">2 porciones</div>
            <div class="col-6 border">6 porción</div>   
        </div>

        <div class="row">
            <div class="col-3 border">3 porciones</div>
            <div class="col-3 border">3 porciones</div>
            <div class="col-3 border">3 porciones</div>
            <div class="col-3 border">3 porción</div>   
        </div>

        <div class="row">
            <div class="col-3 border">3 porciones</div>
            <div class="col-1 border">1 porciones</div>
            <div class="col-7 border">7 porciones</div>
            <div class="col-1 border">1 porción</div>   
        </div>
    </div>   
```
La clase border que fue agregada no tiene más uso que permitir que se vean los bordes de las cajas.

---

## 4. GRID RESPONSIVE
Se puede configurar la grilla para que se acomode de manera responsive a los distintos tipos de tamaño, esto se hace con modificadores de la clase `col-#`. Con los modificadores diremos a la página web el ancho en columnas de cada elemento especificando en la resolucion en la que se encuentra.

Por ejemplo, si queremos que dos divs ocupen todo el ancho de la página en dispositivos pequeños, pero que en portatiles "md" cada uno ocupe solo 6 columnas y en consecuencia se vean uno al lado del otro se haria lo siguiente.

```html
    <div class="container">
        <div class="row">
            <div class="col-12 col-md-6 border">AAA</div>
            <div class="col-12 col-md-6 border">AAA</div>   
        </div>
    </div>  
```

---

## 5. ALINEACIÓN EN FLEXBOX
Podemos alinear verticalmente un elemento colocando `align-items-center` entre las clases del row. Este row debe tener establecido un alto.
```css
    //Establecemos el alto con css
    .container__row {
        height: 500px;
        background-color: gray;
    }
```
```html
    <div class="container">
        <div class="row container__row align-items-center">
            <div class="col-12 col-md-6 border">AAA</div>
            <div class="col-12 col-md-6 border">AAA</div>   
        </div>
    </div>  
```
Las clases usadas son las mismas que en flexbox, por lo que resulta muy intuitivo el uso de Bootstrap. Para alinear los items verticalmente, usamos `align-items-center`, `align-items-start` y `align-items-end`. Para la alineacion en horizontal utilizamos: `justify-content-center`, `justify-content-start` y `justify-content-end`. Estas clases se aplican a la fila (row).

Por último, para alinear un item en especifico utilizamos las clases `align-self-xxxx` y `justify-self-xxxx`, las cuales debemos agregarlas a los items.

---

## 6. UTILIDADES: BORDER
Para agregar bordes a nuestras cajas utilizamos:
```html
<span class="border"></span>
<span class="border-top"></span>
<span class="border-end"></span>
<span class="border-bottom"></span>
<span class="border-start"></span>
```

Para el grosor de los bordes:
```html
<span class="border border-1"></span>
<span class="border border-2"></span>
<span class="border border-3"></span>
<span class="border border-4"></span>
<span class="border border-5"></span>
```

Para quitar un borde utilizamos las siguientes clases. Notese que debemos colocar el borde para poder quitarlo, esta es la razon de agregar la clase `border` sola.
```html
<span class="border border-0"></span>
<span class="border border-top-0"></span>
<span class="border border-end-0"></span>
<span class="border border-bottom-0"></span>
<span class="border border-start-0"></span>
```

Redondear los bordes:
```html
<img src="..." class="rounded" alt="...">
<img src="..." class="rounded-top" alt="...">
<img src="..." class="rounded-end" alt="...">
<img src="..." class="rounded-bottom" alt="...">
<img src="..." class="rounded-start" alt="...">
<img src="..." class="rounded-circle" alt="...">
<img src="..." class="rounded-pill" alt="..."> 
```
La clase rounded-pill es de gran utilidad cuando se quiere redondear un elemento sin generar la elipse característica.

---

## 7. MARGIN Y PADDING (SPACING)
Para agregar un margin debemos agregar la clase `m-#` y colocarle un valor de cero a cinco, este valor se traduce a rem a traves de una formula matemática, lo que nos dara los valores de esta fórmula, es el mapa de sass.

```scss
$spacer: 1rem;
$spacers: (
  0: 0,
  1: $spacer * .25,
  2: $spacer * .5,
  3: $spacer,
  4: $spacer * 1.5,
  5: $spacer * 3,
);

$negative-spacers: if($enable-negative-margins, negativify-map($spacers), null);
```
Por ejemplo si deseamos darle a un elemento, un padding a todos lados de 1.5rem. Escribiriamos: `p-4`.

Clases para margin:
1. Margin: `m-#` 
2. Margin-top: `mt-#`
3. Margin-bottom: `mb-#`
4. Margin-start: `ms-#`
5. Margin-end: `me-#`
6. Margin-x: `mx-#`
7. Margin-y: `my-#`

Si queremos centrar un elemento, debemos darle display: block, un width definido y colocarle la clase `mx-auto`.

Clases para padding:
1. Padding: `p-#` 
2. Padding-top: `pt-#`
3. Padding-bottom: `pb-#`
4. Padding-start: `ps-#`
5. Padding-end: `pe-#`
6. Padding-x: `px-#`
7. Padding-y: `py-#`

Si deseamos que por ejemplo, el margin-top de un elemento en pantallas pequeñas sea de 1.5rem, pero en pantallas medianas sea de cero. Hariamos lo siguiente:
```html
<p class="mt-4 mt-md-0">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati dolor neque blanditiis quibusdam sint necessitatibus non aliquid eos doloremque labore. Eligendi amet eius exercitationem nulla dicta. Architecto animi dolorem possimus.</p>
```

---

## 8. CLASES PARA TEXTOS
La alineacion de textos en bootstrap es muy sencilla.

```html
<p class="text-start">Alineacion al inicio</p>
<p class="text-center">Alineacion al centro</p>
<p class="text-end">Alineacion al final</p>

<p class="text-sm-start">Alineacion al inicio en pantallas iguales o mayores a small</p>
<p class="text-start text-xl-start">Alineacion al centro en pantallas pequeñas y alineacion al inicio en pantallas iguales o mayores extra large</p>
```

Usando la clase `.text-break` evitamos que las palabras muy largas rompan el layout, cortandolas en trozos.

Clases para el trabajo con mayúsculas y minúsculas.
```html
<p class="text-lowercase">Lowercased text.</p>
<p class="text-uppercase">Uppercased text.</p>
<p class="text-capitalize">CapiTaliZed text.</p>
```

Se puede seguir revisando la documentacion en busca de más funcionalidades, la mayoria muy útiles. Aquí se detallan las más básicas, con el fin de comprender y utilizar bootstrap.

---

## 9. IMÁGENES RESPONSIVE
Para colocar imágenes adaptables en nuestro sitio web, solo debemos agregar la clase `.img-fluid`, no sin antes haber establecido un `max-width: 100%` y un `height: auto`. De este modo la imágen se escalará respecto al ancho de su contenedor.
```css
    img {
        max-width: 100%;
        height: auto;
    }
```
```html
<img src="" class="img img-fluid" alt="">
```

## 10. COMPONENTES
Bootstrap 5 ya trae incorporados algunos componentes como botones, headers, etc. Los cuales podemos utilizar y personalizar, de este modo podemos maquetar páginas web velozmente. A continuacion nombraremos los componentes actualmente disponibles y explicaremos algunos detalles de su uso, ya que seria una perdida de tiempo explicarlos teniendo disponible la documentación oficial.

### **10.1. Botones:** 
Utilizando la clase `.btn` y asginandola a una etiqueta tipo `<a></a>` o `<button></button>`, podemos reiniciar los estilos en css de estas etiquetas y crear botones genéricos y atractivos.

    Para que las tecnologias de asistencia como los lectores de pantalla, puedan detectar que nuestros botones son especificamente eso, debemos asignarles un parámetro llamado "role", en este caso `role="button"` o `role="group"` según sea el caso. Además los botones, grupos de botones y barras de herramientas deben tener asignado un `aria.label=""` con un nombre explicito (si la etiqueta es una barra de herramientas, como valor del parámetro se colocará toolbar1 por ejemplo). De este modo aseguramos que las tecnologias de asistencia funcionen correctamente.

    Se pueden crear botones de bloque, los cuales ocupen el 100% del largo de su contenedor. Para ello tenemos dos opciones, la primera es la más recomendada y la segunda otra alternativa un poco menos trabajosa.
    ```html
    <!--Método recomendado-->
    <div class="d-grid gap-2">
    <button class="btn btn-primary" type="button">Button</button>
    <button class="btn btn-primary" type="button">Button</button>
    </div>

    <!--Método menos trabajoso-->
    <button class="btn btn-dark w-100">Boton de "Bloque"</button>
    ```

### **10.2. Alerts:** 
Las alertas en bootstrap son contenedores que muestran un mensaje en pantalla (no lo hacen con una ventanilla emergente en la ventana). Estas se indican con la clase `alert`. En general a los alerts se les coloca un color warning (amarillo) o danger (rojo). Se les pueden agregar íconos o algunas funcionalidades simples.

3. Badge: Son pequeños componentes de conteo y etiquetado que se colocan dentro de otros para proporcionar información extra. Su uso más extendido es para colocar la etiqueta de notificación encima de algún elemento. A continuación mostramos dos simples ejemplos de lo anterior.
```html
<button type="button" class="btn btn-primary">
  Notifications <span class="badge bg-secondary">4</span>
</button>

<button type="button" class="btn btn-primary position-relative">
  Inbox
  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    99+
    <span class="visually-hidden">unread messages</span>
  </span>
</button>
```

4. Card: Bootstrap ya trae preparado um modelo estándar de tarjeta. Su uso es muy simple y no tiene mayores complicaciones, debemos acordarnos de colocar siempre un width al contenedor con la clase `.card` para poder dimensionar la tarjeta. Se recomienda que las imágenes a colocar esten previamente dimensionadas para evitar problemas.

5. Listas: Se pueden crear listas no ordenadas en bootstrap las cuales además se pueden utilizar dentro de otros elementos como tarjetas.

6. Collapse: Nos permite que al presionar un boton o un ancla, se despliegue o se "colapse" una seccion con información complementaria.

7. Accordion: Los acordiones son elementos similares al componente collapse y nos permiten generar distintos bloques con la clase `accordion-item` los cuales se comportan como elementos desplegables. Todos los accordion-item deben estár encerrados dentro de un contenedor con la clase `accordion`.

8. Dropdowns: Son menús que se despliegan a través de un boton. Son muy parecidos a los button desplegables que analizamos en el aparado de botones en grupos.

9. Modales: Son pequeñas ventanas emergentes que aparecen superpuestas al resto del contenido de la página web. Estos modales pueden contener texto, botones, etc. Cuando se hace click fuera de la tarjeta del modal este desaparece.
Utilizando static-backdrop podemos hacer que nuestro modal no desaparezca a menos que se presione un boton especifico del mismo. Es decir estamos obligando al usuario a que interactue con nuestro modal.

10. Navbar: Con el uso de bootstrap podemos crear barras de navegación estáticas y responsive de manera muy sencilla, dentro de ellos podemos colocar imagenes, botones menús desplegables, etc.

11. Carrousel: Los carruseles con sliders de imagenes en bootstrap, estos se crean de manera muy sencilla y permiten ser responsive.

12. Spinners: Son aquellas rueditas de carga que aparecen al iniciar una página web. El uso de estos spinners debe estar relacionado con la carga de datos del servidor.

13. Popovers: Son pequeñas tarjetas con información complementaria que aparecen al seleccionar un botón, se utilizan más en aplicaciones para mobile.

14. Tooltips: Son textos de ayuda que aparecen al lado de un botón cuando el componente se encuentre debajo del cursor.

## **10.3.Formularios:**
El uso de formularios en bootsrap no trae mayores problemas, aunque ahora se involucra el uso de javascript para las validaciones y los eventos. Pero esto no aporta ninguna otra complejidad a lo aprendido hasta ahora. Las modificaciones alteran el aspecto visual modificando las clases de los `.form` y sus consecutivos elementos.
Esto mediante el uso de los métodos: `.addEventListener();` o `.documentQuerySelector();`.

---

## 11. PERSONALIZAR BOOTSTRAP CON SASS:
Las personalizaciones de bootstrap con sass vienen dadas de descargar una carpeta de archivos JS y SASS e importar los componentes a utilizar en un archivo SASS propio. Este nuevo archivo SASS al compilarse heredará todos los estilos de SASS de bootstrap además de las personalizaciones que le hayamos hecho. Finalmente esto se exportara en un archivo CSS el cual leera el navegador.
El archivo CSS generado puede llegar a ser muy largo, así que es recomendable solo importar los elementos y componentes que sean pertinentes.

---

Fin del curso, espero sea de mucha útilidad! 😆😆