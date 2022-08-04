# Curso de React:
Este archivo es  un resumen de los cursos de react impartidos tanto por el instructor Nicolas Schurmann y el edutuber del canal Bluuweb.

## Estructura de un proyecto en React:
Los proyectos en react poseen muchos módulos que nos ayudan en la producción y compilación de código. Explicaremos brevemente la estructura de archivos de un proyecto, a modo de entender como estamos trabajando.
Todos los archivos se guardarán dentro de una carpeta, en este caso la llamaremos "mi-app", luego el arbol de archivos es el siguiente.
- mi-app
    - .git/
    - node_modules/
    - public
        - index.html
        - robots.txt
        - manifest.json
    - src
        - index.js
        - index.css

        - componentes
            - titles.js
            - cards.js

    - .gitignore
    - package.json
    - .readme.md

A tener en cuenta:
1. En la carpeta "public" se encuentran todos los archivos que serán publicos al usuario, por ejemplo en "index.html" o el "robots.txt".
2. En la carpeta "src" se encuentran todos los archivos con los que realmente trabajaremos, aquí están los archivos javascript y los archivos css.
Todo el código que utiticemos deberá estar relacionado al archivo index.js.
3. Otros archivos que se agregan en la carpeta "mi-app" son el gitignore, en donde ya vienen configurados los archivos de produccion que no se deben elevar a la nube, el package-lock.json donde se encuentran todas las dependencias instaladas con su respectiva url. Tambien encontramos el package.json que contiene archivos normales de configuración y el readme.md.

Se debe resaltar que en react lo que sucede es que, todo el código HTML y CSS, con el cual mostramos cosas en la pantalla del usuario, es enviado a través de scripts de javascript. Es decir, los elementos que mostramos en nuestra app son renderizados en tiempo real. Entender esto es entender la basse de React.

En el archivo index.js se encuentra la lógica que toma todo el código que le enviemos y lo renderiza a html y css para enviarlo al usuario. Dentro del index.js se encuentra un método llamado ReactDOM.render(), los componentes que creemos deben ser llamados dentro de él para ser usados. `<React.strictMode>` no es obligatorio, pero se considea una excelente práctica para evitar errores.
```jsx
ReactDOM.render(
  <React.StrictMode>
    <Componente1/>
    <Componente2/>
    <Componente3/>
    <Componente4/>
  </React.StrictMode>,
  document.getElementById('root')
);
```

## JSX:
React nos pone a disposicion el uso del lenguaje "jsx". El cual es un lenguaje que combina toda la funcionalidad de javascript y la sintaxis de HTML en una suerte de lenguaje híbrido. Comprender la sintaxis de este nuevo lenguaje es sencilla, ya que el único cambio relevante es que, en JSX podemos colocar código dentro de etiquetas HTML usando llaves:
```jsx
//Colocando texto dentro de una etiqueta con JSX.
const JsxAccion = () => { 
  const saludo = 'Soy una constante!'
  return (
      <h1>Hola! {saludo}</h1>
    );
}

//Colocamos un operador ternario dentro de una etiqueta HTML.
const JsxAccion = () => {
    const temperatura = 21;
    return (
      <Fragment>
        <h2>Frío o Calor?</h2>
        <p> { temperatura > 20 ? 'Calor!' : 'Frio!' } </p>
      </Fragment>
    );
}

//Colocamos javascript dentro de los atributos de un elemento. HTML:
const element = <img src={user.avatarUrl}></img>;
```

## Componentes en React:
En react se busca generar porciones de código reutilizables, por lo que se vuelve interesante la creación de componentes los cuales no son más que porciones de código totalmente autónomas entre sí. La estructura básica de un componente basado en funciones (componente funcional) es la siguiente, las funciones pueden ser declaradas usando funciones o arrow function. Estas ultimas deben ser guardadas en una variable o una constante.
```jsx
//Declaramos una funcion.
const Componente1 = () => {

    //retornamos obligatoriamente algo
    return(
        //para declarar clases CSS, se usa className por problemas de compatibilidad.
        <h1 className="clase1" >HOLA MUNDO</h1>
    );
}
//exportamos el componente.
export default Componente1;
```

Luego en el archivo donde se importará el componente se realiza una importación normal.
```jsx
//importamos el componente y trabajamos con el.
import Componente1 from './Componente1';
```
Otro tipo de componentes son los componentes basados en clases, los cuales veremos a detalle en unos minutos. Esto es porque, aunque sean antiguos, son la base de los componentes funcionales.

## Agregando estilos CSS a componentes:
Si deseamos agregar estilos a nuestros componentes con css, podemos hacerlo usando inline-styles y funciones javascript. Veremos un ejemplo de un componente sencillo con estilos css.
```jsx
//creamos una arrowfunction con estilos.
const estilo = (bg ='#222') => {
  {
    backgroundColor: bg,
    color: '#fff',
    padding: '10px 15px'
  }
}

//creamos un componente Li que utilice estos estilos.
const Li = () => {
    return (
        <li style={...estilo(bg: '555')} className= "clase1">Hello!</li>
    );
}

//usamos nuestro componente Li.
const App = () => {
    <Li />
}
return default App;
```
Si queremos utilizar clases CSS en nuestros componentes, podemos hacerlo de la siguiente manera:
```CSS
/*creamos un CSS con los estilos*/
.clase1 {
    background-color: #057;
    padding: 1rem;
    border: 1px solid red;
}
```
```jsx
//importamos el archivo CSS.
import './codigoCSS.css';

//creamos un componente Li que utilice la clase ".clase1"
const Li = () => {
    return (
        <li style={...estilo(bg: '555')} className= "clase1">Hello!</li>
    );
}

//usamos nuestro componente Li.
const App = () => {
    <Li />
}
```
Notese el uso de 'className' en vez de 'class', esto es para evitar conflictos en el código.

## Props: 
Todos los componentes jsx poseen propideades custom que nosotros podemos añadir. 
Conceptualmente, los componentes son como las funciones de JavaScript. Aceptan entradas arbitrarias (llamadas “props”) y devuelven a React elementos que describen lo que debe aparecer en la pantalla.

