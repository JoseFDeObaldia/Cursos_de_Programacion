# Curso de Javascript - Nivel Basico
Este es un curso de Javascript completo, siguiendo los contenidos del edutuber "Lucas Dalto".

## Variables:
Las varables son espacios que los programadores reservamos en la memoria RAM de  nuestro ordenador para poder guardar datos de manera temporal y usarlos en el programa.
Existen dos tipos de variables, las globales, que se declaran con "var" y las locales, restringidas al bloque de codigo en donde se definen, que se declaran con "let". 
En Javascript el tipo de dato no se escribe, pero este se inicializa al declarar la variable, es decir no tenemos que decirle que la variable sera un "string", pero una vez que la inicializamos dandole un string, no podemos almacenar en ella un "int" o un "boolean".

```javascript
var recipiente = 'papel';
let variableLocal = 553;
let number1 = 6, number2 = 2, number3 = 39;
let numero = null;
```
Dandole el valor de inicio "null", inicializamos la variable sin forzar un valor por defecto.

## Constantes:
Se declaran con const y deben inicializarse obligatoriamente.
```javascript
const numero = 2;
```

## alert(); y prompt();
Son funciones para mostrar alertas. Con "alert();" generamos alertas emergentes en la pagina web y con "prompt();" mostramos una alerta emergente que además cuente una casilla de texto dentro. Esto último nos permite pedirle datos al usuario.
```javascript
var nombre = prompt("Hola, ¿como te llamas?");
alert("Hola" + nombre) + "¿Que tal tu dia?";
```

## Operadores de Asignacion: 
Un operador de asignacion asigna un valor al operando de la izquierda basado en el valor del operando de la derecha.
```javascript
let numero = 10;
numero = 5;     //Asignacion
numero += 5;    //Asignacion de Adicion
numero -= 5;    //Asignacion de Sustraccion
numero *= 5;    //Asignacion de multiplicacion
numero /= 5;    //Asignacion de division
numero %= 5;    //Asignacion de resto
numero **= 5;   //Asignacion de exponenciacion
```

## Operadores Aritmeticos.
Son operadores que toman valores numericos (ya sean literales o variables) como sus operandos y retornan un valor numerico unico.
```javascript
let num1 = 10, num2 = 5;
num1 + num2; //adicion
num1--; //sustraccion
num2++; //incremento
num1 + num2; //suma de dos valores
num1 / num2; //division de dos valores
num1**num2;  //potencia de base num1
num1 * num2; //producto
num1 - num2; //resta
```

## document.write();
La funcion "document.write();" es una funcion simple para imprimir texto con o sin codigo HTML en la pantalla.

## Forzar un String:
Supongamos que tenemos las siguentes dos variables de tipo entero "int".
```javascript
let num1 = 53, num2 = 8;
frase= "" + num1 + num2;
document.write(frase);
```
Si deseamos imprimirlas en pantalla, una al lado de la otra, es decir como si de una cadena de texto se tratara, podemos hacerlo colocando unas comillas vacias al inicio.

## Concatenacion.
En javascript existen dos formas de concatenar. La primera consiste en utilizar el operador de adicion "+" como se hace comunmente. O hacerlo encerrando todo entre backticks simples y colocando a las variables dentro de estructuras como la siguiente: ${}
```javascript
let nombre = "Juancito";
frase = "Soy" + nombre + ", y estoy caminando";
frase = `Soy ${nombre} y estoy caminando`;
document.write(frase);
```

## Escape de Comillas: 
Supongamos que queremos imprimir una cadena de texto que contenga comillas dentro de ella, ya que esto generaria un problema de interpretación para la máquina se han generado dos reglas para sortearlo.
1. Si se desea usar comillas dobles "" en nuestra oracion, debemos encerrar el string con comillas simples.
2. Si queremos colocar comillas simples en nuestra oracion, debemos encerrar todo el string con comillas dobles.
```javascript
frase = "mi nombre es 'lucas', ¿que tal todo?"
frase = 'mi nombre es "lucas", ¿que tal todo?'
document.write(frase);
```


