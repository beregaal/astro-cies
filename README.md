# 🌟 Proyecto Astro-CIES

Este proyecto fue creado con Astro, un framework moderno para construir sitios web rápidos, ligeros y fáciles de mantener. Está pensado para que cualquier persona —incluso sin mucha experiencia técnica— pueda instalarlo, ejecutarlo y mantenerlo correctamente.

Antes de comenzar, asegúrate de tener instalado Node.js versión 18 o superior, Git, y opcionalmente GitHub Desktop. Para verificar que todo está bien instalado, abre la terminal y escribe `node --version` y `git --version`; si ves números como v20.10.0, todo está correcto.

Para descargar el proyecto puedes hacerlo de dos formas: con GitHub Desktop o con la terminal. En GitHub Desktop ve a File → Clone Repository, busca el repositorio berenicegalindo/astro-cies, elige una carpeta en tu computadora (por ejemplo Documentos/astro-cies) y haz clic en Clone. Si prefieres la terminal, escribe:
`git clone https://github.com/berenicegalindo/astro-cies.git`
y luego `cd astro-cies`.

Una vez dentro de la carpeta del proyecto (donde está el archivo package.json) ejecuta `npm install`. Este comando descargará automáticamente todas las librerías necesarias. No verás la carpeta node_modules en GitHub porque no se sube; se puede regenerar en cualquier máquina con ese mismo comando.

Para ver el sitio funcionando localmente, ejecuta `npm run dev` y luego abre el navegador en http://localhost:4321. Astro abrirá el sitio localmente y se actualizará automáticamente cuando guardes cambios.

La estructura del proyecto es la siguiente:
- public/: contiene archivos estáticos como imágenes e íconos.
- src/: incluye los componentes reutilizables, layouts, páginas y estilos globales.
- astro.config.mjs: archivo principal de configuración de Astro.
- package.json: lista de dependencias y scripts.
- .gitignore: define qué archivos no se suben a GitHub.
- README.md: este documento.

Para subir cambios a GitHub, si usas GitHub Desktop: guarda tus archivos, escribe un mensaje (por ejemplo "Actualizar header"), haz clic en Commit to main y luego en Push origin. Si prefieres hacerlo desde la terminal: usa `git add .`, luego `git commit -m "mensaje"`, y finalmente `git push`. GitHub Desktop hace esto automáticamente con dos clics.

El archivo .gitignore le dice a Git qué cosas no debe subir. En este proyecto incluye: node_modules/, dist/, .env, .vscode/, .DS_Store y otros archivos temporales o de entorno. Esto evita subir dependencias pesadas o configuraciones locales. La carpeta node_modules contiene las librerías que se pueden reconstruir con npm install, así que no se sube al repositorio. En cambio, los archivos package.json y package-lock.json sí se suben porque indican exactamente qué dependencias instalar.

Si alguien más descarga el proyecto o lo reinstala, solo debe ejecutar `npm install` y se volverá a crear automáticamente node_modules con todas las librerías necesarias.

Puedes publicar el sitio fácilmente en GitHub Pages. Primero, en astro.config.mjs agrega lo siguiente:
```
import { defineConfig } from 'astro/config';
export default defineConfig({
  site: 'https://berenicegalindo.github.io/astro-cies/',
  outDir: 'dist'
});
```
Después, crea las carpetas .github/workflows/ y dentro un archivo llamado deploy.yml con este contenido:
```
name: Deploy Astro site to GitHub Pages
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: withastro/action@v2
        with:
          path: ./
          node-version: 20
```
Guarda, haz commit y push, y GitHub generará el sitio automáticamente en https://berenicegalindo.github.io/astro-cies/.

Si tienes errores comunes:
- Si aparece “command not found: npm”, instala Node.js desde nodejs.org.
- Si dice “EACCESS” o “permission denied”, ejecuta `sudo npm install` o corrige permisos con `npx fix-npm-permissions`.
- Si muestra “You have not agreed to the Xcode license” en Mac, ejecuta `sudo xcodebuild -license accept`.
- Si dice “address already in use :4321”, otro programa usa ese puerto; Astro usará otro automáticamente (por ejemplo :4322).

La estructura recomendada del proyecto es la siguiente:
astro-cies/
├── public/ (imágenes, íconos, robots.txt, etc.)
├── src/ (components, layouts, pages, styles, scripts)
├── .github/workflows/deploy.yml
├── .gitignore
├── package.json
├── astro.config.mjs
└── README.md


















# Astro Starter Kit: Minimal

```sh
npm create astro@latest -- --template minimal
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