Veamos por ejemplo el caso donde importamos un componente funcional el cual puede recibir propiedades por atributos. Y como se envian y reciben estos atributos entre componentes. Para designar a las propiedades como general se utiliza la palabra reservada `props`.

Componente padre App:
```jsx
//importamos react y el componente a usar.
import React from "react";
import Componente1 from "./components/Componente1";

function App() {
  return(

    //Designamos propiedades con nombre propio y las colocamos dentro de la llamada al componente.
    <Componente1 nombre="Juan" edad={22} />
  );
}

export default App;
```

Componente1:
```jsx
import React from "react";


//recibimos las propiedades por parámetros con la palabra props. 
//Luego usamos los valores de las props dentro del componente.
const Componente1 = (props) => {
  return(
    <div>
      <p>Su nombre es: {props.nombre}</p>
      <p>Su edad es: {props.edad}</p>
    </div>
  );
}
```
En vez de utilizar la palabra reservada props, en el componente hijo se puede pasar por parámetros una llave de objeto literal, con solamente el o los nombres especificos de las propiedades a usar. En componentes complejos esto es lo más óptimo.
En vez de esto: `props`
Uso esto: `{propiedad1}` o `{propiedad1, propiedad2}`

El uso correcto de las props y los eventos nos permite realizar la correcta comunicacion entre componentes.

## Componentes basados en clases:
Para crear componentes basados en clases, la sintaxis será la siguiente. Importamos la clase component la cual nos ayudará con la creacion de componentes. Creamos la clase que vayamos a exportar y decimos que extienda de component. Creamos el método de `render()` que es obligatorio y al último colocamos el `return` dentro del método de render. 

En código seria lo siguiente:
```javascript
import { Component } from 'react';

class App extends Component {
    render() {
        return (

        );
    }
}

export default App;
```

## State de los componentes:
En los componentes basados en clases se puede acceder a un estado "state", el cual nos dirá, valga la redundancia, el estado en el que se encuentra nuestro componente y si debe actualizarse o refrescarse debido a que ocurrio algún cambio en él. Para poder refrezcar un componente debemos definir su estado de manera explícita con: `state = { propiedades a colocar}`. Esta linea de código se coloca entre el costructor y el return. 

## Método de render:
Es un método el cual se invoca cada vez que react nota que debe actualizar un componente. Se ejecutará si se cumple alguna de dos condiciones: 
1. Se llama al state del componente con `this.state()`.
2. El componente padre ha llamado a su método de render.

## Ciclo de vida de un componente en React:
Un componente en react posee un ciclo de vida de tres etapas:

1. Montando: La primer etapa es donde se monta el componente, es decir cuando insertamos en la interfaz un componente por primera vez. React llama a la funcion constructor de la clase, luego se ejecuta el método de render y por último se actualiza el DOM. Luego si nosotros implementamos el método `componentDidMount()`, este va a ejecutar toda la lógica que nosotros pongamos en él.

2. Actualizando: La siguiente etapa es lo que ocurrirá cuando actualizemos un componente. El componente ejecuta su método de render, react revisa si debe actualizar el DOM y si es necesario lo refrezca. Y luego se ejecuta el método `componentDidUpdate()` que es un método similar a componentDidMount pero que se puede ejecutar multiples veces.

3. Desmontando: La última etapa del ciclo de vida de un componente es el desmontado, y ocurre cuando nosotros ya no vayamos a mostrarle a un usuario algún componente que nosotros hayamos definido. Aquí se ejecuta el método de `componentWillUnmount()`, donde react se encarga de eliminar correctamente el componente del DOM.

## Levantar el estado:
En react cada componente tiene su estado local, por lo que si deseamos manejar data deberiamos acceder al estado del componente que recibe los datos. Como esto es inconveniente al haber muchos componentes, se puede refactorizar el código para así, lograr subir el estado de un componente hijo a algunos de sus componentes padres. En general se busca subir el estado al componente mayor que haya en el DOM para así tener toda la información en un solo lugar.

El ejemplo siguiente muestra la forma correcta de hacer esta operación:
```javascript
import { Component } from 'react';

class Input extends Component {
  render() {
    return (
      <input value= {this.props.value} 
             onChange= {this.props.onChange}
      />
    );
  }
}

class App extends Component {
  state = {
    nombre: '',
    apellido: '',
  }

  updateValues = (prop, value) => {
    this.setState({ [prop]: value });
  }
  render() {
    return (
      <p>
        Nombre Completo: {`${this.state.nombre} ${this.state.apellido}`}
        <Input value= {this.state.nombre}
               onChange= {e => this.updateValues('nombre', e.target.value)} 
        />
        <Input value= {this.state.apellido}
               onChange= {e => this.updateValues('apellido', e.target.value)}
        />
      </p>
    );
  }
}
export default App;
```

## Componentes Funcionales:
Son una nueva forma de construir componentes en react, y su sintaxis es mucho más concisa e intuitiva. Además mediante el uso de hooks podemos acceder al estado de un componente funcional y modificarlo sin necesidad de utilizar clases.

Ejemplo de un Componente Funcional, en react todos los componentes funcionales deben ser funciones puras:

```jsx
//Componente funcional usando "Function". 
//Las propiedades se pasan por parámetros como vimos en props.
function App1 (miProp) {
  return (
    <div>
      Nombre: {miProp}
    </div>
  );
}

//Componente funcional usando "Arrow Function".
const App2 = ({miProp}) => {
  return (
    <div>
      Nombre: {miProp}
    </div>
  );
}

export {App1, App2};
```

## Hooks:
Los hooks nos permiten acceder al estado de nuestras funciones y hacerlas interactivas.
Para usarlos debemos recordar dos reglas, la primera es que no se pueden anidar hooks o llamar dentro de loops. Es decir se colocan siempre en el nivel más alto del componente. Luego la segunda regla es que solo se pueden llamar dentro de componentes de react y dentro de custom hooks.

