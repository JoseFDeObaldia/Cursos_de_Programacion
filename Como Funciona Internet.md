# COMO FUNCIONA LA WEB

## 1. BREVE RESEÑA DEL INTERNET
Empecemos por realizar una breve reseña histórica del internet, esto nos ayudará a poseer más contexto sobre el ecosistema en el que trabajamos e interactuamos actualmente.

Los inicios de Internet se remontan a los años 60 durante la guerra fría, en estos años Estados Unidos creo una red exclusivamente militar con el objetivo de que, en el caso de un ataque ruso, se pudiera tener acceso a la información militar desde cualquier punto del país. Esta red se creó en 1969 y se llamó ARPANET. En principio, la red contaba con 4 ordenadores distribuidos entre distintas universidades del país, pero crecio tanto que dos años después, ya contaba con unos 40 ordenadores conectados. Tanto fue el crecimiento de la red que su sistema de comunicación quedó obsoleto y los investigadores debieron crear un nuevo protocolo de transmision de datos, el nuevo protocolo se llamo TCP/IP y es el que usamos hoy en día.

Con el pasar del tiempo ARPANET siguió creciendo y abriéndose al mundo, ahora cualquier persona con fines académicos o de investigación podía tener acceso a la red. Las funciones militares se desligaron de ARPANET y fueron a parar a MILNET. La NSF (National Science Fundation) crea su propia red informática llamada NSFNET, que más tarde absorbe a ARPANET, creando así una gran red con propósitos científicos y académicos. El desarrollo de las redes fue abismal, y se crean nuevas redes de libre acceso que más tarde se unen a NSFNET, formando el embrión de lo que hoy conocemos como "Internet".

Mientras sucedia todo esto, por su parte un grupo de investigacion del CERN estaba avocado a la búsqueda de un sistema de almacenamiento y recuperación de datos. Berners Lee, uno de los investigadores sugirio usar hipervínculos para relacionar direcciónes de los datos. Robert Caillau quien cooperó con el proyecto, cuenta que en 1990 deciden ponerle un nombre al sistema y lo llamaron World Wide Web (WWW) o telaraña mundial. La nueva fórmula permitía vincular información en forma lógica y a través de las redes. El contenido se programaba en un lenguaje de hipertexto con «etiquetas» que asignaban una función a cada parte del contenido. Luego, un programa de computación, un intérprete, era capaz de leer esas etiquetas para desplegar la información. Ese intérprete sería conocido como «navegador» o «browser».

Un tiempo más tarde de la mano de un desarrollador llamado Marc Anderson, se producia la primera version de un navegador que pueda acceder con naturalidad a la World Wide Web (Mosaic). En este browser la interfaz gráfica iba más allá de lo previsto y la facilidad con la que podía manejarse el programa abría la red a un mundo de posibilidades.

A partir de entonces, Internet comenzó a crecer más rápido que otro medio de comunicación, convirtiéndose en lo que hoy todos conocemos y el servicio WWW tuvo tanto éxito que hoy en día es habitual la confusión entre ambos términos.

Existen uchos otros servicios y protocolos en internet, aparte de la Web: el envío de correo electrónico (SMTP), la transmisión de archivos (FTP y P2P), las conversaciones en línea (IRC), la mensajería instantánea, los boletines electrónicos (NNTP), el acceso remoto a otros dispositivos (SSH y Telnet), etc.

## 2. ARQUITECTURA DE LA WEB
Una vez entrados en materia y teniendo nociones de los orígenes del internet, procederemos a explicar como es la arquitectura de la web.

Para comenzar vamos a definir lo que es una red de computadoras: **_"Una red de computadoras es una colección de equipos nodos y software conectados entre sí por medio de dispositivos físicos o inalámbricos con el fin de compartir datos y recursos u ofrecer servicios"_**

La red de computadoras más grande y conocida es Internet, la cual ofrece distintos servicios entre los cuales destaca WWW.

Luego, dentro del servicio WWW, las aplicaciones web se basan en una arquitectura cliente / servidor. Es decir que, por un lado está el cliente (navegador) y por otro lado el servidor que almacena los datos.

- Cliente:
    - Front End: El código o programación que muestra información al navegador web llamado cliente.

- Servidor: 
    - Back End: El programa que permite la comunicación con el cliente, ejecuta acciones en el servidor y conecta con la base de datos.
    - Base de dato o DB: Donde se almacena la información.
    - Api: es quien nos permite conectar a otros sistemas.

Al crear una aplicación web es importante tambien entender que podemos modularizar nuestra aplicación de muchas maneras.