## Operadores Lógicos:
Son operadores que se utilizan entre variables y nos permiten realizar validaciones logicas. Este código imprime las validaciones en la pantalla ya que usa la función "document.write();".
```javascript
//Generamos dos numeros que utilizaremos para las validaciones.
let num1 = 23;
let num2 = "13";

//Con el operador == validamos si su valor es igual.
document.write(num1 == num2);

//Con el operador != validamos si su valor es desigual.
document.write(num1 != num2);

//Con los operadores === y !== validamos si son estrictamente iguales o desiguales respectivamente, es decir validamos la igualdad o desigualdad del valor y la igualdad o desigualdad del tipo de dato.
document.write(num1 === num2);
document.write(num1 !== num2);

//Con > validamos si num1 es mayor a num2. 
document.write(num1 > num2);

//Con > validamos si num1 es menor a num2.
document.write(num1 < num2);

//Con > validamos si num1 es mayor o igual a num2.
document.write(num1 >= num2);

//Con > validamos si num1 es menor o igual a num2.
document.write(num1 <= num2);
```
Notese que todos los operadores lógicos trabajan devolviendo valores booleanos, es decir valores de true o false.

Otros operadores lógicos de compraración son los siguientes.

Operador AND: si las dos afirmaciones son verdaderas devuelve true, caso contrario devuelve false.
```javascript
afirmacion1 = num1 < num2;
afirmacion2 = num1 != num2;
document.write(afirmacion1 && afirmacion2);
```
Operador OR, si al menos una afirmacion es verdadera, devolvera true, sino devolvera false.
```javascript
afirmacion1 = num1 < num2;
afirmacion2 = num1 == num2; //esto es falso
document.write(afirmacion1 && afirmacion2);
```
Operador NOT, devuelve el valor opuesto, es decir que si la afirmacion1 es verdadera, el operador not devolvera false.
```javascript
afirmacion1 = num1 < num2;
afirmacion2 = num1 != num2;
document.write(!afirmacion1);
```


## Sentencia Condicional "if-else":
Son estructuras que engloban porciones de codigo y se ejecutan cuando una condicion es verdadera. La condicion a usar debe dar un valor booleano.
```javascript
nombre1 = "juancito";
nombre2 = "pedro";

if (nombre1 == nombre2) {
    alert("Los nombres son idénticos");
} else {
    alert(`Los nombres: ${nombre1} y ${nombre2} son distintos`);
}
```

## Arrays:
Son arreglos de datos donde se pueden almacenar muchas variables, en ellos no importa el tipo de variable ya que los espacios en memoria aceptan todo tipo de datos.
```javascript
arrayDeEjemplo = ["pedro", false, 24, "Buenos Aires", 1.90, "Manzana"];

document.write(arrayGenerico); //Imprimimos todo el array.
document.write(arrayGenerico[0]); //Imprimimos el primer elemento del array, es decir el elemento con la posicion cero.
```

Array Asociativo: Es un array que asocia cada dato con un identificador y este identificador reemplaza al numero de posicion. Al usar arrays asociativos tenemos la ventaja de que la toma de datos datos es mucho más intuitiva.
```javascript
//Generamos un array llamado "pc".
let pc = {
    nombre: "Juanito-PC",
    procesador: "Intel Core I7",
    ram: "16GB",
    almacenamiento: "1Tb",
    pantalla = "16 pulgadas",
    sistema: "Windows 10"
}

//Imprimimos el array, para ello debemos guardar los datos en una serie de varables que luego mandaremos a llamar, dentro de la funcion "document.write();".
let nombre = pc["nombre"], procesador = pc["procesador"], ram = pc["ram"], almacenamiento = pc["almacenamiento"], pantalla = pc["pantalla"], sistema = pc["sistema"];

frase = `El nombre de la PC es: ${nombre} <br>
         El procesador es: ${procesador} <br>
         La memoria RAM es: ${ram} <br>
         El almacenamiento en disco es: ${almacenamiento} <br>
         El tamaño de la pantalla es: ${pantalla} <br>
         El sistema operativo es: ${sistema} <br>`;

document.write(frase);
```