1. `useState()`: Es una funcion que nos permite acceder al estado de nuestro componente, la funcion recibe un único argumento con el valor inicial de un contador. Y luego, retorna un arreglo de valores, el primero es el valor del contador en su estado actual y el segundo es una funcion que nos va a permitir poder actualizar el valor del contador. Al modificarse el valor del contador, react va a gatillar un nuevo renderizado del componente.
```jsx
//importamos el hook.
import { useState } from 'react';

  const Componente1 = () => {
    //iniciamos el contador, colocamos el estado por defecto y nombramos los dos valores del arreglo de retorno.
    const [contador, setContador] = useState(0);
  
    //Se actualiza el valor del contador y con ello se gatilla un nuevo render.
    setContador(contador + 1);

  return("");
}
export default Component1;
```

2. `useEfect`: Es un hook que podemos utilizar cada vez que requiramos generar un efecto lateral, es decir generar una acción que se ejecute en paralelo con la web app. Por ejemplo el llamado a una API, o la accion de un botón que renderize otro componente quizas. useEffect es una función que recibe dos argumentos, el primero es una funcion que contiene la lógica a ejecutar; y el segundo es un array que contiene las dependencias que serán necesarias para el contador.

```jsx
import {useState, useEffect} from "react";

const App = () => {
  let contador = 0;

  //useEffect, se ejecuta cada vez que ocurra un cambio en el componente.
  useEffect(() => {console.log("hola"); contador++;},  );

  //useEffect, se ejecuta solo una vez y por defecto.
  useEffect(() => {console.log("hola"); contador++;}, []);

  //useEffect, se ejecuta cuando cambia la variable de contador.
  useEffect(() => {console.log("hola"); contador++;}, [contador]);

  return("");
}

export default App;
```

3. `useReducer`: Es una funcion que ejecutará una porción de código u otra, provenientes de una serie de opciones disponibles. En función de un parámetro. 
```jsx
import { useReducer } from "react";

//se crea un objeto literal con un contador de valor inicial 0.
const inicio = {contador: 0}

//se crea una funcion reducer necesaria la cual recibirá el estado actual (dado por el objeto inicio) y la accion a ejecutar.
const reducer = (state, action) => {
  switch(action.type) {
    case 'incrementar':
      return { contador: state.contador + 1 }
    case 'decrementar':
      return { contador: state.contador + 1 }
    case 'setear':
      return { contador: action.payload }
  }
}

const App = () => {

  //se crea el hook el cual recibe la funcion reducer y el objeto estado inicial. Luego devolverá el nuevo estado y despachará una acción. 
  //Al llamar a esta accion se "gatilla" useReducer y luego el renderizado.
  const [state, dispatch] = useReducer(reducer, inicial);

  return(
    <div>
      Contador: {state.contador}

      <button onClick={() => dispatch({ type: 'incrementar'})}>Más</button>
      <button onClick={() => dispatch({ type: 'decrementar'})}>Menos</button>
      <button onClick={() => dispatch({ type: 'setear'})}>Setear a 5</button>
    </div>
  );
}

export default App;
```

4. `useRef`: Es el último hook que existe y se lo utiliza para obtener referencias del mismo DOM. Como sintesis el uso de useRef es el mismo que se podria dar al usar document.getElement y modificar los atributos del elemento.

```jsx
import useRef from "react";

const App = () => {

  //inicializamos el hook useRef
  const ref = useRef();

  return(
    //creamos un componente con la propiedad ref la cual tiene el valor del hook, que en este caso tambien es ref.
    <button onClick={console.log(ref.current.clientHeight);} ref={ref}>Botón</button>
  );
}

//cuando se haga un click en el botón, se va a retornar por consola el alto del elemento actual. En este caso es el alto del botón

export default App;
```

## Hook Custom:
Son hooks que admiten mayores funcionalidades. Dentro de estos se pueden anidar los hooks tradicionales. El siguiente es un ejemplo simple de un custom hook:
```jsx
const useContador = (inicial) => {
  const [contador, setContador] = useState(inicial);
  const incrementar = () => {
    setContador(contador + 1)
  }

  return [contador, incrementar];
}

const App = () => {
  const [contador, incrementar] = useContador(0);
  return (
    Contador: {contador}

    <button onClick={incrementar}>Incrementar</button>
  );
}
```

## Formularios en React:
En react existen dos tipos de formularios, los formularios controlados o "controlled forms" y los formularios no-controlados, "uncontrolled forms". 

En general los formularios en HTML poseen una propiedad de action, la cual recibe una ruta a donde se deben enviar los datos, cuando se presione un botón de tipo submit. En react esto no es muy distinto por lo que aprender de formularios en react es bastante sencillo.

En general en los archivos donde tengamos inputs de tipo file se deben utilizar formularios con uncontrolled components.

#### Uncontrolled Components en React:
Formularios con componentes no controlados en react. Se crea una instancia de la clase formData y se agregan los distintos retornos de los input. Luego con la API de fetch se envian los datos.
```jsx
import { useRef } from "react";

const App = () => {
  const input = useRef();
  const submit = () => {

    //en la constante con el evento se instancia la clase formData, se realizan las adiciones de inputs.
    const form = new FormData();
    form.append('campo1', file.current.files[0]);
    form.append('campo2', input.current.value);

    //por último se envian los datos con fetch.
    fetch('./rutaDeDestino', {method: 'POST', body: form});
  }
  return (
    <div>
      <div>
        <input type="text" name="campo1" ref={input} />
        <input type="file" name="campo2" ref={input} />
        <input type="submit" value="enviar" onClick={submit} />
      </div>
    </div>
  );
}

export default App;
```

#### Formularios con Controlled Components en React:
Es la forma más recomendada para realizar formularios. Los componentes se controlan modificando los valores de los inputs dinámicamente. Esto se hace mediante sucesivas llamadas a render.

