-- Seleccionar datos: Leer datos "operacion de read".
select * from usuarios;
select * from usuarios where id = 1;
select * from usuarios where edad = 19 and apellido = 'gomez';


-- traer toda la tabla.
select * from usuarios;

-- limit. Trae todos los registros que encuentre hasta el limite especificado.
select * from usuarios limit 1;

-- where donde. establece la o las condiciones para traer elementos
select * from usuarios where edad > 15;
select * from usuarios where edad >= 15;


-- Realizar busquedas avanzadas
-- and
select * from usuarios where edad > 20 and email = 'nico@gmail.com';

-- or
select * from usuarios where edad > 20 or email = 'layla@gmail.com';

-- not
select * from usuarios where != 'layla@gmail.com';

-- between. "entre"
select * from user where edad between 15 and 30;

-- like
select * from user where email like '%gmail%';

select * from user where email like '%@gmail.com';

-- buscar registros y ordenarlos en ascendente y descendente.
select * from user order by edad asc;
select * from user order by edad desc;

-- seleccionando COLUMNAS "CAMPOS"
-- que lo muestre como "la mayor edad" y "la menor edad".
select max(edad) as LaMayorEdad from user;
select min(edad) as LaMenorEdad from user;

select id, name from user;
select id, name as nombre from user;

-- esto es válido?
select id as ID, name as NOMBRE from user;

-- crear tabla con llave foranea.
CREATE TABLE product (
    id int not null auto_increment,
    name varchar(50) not null,
    created_by int not null,
    marca varchar(50) not null,

    PRIMARY KEY(id),
    FOREIGN KEY(created_by) REFERENCES user(id)
);

-- cargar datos en una tabla relacionada.
insert into product (name, created_by, marca)
values
    ('ipad', 1, 'apple'),
    ('iphone', 1, 'apple'),
    ('watch', 2, 'apple'),
    ('macbook', 1, 'apple'),
    ('imac', 3, 'apple'),
    ('ipad mini', 2, 'apple');

-- JOINS. Unir una tabla con otra.
select u.id, u.email, p.name from user u left join product p on u.id = p.created_by;












-- Otras cositas
Funciones escalares SQL, devuelven un sólo valor basándose en el valor de entrada.

UCASE() - Convierte un campo a mayúsculas
LCASE() - Convierte un campo a minúsculas
MID() - Extrae caracteres de un campo de texto
LEN() - Devuelve la longitud de un campo de texto
NOW() - Devuelve la hora y fecha actuales del sistema
FORMAT() - Da formato a un formato para mostrarlo




https://diego.com.es/principales-funciones-en-sql

