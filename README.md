# 🚀 Node.js + TypeScript + MongoDB + tRPC + Tailwind + React + Vite

![App Banner](frontend/src/assets/image.png)

Una aplicación full-stack moderna que permite gestionar notas con funcionalidades CRUD utilizando tecnologías de última generación como:

- 🟩 Node.js
- 🟦 TypeScript
- 🍃 MongoDB
- 🔄 tRPC
- 🌬 Tailwind CSS
- ⚛️ React
- ⚡ Vite

---

## 📁 Estructura del Proyecto

```css
package.json
tsconfig.json
client/
  ├── .gitignore
  ├── eslint.config.js
  ├── index.html
  ├── package.json
  ├── README.md
  ├── tsconfig.app.json
  ├── tsconfig.json
  ├── tsconfig.node.json
  ├── vite.config.ts
  ├── public/
  │   └── vite.svg
  └── src/
      ├── App.css
      ├── App.tsx
      ├── AppContent.tsx
      ├── index.css
      ├── main.tsx
      ├── trpc.ts
      ├── vite-env.d.ts
      ├── assets/
      │   └── react.svg
      └── components/
          ├── NameApp.tsx
          ├── NodeList.tsx
          ├── NoteCard.tsx
          └── NoteForm.tsx
src/
  ├── app.ts
  ├── db.ts
  ├── index.ts
  ├── trpc.ts
  ├── models/
  │   └── note.ts
  └── routes/
      └── notes.ts
```

---

## 🛠️ Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/CasseliLayza/NODEJS_TYPESCRIPT_MONGODB_TRPC_CRUD_TAILWIND_STACK_MERN.git
cd NODEJS_TYPESCRIPT_MONGODB_TRPC_CRUD_TAILWIND_STACK_MERN
```

2. Instala las dependencias del servidor:

```bash
npm install
```

3. Instala las dependencias del cliente:

```bash
cd client
npm install
```

---

## ⚙️ Configuración

Asegúrate de tener MongoDB corriendo localmente en:

```bash
mongodb://localhost:27018/trpcdb
```

---

## 📜 Scripts

### 🔌 Servidor

- `npm run dev`: Inicia el servidor en modo desarrollo.

### 💻 Cliente

- `npm run dev`: Inicia la aplicación cliente en modo desarrollo.
- `npm run build`: Compila la aplicación cliente para producción.
- `npm run lint`: Ejecuta ESLint para analizar el código.
- `npm run preview`: Previsualiza la aplicación cliente compilada.

---

## 🧩 Estructura del Código

### 📦 Servidor

- `src/app.ts`: Configuración del servidor Express y rutas tRPC.
- `src/db.ts`: Conexión a la base de datos MongoDB.
- `src/index.ts`: Punto de entrada del servidor.
- `src/models/note.ts`: Modelo de datos para las notas.
- `src/routes/notes.ts`: Rutas tRPC para las notas.
- `src/trpc.ts`: Configuración de tRPC.

### 🖼 Cliente

- `client/src/App.tsx`: Componente principal de la aplicación React.
- `client/src/AppContent.tsx`: Contenido principal de la aplicación.
- `client/src/components/NameApp.tsx`: Componente para el nombre de la app.
- `client/src/components/NodeList.tsx`: Listado de notas.
- `client/src/components/NoteCard.tsx`: Tarjeta individual de nota.
- `client/src/components/NoteForm.tsx`: Formulario para crear/editar notas.
- `client/src/trpc.ts`: Configuración de tRPC en el cliente.

---



## 🤝 Contribuciones

¿Te gustaría mejorar esta API? ¡Pull requests, sugerencias y feedback son siempre bienvenidos!

---

## 📄 Licencia

Este proyecto está bajo la licencia [MIT](https://opensource.org/licenses/MIT).

---

## ✨ Autor

Desarrollado con 💻 por [CasseliLayza](https://github.com/CasseliLayza)