```jsx
import { useState } from "react";

const App = () => {
  const [value, setValue] = useState({normal: 'por defecto', texto: ''});

  const handleChange = (e) => {
    setValue({
        ...value,
        [e.target.name]: e.target.value
    });
  }

  return(
    <div>
      <input type="text" name="normal" value={value} onChange={handleChange} />

      <input type="text" name="normal2" value={value} onChange={handleChange} />
    </div>
  );
}

export default App;
```
Cada vez que el value se modifique en alguno de los componentes se gatillará un nuevo render en ellos y se guardará en el objeto value los datos.

En las etiquetas de select, checkbox y radio button. Se recomienda revisar la documentacion de react, ya que los valores pueden cambiar.

## Formularios con Formik:
El manejo de formularios en react se hace con el uso de la libreria formik. La cual nos permite automatizar muchas funciones y concentrarnos solo en lo necesario.

Para utilizar la libreria de formik debemos primero instalarla con: `npm i -S formik`. Para luego importar el hook `useFormik` en el componente con el formulario.

Luego para familiarizarnos con la sintaxis, un formulario escrito en formik se veria de la siguiente manera:
```jsx
//importamos formik.
import { useFormik } from "formik";

function App() {
  //funcion de validación que se ocupará más adelante.
  const validate = (values) => {
    const errors = {}

    if(values.name == '') {
    errors.name = 'Requerido'
    } else if(values.name.length < 5) {
        errors.name = 'El nombre es muy corto'
    }

    if(values.lastname == '') {
    errors.lastname = 'Requerido'
    } else if(values.lastname.length < 5) {
    errors.lastname = 'El apellido es muy corto'
    }

    if(values.email == '') {
    errors.email = 'Requerido'
    } else if(values.email.length < 5) {
    errors.email = 'El email es muy corto'
    }

    return errors;
  }

  //inicializamos el hook useFormik.
  //El primer argumento es el objeto con el estado inicial.
  //EL segundo argumento es las validaciones a implementar. En este caso se esta llamando a la funcion validate creada más arriba.
  //El tercer argumento es la funcion a ejecutar cuando ocurra un evento onSubmit en nuestro form.
  const formik = useFormik({
    initialValues: {
      name: '',
      lastname: '',
      email: '',
      },
      validate,
      onSubmit: values => console.log(values)
  });

  return(
    //Formulario con evento onSubmit
    <form onSubmit={formik.handleSubmit}>
      <label>Nombre: </label>
      <input type="text" name="name" onChange={formik.handleChange} value={formik.values.name} />
            
      <label>Apellido: </label>
      <input type="text" name="lastname" onChange={formik.handleChange} value={formik.values.lastname} />
            
      <label>Email: </label>
      <input type="email" name="email" onChange={formik.handleChange} value={formik.values.email} />

      <button type="submit">Enviar</button>
    </form>
  );
}
export default App;
```
La sintaxis de un formulario con formik no es muy diferente a lo que se redactaria en un formulario completamente manual. Por lo que con un vistazo rápido al código deberia ser suficiente.

El uso de la libreria formik posee muchas aristas por lo que se recomienda visualizar el curso de nicolas schurmann de react para aprender un poco más sobre él. Aquí podemos aprender sobre el uso de inputs especificos y componentes que se agregan de la libreria formik.

## Styled Components:
Existe una libreria llamada Styled Components la cual nos permite manejar los estilos CSS de nuestros componentes de forma automática. 
Para usarla es necesaria instalarla con `npm i styled- components`, luego para usarla debemos importarla en nuestro componente. Los estilos los agregaremos a una constante con el mismo nombre del componente al que se le aplicarán los estilos.

```jsx
//importamos styled-components.
import styled from 'styled-components';

//declaramos una constante con el mismo nombre de nuestro componente custom. Le asignamos estilos CSS
const P = styled.p`
  font-size: 24px;
  color: red;
  margin: 0;
  padding: 0; `

function App() {
  //retornamos el componente, los estilos se aplican en automático.
  return(  <P>Hola soy un párrafo</P>  );
}
export default App;
```

Se pueden construir compponentes adaptables en base a las propiedades que les pasemos, esto se realiza utilizando template strings y props.
```jsx
import styled from 'styled-components';

const Button = styled.button`
  background-color: ${props => props.primary ? 'red' : 'white'};
  color: ${props => props.primary ? 'white' : 'red'};
  padding: 10px 15px;
  border: 2px solid red;
  border-radius: 4px;`

function App () {
  return(
    <>
      <Button>Botón</Button>
      <Button primary='true'>Botón2</Button>
    </>
  );
}
export default App;
```
El código anterior imprimirá dos botónes, un botón blanco con texto rojo y viceversa.

Si deseamos utilizar algún componente que hayamos creado pero imprimirlo como si fuera otra etiqueta. Por ejemplo un componente button con estilos el cual queremos que se muestre como una etiqueta anchor.
Podemos utilizar el atributo `as`. Veamos esto:
```jsx
import styled from 'styled-components';

const Button = styled.button`
  background-color: ${props => props.primary ? 'red' : 'white'};
  color: ${props => props.primary ? 'white' : 'red'};
  padding: 10px 15px;
  border: 2px solid red;
  border-radius: 4px;`

function App () {
  return(
    <>
      <Button>Botón</Button>
      <Button primary='true' as='a' href='#'>Botón2</Button>
    </>
  );
}
export default App;
```
Notesé que la declaracion de variables se realiza fuera de los componentes funcionales. Con esto se solucionan problemas de rendimiento y funcionalidad.

Con esta libreria ademas, se pueden utilizar clases y pseudoelementos, además de anidar estilos CSS. Esto le agrega muchas funcionalidades al código, ya que la sintaxis se asemeja al nesting en SASS:
```jsx
import styled from 'styled-components';

const Button = styled.button`
  background-color: ${props => props.primary ? 'red' : 'white'};
  color: ${props => props.primary ? 'white' : 'red'};
  padding: 10px 15px;
  border: 2px solid red;
  border-radius: 4px;

  &:hover {
    box-shadow: 1px 2px 5px grba(0,0,0,0.3);
  }
  &.secondary {
    background-color: blue;
    border: solid 2px blue;
    color: white;
  }
  .info {
    font-size: 28px;
  }
  `

function App () {
  return(
    <>
      <Button>Botón</Button>
      <Button primary='true'>Botón2</Button>
      <Button className="secondary">Botón</Button>
      <Button><p className="info"></p></Button>
    </>
  );
}
export default App;
```

