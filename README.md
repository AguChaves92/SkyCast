Proyecto de Pronóstico del Clima
Este es un proyecto de aplicación web que permite consultar el pronóstico del clima en tiempo real, utilizando la API de OpenWeather. La aplicación muestra información detallada del clima de una ciudad ingresada por el usuario.

Tecnologías utilizadas
React: Framework de JavaScript para construir la interfaz de usuario.
Vite: Herramienta de construcción rápida y configuración optimizada para proyectos en React.
OpenWeather API: API utilizada para obtener información sobre el clima en tiempo real.
CSS: Para el diseño y estilos de la aplicación.
dotenv: Para manejar variables de entorno de manera segura.
Pasos para ejecutar el proyecto
Para poder ejecutar este proyecto en tu máquina local, sigue estos pasos:

1. Clonar el repositorio
Primero, clona el repositorio en tu máquina:

bash
Copiar código
git clone <URL_DEL_REPOSITORIO>
cd <NOMBRE_DEL_DIRECTORIO_DEL_REPOSITORIO>
2. Instalar las dependencias
Instala todas las dependencias del proyecto usando npm o yarn:

bash
Copiar código
npm install
# o si usas yarn
yarn install
3. Obtener tu API Key de OpenWeather
Visita la página de OpenWeather API y regístrate para obtener una API Key.

4. Configurar la API Key
Para interactuar con la API de OpenWeather, necesitas una API Key. Una vez que la obtengas, crea un archivo .env en la raíz del proyecto y agrega la siguiente línea, reemplazando TU_API_KEY_AQUI con la clave obtenida:

plaintext
Copiar código
VITE_WEATHER_API_KEY=TU_API_KEY_AQUI
5. Ejecutar el proyecto
Ahora, ya puedes ejecutar el proyecto en tu máquina local:

bash
Copiar código
npm run dev
# o si usas yarn
yarn dev
Esto iniciará el servidor de desarrollo y podrás acceder a la aplicación en tu navegador en http://localhost:5173.

6. Ver la aplicación
Una vez que el servidor esté en ejecución, abre tu navegador y visita:

arduino
Copiar código
http://localhost:5173
Ahora podrás ingresar una ciudad para ver el pronóstico del clima.