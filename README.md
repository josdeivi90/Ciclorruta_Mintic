# Ciclorruta_Mintic
proyecto realizado en el ciclo 4 mintic

OJO: al clonar el repositorio se debe ejecutar: npm install

Pasos que seguimod para creación del proyecto:

1. Creamos un repositorio en GitHub. Añadimos compañeros al repositorio

2. Lo clonamos desde GitHub Desktop o desde consola

3. Creamos una rama desde GitHub Desktop -> también cambiamos de ubicación la carpeta del proyecto

4. Abrimos la carpeta del proyecto en VisualCode

5. En https://www.toptal.com/developers/gitignore creamos el .gitignore incluyendo node, react, macOs, VisualStudioCode, Firebase. -> el texto generado lo ponemos en un archivo .gitignore en la carpeta del proyecto.

6. Creamos una carpeta Backend y dentro de ella en el terminal ejecutamos: npm init

7. Dentro de backend creamos una carpeta llamada src y dentro de ella otra llamada db y dentro de ella el archivo crud.js

8. Vamos a firebase -> consola y creamos un nuevo proyecto. Vamos a fierdatabase y creamos a db en modo prueba.

9. Vamos a Google Cloud -> consola para crear la llave. Seleccionamos el proyecto.

10. En el buscador de esa página buscamos IAM que son como las calves de servicios y vamos allí. Vamos al menú del panel izquierdo Service Accounts y elegimos el segundo elemento (firebase-adminsdk-…). Vamos a crear la llave en formato JSON en el menú superior (KEYS). Se descarga la llave en la carpeta db.

11. En VisualCode copiamos el nombre de la llave en .gitignore

12. Instalamos firebase: npm install firebase-admin --save

13. Creamos el archivo firebase.js

14. Creamos el archivo crud.js

15. Creamos el archivo index.js

16. En package.json incluimos:  "start": "node index.js",

17. Corremos en la terminal: npm run start

18. Instalamos nodemon: npm install nodemon 

19. En package.json incluimos: "dev": "nodemon index.js",

20. instalamos react: npx create-react-app frontend
    ejecutar: cd forntend
    ejecutar: npm start

    Borrar el .gitignore y el readme de la carpeta frontend
    En la carpeta public dejar solo el index.html
    en la carpeta src dejar solo index.js y app.js

21. Instalamos bootstrap: npm install react-bootstrap bootstrap@5.1.3

22. Instalamos dom para creación de rutas: npm install react-router-dom