¿Qué es una arquitectura centralizada?
Es cuando tenemos todos los elementos de nuestra aplicación web de arquitectura de Cliente / Servidor en un solo lugar equipo o servidor, es decir, tener el Back End, Front End, Bases de datos y APIs en el mismo equipo. Esto hace que en el caso de una falla del equipo toda nuestra aplicación también fallará.

 ¿Qué es la arquitectura distribuida?

Es tener la posibilidad y capacidad de separar nuestro sistema en distintos servidores de la red (sea red local o internet). Ya sabemos que cuando hablamos de arquitecturas estamos refiriéndonos a una estrategia de cómo construir nuestro sistema dependiendo de lo grande que sea, de las funcionalidades que tenga, esto es mas bien una forma de pensar en cómo escalar nuestro sistema para que soporte más usuarios o más transacciones.


Analicemos juntos los escenarios  de la imagen anterior:

Escenario 1: En este caso podemos ver que la aplicación está separada en  Front End, Back End y bases de datos están en el mismo servidor. Notemos que la aplicación fue diseñada de forma modular o separada ( para poder distribuirla) todas las partes del sistema están en un mismo servidor, es decir, en caso de falla del servidor afecta a todo el sistema.   
Escenario 2: En este caso podemos ver que se ha separado la base de datos y el sistema sigue funcionando porque el desarrollador Back End escribió el código pensando en una arquitectura distribuida.  Pero la parte del Front End y Back End aun están en un mismo servidor.
Escenario 3:  En este caso podemos ver que cada parte del sistema Front End, Back End y Base de datos esta en un servidor diferente. Con esto comenzamos a ver los beneficios del diseño con arquitectura distribuida en los sistemas.
Escenario 4: En este caso podemos ver que cada parte del sistema está en la nube de distintas empresas y nuestro sistema sigue funcionando por su diseño modular o distribuido.


## 1. INFRAESTRUCTURA DE UNA PÁGINA WEB
1. La infraestructura de red: Es decir, cables de red, placas de red, switch, routers, modem, etc.

2. Isp: Proveedor del servicio de internet.



3.- Cliente Web

Es el navegador web. Ejemplos: Chrome, Safari, Firefox, etc. Pero ya no se restringe solo a estos dispositivos sino que podría ser, por ejemplo, un sistema embebido ejecutándose en una SBC (small board computer).



4.- Nombre de Dominio

Es el nombre de un sitio web. Es decir, es lo que aparece después de "@" en una dirección de correo electrónico o después de "www." en una dirección web. Si alguien te pregunta cómo te puede encontrar en Internet, tendrás que decirle tu nombre de dominio. Las computadoras para comunicarse utilizan direcciones IP (números únicos en la red).  Un ejemplo de una dirección IP de un servidor es 173.194.121.32. Para nosotros es imposible recordar tantos números y saber qué servicio o qué aplicación se encuentrta en esa dirección IP o servidor. Para resolver estos problemas se usan palabras que las personas pueden leer, que son intuitivas, fáciles de recordar y dicen mucho sobre el servicio web que ofrecen, se denominan nombres de dominio. ¿Puedo comprar un nombre de dominio? No, los nombres no se pueden comprar, solo se puede pagar por el derecho a usarlo por cierto periodo de tiempo. Para registrar un dominio a tu nombre debes hacerlo por medio de una empresa que se encarga de administrar las registraciones de nombres de dominio. En el caso de Argentina es  https://nic.ar
Aquí tienes algunos ejemplos de nombres de dominio:  google.com, wikipedia.org, youtube.com  https://domains.google/intl/es_es/learn/web-terms-101/




5.- URL

Una URL (o localizador uniforme de recursos) es una dirección web completa que se utiliza para encontrar una página web específica. Mientras que el dominio es el nombre del sitio web, la URL es una dirección que remite a los usuarios a una de las páginas de ese sitio web. Cada URL contiene un nombre de dominio y otros componentes necesarios para localizar una página o un contenido concreto. Aquí tienes algunos ejemplos de URL:  http://www.google.com -  https://es.wikipedia.org/wiki/umami -  https://www.youtube.com/feed/trending ; https: // dominios. google / intl / es_es / learn / web-terms-101 /



6.- Sitio web

Aunque una cosa lleve a la otra, comprar un nombre de dominio no implica tener un sitio web. El dominio es el nombre del sitio web, la URL es la forma de encontrarlo y el sitio web es lo que los usuarios ven en su pantalla y con lo que interactúan. Es decir, cuando compres un dominio, habrás adquirido el nombre de tu sitio web, pero te faltará crear el sitio web en cuestión. https://domains.google/intl/es_es/learn/web-terms-101/


 