## Bucles:
Son estructuras sintácticas que nos permiten ejecutar porciones de codigo de manera iterada, mientras se cumpla una condicion. La misma debe retornar valores booleanos.

Bucle While: Es un bucle no definido que se ejecuta siempre que la condicion retorne "true", la sentencia break nos permite cortar la ejecucion del bucle y salir de el.
```javascript
numero = 0;
while (numero < 1000) {
    document.write(numero);
    numero++;

    if (numero == 10) {
        break;
    }
}
```

Sentencia do-while: Este bucle es una variacion del bucle while y nos garantiza que la iteracion se ejecute al menos una vez, ya que ejecuta las instrucciones y luego verifica que la condicion se siga cumpliendo.
```javascript
numero = 0;
do {
    document.write(numero + "<br>");
    numero++;
} while (numero > 6); 
```

Bucle for: Este es un bucle del tipo definido, es decir que se le asigna un numero de ejecuciones especifico. Para utilizarlo, en el apartado de la condicion se declara una variable contador que se llama "index" o "i", luego se escribe la condicion separada por comas y por último se escribe el incremento o decremento tambien separado por comas.
```javascript
for (let i = 0; i < 10; i++) {
    document-write(i + "<br>");

    if (i == 7) {
        break;
    }
    if (i == 4) {
        continue;
    }
}
```
La sentencia break tambien funciona aquí. Luego la sentencia continue tiene la funcionalidad de "saltarse" el bucle de instrucciones en el valor especificado de "i", y luego proseguir con la siguiente vuelta.


Sentencias "for in" y "for of": Son dos sentencias que nos permiten trabajar con arreglos. Con "for in" asignamos una variable contador que recorra el arreglo (en este caso el arreglo es animales), y luego devolvemos la posicion de cada elemento en el arreglo.
let animales = ["gato", "perro", "perico", "cobayo"];
```javascript
for (animal in animales) {
    document.write(animal + "<br>");            //Posicion de cada elemento en el arreglo.
    document.write(animales[animal] + "<br>");  //Valor de cada elemento en el arreglo.
}
```
Con "for of" podemos mostrar el valor de cada elemento de manera más directa.
```javascript
for (animal of animales) {
    document.write(animal + "<br>");
}
```

## Funciones:
Son trozos de codigo que se pueden reutilizar al invocarlos. Su sintaxis es sencilla, se declaran con la palabra "function" y se les coloca un nombre, luego se le pasan parámetros a traves de un par de paréntesis y por último se escribe el código a reutilizar encerrado entre llaves. 
Tambien es posible hacer que la funcion retorne un valor utilizando la sentenia "return();", cabe aclarar que esta sentencia además finaliza la ejecucion de la funcion.
```javascript
function funcionSuma(num1 , num2) {
    let resultado = num1 + num2;
    document.write(resultado + "<br>");

    return resultado;
}
```
Algunas aclaraciones para el uso de funciones:
1. Las variables declaradas en los paréntesis tienen alcance regional y solo existen en la funcion, por lo que no es necesario colocar let.
2. Las variables declaradas dentro de la funcion si necesitan el let para ser regionales, de no colocárselo las mismas serán de alcance global y pueden traer problemas de conflictos.

Para llamar a la funcion y ejecutarla debemos simplemente invocar su nombre y pasarle los parámetros a través de los paréntesis.
```javascript
funcionSuma (3, 2);                    //Llamando a la funcion.
let valorRetorno = funcionSuma (6,3);  //Llamando a la funcion y guardando el valor de retorno en una variable.
```

