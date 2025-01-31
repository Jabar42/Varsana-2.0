// src/App.tsx

import { createResource } from "solid-js";
import { fetchBlogs } from "./api";  // Asegúrate de que la ruta sea correcta

const App = () => {
  const [blogs] = createResource(fetchBlogs);

  return (
    <div>
      <h1>Lista de Blogs</h1>
      <ul>
        {blogs.loading && <p>Cargando...</p>}
        {blogs()?.data?.length === 0 && <p>No hay blogs disponibles.</p>}
        {blogs()?.data?.map((blog) => (
          <li key={blog.id}>
            <h2>{blog.Title}</h2>  {/* Título de la entrada */}
            <p>
              {/* Extraer el texto del contenido */}
              {blog.Content?.map((contentItem, index) => (
                <span key={index}>{contentItem.children[0]?.text}</span>  // Aquí obtenemos el texto
              ))}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
