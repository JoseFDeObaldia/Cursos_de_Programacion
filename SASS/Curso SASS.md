# Curso de SASS
Sass es un lenguaje de hojas de estilo que simplemente mejora el lenguaje CSS agregandole caracteristicas de lenguaje de programación. En este breve archivo resaltaremos las mejoras que este nuevo lenguaje le añade a CSS.
Cabe aclarar que se necesita de un compilador que transpile de SASS a CSS ya que el navegador solo lee CSS.

## Variables:
Sirven para guardar datos que vayan a ser recurrentes, no se debe declarar el tipo de variable, solo su nombre y valor. Cuando se trabaja SASS o CSS con frameworks como bootstrap, es usual que haya conflictos con las clases, por ello se puede utilizar la variable brand y darle el valor de la marca o el nombre de la empresa. De este modo al declarar clases podemos agregarle el nombre de la variable al nombre de la clase.
```SCSS
$primary-color: #0511ac;
$font-size-1: 1rem;
$brand: 'udemy';
```
Llamamos a la variable brand para darle a la clase un nombre mas personalizado, el resultado en CSS será la nueva clase: `.udemy__p`. Luego llamamos a la variable $primary-color y le asignamos su valor al atributo color.
```SCSS
.#{$brand}__p {
    color: $primary-color;
}
```

## Nesting:
Sirve para anidar selectores y es muy util para que el código sea legible. Ojo, no debemos pasarnos con las anidaciones. La limitacion que sass nos impone es de anidar hasta tres selectores. Caso contrario el código obtendrá errores.
Veamos un ejemplo del mismo código escrito con CSS y con SASS:
```SCSS
/*Codigo con CSS*/
.card {
    background-color: lightgrey;
    width: 300px;
    height: 250px;
    border-radius: 5px;
    border-color: black;
    border-style: solid;
    border-width: 1px;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: flex-start;
}
.card__title, .card__paragraph, .card__paragraph2 {
    text-align: justify;
    margin: 10px;
}
.card__title {
    color: black;
    font-size: 18px;
    text-align: center;
}
.card__paragraph {
    color: black;
    font-size: 12px;
}
.card__paragraph2 {
    color: grey;
    font-size: 10px;
}

/*Codigo con Nesting de SASS:*/
.card {
    background-color: lightgrey;
    width: 300px;
    height: 250px;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    /*Tambien se pueden anidar propiedades con prefijos iguales.*/
    border: {
        radius: 5px;
        color: black;
        style: solid;
        width: 1px;
    }
    flex: {
        direction: column;
        wrap: nowrap;
    }

    .card__title, .card__paragraph, .card__paragraph2 {
        text-align: justify;
        margin: 10px;
    }
    .card__title {
        color: black;
        font-size: 18px;
        text-align: center;
    }
    .card__paragraph {
        color: black;
        font-size: 12px;
    }
    .card__paragraph2 {
        color: grey;
        font-size: 10px;
    }
}
```

## Placeholder
Otra utilidad importante es el uso del selector placeholder `%`, el cual nos evita sobreescribir propiedades para muchos elementos parecidos, por ejemplo supongamos que tenemos 4 botones que solo cambian su color:
```scss
//codigo genérico para los botones
%boton-generico {
    height: 40px;
    min-width: 100px;
    border: none;
    border-radius: 5px;
    color: #fff;
    font-size: 16px;
    margin: 5px 0px;

    /*el & nos ayuda a seleccionar clases internas, sin tener que escribir de nuevo el selector*/
    box-shadow: 2px 2px 6px 2px rgba(0, 0, 0, 0.2);
    &:hover {
        cursor: pointer;
    }
}
//creamos los botones cambiando solo las propiedades necesarias.
.btn {
    &-primary, &-home, &-login {
        @extend %boton-generico;
    }
    &-primary {
        background-color: green;
    }
    &-home {
        background-color: red;   
    }
    &-login {
        background-color: blue; 
    }
}
```

## Iport:
Con ``@import` podemos añadir estilos de otras hojas de estilo, ya sean CSS o SASS, al documento actual.
```SCSS
//Un ejemplo de importación de mixins.
@import 'componentes/botones.css',
        'componentes/header.scss',
        'componentes/footer.scss';