## Conceptos de POO:
La programación orientada a objetos es un paradigma de programacion en donde se busca crear elementos funcionales de manera sencilla e intuitiva. Para ello creamos en primera instancia clases o plantillas generales, que nos permitan objetos diversos pero con cualidades o atributos similares y luego utilizar funciones o métodos para que nuestro objeto adquiera funcionalidad. 
Su utilidad es que podemos resumir mucho código de forma intuitiva.

1. Clase: Es una porción de código que contendra todas las características o atributos de nuestro objeto (las variables), y todas las cosas que puede hacer nuestro objeto (los métodos). Se utiliza como una base para objetos genéricos. Por ejemplo podemos crear una clase "usuario();" la cual tendra los métodos "notificar();", "consultarSaldo();", "modificar¨Perfil();" y "verCompras();".
2. Objeto: Es el resultado de instanciar nuestra clase, es decir el elemento que surge cuando llamamos a una clase y la usamos. Este elemento nuevo es un objeto propiamente dicho.
3. Atributos: Son todas las caracteristicas que tendra nuestro objeto, es decir las variables. Estas se declaran en la "plantilla" clase, dentro de una funcion especial llamada contructor.
4. Metodos: Los métodos son simplemente funciones clásicas, solo que tienen una sintaxis especial que unicamente se puede usar dentro de la clase.
5. Constructor: Es una funcion especial y obligatoria que debe tener cualquier clase, aqui se inicializan las variables o atributos que tendrá nuestro objeto.
6. Métodos estaticos, son métodos que se pueden utilizar sin necesidad de definir ningún objeto. Se los puede llamar y usarlos sin antes crear al objeto.
7. Polimorfismo: Es la capacidad de un objeto de comportarse de manera distinta dependiendo de los valores de las variables o atributos.
De esta manera podemos crear un método "notificar();" en una clase "user();" y hacer que este método envie un mail, un whatsapp o un mensaje de texto dependiendo de los atributos que tenga el objeto creado. Por ejemplo un usuario cuyos atributos nos digan que no tiene email o whatsapp pero si un numero de telefono, sera notificado de las novedades solo por mensajes de texto.
8. Herencia: Es la capacidad de heredar metodos y atributos de otra clase, y usarlas en la nuestra.
9. Abstraccion: Es una forma de programar clases en donde se busca definir un objeto con las mínimas lineas de codigo, métodos y atributos posibles.
10. Encapsulamiento: Es declarar nuestras variables de maneras protegidas o privadas, para que los demás objetos o los usuarios inclusive, no puedan acceder a ellos. Esto es por seguridad y para evitar conflictos.
11. Setter y getter: Los setters son métodos para modificar los atributos de un objeto, con la sentencia "set" definimos o modificamos un atributo, y con la sentencia "get" retornamos el valor de un atributo.


Realizemos con lo anterior un ejemplo de clase genérica. Esta clase sera la "plantilla" para crear animales.
```javascript
//Declaramos una nueva clase de nombre "animal".
class animal {

    //Elemento constructor, donde declaramos las variables.
    constructor(especie, edad, color) {

        //Inicializamos variables a usar en la clase con this.nombreDeLaVariable = valor; esta sintaxis solo se usa dentro de las clases.
        this.especie = especie;
        this.edad = edad;
        this.color = color;

        this.info = null;
    }

    //Método o función para saludar, el objeto nos va a decir sus características.
    saludar() {
        info = `Soy un ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}.`;
        document.write(this.info + "<br>");
    }

    //Método con polimorfismo. El método se comporta de manera distinta dependiendo de la especie.
    ladrar() {
        if(this.especie == perro) {
            document.write("<b>¡WaW!<b><br>");
        } else {
            document.write("El animal no puede ladrar ya que es un" + this.especie + "<br>");
        }
    }
    //Método estático de ejemplo.
    static buenosDias(){
        alert("Hola, buenos dias");
    }

    //Métodos setter y getter:
    set setModificarEspecie(newName){
        this.especie = newName;
    }
    get getEspecie() {
        return this.especie;
    }
}
```
Es importante resaltar que:
1. Las variables declaradas dentro de los paréntesis y que utilizamos para recibir los parámetros, son distintas a las variables que se inicializan en el constructor. Por esto debemos igualarlas.
2. Las "arrow-function" no funcionan dentro de las clases.
3. No podemos nombrar a ningún objeto con el mismo nombre de la clase utilizada.