Es importante considerar las variables que vayamos a evaluar en nuesto código. Ya que si estuvieramos utilizando variables de javascript provenientes de una base de datos o de cualquier archivo que el usuario pueda cargar. Estariamos siendo potenciales victimas de ataques por inyeccion de código javascript. Por lo que las variables con las que trabajemos estos componentes deberian estar escritas por nosotros mismos en el mismo archivo.

- Nota: Existe otra libreria llamada Yup en donde podemos realizar validaciones de manera muy sencilla. Yup funciona en conjunto con Formik y se puede utilizar de manera opcional. Para instalarla se utiliza `npm i yup`. Luego se la importa en el componente con `ìmport * as Yup from 'yup';`.

## Memoizacion:
Cuando trabajamos con objetos anidados en react podemos notar que en una misma linea de elementos, si un elemento padre se re-renderiza. Todos sus hijos se van a re-renderizar. Por lo que si en una misma linea de elementos tenemos muchos componentes. Cuando React actualize el DOM, todos estos elementos se van a re-renderizar haciendo que el trabajo de cálculo sea enorme y la aplicación vaya lenta.

Para solucionar esto en general se utiliza una dependencia de react llamada memo en donde agregando esta funcion a mis componentes, solo se van a renderizar cuando algo en ellos haya cambiado. Incluso si el padre ha llamado a su método de render.
Existen:
- Memoización en render de componentes:
- Memoización en funciones, para no re-instanciar las funciones con cada render.

## Context:
Context es un paquete de funcionalidades que nosotros utilizamos, para poder pasar propieadades en un arbol de componentes, de arriba hacia abajo. Sin tener que estar pasando las propiedades por cada uno de los componentes.

Para utilizarlo debemos realizar su importacion en nuestro paquete de react, con: 
- `import { createContext, useContext } from 'react'`.

Luego para declararlo debemos hacerlo fuera de nuestro componente, el valor por defecto es aquel que se va a seleccionar en el caso de que no creemos un provider. Podemos crear tantos contextos como necesitemos. Por convencion el primer contexto es el default context:
- `const ContextDefault = createContext('valor por defecto')`.

A continuacion creamos el provider, el cual es el encargado de pasar el contexto hacia abajo, a los componentes hijos. El mismo es un componente que recibe la propiedad de children y la renderiza dentro del contexto, que en este caso es "Context". Con lo que a provider le pasaremos todos los componentes del arbol.
```jsx
const DefaultProvider = ({ children }) => {
  return(
    <ContextDefault.Provider value={'mi valor'}>
      { children }
    </ContextDefault.Provider>
  );
}
```
Para que el context funcione nosotros debemos agregar un valor el cual nosotros vamos a estar pasando para abajo a los componentes hijos, es decir los que se encuentren dentro de children.

- Seguido de esto creamos los componentes que colocaremos dentro del contexto. Estos componentes deberán tener una variable que reciba el contexto, eso lo hacemos con `const ctx = useContext(Context);`. Donde ctx es una abreviacion de la palabra context:
```jsx
const Contenido = () => {
  const ctx = useContext(Context);
  return(
    <div>{ctx}</div>
  );
}
```

- Por último utilizamos el contexto en el App.
```jsx
function App () {
  return (
    <DefaultProvider>
      <Contenido />
    </DefaultProvider>
  );
}
```

Veamos un ejemplo de como debe usarse context y de como hacemos para actualizar el estado de ContextDefault dentro de un componente hijo:
- Archivo App.js:
```js
import { createContext, useContext, useState } from 'react';

//Creamos un contexto.
const ContextDefault = creacteContext({ valor: false, toggle: ()=>{} });

//Creamos el provider, y con él redefinimos la funcion toggle, la cual al ser llamada actualiza la variable valor en el estado.
const Provider = ({ children }) => {
  const [valor, setValor] = useState(false)
  const value = {
    valor,
    toggle: () => setValor(!valor)
  }

  return (
    <ContextDefault.Provider value={value}>
      {children} 
    <ContextDefault.Provider>
  );
}

//Creamos un componente que se encontrará dentro de nuestro contexto.
const Componente = () => {
  const { valor, toggle } = useContext(ContextDefault);

  return (
    <div>
      <label>{valor.toString()}</label>
      <button onClick={toggle}>Toggle</button>
    </div>
  );
}

//Creamos nuestro componente App y le pasamos el provider.
function App () {
  return (
    <Provider>
      <Componente />
    </Provider>
  );
}

//Exportamos la aplicacion
export default App;
```
Si bien esta sintaxis pareciera que puede solucionar muchos problemas con respecto al estado. Debe usarse solo para este fin y en aplicaciones pequeñas en donde el estado no deba cambiar mucho. Ya que en aplicaciones de mayor tamaño, donde el estado es muy grande y dinámico, utilizar context puede crear problemas de rendimiento extremos y generar más que un dolor de cabeza. Un ejemplo muy útil en el uso de context es con variables como el idioma del sitio web, el usuario, el tema (claro-oscuro), el email, y todos aquellos datos de estado que no vayan a cambiar en el transcurso del uso de la App.

