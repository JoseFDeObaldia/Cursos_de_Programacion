# Curso de MongoDB:
Este archivo contiene lo necesaro para poder empezar a trabajar con Mongo DB y esta realizado siguiendo el curso de Victor Robles.

## 1. Bases de datos no-relacionales:
Mongo DB es una base de dato del tipo no relacional o no-sql es decir que a diferencia de trabajar con tablas y un esquema de datos claro. Mongo DB trabaja con colecciones de documentos.
Esto tiene algunas ventajas como es la velocidad, la sencillez y el esquema libre, esto conforma a MOngoDB como una base de datos muy rápida y escalable, luego una desventaja sería que es propenso a almacentar datos repetidos.

Al trabajar con Mongo DB no utilizamos el lenguaje SQL sino un conjunto de comandos de Mongo los cuales se envian con algun programa que gestione la base de datos. Los documentos se almacenan en forma de JSON binarios lo que mejora increiblemente la velocidad. Si descargamos Mongo DB y trabajamos con él de forma nativa, deberemos utilizar el consola de comandos especifica de mongo, llamada "Mongo Shell".

---

## 2. Instalar MongoDB localmente:
Podemos utilizar la base de datos de MongoDB localmente, esto nos servirá para realizar algunas pruebas. Debemos dirigirnos a la página web oficial de mongo y descargar la Comunity Versión para escritorio. La cual es la versión gratuita.
Luego de descargarla debemos ejecutar el instalador. Es importante destacar que MongoDB nos ofrece instalarlo como servicio en la PC, esto es que el programa siempre corra en nuestro ordenador y así no tener que iniciarlo siempre. Por problemas de rendimiento esta opción no es la mejor para usuarios que no utilicen MongoDB de manera intensiva.
Luego creamos en el disco local `C:\` una carpeta llamada "data" la cual contendrá otra carpeta a la que llamaremos "db" esto es así ya que MongoDB colocará todos los archivos de configuración en ella.

Por último debemos iniciar MongoDB. Para ello nos dirigimos a la carpeta `C:\Program Files\MongoDB\Server\`. Una vez aquí seleccionamos la carpeta con la versión más actual de MongoDB y entramos en la carpeta bin. El path para la version 6.0 nos quedaria así: `C:\Program Files\MongoDB\Server\6.0\bin` una vez aquí dentro ejecutaremos los archivos "mongod.exe" el cual es el servicio de MongoDB, que debe estar corriendo en todo momento. Y luego ejecutamos la consola de MongoDB con el archivo "mongo.exe".

En la consola de mongo podemos ejecutar el comando `help`, con esto vemos una lista de los comandos disponibles.

En ultima instancia, si se desea tirar el servicio de MongoDB por linea de comandos, basta con cerrar el archivo de "mongod.exe";

---

## 3. Crear bases de datos en MongoDB:
En primera instancia crearemos una base de datos en MongoDB pero a nuvel de linea de comandos.
En mongo no tenemos un comando especifico para crear bases de datos por lo que se creará una base de datos siempre que le indiquemos por comandos una ruta a una base de datos la cual es ficticia y le carguemos una coleccion. 
Por ejemplo:
Si tenemos tres bases de datos: `config`,`admin` y `local`. pero usamos el comando de use e indicamos otra base que no sea ninguna de las tres. `use baseDeDatos1`. Mongo creerá que queremos crear esta nueva base de datos, por lo que nos dirigirá a una ruta de esta base.

Luego efectivamente para crear esta base de datos debemos colocarle una coleccion e insertar un documento dentro de ella.
Esto se hace con: `db.nombreColeccion.save({dato1: 'valor', dato2: 'valor'});`. Notesé que la sintaxis para cargar datos es como el formato de los archivos JSON.

Luego si ejecutamos el comando `show dbs`, mongo nos mostrará 4 bases de datos: `config`, `admin`, `local` y `baseDeDatos1`.
Esto porque "baseDeDtos1" posee ya, un contenido dentro. Incluso si navegamos a esta base con `use baseDeDatos1`. podemos ver las colecciones dentro con `show.collections` y mongo nos mostrará `nombreColeccion`.

---

## 4. Conectarse a una base de datos MongoDB con Compass:
Para conectarse a una base de datos de manera visual podemos usar el software integrado con la descarga de mongo, este programa se llama MongoDB Compass. El uso de Compass es realmente intuitivo por lo que no es necesario extendernos mucho en él.

Solo debemos recordar que para poder usar compass debemos estar corriendo el servicio de MongoDB.

## 5. Algunos comandos útiles de Mongo DB:
1. `db.stats()`: Estadísticas de base de datos. Este comando proporcionará detalles de las bases de datos junto con varias colecciones y parámetros relacionados. Ejecutar este comando nos devolverá:
```json
{
        "db" : "test",
        "collections" : 0,
        "views" : 0,
        "objects" : 0,
        "avgObjSize" : 0,
        "dataSize" : 0,
        "storageSize" : 0,
        "numExtents" : 0,
        "indexes" : 0,
        "indexSize" : 0,
        "scaleFactor" : 1,
        "fileSize" : 0,
        "fsUsedSize" : 0,
        "fsTotalSize" : 0,
        "ok" : 1
}
```
2. `db.dropDatabase()`: Eliminar base de datos actual.

3. `db.createCollection(Name,Options)`: Este comando consta de dos parámetros. La colección consta de cero o más documentos. Por lo tanto, para crear una colección, el parámetro obligatorio para usar en el comando es "Name", el parámetro opcional es "Options" el cual puede incluir el nombre de los documentos, su tamaño y su índice.

4. `collectionName.drop()`: Drop collection elimina la colección de la base de datos junto con todos los índices asociados con esa colección.
Devuelve verdadero para una caída exitosa y falso en caso de cualquier error o si la base de datos no existe.

5. `insert()`: Crea uno o varios documentos en la colección existente. También crea una colección si no está presente en la base de datos. En MongoDB, Document no tiene esquema, lo que significa que no hay restricciones para insertar cualquier número de claves en un documento.

- Insertar un solo registro: Para insertar un solo documento se puede usar `insert( {document} )` or `insertOne( {document} )`.

- Insertar muchos registros: Para insertar muchos registros, se le pasará una lista de registros al método insert o insertMany.
Usando Insert Many:
`collectionName.insertMany([{document1},{document2},{ document3}….{ documentn}])`

- Insertar registro a granel: También se puede insertar una gran cantidad de documentos de forma ordenada y desordenada ejecutando los métodos. `initializeOrderedBulkOp()` y `initializeUnorderedBulkOp()`.
Ejemplo1:
```js
var bulk = db.collectionName.initializeUnorderedBulkOp();
bulk.insert({document1} );
bulk.insert({document2} );
bulk.insert({documentn} );
bulk.execute();
```

Ejemplo2:
```js
> var bulk = db.geekFlareCollection.initializeUnorderedBulkOp();
> bulk.insert({ code: "P1", Qty: 100, status: "Active"});
> bulk.insert({ code: "P2", Qty: 200, status: "Active"});
> bulk.insert({ code: "P3", Qty: 0, status: "Dective"});
> bulk.execute();

