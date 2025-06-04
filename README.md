# Lista de Usuarios

Objetivo: Crear una mini SPA con React.

## Requisitos:

- Listar usuarios usando una API como: https://jsonplaceholder.typicode.com/users
- Mostrar el detalle de un usuario al hacer click.
- Implementar búsqueda reactiva de usuarios.
- Usar RxJS para la búsqueda.
- Usar NgRx o Redux Pattern para gestión de estado.
- Estilizar usando SASS o CSS.
- Implementar Lazy Loading para el módulo de detalle.

## Entrega:

- Código en repositorio (GitHub).
- Documento breve de explicación de arquitectura y decisiones técnicas.

## Implementación

- La solución implementada se hizo con React + Vite para un desarrollo rápido y sencillo
  también se hizo uso de typescript para evitar algunos errores durante el desarrollo.
- Inicialment se muestra la lista de usuario con el endpoint proporcionado y en caso de tener una lista vacia se muestra un mensaje.
- Inicialmente el detalle de un usuario solo muestra un mensaje hasta que se seleccione uno, entonces los datos del usuario serán mostrados.
- La búsqueda de usuarios sólo se filtra por nombre de usuario. En caso de que no se encuentren ocurrencias se muestra un mensaje de "No hay usuarios" (Se agrego una optimización con useMemo para el filtrado de la lista al hacer la búsqueda)
- Aunque en las instrucciones se solita el uso de Redux pattern en este caso no se vio necesario el uso de redux ya que tanto como la búsqueda, el listado y el detalle pueden ser realizados con los hooks de React.
- Se usaron CSS para los estilos.
- Se implemento el lazy loading para el componente de detalle de usuario.

## Instalación

```bash
# Clone repo
git clone https://github.com/alexsantosquispe/list-users.git
cd list-users

# Install dependencies
npm install

# Run development server
npm run dev

# Go to localhost
Open http://localhost:5173
```

## Arquitectura

Algunos patrones usuados:

- Se hizo uso del patrón Container/Presentational para separar el manejo de los estados de lo components de presentación.
- Early return en el caso de la lista de usuarios, el filtrado y el detalle.
- Se implemento unn diseño Master/Detail para implementar la UI.

## Consideraciones:

La implementación aún tiene varias áreas de mejora y no se tomaron en cuenta los siguientes puntos:

- SEO el performace como la accesibilidad pueden mejorar.
- El diseño responsive para pantallas pequeñas.
- El code splitting para los estilos que ayudaría a una mejor legibilidad de los CSS.
