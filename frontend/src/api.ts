// src/api.ts

import axios from "axios";

const API_URL = "http://localhost:1337/api";

// Define el tipo de los blogs
interface Blog {
  id: number;
  attributes: {
    Title: string;  // Asegúrate de que "title" es el nombre correcto del campo
  };
}

interface FetchBlogsResponse {
  data: Blog[];
}

export const fetchBlogs = async (): Promise<FetchBlogsResponse> => {
  try {
    const response = await axios.get<FetchBlogsResponse>(`${API_URL}/blogs`);
    return response.data;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return { data: [] };  // Devuelve un array vacío en caso de error
  }
};
