import { BASE_URL } from "../config/baseUrl";
export async function getArticle(offset) {
  const response = await fetch(`${BASE_URL}/api/todo?page=${offset}`);
  const data = await response.json();
  return data.data;
}