7.- Servidor DNS

Sistema de Nombre de Dominio. Se ocupa de la administración del espacio de nombres de dominio. Este servidor se encarga de hacer las conversiones de nombres de dominio a direcciones IP. Cuando el cliente realiza una petición web, por ejemplo google.com, una de las primeras acciones del sistema es invocar un servidor DNS para que devuelva la dirección IP del / o de alguno de los servidores de google. Por ejemplo devolverá la ip 172.217.162.14.



8.- Hosting
Es el nombre que se le da al servicios de alojamiento en la web a nuestras paginas, aplicaciones, bases de datos (los hosting son servidores que están siempre encendidos y conectados a internet). Los programadores una vez terminado el trabajo suben su aplicación web al Hosting para que todo el mundo pueda acceder.



9.- Servidor Web 

También llamado servidor HTTP, es un programa informático que procesa una aplicación del lado del servidor, realizando conexiones bidireccionales o unidireccionales y síncronas o asíncronas con el cliente y generando o cediendo una respuesta en cualquier lenguaje o aplicación del lado del cliente.

 

10.- Contenedor de aplicaciones Web (o servidor de aplicaciones web) , 

En el módulo que permite la ejecución de aplicaciones web. Por ejemplo el módulo PHP o Python del Servidor Web. Componente ASP o ASPX de IIS. Servidor o Contenedor de Aplicaciones Web Java: Tomcat, Weblogic, Websphere, JBoss, Geronimo, etc.

 

11.- Servidor de Bases de Datos

Estos son contenedores de bases de datos que permiten organizar y administrar los datos que deben permanecer en un medio de almacenamiento permanente. Resuelven problemas de: seguridad, mecanismos de comunicación, concurrencia, inconsistencias de los datos, respaldo, entre otros. Hay varios tipos de bases de datos, por ejemplo, las relaciones que organizan los datos en forma de tablas, en filas y columnas. Otro tipo son los orientados a objetos u orientados a documentos donde el concepto de tablas se cambia por la colección con formatos similares a “json”. JavaScript Object Notation (JSON) es un formato basado en texto estándar para representar datos estructurados en la sintaxis de objetos de JavaScript. Es utilizado para transmitir datos en aplicaciones web (por ejemplo: enviar algunos datos desde el servidor al cliente, así estos datos pueden ser mostrados en páginas web, o viceversa). 



## 3. GLOSARIO DE TÉRMINOS WEB

- **WWW:** La "World Wide Web" es un conjunto de protocolos que permite, de forma sencilla, la consulta remota de archivos de hipertexto y utiliza internet como medio de transmisión.

- **Protocolo:** Los protocolos son conjuntos de normas para formatos de mensaje y procedimientos que permiten a las máquinas y los programas de aplicación intercambiar información. Cada máquina implicada en la comunicación debe seguir estas normas para que el sistema principal de recepción pueda interpretar el mensaje.

● HTML (lenguaje de marcado de hipertexto). Lenguaje de marcado o etiquetado que se emplea para escribir los documentos o páginas web.
● URL (localizador de recursos universal). El localizador de recursos uniforme, sistema de localización o direccionamiento de los documentos web.
● HTTP (Protocolo de transferencia de hipertexto) El lenguaje con el que se comunica el navegador con el servidor web y el que se emplea para transmitir los documentos web.