Para utilizar la clase "animal" empleamos la siguiente sintaxis.
```javascript
//Instanciamos la clase animal y creamos tres objetos con sus atributos.
const perro = new animal("perro", "5 años", "marrón");
const gato = new animal("gato", "2 años", "negro");
const perico = new animal("perico", "1 año", "verde");

//Imprimimos el valor del atributo color, del objeto "perro".
document.write(perro.color);

//Imprimimos la información de los atributos del  objeto "perro".
document.write(perro.info + "<br>");

//Ejecutamos el método saludar para cada objeto animal.
perro.saludar();
gato.saludar();
perico.saludar();

//Llamamos al método que posee polimorfismo.
perro.ladrar();   //Si el objeto tiene la especie perro se imprimira ¡WaW!, caso contrario se dirá que el objeto no puede ladrar.
perico.ladrar();  //En el caso del perico, se dirá que este animal no puede ladrar.

//Uso de un método estatico, no hace falta llamar a ningún objeto, la funcion simplemente se ejecuta llamando al método e indicandole la clase que lo contiene.
animal.buenosDias();

//Uso del setter. Para usarlo lo hacemos como si fuera una propiedad más.
perico.setModificarEspecie = "canario";
//uso del getter.
document.write(perico.getEspecie);
```
Utilizemos ahora conceptos de Herencia en nuestras clases, para ello utilizamos la palabra reservada extends.
```javascript
//Creamos una clase "dog" que extienda a la clase "animal".
class dog extends animal {
    constructor(especie,edad,color,raza) {
        //Con la siguiente sentencia indicamos que los atributos especie, edad y color. Se heredan de la clase animal.
        super(especie,edad,color);

        //El nuevo atributo raza lo declaramos de la manera tradicional.
        this.raza = raza;
    }
}
```
Utilicemos nuestra clase "dog", recien creada:
```javascript

//Creamos un objeto perrito de la clase dog, vemos que podemos usar los métodos de la clase animal sin ningun problema.
const perrito = new dog("perro","2 años","gris","doberman");
perrito.saludar();
perrito.ladrar();
```


## Métodos de Cadenas.
Son métodos para modificar las cadenas de texto o "string".
/*  .concat() - junta dos o más cadenas y retorna una nueva.
    .startWidth() - si una cadena termina con los caracteres de otra cadena, devuelve true, sino devuelve false.
    .includes() - si una cadena puede encontrarse dentro de otra cadena, devuelve true, sino devuelve false.
    .indexOf() - evuelve el indice del primer caracter de la cadena que le pasamos por parámetro en la cadena principal, si no existe, devuelve -1. Lee desde izquierda a derecha
    .lastIndexof() - devuelve el indice del primer caracter de la cadena que le pasamos por parámetro en la cadena principal, si no existe, devuelve -1. Lee desde derecha a izquierda.

    .repeat() - devuelve la misma cadena pero repetida la cantidad de veces especificada.

    .split() - divide la cadena como le pidamos. Nos devuelve un array.
    .substring() - Nos retorna un pedazo de la cadena que seleccionamos.
    .toLowerCase() - convierte una cadena a minuscula.
    .toUpperCase() - convierte una cadena a mayuscula.
    .toString() - convierte una cadena a string.
    .trim() - elimina espacios en blanco al principio y al final de una cadena.
    .trimEnd() - elimina los espacios al final de una cadena.
    .trimStart() - elimina los espacios en blanco al inicio de una cadena.
    .valueOf() - retorna el valor primitivo de un objeto string.
*/