BulkWriteResult({
        "writeErrors" : [ ],
        "writeConcernErrors" : [ ],
        "nInserted" : 3,
        "nUpserted" : 0,
        "nMatched" : 0,
        "nModified" : 0,
        "nRemoved" : 0,
        "upserted" : [ ]
});

> db.geekFlareCollection.find()
{ "_id" : ObjectId("5edf7be318b2c26b9dfe8caf"), "code" : "P1", "Qty" : 100, "status" : "Active" }
{ "_id" : ObjectId("5edf7be318b2c26b9dfe8cb0"), "code" : "P2", "Qty" : 200, "status" : "Active" }
{ "_id" : ObjectId("5edf7be318b2c26b9dfe8cb1"), "code" : "P3", "Qty" : 0, "status" : "Dective" }
```

---

## BUSCAR DOCUMENTOS EN LA BASE DE DATOS
6. `db.collectionName.find()`: Para buscar el documento almacenado en una colección, se puede utilizar el método find(). Si no se especifica el argumento se van a recuperar todos los documentos de la colección.

7. `db.collectionName.find().pretty();` El método pretty() nos permite embellecer la salida de .find() indentandola como un formato JSON o BSON. Esto como se verá, resulta muy útil a la hora de requerir información directamente desde la shell de Mongo.


El método "find()" se puede usar para recuperar solo los documentos requeridos en función de algunas condiciones de la colección. MongoDB proporciona una lista de operadores de proyección y consulta para recuperar el valor del tipo BSON (JSON binarios).

Ejemplo 1: `collectionName.find({ condition });`
```js
> db.geekFlareCollection.find({ Qty: { $eq: 100 }});
{ 
    "_id" : ObjectId("5ed3159eb6f2c2bb1edb86d1"), 
    "code" : "P4", 
    "Qty" : 100, 
    "status" : "Inactive" 
}
```

Ejemplo2: `collectionName.findOne();` Para recuperar un solo documento. La salida esta formateada.
```js
> db.geekFlareCollection.findOne();
{ 
    "_id" : ObjectId("5ed31186b6f2c2bb1edb86ce"), 
    "code" : "P1",
	"Qty" : 200, 
	"status" : "Inactive" 
}
```

## ACTUALIZAR UN DOCUMENTO

8. `collectionName.update({KeyToUpdate},{Set Command});`: Actualizar documento en una colección. MongoDB proporciona el método update(); para establecer nuevos valores, para claves existentes en documentos. El comando de actualización brinda detalles de documentos modificados y coincidentes.

```js
> db.collectionName.find()
{ "_id" : ObjectId("5edf3f67d6bfbd8125f58cfb"), "product" : "bottles", "Qty" : 100 }
{ "_id" : ObjectId("5edf3f67d6bfbd8125f58cfc"), "product" : "bread", "Qty" : 20 }
{ "_id" : ObjectId("5edf3f67d6bfbd8125f58cfd"), "product" : "yogurt", "Qty" : 30 }

