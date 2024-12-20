# Contador de Calorías

Este proyecto es un contador de calorías sencillo desarrollado con React, TypeScript y un reducer para la gestión del estado. Permite a los usuarios realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) en sus actividades diarias. Está implementado y disponible en [https://dashing-gelato-e3b027.netlify.app/](https://dashing-gelato-e3b027.netlify.app/).

## Características

* **Crear Actividad:** Los usuarios pueden ingresar detalles sobre sus actividades.
* **Leer Actividades:** Muestra una lista de actividades registradas.
* **Actualizar Actividad:** Las actividades existentes pueden editarse para modificar sus detalles.
* **Eliminar Actividad:** Las actividades pueden eliminarse de la lista.
* **Gestión de Estado (Reducer):** El `activityReducer` gestiona el estado de la aplicación, manejando las operaciones de crear, actualizar y eliminar, garantizando actualizaciones predecibles.
* **Persistencia en Local Storage:** Las actividades se guardan en el almacenamiento local, por lo que se preservan entre sesiones.

## Tecnologías Utilizadas

* **React:** Biblioteca de JavaScript para construir interfaces de usuario.
* **TypeScript:** Superconjunto de JavaScript para tipado estático.
* **Vite:** Herramienta de construcción para desarrollo rápido.
* **Reducer (para la Gestión del Estado):** El `activityReducer` gestiona las actualizaciones del estado basándose en acciones enviadas, proporcionando una manera centralizada y predecible de manejar los datos de la aplicación.

## Instalación

1. Clona el repositorio:
   ```bash
   git clone git@github.com:joaquincardosorios/calories_tracker_react_ts.git
   ```
2. Navega al directorio del proyecto:
   ```bash
   cd calories_tracker_react_ts
   ```
3. Instala las dependencias:
   ```bash
   npm install
   ```

### Uso

1. Inicia el servidor de desarrollo:
   ```bash
   npm start
   ```
2. Abre tu navegador y navega a [http://localhost:5173/](http://localhost:5173/).

## Operaciones CRUD con Reducer

El `activityReducer` gestiona las operaciones CRUD:

* **Crear:** La acción `save-activity` agrega nuevas actividades al estado.
* **Leer:** El componente recupera las actividades del estado para mostrarlas.
* **Actualizar:** La acción `save-activity` también maneja actualizaciones reemplazando la actividad existente con la modificada. La acción `set-activeId` se utiliza para seleccionar la actividad a editar.
* **Eliminar:** La acción `delete-activity` elimina la actividad especificada del estado.
* **Reiniciar:** La acción `restart-app` establece las actividades en el estado como una lista vacía y borra el `activeId`.

## Despliegue

La aplicación está desplegada en Netlify y es accesible en: [https://dashing-gelato-e3b027.netlify.app/](https://dashing-gelato-e3b027.netlify.app/).

## Estructura del Proyecto

```
├── src
│   ├── reducers
│   │   └── activityReducer.ts   # Contiene la función reducer para gestionar los datos de las actividades
│   ├── data
│   │   ├── categories.ts        # Contiene las categorias principales de las actividades
│   ├── types
│   │   ├── index.ts             # Contiene los tipos globales de la aplicación
│   ├── components
│   │   ├── ActivityList.tsx     # Muestra la lista de actividades y gestiona las acciones de eliminación
│   │   ├── CalorieDisplay.tsx   # Componente para formato de calorias en Tracker
│   │   ├── CalorieTracker.tsx   # Muestra los totales de calorias consumidas y quemadas
│   │   └── Form.tsx             # Muestra formulario para ingreso de nueva actividad
```
