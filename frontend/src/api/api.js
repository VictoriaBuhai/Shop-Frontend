const URL = "http://localhost:4040";

export const getProducts = () => {
  return fetch(`${URL}/products`).then((response) => response.json());
};

export const getProductById = (id) => {
  return fetch(`${URL}/products/${id}`);
};
