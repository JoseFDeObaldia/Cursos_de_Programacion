# Curso de Bootstrap 5
Bootstrap 5 es un conjunto de herramientas que nos permiten maquetar páginas web de forma más rápida. Para ello se adosa a nuestro proyecto una carpeta con hojas de estilo y scripts, ya previamente desarrollados por el equipo de bootstrap y de los cuales podemos extraer utilidades, llamar a clases ya creadas, utilizar funciones, etc.

Para darle estilos a nuestras páginas web se basa justamente en asignarle a nuestras etiquetas HTML distintas clases, las cuales ya poseen sus propios estilos. De este modo la codificación es mucho más sencilla.
Cabe destacar que para cada componente, toda la informacion de sus estilos la podemos encontrar en la documentación de bootstrap. 
[Documentacion de Bootstrap 5](URL "https://www.getbootstrap.com")

El comprender esta metodología es comprender
el corazón de bootstrap 5.


## Breakpoints normalizados:
Bootstrap trae personalizados una serie de puntos de quiebre para marcar la diferencias en distintos tipos de pantallas, esto es muy útil al trabajar con diseños web responsive.
1. x-small            ninguno      pantallas <  576px
2. small               "sm"        pantallas >= 576px
3. medium              "md"        pantallas >= 768px
4. large               "lg"        pantallas >= 992px
5. extra large         "xl"        pantallas >= 1200px
6. extra extra large   "xxl"       pantallas >= 1400px

## Container.
Los contenedores son un bloque de construcción fundamental en Bootstrap, ellos agrupan los demas elementos, y alinean el contenido dentro de un dispositivo o ventana gráfica determinada.

Si nosotros asignamos a un bloque contenedor la clase `container`, la hoja de estilos de bootstrap se encargara de darle un margin automatico. El margin asignado sera "responsive" y se adaptara para ser de menor tamaño en dispositivos pequeños, o al contrario, ser proporcionalmente más grande en dispositivos de resoluciones "xl" o "xxl".

Tambien podemos utilizar variantes de container, como `container-lg` o `container-fluid` si deseamos personalizar más esta herramienta.
```html
    <div class="container">
        <h1>Hola mundo</h1>
    </div>

    <div class="container">
        <h1>Hola mundo</h1>
    </div>
```

## Grid - Sistema de Columnas
Los sitios web en bootstrap se van a dividir en doce columnas implicitas que nos permitiran repartir nuestro contenido a lo ancho del monitor.
Veamos un ejemplo: Creemos un div en nuestro navegador el cual tendrá la clase `.row`. Esto le indica a la grid de bootstrap que haremos una nueva fila.
Luego dentro de la fila coloquemos 12 divs más, los cuales van a tener cada uno una clase de `col-1`, esto indica que dentro de esa grilla, cada div tendrá un ancho de una de las doce columnas.
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

## Grid Responsive:
Se puede configurar la grilla para que se acomode de manera responsive a los distintos tipos de tamaño, esto se hace con modificadores de la clase `col-#`.
Con los modificadores diremos a la página web el ancho en columnas de cada elemento especificando en la resolucion en la que se encuentra.

Por ejemplo, si queremos que dos divs ocupen todo el ancho de la página en dispositivos pequeños, pero que en portatiles "md" cada uno ocupe solo 6 columnas y en consecuencia se vean uno al lado del otro. Hariamos lo siguiente.
```html
    <div class="container">
        <div class="row">
            <div class="col-12 col-md-6 border">AAA</div>
            <div class="col-12 col-md-6 border">AAA</div>   
        </div>
    </div>  
```

## Alineacion en flexbox:
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

## Utilidades: Border
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

Para quitar un borde utilizamos las siguientes clases. Notese que debemos colocar el borde para poder quitarlo, esta es la razon de agregar la clase `border` sola. Esto tambien esta presente en la lista anterior con el grosor de los bordes.
````html
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

## Hola
lorem ipsum