//METODOS DE CADENAS: Son métodos para modificar los Arrays.
/*  .pop() - elimina el ultimo elemento de un array y lo devuelve.
    .shift() - elimina el primer elemento de un array y lo devuelve.
    .push() - Agrega un elemento al array al final de la lista.
    .reverse() - invierte el orden de los elementos en el array.
    .unshift() - agrega uno o más elementos al inicio del array y devuelve la nueva longitud del array.
    .sort() - ordena los elementos de un array localmente y devuelve el arreglo ordenado alfabeticamente.
    .splice() - cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.

    .join() - une todos los elementos de una matriz en una cadena y la devuelve.
    .slice() - devuelve una parte del array dentro de un nueo array empezando por inicio hasta fin (fin no incluido).

    .filter() - ejecuta la funcion indicada por parámetros, una vez por cada elemento del array, y nos genera un nuevo array. Se pueden filtrar los elementos con operadores logicos.
    .forEach() - ejecuta la funcion indicada, una vez por cada elemento del array. Nos devuelve un nuevo array.
*/

//Objeto math(): es una funcion que nos resume muchas funciones matemáticas.
/*  .sqrt() - devuelve la raíz cuadrada positiva de un número.
    .cbrt() - devuelve la raíz cúbica real de un número.
    .max() - devuelve el mayor de cero o más numeros.
    .min() - devuelve el menor de cero o m´s numeros.
    .random() - devuelve unn número pseudo-aleatorio entre 0 y 1.
    .round() - redondea un número al entero más cercano.
    .fround() - devuelve la representacion flotante de precision simple más cercana de un número.
    .floor() - devuelve el mayor entero menor que o igual a un número.
    .trunc() - devuelve la parte entera del número x, la eliminación de los dígitos fraccionarios.

    .PI - nos devuelve el valor de Pi.
    SQRT1_2 - raiz cuadrada de un medio.
    SQRT2 - raiz cuadrada de 2.
    .E - constante de euler.
    .LN2 - logaritmo neperiano base 2.
    .lN10 - logaritmo natural base 10.
    .LOG2E - logaritmo de E, base 2.
    .LOG10E - logaritmo de E, base 10.
*/

//Uso y funciones de la consola. En la consola se puede escribir codigo javascript y se ejecutará con el código normal.
console.assert(5 > 3); //nos da un mensaje de error si la condicion es falsa. No se usa más.
console.clear(); //limpia la consola.
console.error("Error"); //Muesta un mensaje de error. 
console.info("Mensaje Informativo"); //muestra un mensaje informativo.
console.log("Mensaje Depurativo"); //muestra un mensaje depurativo.
console.table(array); //toma un argumento obligatorio: data, que debe ser un array o un objeto, y un parámetro adicional: columns. Y nos muestra una tabla en consola.
console.warn("Mensaje de Advertencia"); //da un mensaje de advertencia. No se usa más.
console.dir(objeto); //despliega una lista interactiva de las propiedades del objeto javascript especificado. No es estandar.

console.count(Math.PI); //nos dice cuantas veces se ejecuto la funcion que le pasamos por parámetros.
console.countReset(); //resetea el contador.

console.group("grupo1"); //crea un grupo en la consola, donde podemos escribir pedazos de código.
console.groupEnd(); //elimina el grupo seleccionado.
console.groupCollapsed(); //nos muestra el grupo de instrucciones sin colapsarlo, es decir cerrado.

console.time(); //inicia un temporizador.
console.timeLog(); //registra el valor actual de un temporizador.
console.timeEnd(); //detiene un temporizador y nos devuelve el tiempo que paso.

//DOM: El DOM es la estructura de objetos que genera el navegador cuando se carga un documento y se puede alterar mediante Javascript para cambiar dinámicamente los contenidos y aspecto de la página. DOM es una abreviatura de Document Objet Model.