Se puede utilizar context en componentes de clase, por lo que en el caso de que nos toque mantener componentes de clase es interesante saberlo:
```jsx
//Importamos component y context de react
import { Component, createContext } from 'react';

//creamos el contexto y el proveedor (provider);
const Context = createContext('valor1');
const Provider = ({ children }) => {
  return(
    <Context.Provider value={'valor2'}>
      {children}
    </Context.Provider>
  );
}

//Creamos un componente basado en clases.
class Componente extends Component {

  //Creamos una propiedad estática llamada 'contextType' y le asignamos el contexto.
  static contextType = Context;


  render() {
    //Dentro del método de render o de cualquier método llamamos al contexto con 'this.context';
    let valores = this.context;
    console.log(valores);
    return (
      <div>¡Hola Mundo!</div>
    )
  }
}

//Creamos el componente App y lo exportamos
function App () {
  return(
    <Provider>
      <Componente />
    </Provider>
  );
}
export default App;
```
En componentes de clases con varios contextos, podemos utilizar el componente de "Consumer". 

## React Router:
Una parte fundamental de nuestras aplicaciones web es la navegación entre diferentes rutas. React no viene con un Router integrado pero podemos añadirlo fácilmente. 
React Router es este sistema, y para aprender a usarlo veamos primero algunas configuraciones a realizar:

1. Para instalarlo ejecutamos `npm i react-router-dom`.
2. `import { BrowserRouter } from 'react-router-dom';` Realizamos la importacion del siguiente componente en index.js.
3. Colocamos el componente de alto orden "Browser Router" en el arbol de componentes del archivo index.js
```js
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
```
Luego de estas configuraciones básicas podemos empezar con nuestra aplicacion. Notesé que podriamos colocar el componente BrowserRouter en nuestro archivo de 'App.jsx' y funcionaria de igual manera.

#### Sistema de rutas con Routes, Route, Links y Outlet:
Podemos realizar la construccion de un sistema de rutas en react colocando los componentes Routes y Route. Para ello envolvemos todas las rutas o los enlaces que vayamos a crear en nuestra aplicación en un componente "Routes". Cada ruta luego, estará especificada en un componente "Route" con el atributo path, que modificará la url según sea el caso, y un atributo element que llamará al elemento a renderizar.

- Si queremos especificar que la ruta será la misma que su componente padre, colocamos el atributo `index`
en lugar de `path= ""`.
- Si queremos especificar una ruta para una url inexistente (esta mál escrita por ejemplo), colocamos `path= "*"` y `element={<Navigate replace to="/" />}` donde el valor de "to" será la ruta a la que debamos ir.

```jsx
//importamos los componentes que vamos a utilizar de React Router.
import { Routes, Route, Navigate} from 'react-router-dom';

//importamos los componentes custom que vayamos a renderizar cada vez que vayamos a algún enlace.
import Home from './routes/Home';
import AboutUs from './routes/AboutUs';
import Users from './routes/Users';
import User from './components/User';
import Contact from './routes/Contact';
import Layout from './Layout';


function App() {
  return(
    <>
      {/*Colocamos un elemento routes en donde colocaremos todas las rutas de nuestra app*/}
      <Routes>

        {/*Colocamos un Elemento Layout que contendrá toda nuestra app*/} 
        {/*dentro de él estará nuestro menú de navegacion con los links y un elemento section donde se renderizarán todos los elementos de las demas rutas*/}
        <Route path="/" element={<Layout />}>
        
          <Route index element={<Home />} />
          <Route path="aboutUs" element={<AboutUs />} />

          <Route path="users" element={<Users />} />
          {/*El uso de los dos puntos indica que la ruta va a ser dinámica y cambiará según el dato que le pasemos aquí. El dato en este caso es userId y pertenece al componente User*/}
          <Route path="users/:userId" element={<User />} />

          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Route>

      </Routes>
    </>
  );
}
export default App;
```
Notesé que estamos anidando rutas, ya que el elemento route que envuelve a los demás y renderiza el layout posee una parte del path, luego los sucesivos routes anidados conforman el resto del path según sea el caso.

Una vez especificadas las rutas debemos crear un componente que conecte estás rutas con algún evento. Vayamos entonces por ejemplo al componente Layout. Podriamos hacer esto perfectamente en cualquier componente.
```jsx
//importamos otros dos componentes de Link y Outlet. Outlet creará la conexion y Link disparará el evento para ir a la ruta. El componente Link funciona igual que un anchor-tag.
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
    return(
        <>
            <nav>
            {/*Creamos una barra de navegación con componentes Link (anchor-tags) y le indicamos a cada uno el path a seguir, seguido del texto a mostrar en pantalla.*/}
                <Link to="/">Home</Link>
                <Link to="/aboutUs">About Us</Link>
                <Link to="/users">Users</Link>
                <Link to="/contact">Contact</Link>
            </nav>

            {/*Creamos una seccion que renderizará los componentes que envia cada Route. El componente Outlet hará este trabajo.*/}
            <section>
                <Outlet />
            </section>
        </>
    );
}
export default Layout;
```
Si se comprende el funcionamiento anteriormente ejemplificado, se puede comprender react router en completitud. Luego lo demás es sencillo y es el uso de los hooks:

1. `useParams` este es un hook para poder extraer en una variable el parámetro de ruta especificado. El parámetro de ruta es la variable especificada en el path de "Route", la cual hará que la url sea dinámica.
```jsx
import { useParams } from "react-router-dom";
import { getUser } from "../users";

const User = () => {
    //Nos traemos el parámetro de ruta especificado en el componente Routes que renderiza user
    const params = useParams();

    //nos traemos el usuario que se corresponda con el ID especificado. Este ID se encuentra en nuestra url y en nuestro parámetro de ruta.
    const user = getUser(parseInt(params.userId));

    return(
        <div>
            <h2>{user.name}</h2>
            <hr/>
            <strong>Phone: </strong><br/> {user.phone}
            <strong>Website: </strong> {user.website}
            <hr/>
        </div>
    );
}
export default User;
```