> db.collectionName.update({"product" : "bottles"},{$set : {"Qty": 10}}  )
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })

> db.geekFlareCollection.find()
{ "_id" : ObjectId("5edf3f67d6bfbd8125f58cfb"), "product" : "bottles", "Qty" : 10 }
{ "_id" : ObjectId("5edf3f67d6bfbd8125f58cfc"), "product" : "bread", "Qty" : 20 }
{ "_id" : ObjectId("5edf3f67d6bfbd8125f58cfd"), "product" : "yogurt", "Qty" : 30 }

>  db.collectionName.find()
{ "_id" : ObjectId("5edf3f67d6bfbd8125f58cfb"), "product" : "bottles", "Qty" : 10 }
{ "_id" : ObjectId("5edf3f67d6bfbd8125f58cfc"), "product" : "bread", "Qty" : 20 }
{ "_id" : ObjectId("5edf3f67d6bfbd8125f58cfd"), "product" : "yogurt", "Qty" : 30 }
```

9. `updateOne();`: Para actualizar un solo documento tenemos updateOne(), su sintaxis de uso es la siguiente: `collectionName.updateOne({SingleKeyToUpdate},{Set Command});`

```js
> db.geekFlareCollection.updateOne({"product" : "bottles"},{$set : {"Qty": 40}}  )
{ "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }
<strong>updateMany()</strong> : Para actualizar varios documentos en alguna condición, MongoDB tiene updateMany() método.
```

## ELIMINAR UN DOCUMENTO DE LA COLECCION

10. Eliminar documento de una colección: Para eliminar un documento MongoDB consta de deleteOne() y deleteMany(). La sintaxis de los métodos de eliminación es:

- `collectionName.deleteOne({DeletionCondition});`: Elimina el documento único que cumple los criterios de eliminación.
```js
> db.geekFlareCollection.deleteOne({"product" : "bread"})
{ "acknowledged" : true, "deletedCount" : 1 }
```

- `deleteMany({condition})`: Este método elimina todos los documentos que coinciden con los criterios de eliminación. Sin estos criterios deleteMany elimina todos los documentos.
```js
> db.geekFlareCollection.deleteMany({"product" : "bottles"})
{ "acknowledged" : true, "deletedCount" : 2 }
<strong>remove() </strong>
```

12. Cambiar el nombre de una colección: MongoDB proporciona el método renameCollection(), para renombrar una coleccion de documentos.
Sintaxis: `db.collectionName.renameCollection("newCollectionName")`.

13. Crear índice en documento:
Los índices son una estructura de datos especial que almacena una pequeña parte del conjunto de datos de la colección de forma fácil de recorrer. Los índices admiten el orden ascendente y descendente de los valores de los campos y, por lo tanto, facilitan un mejor rendimiento durante la recuperación. 

MongoDB proporciona un índice por default, llamado "default_id" pero admite la creación de índices definidos por el usuario. Los índices de MongoDB se definen a nivel de colecciones y brindan soporte en el campo o subcampo de un documento. La sintaxis para crear un índice es:

- Crea un índice en un solo campo. `collectionName.createIndex({Key:1});` En este, la clave indica el campo en el que se crea el índice y 1 significa orden ascendente. Para crear un índice en orden descendente se puede utilizar -1. Ejemplo:
```js
> db.geekFlareCollection.createIndex({"product" : 1})
{
        "createdCollectionAutomatically" : false,
        "numIndexesBefore" : 1,
        "numIndexesAfter" : 2,
        "ok" : 1
}
```

- Cree un índice en varios campos. `collectionName.createIndex({Key1:1, Key2:1, …, Keyn:1});` 
Ejemplo:
```js
> db.geekFlareCollection.createIndex({"product" : 1,"Qty":-1})
{
        "createdCollectionAutomatically" : false,
        "numIndexesBefore" : 1,
        "numIndexesAfter" : 2,
        "ok" : 1
}
```

14. Mostrar índice en el documento. MongoDB proporciona el método `getIndexes();` para enumerar todos los índices creados en un documento. Su sintaxis es: `collectionName.getIndexes();`
```js
> db.geekFlareCollection.getIndexes()
[
        {
                "v" : 2,
                "key" : {
                        "_id" : 1
                },
                "name" : "_id_",
                "ns" : "geekFlareCollection.geekFlareCollection"
        }
]
```
15. Eliminar índice de un documento con `dropIndex();` El método se usa para eliminar el un índice único. Luego el método `dropIndexes();` se usa para eliminar múltiples índices.

- Quitar índice único: `collectionName.dropIndex({key});`
```js
> db.geekFlareCollection.dropIndex({"product" : 1})
{ "nIndexesWas" : 3, "ok" : 1 }
```

- Eliminar varios índices: `collectionName.dropIndexes({key1,key2…,keyN});`
```js
> db.geekFlareCollection.dropIndexes({"product" : 1,"Qty":-1})
{ "nIndexesWas" : 3, "ok" : 1 }
```

16. Limitar la recuperación de documentos: `limit();`. El método ayuda a limitar el número de documentos devueltos. Acepta argumentos numéricos.
Sintaxis: `collectionName.find().limit(number);`
```js
> db.geekFlareCollection.find().limit(2)
{ "_id" : ObjectId("5ed3c9e7b6f2c2bb1edb8702"), "product" : "bottles", "Qty" : 100 }
{ "_id" : ObjectId("5ed3c9e7b6f2c2bb1edb8703"), "product" : "bread", "Qty" : 20 }
```

17. Clasificar recuperación de documentos: El método `sort();` clasifica los documentos de salida en orden ascendente o descendente. Este método acepta el nombre de las claves con el número para especificar el orden de clasificación. 1 se usa para el orden ascendente, mientras que -1 se usa para especificar el orden descendente. Sintaxis: `collectionName.find().sort({key:1});`

```js
> db.geekFlareCollection.find().sort({"Qty":1})
{ "_id" : 2, "product" : "bread", "Qty" : 20 }
{ "_id" : 3, "product" : "yogurt", "Qty" : 30 }
{ "_id" : 1, "product" : "bottles", "Qty" : 100 }
```

18. Validación de documentos: Los validadores ayudan a restringir el tipo de datos que se insertan en los documentos, estos se definen en la recopilación. La validación del documento no restringe la inserción del nuevo campo en el documento.
Sintaxis: `createCollection(“collectionName”,{validator:{ fields condition }});`

Ejemplo:
```js
//Insertando validacion.
> db.createCollection( "Login",
...  { validator: { $and:
...       [
...          { phone: { $type: "string" } },
...          { email: { $regex: /@flares\.com$/ } },
...          { status: { $in: [ "Registered", "Unknown" ] } }
...       ]
...    }
... } )
{ "ok" : 1 }

//Introduciendo un valor errado.
> db.Login.insert({phone:1234})
WriteResult({
        "nInserted" : 0,
        "writeError" : {
                "code" : 121,
                "errmsg" : "Document failed validation"
        }
});

//Introduciendo un valor correcto.
> db.Login.insert({phone:"1234",email:"abc@flares.com",status:"Unknown",mode:"limited"})
WriteResult({ "nInserted" : 1 })
```

19. Validadores de esquema en una nueva colección. Se puede añadir un esquema de validación que restringa la entrada de nuevos campos al documento y hace que este posea una estructura definida.
Sintaxis: createCollection(“collectionName”,{validator: { $jsonSchema { schema condition } }})
```js
> db.createCollection( "Login", {
    validator: { $jsonSchema: {
        bsonType: "object",
        "additionalProperties": false,
               required: [ "email" ],
       properties: {
          email: {
             bsonType : "string",
             pattern : "@flares\.com$",
             description: "string meets the given expression"
          },
          status: {
             enum: [ "registered", "Invalid" ],
             description: "status must be within enum values"
          }
       }
    } },
})
{ "ok" : 1 }

> db.Login.insert({email:"abc@flares.com"})
WriteResult({
        "nInserted" : 0,
        "writeError" : {
                "code" : 121,
                "errmsg" : "Document failed validation"
        }
});
```

20. Actualizar o crear validadores de esquema en una colección existente. Se puede crear un validador en una colección existente usando collMod
Sintaxis: runCommand({collMod:”collectionName”,validator:{schema condition}})
```js
> db.runCommand(  {
collMod: "Login",
   validator: { $jsonSchema: {
       bsonType: "object",
 "additionalProperties": false,
      required: [ "email","status" ],
      properties: {
         email: {
            bsonType : "string",
            pattern : "@flares\.com$",
            description: "string meets the given expression"
         },
         status: {
            enum: [ "registered", "Invalid" ],
            description: "status must be within enum values"
         }
      }
   } },
      validationAction: "error",
         validationLevel: "strict"
} )
{ "ok" : 1 }
```

21. Eliminar validadores de esquema en una colección existente. Para eliminar validadores de esquema, es necesario configurar `validationLevel` como apagado. Sintaxis: `runCommand({collMod:”collectionName”,validator:{ },validationLevel:off});`
```js
> db.runCommand({
   collMod:"Login",
   validator:{},
   validationLevel:"off"
})
{ "ok" : 1 }

> db.Login.insert({"email":"abc"})
WriteResult({ "nInserted" : 1 })
```

22. Verificar validadores en una colección existente. Se usa para verificar si la colección existente tiene validadores de esquema que se ejecutan debajo del comando. El método proporciona detalles de validadores en todas las colecciones que residen dentro de una base de datos.
Sintaxis: `getCollectionInfos({name : “collectionName”});`
```js
> db.getCollectionInfos({name: "Login"})
[
        {
                "name" : "Login",
                "type" : "collection",
                "options" : {
                        "validator" : {
                                "email" : {
                                        "$regex" : /@flares\.com$/
                                }
                        }
                },
                "info" : {
                        "readOnly" : false,
                        "uuid" : UUID("646674f6-4b06-466d-93b0-393b5f5cb4ff")
                },
                "idIndex" : {
                        "v" : 2,
                        "key" : {
                                "_id" : 1
                        },
                        "name" : "_id_",
                        "ns" : "geekFlareDB.Login"
                }
        }
]
```

23. Exportación de colecciones. Para exportar el contenido de la colección a un archivo (JSON o CSV). Se proporciona la utilidad mongoexpoert.
La cual exporta una sola colección a un archivo. Sintaxis: mongoexport --db dbName --collection collectionName --out outputFile

Ejemplo:
```js
C:\mongodb\New folder>mongoexport --db geekFlareDB --collection geekFlareCol --out outFile.json
2020-06-06T19:02:29.994+0530    connected to: mongodb: //localhost/
2020-06-06T19:02:30.004+0530    exported 6 records
```

Luego, para exportar un campo específico de la colección a un archivo: mongoexport --db dbName --collection collectionName --out outputFile --fields fieldname

Ejemplo:
```js
C:\mongodb\New folder>mongoexport --db geekFlareDB --collection geekFlareCol --out outFile.json --fields product
2020-06-06T19:05:22.994+0530    connected to: mongodb://localhost/
2020-06-06T19:05:23.004+0530    exported 6 records
```

24. Importación de colecciones. Para importar datos de un archivo (CSV o JSON) se puede utilizar la herramienta análoga mongoimport. La misma se ejecuta con la línea de comandos. Sintaxis: mongoimport --db dbName --collection collectionName --file inputFile

```js
C:\Users\asad.ali>mongoimport --db geekFlareDB --collection geekFlareNew --file outFile.json
2020-06-09T14:52:53.655+0530    connected to: mongodb://localhost/
2020-06-09T14:52:53.924+0530    6 document(s) imported successfully. 0 document(s) failed to import.
```

25. Replicación de MongoDB. La replicación es el proceso para sincronizar datos en varios servidores. Evita la pérdida de datos debido a un mal funcionamiento del hardware o software. MongoDB logra la replicación utilizando conjuntos de réplicas. El conjunto de réplicas consta de conjuntos de datos de Mongo primarios y secundarios en el clúster. El conjunto de datos primarios acepta todas las operaciones de escritura y las lecturas del conjunto de datos secundarios del primario. Se requieren 3 conjuntos de datos como mínimo en el conjunto de réplicas de Mongo y se requiere el siguiente proceso para configurar un conjunto de réplicas:

```js
// Inicio mongod servidor con replset opción en un mínimo de 3 nodos.
// mongod --port 27017 --dbpath C:\data\data1 --replSet rs0 --oplogSize 128

// mongod --port 27018 --dbpath C:\data\data1 --replSet rs0 --oplogSize 128

// mongod --port 27019 --dbpath C:\data\data1 --replSet rs0 --oplogSize 128

// Inicialice el conjunto de réplicas.
// rs.initiate( {    _id : "rs0",    members: [   { _id: 0, host: "IP:27017" },   { _id: 1, host: "IP:27018" },   { _id: 2, host: "IP:27019" }    ] })

// > rs.initiate( {
// ...    _id : "rs0",
// ...    members: [
// ...   { _id: 0, host: "localhost:27017" },
// ...   { _id: 1, host: "localhost:27018" },
// ...   { _id: 2, host: "localhost:27019" }
// ...    ]
// ... })
// {
//         "ok" : 1,
//         "$clusterTime" : {
//                 "clusterTime" : Timestamp(1591089166, 1),
//                 "signature" : {
//                         "hash" : BinData(0,"AAAAAAAAAAAAAAAAAAAAAAAAAAA="),
//                         "keyId" : NumberLong(0)
//                 }
//         },
//         "operationTime" : Timestamp(1591089166, 1)
// }
```

26. Control de acceso en MongoDB: Las funciones de control de acceso nos ayudan a controlar el acceso a los usuarios existentes.

- Crear usuario: `db.createUser( {user: “UserAdmin”, pwd: “password” ,role: [adminRole]);`
```js
db.createUser(
    {
    user: "AdminUser",
    pwd: passwordPrompt(),
    roles: [ { role: "userAdminAnyDatabase", db: "admin" }, "readWriteAnyDatabase" ]
    }
);
Enter password:

Successfully added user: {
        "user" : "AdminUser",
        "roles" : [
                {
                        "role" : "userAdminAnyDatabase",
                        "db" : "admin"
                },
                "readWriteAnyDatabase"
        ]
}
```

- Acceder nuevamente con el usuario y la contraseña creados.
```js
C:\Users\>mongo  --port 27017  --authenticationDatabase "admin" -u "AdminUser" -p MongoDB shell version v4.2.7
Enter password:

connecting to: mongodb://127.0.0.1:27017/?authSource=admin&compressors=disabled&gssapiServiceName=mongodb
```

27. Recuperar y eliminar usuario de control de acceso. Los siguientes comandos se pueden usar para verificar la información del usuario y eliminarla. `db.getUser("AdminUser");`, `db.dropUser("AdminUser");`.
```js
> db.getUser("AdminUser")
{
        "_id" : "admin.AdminUser",
        "userId" : UUID("78d2d5bb-0464-405e-b27e-643908a411ce"),
        "user" : "AdminUser",
        "db" : "admin",
        "roles" : [
                {
                        "role" : "userAdminAnyDatabase",
                        "db" : "admin"
                },
                {
                        "role" : "readWriteAnyDatabase",
                        "db" : "admin"
                }
        ],
        "mechanisms" : [
                "SCRAM-SHA-1",
                "SCRAM-SHA-256"
        ]
}
> db.dropUser("AdminUser")
true
> db.getUser("AdminUser")
null
>
```