```

## Mixin:
Los mixins son un preámbulo a las funciones y nos ayudan a reducir nuestro código. Su semántica es la siguiente, escribimos la palabra reservada `@mixin`, luego colocaremos el nombre que en este caso será "boton" y por último colocamos entre paréntesis los parámetros que vamos a utilizar. Seguido a esto se encierra entre llaves todo el código.
```scss
//Creamos el mixin y le pasamos dos parámetros.
@mixin boton($fondo, $letra) {
    background: $fondo;
    color: $letra;

    padding: 8px 15px;
    height: 30px;
    margin: 25px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    text-transform: uppercase;
    font-weight: 800;
    border-radius: 10px;
}

//Incluimos el mixin en cada botón que queremos crear.
.btn-turquesa{
    @include boton(turquoise,black)
}
.btn-gris {
    @include boton(grey, black)
}
```
Con esto configuramos un botón genérico al que invocaremos cada vez que queramos.
Notesé que se utiliza `@include` cuando se hereda especificamente de un mixin, y se utiliza extend cuando se hereda de otro selector.


## Listas y Maps: 
Son arrays que se utilizan para agrupar muchos valores de variables. Su sintaxis es intuitiva por lo que las veremos con un ejemplo:
```scss
//declaracion de variable sin listas.
$primary-color: #0511ac;
$light-color: #ffffff;
$soft-color: #b6b9e9;
$strong-color: #0b1052;
$dark-color: #000;
$orange-color: #e0960c;
$blue-color: #0000ff;

//declaracion de variables con listas.
$colors: $primary-color, $light-color, $soft-color, $strong-color, $dark-color, $orange-color, $blue-color;

//Una forma más avanzada de guardar variables es usando maps.
$palette: (
    'primary-color': #0511ac,
    'light-color': #ffffff,
    'soft-color': #b6b9e9,
    'strong-color': #0b1052,
    'dark-color': #000,
    'orange-color': #e0960c,
    'blue-color': #0000ff
);
```
Con respecto a los mapas, estos se pueden escribir sin comillas y con varias propiedades. Esto se utiliza con sentencias each generalmente.
```scss
$map: (
    "small" 16px 400, "medium" 20px 500, "large" 24px 600, "extra-large" 32px 800
);
```
Otro dato importante de los mapas es que para acceder a los datos en ellos se deben usar funciones especificas.
1. `map-get(map, key)` - Devuelve el valor de una clave dada.
2. `map-has-key(map, key)` - Comprueba si existe un clave determinada dentro del map.
3. `map-keys(map)` - Devuelve una lista con las claves del map.
4. `map-values(map)` - Devuelve una lista con los valores del map.
5. `map-merge(map1, map2)` - Permite fusionar maps.
6. `map-remove(map, keys...)` - Elimina elementos dentro del map..

Uno de los usos más extendidos de maps es con el framework de bootstrap, usandolo por ejemplo en un trozo de código que nos ayude con las interrupciones de tamaño:
```scss
$breakpoints: (
  xs: 0,
  sm: 576px,
  md: 768px,
  lg: 992px,
  xl: 1200px
);

@mixin breakpoint($size) {
  @if map-has-key($breakpoints, $size) {
    @media (min-width: #{map-get($breakpoints, $size)}) {
            @content;
        }
    }
}
p{
  @include breakpoint (xl){
    font-size: 1.5rem;
  }
}
```

## Funciones:
Las funciones son otra de las utilidades que nos incluye sass. Cuando estas se compilan nos dan solo selectores CSS. Estas se diferencian de los mixins porque nos permiten retornar valores y se utilizan para manipular los datos dinamicamente, en cambio los mixins se utilizan para importar bloques de código que sean importantes.
```scss
@function funcionSimple($num: 1000px) {
    @return $num/2;
}

/*Llamamos a la función.*/
.btn {
    width: funcionSimple(750px);
}
```

## Sentencias de control:
Con sass podemos añadir sentencias de control del tipo if-else a los mixins y las funciones. Veamos un ejemplo de esto:
```scss
$light-background: #f2ece4;
$light-text: #036;
$dark-background: #6b717f;
$dark-text: #d2e1dd;

@mixin theme-colors($light-theme: true) {
  @if $light-theme == true {
    background-color: $light-background;
    color: $light-text;
    } @else {
    background-color: $dark-background;
    color: $dark-text;
    }
}

