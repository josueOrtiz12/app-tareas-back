# 🚀 lista de tareas - Backend (Express + Docker)

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-20-green?style=for-the-badge&logo=node.js" alt="Node Version" />
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express" />
  <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker" />
</p>


## ⚙️ Configuración del Entorno (.env)
Por seguridad, las credenciales reales no están incluidas en el repositorio. Sigue estos pasos para configurar tu entorno:

1.  **Archivo de ejemplo:** Localiza el archivo `./deploy/.env.example`.

2.  **Crear archivo real:** Copia el contenido en un nuevo archivo llamado en la raiz `.env`.


## 🐳 Despliegue con Docker
###  Construcción y Encendido
Levanta el servidor Express con soporte para cambios en caliente (Hot Reload) mediante un volumen montado (importante es estar en la raiz del proyecto o dende este el archivo docker-compose.yml).


```bash
docker-compose --env-file .env up -d --build

```

En el momento que ya este creado y necesites levantar el proyecto se hara con el sigueinte comando

```bash
docker compose --env-file .env up
```

### 🛠️ Configuración de Red (Docker Network)
Para que los servicios de Pulse puedan comunicarse entre sí mediante nombres de dominio internos, es necesario crear una red puente (bridge network) en Docker antes de levantar los contenedores. 
### 1. Crear la red
Ejecuta el siguiente comando en tu terminal:
```bash
docker network create tareas-network
```

### 2. Verificar la red
Puedes confirmar que la red se ha creado correctamente con:
```bash
docker network ls
```

[!TIP] **Puedes levantar todo el proyecto asegurándote de que la red exista con este "one-liner":**
```bash
docker network create pulse-network 2>/dev/null || true && docker-compose up -d
```


---
## 🔄 Gestión de Base de Datos y Migraciones

Al utilizar Docker, todos los comandos de Sequelize deben ejecutarse dentro del contenedor para interactuar correctamente con la red interna.

### 1. Ejecutar Migraciones Pendientes
```bash
docker-compose exec app-tareas-back npx sequelize-cli db:migrate
```


### 2. Ejecutar seeders
```bash
docker-compose exec app-tareas-back npx sequelize-cli db:seed:all
```