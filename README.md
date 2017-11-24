1. Creamos un proyecto en Firebase Console (si no lo hemos creado todavía): [https://console.firebase.google.com](https://console.firebase.google.com)
1. Instalamos el Firebase CLI: `sudo npm install -g firebase-tools`
1. Iniciamos sesión en el Firebase CLI: `firebase login`
1. Inicializamos el proyecto: `firebase init`
1. Vamos a usar Hosting y en un paso posterior, Functions; las seleccionamos del menú (usamos las flechas _arriba_ y _abajo_ y seleccionamos con _espacio_) que Firebase CLI nos muestra
1. Seleccionamos un proyecto de la lista que nos aparece
1. Le decimos que sí queremos instalar dependencias (_enter_)
1. Nos va a preguntar qué carpeta deseamos usar como directorio público (_? What do you want to use as your public directory? (public)_) le ponemos un punto, `.` y damos _enter_
1. Preguntará si queremos hacer una Single Page App (SPA) (_Configure as a single-page app (rewrite all urls to /index.html)? (y/N)_) le decimos que no. Con presionar _enter_ basta ya que la opción "no" está seleccionada por defecto
1. Finalmente le decimos que no queremos que remplace el archivo `index.html` que ya está (_File ./index.html already exists. Overwrite?_)

## Subiendo cambios en nuestro sitio a Internet

- `firebase deploy`
> Esta versión quedará disponible en [https://vandelay-ind.firebaseapp.com](https://vandelay-ind.firebaseapp.com)

## Subiendo cambios en las funciones que creamos

- `firebase deploy --only functions`

