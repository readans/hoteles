# Proyecto Hoteles Mono Repo con Laravel y React

Este proyecto es un monorepo que contiene dos aplicaciones:

- **API**: Una aplicación de backend construida con Laravel ubicada en la carpeta `/api`.
- **Frontend**: Una aplicación de React ubicada en la carpeta `/web`.

El siguiente README te guiará a través de los pasos para configurar y ejecutar ambas aplicaciones localmente utilizando Docker y otros comandos necesarios.

---

## Requisitos Previos

- **Docker**: Asegúrate de tener Docker y Docker Compose instalados en tu máquina. La instalación de este es para la ejecución de la imágen de postgres. NOTA: En dado caso que no se quiera usar docker, utilizar directamente un servidor de postgres de tu máquina.
- **Node.js y npm**: Para el frontend (React).
- **PHP y Composer**: Para el backend (Laravel).

---

## Paso 1: Iniciar los Contenedores con Docker

Primero, ejecuta los contenedores de Docker para configurar el entorno de desarrollo de ambas aplicaciones (Laravel y React) y las dependencias necesarias.

```bash
docker-compose up -d
```


## Paso 2: Ejecutar servidor API

### Accede a la carpeta de la API:

```bash
cd api
```

### Configurar las Variables de Entorno:

Modifica el archivo .env para agregar las credenciales de la base de datos. Asegúrate de cambiar las siguientes variables de entorno:

DB_PASSWORD=tu_contraseña
DB_USERNAME=tu_usuario

### Instalar dependencias NPM

```bash
npm install && npm run build
```

### Ejecutar las Migraciones y Seeders de la Base de Datos

```bash
php artisan migrate && php artisan db:seed
```

### Ejecutar el Servidor de Desarrollo de Laravel

```bash
composer run dev
```

## Paso 3: Ejecutar aplicación FRONT

### Accede a la carpeta del Frontend

```bash
cd web
```

### Instalar dependencias
```bash
npm install
```
### Iniciar el Servidor de Desarrollo de React
```bash
npm run dev
```