2. `useNavigate` el hook de useNavigate nos permite movernos a alguna ruta especifica de manera programatica. Es decir por ejemplo cuando deseamos colocar un botón que nos lleve a una sección en especifico del sitio web.
```jsx
import { useParams, useNavigate } from "react-router-dom";
import { getUser } from "../users";

const User = () => {
  const params = useParams();
  const user = getUser(parseInt(params.userId));

  //Instanciamos nuestro hook y guardamos su estado en una variable llamada navigate.
    const navigate = useNavigate();

  //Creamos una funcion que nos permita movernos a una ruta específica y colocamos luego el valor de navigate con 'navigate("rutaEspecificada");'
  const handleReturn = () => {
    navigate("/users");
  };

  return(
    <div>
      <h2>{user.name}</h2>
        <hr/>
        <strong>Phone: </strong><br/> {user.phone}
        <strong>Website: </strong> {user.website}
        <hr/>
        <button onClick={handleReturn}>Regresar</button>
    </div>
  );
}
export default User;
```

3. `useSearchParams` es un hook que nos sirve para realizar una busqueda entre un grupo de elementos.
```jsx
import { getAllUsers } from '../users';

//importamos el hook.
import { useSearchParams } from 'react-router-dom';

const Users = () => {
  
  const users = getAllUsers();

  //Iniciamos el hook y le damos un valor inicial a searchParams. En este caso el valor inicial es el de "filter".
  const [searchParams, setSearchParams] = useSearchParams();
  const filter = searchParams.get("filter") ?? "";

  //Creamos una funcion que setee searchParams a un objeto con la propiedad de filter cuyo valor será el "value" del objeto que haya disparado el evento.
  const handleFilter = e => {
    setSearchParams({filter: e.target.value});
  }

  return(
    <div>
      <input
      
        type='text' 
        placeholder='Filtrar' 
        style={estilos} 
        {/*En la propiedad value enlazamos searchParams*/}
        value={searchParams.get("filter")}
        {/*En el evento enlazamos la funcion handleFilter*/}
        onChange={handleFilter}
      />
      <hr/>

      {/*Lo que sigue son alfunas validaciones. La propiedad de filter llamada en el método de filter es la definida en la funcion handleFilter*/}
      <ul>
        {users
          .filter( user => {
            if(!filter) { 
              return true; 
              } else {
              const name = user.name.toLowerCase();
              return name.includes(filter.toLowerCase())
              }
            }
          )
                  
          .map( user => 
            <li key={user.id}> 
              <h2>{user.name}</h2>
            </li>
          )
        }
      </ul>
    </div>
  );
}
export default Users;
```
Con el código anterior nos aseguramos de que cada vez que en el input se realize un cambio, este cambio se guarde en searchParams. Este cambio se mostrará entonces en la url, y luego mediante las validaciones, se mostrarán solo los elementos de la lista que tengan incluido (método .includes(); ) en alguna parte de su string de nombre, el valor de string guardado en filter.

4. Si deseamos indicar de manera visual que un link está activo, debemos utilizar el componente "NavLink" en lugar del componente "Link". Seguido de esto podemos indicar el cambio visual con la propiedad `isActive` y algunos estilos en CSS.
```jsx
<NavLink 
  style={
    ( {isActive} ) => (isActive ? {color:red} : {})
  }
>
  {user.name}
</NavLink>
```

5. `useLocation`. Por último el hook de useLocation nos sirve para guardar los filtros o los parámetros de consulta. Un ejemplo práctico de esto es guardar el valor de una busqueda de un input. Por más que se estén realizando acciones en esta interfaz.
```jsx
import { NavLink, useLocation } from "react-router-dom";

export function App () {

  const location = useLocation();

  return(
    <NavLink 
      style={( {isActive} ) => (isActive ? {color:red} : {})} 
      to={user.id.toString() + location.search}
    >
      {user.name}
    </NavLink>
  );
}
```

## Redux:
Es la libreria para manejar el estado de react más popular actualmente. Con redux podemos extraer todos los estados de cada componente en nuestra aplicacion y llevarlos a un espacio en memoria reservado a redux. Con esto podemos tener un orden en los estados. Cabe resaltar que redux no simplificará o hará más conciso nuestro código, sino que hará que nuestra aplicacion este ordenada.
Para trabajar con Redux debemos en primer lugar instalarlo con. `npm i redux`.

1. Intoduciendonos a Redux:
Archivo "index.js"
```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//Importamos una store de redux.
import { createStore } from 'redux';

//Creamos un reducer que va a recibir el estado de la aplicacion y una accion.
const reducer = (state = 0, action) => {

  //Imprimimos el estado y la accion por comodidad.
  console.log({state, action})

  //creamos un switch que captura la acción y colocamos distintos tipos de accion.
  //En este caso las acciones serán incrementar o decrementar.
  switch(action.type) {
    case 'incrementar':
      return state + 1;
    case 'decrementar':
      return state - 1;
    default:
      return state;
  }
}

//Creamos un store donde se guardará la funcion de reducer.
const store = createStore(reducer);
console.log({ store })

//Llamamos al store para modificar el estado.
//El dispatch despachará una acción del tipo que le especifiquemos y ejecutará la funcion de reducer.
//Si la accion no existe en el switch-case, como por ejemplo "acciónNoComprendida" el reducer retornará un valor por defecto.
store.dispatch({ type: 'accionNoComprendida' })
store.dispatch({ type: 'incrementar' })
store.dispatch({ type: 'incrementar' })
console.log('state', store.getState())
//El parámetro de type es obligatorio y no se puede renombrar.

//Notesé que en este primer acercamiento utilizamos redux con vainilla Javascript, fuera de React.
ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```
Lo anterior no es necesariamente la forma correcta de usar redux. Simplemente es un ejemplo para ver el código.

2. Conectar redux con react. Para hacer este trabajo utilizaremos la libreria "react-redux", la cual instalamos con `npm i react-redux`:

Archivo index.js:
```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { createStore } from 'redux';
import { Provider } from 'react.redux';
//importamos reducer de App. Esto en genreral no se hace así.
import { reducer } from './App';

//Colocamos el componente provider de react-redux de forma que envuelva la App. su parámetro es store.
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
```

