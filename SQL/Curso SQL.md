![LogoSQL.png](LogoSQL.png)

# CURSO DE SQL
SQL es un acrónimo en inglés para **Structured Query Language**, es decir, **lenguaje de consulta estructurado**. El Lenguaje de Consulta Estructurada SQL es un lenguaje gestor para el manejo de información en bases de datos relacionales. Es utilizado en la mayoría de empresas que almacenan datos en una base de datos y ha sido y sigue siendo el lenguaje de programación más usado para bases de datos de este tipo.

Este tipo de lenguaje de programación permite comunicarse con la base de datos y realizar operaciones de acceso y manipulación de la información almacenada. Sin embargo no solo se limita a ello sino que tambien permite realizar operaciones administrativas sobre las bases de datos y realizar cálculos avanzados y álgebra. Por tanto, se trata de un lenguaje completo de bases de datos que va más allá de la recuperación de la información.

Para aprender más sobre SQL y corrborar la información de este curso: [Documentación de SQL](https://www.w3schools.com/sql/default.asp "Ir a la documentación")

---

## 1. INTRODUCCIÓN A BASES DE DATOS
Una base de datos es cualquier forma de almacenar información de forma que esta tenga sentido.

### **1.1. SQL vs No-SQL Databases:**
En general existen dos tipos de bases de datos, las primeras se basan en tablas y las segundas en documentos:

- **Bases de datos relacionales:** Son una colección de datos organizados en un conjunto de tablas formalmente descritas, desde donde se puede acceder a los datos o volver a montarlos de muchas maneras diferentes sin tener que reorganizar las tablas. Esta base de datos se basa en las relaciones entre los datos de la tabla El estándar aqui son las bases de datos basadas en SQL.

- **Bases de datos no relacionales:** O tambien llamadas No-SQL, porque no ocupan este lenguaje. La información se organiza normalmente mediante documentos y es muy útil cuando no tenemos un esquema exacto de lo que se va a almacenar.

### **1.2. RDBMS:**
Para poder comunicar los datos de nuestra base de datos con nuestra API, y de ahí con nuestras aplicaciones, deberemos utilizar un softawe que gestione nuestra base de datos.

En el caso de las bases de datos del tipo relacional los software que se encargan de esto se llaman, **RDBMS** o __Relational DataBase Management System__. Algunos ejemplos de estos softwares son: MySQL, Postgres, Oracle, MariaDB, etc.

La funcion de ellos es que entregarnos un acceso facil a una base de datos. Ellos se encargarán de la seguridad y la integridad de los datos. Además de otras operaciones como manejar la concurrencia, efectuar respaldos, alterar los datos, etc.

### **1.3. CRUD:**
Las operaciones más comunes con las que nos vamos a encontrar en los softwares de gestión de bases de datos son las *"Operaciones CRUD"*.

CRUD es una memotécnica que significa:
- CREATE
- READ
- UPDATE
- DELETE

Estas son las principales operaciones que necesita un sistema de gestión de base de datos.

### **1.4. Consultas - Query:**
Para que nosotros podamos acceder a los registros o realizar cualquiera de las operaciónes anteriores vamos a tener que escribir una consulta (Query en inglés). Las consultas son los fragmentos de código o comandos que le enviamos a nuestro sistema gestor de bases de datos.

### **1.5. Campos,  y registros:**
En una tabla de una base de datos las filas o items pasan a llamarse _"registros"_, mientras que cada columna es un _"campo"_. Luego cada valor almacenado en una celda es un _"dato"_.

![Img1.png](Img1.png)

Las tablas deberán tener un nombre propio para poder darle un sentido a los datos. Así en cualquier base de datos podemos tener la tabla de usuarios, la de productos, la de administradores, etc.

---

## 2. RELACIONES ENTRE TABLAS (CARDINALIDAD):
Las tablas de nuestra base de datos podrán luego relacionarse entre si para poder entonces trabajar con datos de varias tablas a la vez.

Una base de datos relacional consta de una o varias tablas relacionadas que, cuando se utilizan de forma conjunta, contienen la información que necesita. Cada instancia de los datos se guarda en una única tabla en cada momento, pero se puede tener acceso a los datos, que se pueden mostrar desde cualquier tabla relacional.

Una relación se establece cuando el valor de un campo, denominado "campo de coincidencia", (a veces tambien campo de clave) en un lado de la relación, se compara con éxito con un valor en el campo de coincidencia en el otro lado de la relación. Todo esto de acuerdo con los criterios que especifique en la relación.

Veamos un ejemplo de esto:

_Tenemos una base de datos con dos tablas, una de usuarios y otra de productos, como la siguiente:_

![Img2.png](Img2.png)

_Podemos relacionar ambas tablas colocando en la tabla Productos y en el campo de "Creador", el ID del usuario que lo creo, esto es muy útil para llevar un control de los usuarios que realizan tareas. Esta relacion entre tablas se llaman relacion de "1 a n" o "uno a muchos". Porque un usuario puede crear muchos productos, pero un producto puede ser creado por un solo usuario._

### *2.1. Tipos de Relaciones:*
Pueden darse varios tipos de relación entre tablas.

- **Relaciones uno a uno:** Se usan con frecuencia para indicar relaciones críticas para que se pueda acceder a los datos, es decir como clave.

    Una relación uno a uno es un vínculo entre la información de dos tablas, donde cada registro en cada tabla solo aparece una vez. Por ejemplo, puede haber una relación uno a uno entre los empleados y los coches que conducen. Cada empleado solo aparece una vez en la tabla "Empleados" y cada coche aparece solo una vez en la tabla "Automóviles de la Empresa".

- **Relacion 1 a "n":** En una relación de uno a muchos, un registro de una tabla se puede asociar a uno o varios registros de otra tabla. Por ejemplo, cada cliente puede tener varios pedidos de ventas.

    Es el caso típico donde un usuario puede crear muchos productos, pero un producto solo puede ser creado por un usuario.

 - **Relaciones de muchos a muchos:**
Una relación de muchos a muchos o "n" a "n", se produce cuando varios registros de una tabla se asocian a varios registros de otra tabla. Por ejemplo, existe una relación de muchos a muchos entre los clientes y los productos: _los clientes pueden comprar varios productos y los productos pueden ser comprados por muchos clientes._

    Por lo general, los sistemas de bases de datos relacionales no permiten implementar una relación directa de muchos a muchos entre dos tablas. Ya que de hacerlo así no existe un identificador exclusivo o _primary key_ a cada elemento.

    Para evitar este problema, puede dividir la relación de muchos a muchos en dos relaciones de uno a muchos mediante el uso de una tercera tabla denominada tabla de unión.

    Un ejemplo típico de una relación de muchos a muchos es aquella entre los estudiantes y las clases. Un estudiante puede matricularse en muchas clases y una clase puede incluir muchos estudiantes.

    ![Img3.png](Img3.png)

    En el siguiente ejemplo, se incluye una tabla "Alumnos", que contiene un registro para cada estudiante, y una tabla "Clases", que contiene un registro para cada clase. Una tabla de unión, "Matrículas", crea una relación de uno a muchos, una entre cada una de las dos tablas.

    La clave principal ID de estudiante identifica de forma exclusiva a cada estudiante de la tabla Alumnos. La clave principal ID de clase identifica de forma exclusiva cada clase de la tabla Clases. La tabla Matrículas contiene las claves externas ID de estudiante e ID de clase.

### **2.2. Diagramas Entidad-Relación:**
Un diagrama entidad-relación, también conocido como modelo entidad relación o ERD, es un tipo de diagrama de flujo que ilustra cómo las "entidades", como personas, objetos o conceptos, se relacionan entre sí dentro de un sistema. Los diagramas ER se usan a menudo para diseñar bases de datos relacionales.

---

## 3. MANEJO DE LAS BASES DE DATOS Y TABLAS:

### **3.1. Creación y eliminación de bases de datos:**
Para poder proceder a la creación de una base de datos en SQL deberemos escribir el siguiente comando. `CREATE DATABASE nombreDeLaBaseDeDatos;`. Donde se utilizan las palabras reservadas CREATE DATABASE y luego se especifica el nombre de nuestra nueva base de datos.

Tambien podemos pedirle a SQL que nos muestre en una lista todas las bases de datos existentes. Esto se logra con el comando `SHOW DATABASES;`. Notesé la sintaxis con un punto y coma al final de cada instrucción.

Luego para borrar la base de datos: `DROP DATABASE nombreDeLaBaseDeDatos;`.

Para poder empezar a trabajar en una base de datos deberemos seleccionarla de todas las bases existentes y "ponerla en uso". Esto se logrará con el comando `USE nombreDeLaBaseDeDatos;`

### **3.2. Realizar Backups:**
Para realizar una copia completa de la base de datos con SQL Server, se utiliza la siguiente instrucción:

`BACKUP DATABASE databasename TO DISK = 'filepath';`

Luego si realizamos sucesivos backups podemos solo guardar los datos que hayan variado, es decir una copia de "solo los diferentes": 

`BACKUP DATABASE databasename TO DISK = 'filepath' WITH DIFFERENTIAL;`


### **3.3. Creación y eliminación de tablas:**
Crear bases de datos es solo la punta del iceberg en el lenguaje SQL, ahora veremos como añadir tablas a nuestra base. Por convención las tablas deben escribirse con su nombre en singular, así tendremos la tabla de usuarios definida como _user_ y no como ~~users~~. Para proceder con la creación de una tabla se escribirá lo siguiente:

`CREATE TABLE nombreDeLaTabla ( estructuraDeLaTabla );`

Es decir se utilizan las palabras reservadas CREATE TABLE para indicar la creación de la misma, luego se especifica el nombre de la tabla y a continuación su formato entre paréntesis como un argumento.

En el formato de la tabla especificaremos cada campo separado por comas. De este modo tendremos el campo "id", luego el campo "name" y él campo "age" descriptos de la siguiente manera.

```SQL
-- Hasta ahora tenemos lo siguiente.
CREATE TABLE IF NOT EXISTS user (
    id,
    name,
    age
);
```

La tabla así descrita no puede funcionar, ya que se debe especificar el tipo de dato que corresponda a cada campo y cual es la llave primaria de la tabla.

```SQL
-- Ejemplo Completo
CREATE TABLE usuarios (
    id int not null auto_increment,
    nombre varchar(255) not null,
    apellido varchar(255) not null,
    edad int not null,
    PRIMARY KEY (id)
);
```
Aquí hemos agregado el tipo de dato (int para los enteros y varchar con una longitud de 255 caracterés para los textos) y el atributo NOT NULL, además de especificar que la llave primaria de nuestra tabla es el campo de "id". Notesé la instrucción de *auto_increment* al definir el campo de id. Toda llave primaria debe cumplir con el atributo de ser autoincremental, si bien sería interesante que SQL lo reconozca por defecto, debemos agregarlo obligadamente y de forma manual.

La sintaxis mínima que debe cumplir todo campo en SQL es **nombre + tipoDeDato**.

Por último, con el comando `DROP TABLE table_name;` podemos eliminar una tabla en SQL y con el comando `RENAME TABLE actual_name TO new_name;` podemos renombrar una tabla.

### **3.4. Modificar tablas:**
Con lo anterior ya sabemos crear tablas en SQL, ahora veamos como alterar las columnas o "campos" en una tabla ya creada. Para hacerlo la sintaxis a utilizar será: `ALTER TABLE nombreDeLaTabla` y seguido a esto la operación a realizar con sus parámetros. Las operaciones posibles pueden ser "ADD" para añadir columnas, "DROP" para eliminar la columna y "ALTER" o "MODIFY" para modificar algún atributo según el lenguaje.

- __ADD:__ Para añadir una columna la sintaxis a usar sería la siguiente: `ALTER TABLE table_name ADD column_name datatype ... ;`. Donde en el espacio de los puntos suspensivos podemos agregar más atributos a nuestro campo.

- __DROP:__ Para eliminar una columna usamos: `ALTER TABLE table_name DROP COLUMN column_name;`, algunos RDBMS no permiten eliminar campos de esta forma, en una suerte de "modo seguro".

- __ALTER__ O __MODIFY:__ Para modificar algún atributo de un campo deberemos recurrir a la siguiente sintaxis en el caso de usar SQL Server:

    `ALTER TABLE table_name ALTER COLUMN column_nlame ... ;`
    
    Luego, si usamos MySQL como es usual, tendremos que escribir: 
    
    `ALTER TABLE table_name MODIFY COLUMN column_name ... ;`


---

## 4. TIPOS DE DATOS

SQL posee distintos tipos de datos a asignar en cada campo, aquí dejamos una lista con algunos de ellos:

- Bit (Valor 0,1).
- Char (Carácteres individuales).
- DateTime (Almacena fecha y hora, su formato es "YYYY-MM-DD HH:MM:SS").
- Decimal
- Int (Números enteros, desde -2^31 hasta +2^31).
- Money (Un valor monetario).
- Real (Números Reales).
- VarChar (Cadenas de texto).

Es importante destacar que todos los tipos de datos en SQL pueden contenter valores nulos o NULL, a menos que se haya especificado de antemano con la sentencia `NOT NULL`.

---

## 5. INSERTAR REGISTROS (OPERACION "CREATE")
Para poder insertar un nuevo registro en una tabla debemos escribir el comando insert into, seguido del nombre de la tabla y de los campos que vamos a rellenar con sus valores. Los campos que no se rellenen quedarán con su configuración por defecto.

```SQL
insert into user (name, lastname, age) values ('Juan', 'Perez', 65);
insert into user (name, lastname, age) values ('Lucas', 'Gomez', 20);
insert into user (name, lastname, age) values ('Dani', 'Alvez', 5);
```
Un ejemplo de insertar tres registros en la tabla usuarios. Cada comando rellenara tres campos, "name", "lastname" y "age".

---

## 6. UPDATE Y DELETE
-- update. actualizar datos de un registro
update usuarios set estado = 'feliz' where id = 3;

-- delete.

delete from usuarios where nombre = 'Juan';
-- SQL en sus versiones más modernas viene con un "safe mode" en donde las operaciones de delete y update deben llevar un ID en el where. esto para evitar borrar todos los valores de algún campo.
delete from usuarios where id = 20;

-- esta consulta no sería válida en "safe mode". Arroja error 1175.
update animales set estado = 'triste' where tipo = 'dragon';


---

## 6. SELECT (OPERACIÓN "READ")

---

## 7. WHERE, AND, OR, NOT, BETWEEN Y LIKE
## 8. FUNCIONES SQL
## 9. JOINS