.banner {
  @include theme-colors($light-theme: true);
  body.dark & {
    @include theme-colors($light-theme: false);
  }
}
```


## Sentencia Each:
`@each` nos sirve para iterar estilos de una lista, la semántica de la sentencia each es la siguiente: @each "variable" in "lista", lo que significaria leer cada valor de la variable en la lista de elementos. Luego la sentencia each generara tantos selectores como elementos haya en la lista.
```scss
//Lista de tamaños de fuente para los títulos.
$size-titles: 16, 20, 24, 32;

//con each creamos un selector para cada tamaño de fuente.
@each $size-letter in $size-titles {
    .title-#{$size-letter} {
        font-size: $size-letter * 1px;
    }
}
```
Tambien se pueden iterar mapas, para hacerlo veamos el código siguiente que nos permite lograr 4 selectores, según el nombre del título. Y todo esto con la propiedad de font-size con su valor correspondiente.
```scss
//Tamaños de títulos.
$size-titles: (
    "xs": 16px,
    "md": 20px,
    "lg": 24px,
    "xl": 32px
);

//creando los selectores en bucle.
@each $name, $size in $size-titles {
    .title-#{$name} {
        font-size: $size;
    }
}

//Por último podemos realizar each más complejos donde se modifican varias propiedades leyendo un mapa.
$size-titles: (
    "small" 16px 400, "medium" 20px 500, "large" 24px 600, "extra-large" 32px 800
);
@each $name, $size, $font-weight in $size-titles {
    .title-#{$name} {
        font-size: $size;
        font-weight: $font-weight;
    }
}
```

## Bucle for:
El bucle for nos permite iterar elementos, esto es útil para casos especificos como degradados en una lista de botones, labels, etc. 
```scss
$base-color: #036;

@for $i from 1 through 3 {
  ul:nth-child(3n + #{$i}) {
    background-color: lighten($base-color, $i * 5%);
  }
}
```
Otro ejemplo.
```scss
@function isMultiple10($i){    // Función que comprueba si un numero es multiplo de 10
    @return ($i % 10 == 0);    // Si el resto es 0, lo es.
}
@for $i from 10 through 100{   // Bucle que va de 10 a 100
    @if(isMultiple10($i)){     // y por cada numero comprobará si "i" es multiplo de 10,
        .spacer-#{$i}{         // en caso afirmativo creara la clase .spacer-"xx"
            height: 0px + $i;  // con un tamaño relativo al numero por el que avanza el bucle.
        }
    }
}
//Esto, en el CSS normal que se genera, sería algo como…
.spacer-10 { height: 10px; }
.spacer-20 { height: 20px; }
.spacer-30 { height: 30px; }
.spacer-40 { height: 40px; }
.spacer-50 { height: 50px; }
.spacer-60 { height: 60px; }
.spacer-70 { height: 70px; }
.spacer-80 { height: 80px; }
.spacer-90 { height: 90px; }
.spacer-100 { height: 100px; }
```
El uso que se le puede dar a lo anterior es cualquiera, desde objetivos sencillos como el anterior, a cosas más elaboradas usando escalas de colores por ejemplo. Lo que sea que necesite una iteración.

## Sentencia While:
Otra sentencia de control muy utilizada es `while`, en general es usada para animaciones y elementos complejos. En este caso la usaremos para que genere una tarjeta que mantenga la proporcion aunque se varie el ancho.
```scss
$proporciones: (
    "widescreen": 16 9,
    "Cinemascope": 14 6,
    "Square": 1 1,
    "Vertical": 5 4
);

@each $name, $horizontal, $vertical in $proporciones {
    .video-format-#{$name} {
        width: $horizontal * 1px;
        height: $vertical *1px;
    }
}
@function scale($value, $ratio) {
    map-get: ($proporciones, $width $height);
    @while $value > $max {
        $value: $value / $ratio;
    }
    @return $value;
}

.card {
    width: 250px;
    height: scale(250px, widescreen);
    background-color: grey;
}
```

## Sentencia use y su diferencia con import:
Sentencia `@use` vs `@import`: En archivos grandes es conveniente importar código de otras hojas de estilos, esto se hace con import o con use, aunque entre ellos hay diferencias.

La diferencia principal es que `@import` importa las variables y les da un alcance global, por lo que se tiene acceso a ellas desde cualquier hoja de estilos enlazada. En cambio con `@use` las variables solo estan disponibles desde el archivo en el que se declara la sentencia.

Fin del curso de SASS...