//Nodo: Es cualquier etiqueta del cuerpo del documento, como un parrafo o los imputs.
//HTML o Document: Es el nodo raíz del cual salen todos.
//Los comentarios y los atributos de las etiquetas definen nodos, pero lo veremos solo como informacion asociada al elemento HTML.

//Métodos de seleccion de elementos: Son formas de seleccionar elementos. Se aplican al documento.
const valor = document.getElementById("idDelElementoHTML"); //selecciona un elemento por ID.
const valor = document.getElementsByTagName("p"); //nos devuelve una coleccion de elementos "p", esto es porque un una página web puede haber varios elementos.
const valor = document.querySelector(".card .parrafoPrincipal"); //selecciona el elemento que coincida con los selectores CSS dados.
const valor = document.querySelectorAll(".parrafo"); //nos selecciona todos los elementos con la clase parrafo y nos devuelve una lista de nodos.

//Métodos para definir, obtener y eliminar valores de atributos. Se aplican al elemento
const inputEnHTML = document.querySelector(".claseImput");

inputEnHTML.setAttribute("type", "text"); //.setAtribute(); modifica el valor de un atributo. En este caso cambia el tipo del imput

var valorDelAtributo = inputEnHTML.getAttribute("type"); //.getAtribute(); devuelve el valor de un atributo. En este caso devuelve el valor del atributo.

inputEnHTML.removeAttribute("type"); //remueve el atributo seleccionado de un elemento. Ahora el input no tiene "type".

//ATRIBUTOS GLOBALES: Son los atributos que poseen todos los elementos HTML. Se los utiliza dentro de los métodos de seleccion de elementos

/*
class - lista de clases del elemento separadas por espacios.
contentEditable - indicamos si el elemento puede ser modificable por el usuario. Valor Booleano
dir - indica la direccionalidad del texto.
hidden - indica si el elemento aún no es, o ya no es relevante.
id - define un identificado único.
style - contiene declaraciones de estilo CSS para ser aplicadas al elemento.
tabIndex - indica si el elemento puede obtener un focus de input. Es decir si se puede seleccionar o no.
title - contiene un texto con informacion relacionada al elemento al que pertenece.
*/

//ATRIBUTO STYLE: este atributo nos permite enviar código CSS.
const titulo = querySelector(".titulo");
titulo.style.color = red;
titulo.style.color = "#fff";
titulo.style("color", "#fff");

titulo.style.backgroundColor = "#000"; //notese que a las propiedades en CSS como background-color, para escribirlas en javascript, debe hacerse con camel case, quedando backgroundColor.

//CLASSLIST. Es un método o funcion con muchas funciones menores, nos permite modificar elementos.
titulo.classList.add("grande"); //añade una clase, en este caso la clase "grande".
titulo.classList.remove("grande"); //remueve una clase, en este caso la clase "grande".
let valor = titulo.classList.item(2); //devuelve la clase del índice especificado, si hay tres clases devolvera la segunda y la guardara en la variable valor.
titulo.classList.contains("grande"); //verifica si el elemento posee o no, la clase especificada. Devuelve un valor booleano.
titulo.classList.replace("grande", "chico"); //reemplaza una clase por otra. En este caso la clase "grande" por la clase "chico". Si la clase "grande" no existe, nos devuelve true.
titulo.classList.toggle("grande", true); //Si no tiene la clase especificada, la agrega, si ya la tiene, la elimina. Trabaja con valor booleano. El segundo parámetro es opcional y es para forzar que deje o quite la clase siempre, con "true" deja siempre la clase y con "false" elimina siempre la clase. Este segundo parámetro no lo soportan todos los navegadores antiguos.

//ObTENCION Y MODIFICACION DE ELEMENTOS:
let result = titulo.textContent; //devuelve el texto de cualquier nodo, sin el estilo CSS.
let result = titulo.innerHTML; //devuelve el contenido de un elemento. Se lo puede pasar por consola.
let result = titulo.outerHTML; //devuelve el código HTML completo del elemento. Se lo puede pasar por consola.

