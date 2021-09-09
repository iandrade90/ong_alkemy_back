# Server Base - Proyecto ONG


## Envinroment setup

1) Create database
2) Copy .env.example to .env and fill with database credentials.

To install dependencies, run
``` bash
npm install
```

3) Migrations:
``` bash
npx sequelize-cli db:migrate
```

4) Seeders:
``` bash
npx sequelize-cli db:seed:all
```

## Start local server

``` bash
npm start
```
for dev's
```
npm run dev
```

# Endpoints (Rutas para client)

### /api/v01

   |Metodo|Ruta|Descripcion|Datos requeridos|      
|----|-----|-------|  -------|   
|GET|_/organizations/1/public_|**informacion sobre SOMOS MAS**| ------------------
|GET|_/auth/me_|**informacion sobre el User actual**|Token en header "Authorization"
|GET|_/slides_|**obtiene TODAS las slides**| ------------------
|POST|_/slides/create_|**CREA un Slide a partir de datos**| imageUrl, text, order, organizationId en _req.body_
|POST|_/auth/register_|**CREA un User a partir de datos**| firstName, lastName, email, password en _req.body_
|POST|_/auth/login_|**LOGEA un User y GENERA un Token a partir de datos** _(devuelve token en header)_| email, password en _req.body_
|PUT|_/slides/update/:id_|**ACTUALIZA un Slide a partir de un id**| ID pasado como _parametro_ en URL. imageUrl, text, order, organizationId en _req.body_
|DELETE|_/slides/delete/:id_|**ELIMINA un Slide a partir de un id**| ID pasado como _parametro_ en URL 

