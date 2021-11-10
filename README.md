# Ciclorruta_Mintic
proyecto realizado en el ciclo 4 mintic

Pasos para creación del proyecto:

Creamos un repositorio en GitHub
Añadimos compañeros al repositorio
Lo clonamos desde GitHub Desktop
Creamos una rama desde GitHub Desktop -> también cambie de ubicación la carpeta del proyecto
Abrimos la carpeta del proyecto en VisualCode
En https://www.toptal.com/developers/gitignore creamos el .gitignore incluyendo node, react, macOs, VisualStudioCode, Firebase. -> el texto generado lo ponemos en un archivo .gitignore en la carpeta del proyecto.
Creo una carpeta Backend y dentro de ella en el terminal ejecuto npm init
Dentro de backend creamos una carpeta llamada src y dentro de ella otra llamada db y dentro de ella el archivo crud.js
Ahora vamos a firebase -> consola y creamos un nuevo proyecto. Vamos a fierdatabase y creamos a db en modo prueba.
Luego vamos a Google Cloud -> consola para crear la llave. Seleccionamos el proyecto.
En el buscador de esa página buscamos IAM que son como las calves de servicios y vamos allí. 
Vamos al menú del panel izquierdo Service Accounts y elegimos el segundo elemento (firebase-adminsdk-…). Vamos a crear la llave en formato JSON en el menú superior (KEYS).
Se descarga la llave en la carpeta db.
En VisualCode copiamos el nombre de la llave en .gitignore
Instalamos firebase: npm install firebase-admin --save
Creamos el archivo firebase.js
Creamos el archivo crud.js
Creamos el archivo index.js
En package.json incluimos:  "start": "node index.js",
Corremos en la terminal npm run start

Instalamos nodemon: npm install nodemon 
Y en package.json incluimos: "dev": "nodemon index.js",
