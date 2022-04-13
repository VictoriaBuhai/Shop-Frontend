import axios from "axios";

axios.defaults.baseURL = "http://localhost:4040";

axios.interceptors.response.use((response) => response.data);

export const getProducts = () => {
  return axios.get(`/products`);
};

export const getProductById = (id) => {
  return axios.get(`/products/${id}`);
};

export const getFavorites = () => {
  return axios.get(`/products/favorites`);
};

export const editProduct = (id, body) => {
  return axios.put(`/products/${id}`, body);
};
// export const getProducts = () => {
//   return fetch(`${URL}/products`).then((response) => response.json());
// };

// export const getProductById = (id) => {
//   return fetch(`${URL}/products/${id}`).then((response) => response.json());
// };

// export const getFavorites = () => {
//   return fetch(`${URL}/products/favorites`).then((response) => response.json());
// };

// export const editProduct = (id, body) => {
//   return fetch(`${URL}/products/${id}`, {
//     method: "PUT",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(body),
//   }).then((response) => response.json());
// };