//CREACION DE ELEMENTOS:
const item = document.createElements("LI"); //creamos un elemento "li";
const textoDelItem = document.createTextNode("Este es un item de la lista"); //creamos un nodo con texto.
const fragmento = document.createDocumentFragment(); //creamos una porcion de código HTML. La ventaja de esto es que podemos crear muchos elementos y agregarlos solo una vez. De este modo la PC no tiene que regenerar la interfaz cadda vez que se agrega algo.

//un uso práctico de createDocumentFragment() para crear 20 elementos "li".
const contenedor = document.querySelector(".contenedor");
const fragmento = document.createDocumentFragment();
for (let i = 0; i < 20; i++) {
    const item = document.createElement("LI");
    item.innerHTML = "Este es un item de la lista";
    fragmento.appendChild(item);   
}
contenedor.appendChild(fragmento);
document.write(contenedor);

//METODOS DE CHILDS: Son métodos que se aplican especificamente a los hijos de algún elemento.
const primerHijo = contenedor.firstChild(); //nos devuelve el primer hijo del contenedor, tambien cuenta como elementos a los espacios en blanco.
const ultimoHijo = contenedor.lastChild(); //nos devuelve el ultimo hijo del contenedor, tambien cuenta como elementos a los espacios en blanco.
const elementoHijo = contenedor.firstElementChild(); //nos devuelve el primer elemento hijo. No tiene en cuenta los espacios.
const elementoHijo = contenedor.lastElementChild(); //nos devuelve el ultimo elemento hijo. No tiene en cuenta los espacios.
const elementoHijo = contenedor.childNodes(); //nos devuelve todos los nodos hijos en un node list, cuenta los espacios.
const elementoHijo = contenedor.children(); //nos devuelve todos los elementos secundarios, no cuenta ni los espacios, ni el texto, ni los comentarios. Lo devuelve en un HTML collection.

const h2_antiguo = document.querySelector(".h2");
const h2_nuevo = document.createElement("H2");
const parrafo = contenedor.replaceChild(h2_nuevo, h2_antiguo); //con replaceChild reemplazamos en el contenedor el h2_antiguo y colocamos el h2_nuevo.

contenedor.removeChild(h2_nuevo); //eliminamos el elemento h2_nuevo del contenedor.

let respuesta = contenedor.hasChildNodes(); //verifica si el contenedor tiene elementos hijos o no. Si tiene hijos devuelve true, sino devuelve false.
if(respuesta == verdadero) {
    alert("Contenedor tiene hijos");
} else {
    alert("Contenedor no tiene hijos");
}

//PROPIEDADES DE PARENTS:
console.log(h2_antiguo.parentElement()); //Esta propiedad selecciona el elemento HTML padre de un hijo especificado.
console.log(h2_antiguo.parentNode()); //Esta propiedad selecciona el nodo padre de un hijo especificado. Sirve para casos puntuales donde el padre no es una etiqueta HTML.

//PROPIEDADES DE SIBLINGS, ELEMENTOS HERMANOS:
console.log(h2_antiguo.nextSibling()); //muestra el siguiente nodo hermano.
console.log(h2_antiguo.previousSibling()); //muestra el anterior nodo hermano.
console.log(h2_antiguo.nextElementSibling()); //muestra el siguiente elemento hermano.
console.log(h2_antiguo.previousElementSibling()); //muestra el anterior nodo hermano.


//CLOSEST. Selecciona el elemento ascendente mas cercano con la clase que coincida con nuestro selector.
const div = document.querySelector(".div__3");
console.log(div.closest(".div__3")); //en este caso guardamos en la variable "div" un div__3 que esta encerrado dentro de un div__2. Usando la propiedad closest se imprimiría en pantalla "div__2".