// src/App.tsx

import { createResource, JSX } from "solid-js";
import { fetchBlogs } from "./api";  // Asegúrate de que la ruta sea correcta

type Blog = {
  Title: string;
  Content: { children: { text: string }[] }[];
};

const App = () => {
  const [blogs] = createResource(fetchBlogs);

  return (
    <div class="min-h-screen bg-gray-50 p-6">
      <h1 class="text-3xl font-bold text-center text-indigo-600 mb-6">Lista de Blogs</h1>
      
      <ul class="space-y-6">
        {blogs.loading && <p class="text-center text-gray-500">Cargando...</p>}
        {blogs()?.data?.length === 0 && <p class="text-center text-gray-500">No hay blogs disponibles.</p>}
        
        {blogs()?.data?.map((blog) => (
          <li  class="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <h2 class="text-2xl font-semibold text-indigo-700">{blog.Title}</h2>
            <p class="mt-2 text-gray-700">
              {blog.Content?.map((contentItem: { children: { text: number | boolean | Node | JSX.ArrayElement | (string & {}); }[]; }, index: any) => (
                <span class="block">{contentItem.children[0]?.text}</span>
              ))}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;

