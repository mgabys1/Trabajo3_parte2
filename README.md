# Agenda de Tareas
Esta es una aplicación simple de agenda de tareas desarrollada con Ionic/Angular para dispositivos Android.

## Instalación
Para ejecutar esta aplicación en su entorno local, debe seguir estos pasos:

Prerrequisitos
Node.js y npm instalados
Ionic CLI instalado de forma global (npm install -g @ionic/cli)
Android Studio con un emulador o un dispositivo Android conectado

### Pasos de Instalación
Clonar el repositorio:
https://github.com/mgabys1/Trabajo3_parte2
cd Amgenda1

Instalar las dependencias:
npm install
Compilar y servir la aplicación:

ionic serve
Esto iniciará el servidor de desarrollo. Se puede ver la aplicación en el navegador web en http://localhost:8100.

Uso
Agregar Tareas: Desde la pantalla principal (/home), haga clic en "Agregar Tarea" para crear nuevas tareas.
Editar Tareas: Desde la pantalla principal, seleccione una tarea para editarla.


## Desafíos
Durante el desarrollo de esta aplicación, hubo varios desafíos:

Integración de Local Storage: Implementar el almacenamiento local para las tareas y asegurar su persistencia a través de diferentes sesiones.

Manejo de Fechas: Garantizar que las fechas y horas de vencimiento de las tareas se manejen correctamente en todas las partes de la aplicación, incluyendo la programación de notificaciones.

Compatibilidad de Versiones: Asegurar que las versiones de las dependencias (Angular, Ionic, RxJS) sean compatibles entre sí para evitar conflictos de instalación y errores de ejecución.

### Soluciones
Uso de Local Storage: Utilicé métodos nativos de JavaScript para almacenar y recuperar datos del Local Storage, asegurándome de manejar correctamente la serialización y deserialización de objetos.

Manejo de Fechas con Moment.js: Para simplificar la manipulación de fechas y horas, se intengró Moment.js para formatear y comparar fechas de manera efectiva dentro de la aplicación.

Gestión de Dependencias: Se mantuvo un registro cuidadoso de las versiones de las dependencias y sus compatibilidades, utilizando npm audit y npm outdated para monitorear y actualizar las dependencias según fuera necesario.

## APK Incluido
En la carpeta apk, Se encuentra un archivo APK precompilado de la aplicación. Se puede instalar este APK en  su dispositivo Android para probar la aplicación directamente.
