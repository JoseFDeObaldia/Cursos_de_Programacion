Esta es la sección avanzada del curso de JavaScript del edutuber Lucas Dalto. Aquí veremos la mayoria de las API más utilizadas en el desarrollo front-end.

## Prototipos:
La programación basada en prototipos es un estilo de programacion, en donde los objetos se crean por herencia de otros objetos prototipos, más que por instanciacion de los mismos.
Todos los elementos en javascript son objetos, y los mismos tienen una coleccion de propiedades heredadas de otros objetos más primitivos, llamados objetos prototipo.

Un ejemplo de esto son las variables, las cuales al declararse heredan dos prototipos, el prototipo correspondiente al tipo de dato y el prototipo object. Este último es el prototipo más general de todos.

Con el siguiente código podemos imprimir el consola los dos prototipos asociados a la variable "valor". El prototipo number y el prototipo object.
```javascript
let valor = 5;
console.log(valor.__proto__);
```

Luego existen otros elementos en javascript como las funciones, las cuales nos dejan a nuestro criterio su prototipo. Es decir nosotros creamos sus prototipos (el prototipo object se mantiene de todos modos).

```javascript
const f = function(){};

console.log(f.__proto__); //Este comando no nos devolvera ningún prototipo. Porque no estamos utilizando ningún prototipo heredado (excepto el object, el cual es el prototipo por defecto). Simplemente lo creamos nosotros.

console.log(f.prototype); //Este comando nos devolverá el prototipo de la funcion, el cual nosotros habremos creado. 

//Luego para acceder al prototipo object deberiamos escribir.
console.log(f.prototype.__proto__);
```

## Caracteristicas de los Prototipos.
1. Un prototipo definido en su código fuente es mutable. Es decir que si definimos un prototipo en nuestro código lo podemos modificar.
2. Los prototipos contienen propiedades y pueden almacenar funciones. Por lo que estos son en sí, un objeto.
3. Tienen una existencia física en la memoria de la computadora, es decir ocupan espacio.
4. Pueden ser modificados y llamados.
5. Pueden ser vistos como un modelo ejemplar de una familia objeto.
6. Un objeto hereda propiedades (valores y métodos) de su prototipo.

## Crear un prototipo desde cero.