## 1. PROCESO DE UNA PETICION WEB
1. Cliente Web: Solicita la resolución de nombres al servidor DNS. Por ejemplo: google.com
2. Servidor DNS: Recibe y trata la solicitud. Una vez recibida la petición realiza las consultas necesarias para resolver y obtener la dirección IP.
3. Servidor DNS: Devuelve al navegador Web la dirección IP que corresponde al Servidor Web.
4. Cliente Web: Conecta con el servidor web mediante la dirección IP y el puerto. Realiza la petición mediante una URL (Método GET) o un formulario (Método POST). Dicha solicitud incluye: la dirección IP del servidor web, el puerto del servidor web, URL y parámetros.
5. Servidor Web: Control de Acceso, Análisis de la petición y localización del recurso. Como detecta que es el acceso a un fichero o ruta de aplicación tiene que traspasar el control al Contenedor de aplicaciones Web
6. Paso de la petición del servidor web al contenedor de aplicaciones web
7. El contenedor analiza la petición y en base a la ruta traspasa el control a la aplicación web.
8. Paso del control de la petición desde el CAW a la aplicación.
9. La aplicación recibe la petición y decide qué hacer en base a ella, es decir, elegir la función que se encargará de gestionar esa petición, normalmente en base a la ruta, el método HTTP y los parámetros de entrada por URL. Una vez elegida ejecutará esa función.
10. La aplicación realiza una petición SQL a la base de datos.
11. La Base de Datos recibe la petición SQL y la procesa realizando los cambios que tenga que hacer, si corresponde.
12. Una vez procesada la petición devuelve los datos a la aplicación web, normalmente un conjunto de datos. Ej. los 10 últimos clientes.
13. La aplicación web recibe estos datos y tiene que generar una salida, normalmente HTML, donde estructura el contenido de los datos devueltos por la BBDD en etiquetas HTML.
14. La aplicación web devuelve una respuesta al Contenedor de Aplicaciones Web
15. El contenedor procesa la respuesta, para controlar la ejecución de la aplicación por si esta falla.
16. El Contenedor de Aplicaciones Web devuelve el fichero al servidor web.
17. El servidor Web devuelve los datos dentro de la respuesta HTTP al navegador web.
18. Cliente Web: Presenta (renderiza) el contenido HTML resultante.



---

## **2. USO DE OPERADORES DE BÚSQUEDA**
Por último veremos el uso de operadores de búsqueda lo cual nos será de ayuda para realizar mejores consultas en la web.

Los operadores de búsqueda son una serie de símbolos y comandos que nos ayudan a acotar los resultados en las consultas que realizamos. Algunos de ellos incluyen símbolos como el de puntuación, que Google siempre ignora en el caso de que no pertenezcan a un operador concreto.

La forma en la que funcionan es muy sencilla. Lo único que se debe hacer es escribir el texto en la barra de búsqueda e incluir el operador que quieres utilizar. Habrá veces en las que este operador estará entre comandos de búsqueda o al final de cada uno, dependiendo de lo que quieras hacer con él.

|Operador|Función|Ejemplo|
|:---:|---|---|
|OR|Muestra los resultados que contengan cualquiera de las palabras clave|Perro OR Animal OR Mascota|
|AND|Muestra los resultados que contengan todas las palabras clave incluidas|Programacion AND javascript|
|""|Muestra los resultados donde aparezcan los términos exactos que hayamos incluido|"Github flow" o "Subversion"|
|-|Muestra resultados donde se excluya la palabra que se haya puesto detrás del guion|Fullstack -MEAN|
|*|Es un comodín que puede coincidir con cualquier palabra en la búsqueda|"Scrum *meeting"|
|#..#|muestra resultados donde donde se añade el intervalo de números especificado|Celulares de 60000..120000 pesos|
|()|Permite combinar operadores. En el ejemplo se buscarán redes sociales o plataformas sociales, pero excluyendo Twitter de los resultados.|("redes sociales" OR "plataformas sociales") -Twitter|
|MAP|La búsqueda devuelve resultados con mapas del sitio indicado|map:BuenosAires|
|DEFINE|Busca la definición de una palabra|Define:Lunfardo|
|SITE|Te busca los resultados dentro de una web especificada|Cursos site:www.coursera.com|
|INFO|Te muestra resultados donde se ofrezca información sobre una página web.|info:www.argentina.gob.ar/|
|RELATED|Muestra en los resultados otras páginas similares a la especificada|related:www.instagram.com|
|LINK|Muestra en los resultados páginas que tienen enlaces a la web especificada|Teléfonos link:https://developer.mozilla.org/|
|CACHE|Muestra la copia de la página que hay en el caché de Google.|cache:https://developer.mozilla.org/|
|FILETYPE|Busca resultados que contengan archivos con el formato que hayas especificado|filetype:pdf presupuestos 2021|
|ALLINTEXT O INTEXT|Encuentra páginas que incluyan en su texto algunos o todos los términos que se hayan incluido|allintext:"desarrollador fullstack"|
|STOCKS|Busca el estado actual de la empresa que busques en bolsa|stocks:Facebook|
|WEATHER|El tiempo en la ciudad elegida, se puede agregar el nombre del pais con una coma para ser más concreto|weather:Rosario,ar|
|TIME|Muestra la hora en la localidad especificada|time:Nueva York|
|@|Busca etiquetas sociales asociadas con Twitter|@ArgentinaPrograma|
|#|Busca términos publicados con hastags en redes sociales que tengan sistema de hashtags|#ArgentinaPrograma|