Archivo App.js
```jsx
//Debemos importar useDispatch y useSelector de react-redux.
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

//Configuramos el reducer. Con los switch-case.
export const reducer = (state = 0, action) => {
  console.log(action);

  switch(action.type) {
    case 'incrementar':
      return state + 1;
    case 'decrementar':
      return state - 1;
    case 'set':
      return action.payload;
    default:
      return state;
  }
}

//Creamos una App y dentro de él inicializamos los hooks de useState, useDispatch y useSelector.
function App() {

  const [valor, setValor] = useState('');
  const dispatch = useDispatch();
  const state = useSelector(state => state);

  return (
    <div>
      <p>{state}</p>

      <button onClick={() => dispatch({ type: 'incrementar' })}>Incrementar</button>

      <button onClick={() => dispatch({ type: 'decrementar' })}>Decrementar</button>

      <button onClick={() => dispatch({ type: 'set', payload: valor })}>Set</button>

      <input value={valor} onChange={e => setValor(Number(e.target.value))} />
    </div>
  );
}
export default App;
```

3. Construimos una App un poco más grande. El archivo index.js se mantendrá igual, solo modificaremos App.js.
```jsx
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const initialState = {
  todos: [],
  filter: 'all',
}

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'todo/add':
      const id = Math.random().toString(36)
      return {
        ...state,
        todos: state.todos.concat({ id, ...action.payload })
      }
    case 'todo/complete':
      const newTodos = state.todos.map(todo => {
        if (todo.id === action.payload.id) {
          return { ...todo, completed: !todo.completed }
        }

        return todo
      })

      return {
        ...state,
        todos: newTodos,
      }
    case 'filter/set':
      return {
        ...state,
        filter: action.payload,
      }
    default:
      return state
  }
}
const selectTodos = state => {
  const { todos, filter } = state

  if (filter === 'complete') {
    return todos.filter(todo => todo.completed)
  }

  if (filter === 'incomplete') {
    return todos.filter(todo => !todo.completed)
  }

  return todos
}

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch()
  return (
    <li
      style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
      key={todo.id}
      onClick={() => dispatch({ type: 'todo/complete', payload: todo })}
    >
      {todo.title}
    </li>
  )
}
function App() {
  const [value, setValue] = useState('')
  const dispatch = useDispatch()
  const todos = useSelector(selectTodos)
  const submit = e => {
    e.preventDefault()
    if (!value.trim()) {
      return
    }
    const todo = { title: value, completed: false }
    dispatch({ type: 'todo/add', payload: todo })
    setValue('')
  }

  return (
    <div>
      <form onSubmit={submit}>
        <input value={value} onChange={e => setValue(e.target.value)} />
      </form>
      <button onClick={() => dispatch({ type: 'filter/set', payload: 'all' })}>Todos</button>
      <button onClick={() => dispatch({ type: 'filter/set', payload: 'complete' })}>Completados</button>
      <button onClick={() => dispatch({ type: 'filter/set', payload: 'incomplete' })}>Incompletos</button>
      <ul>
        {todos.map(todo => <TodoItem key={todo.id} todo={todo} />)}
      </ul>
    </div>
  );
}
export default App;
```

4. Notemos que el componente de reducer de la aplicacion mostrada anteriormente es muy complejo y largo. Por lo que podemos subdividirlo en reducers mas pequeños y disminuir la complejidad. Seguimos modificando solamente el archivo "App.js".
```jsx
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { combineReducers } from 'redux'

//Reducer que imprime las tareas "todo" (to-do).
const todosReducer = (state = [], action) => {
  switch(action.type) {
    case 'todo/add':
      const id = Math.random().toString(36)
      return state.concat({ id, ...action.payload })

    case 'todo/complete':
      return state.map(todo => {
        if (todo.id === action.payload.id) {
          return { ...todo, completed: !todo.completed }
        }
        return todo
      })
    default:
      return state
  }
}

//Reducer que filtra las tareas todo.
export const filterReducer = (state = 'all', action) => {
  switch(action.type) {
    case 'filter/set':
      return action.payload
    default:
      return state
  }
}

//reducer que combina los anteriores.
export const reducer = combineReducers({
  todos: todosReducer,
  filter: filterReducer,
})

//Funcion select.
const selectTodos = state => {
  const { todos, filter } = state

  if (filter === 'complete') {
    return todos.filter(todo => todo.completed)
  }
  if (filter === 'incomplete') {
    return todos.filter(todo => !todo.completed)
  }
  return todos
}

//Funcion para cada item.
const TodoItem = ({ todo }) => {
  const dispatch = useDispatch()
  return (
    <li
      style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
      key={todo.id}
      onClick={() => dispatch({ type: 'todo/complete', payload: todo })}
    >
      {todo.title}
    </li>
  )
}

//Componente App.
function App() {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  const todos = useSelector(selectTodos);

  const submit = e => {
    e.preventDefault()
    if (!value.trim()) {
      return
    }
    const todo = { title: value, completed: false }
    dispatch({ type: 'todo/add', payload: todo })
    setValue('')
  }

  return (
    <div>
      <form onSubmit={submit}>
        <input value={value} onChange={e => setValue(e.target.value)} />
      </form>
      <button onClick={() => dispatch({ type: 'filter/set', payload: 'all' })}>Todos</button>
      <button onClick={() => dispatch({ type: 'filter/set', payload: 'complete' })}>Completados</button>
      <button onClick={() => dispatch({ type: 'filter/set', payload: 'incomplete' })}>Incompletos</button>
      <ul>
        {todos.map(todo => <TodoItem key={todo.id} todo={todo} />)}
      </ul>
    </div>
  );
}
export default App;
```

Luego de esto react nos premite trabajr con código asincrono, llamados a APIs y cosas por el estilo. Pero explicar todo lo anterior en el presente archivo seria muy complejo y extenso por lo que se recomienda visitar el curso de react de nicolas schurmann desde la clase 154. "Middlewares".

## Next.js
Es un framework que nos entrega diversas herramientas para que el desarrollo de aplicaciones sea mucho más facil. Además provee de multiples funcionalidades de cara al usuario, como generacion de contenido estático. Usar next hará que nuestra aplicación sea en lo sumo ligera, veloz y fácil de codear.
