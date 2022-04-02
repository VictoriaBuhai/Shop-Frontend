const URL = "http://localhost:4040";

export const getProducts = () => {
  return fetch(`${URL}/products`).then((response) => response.json());
};

export const getProductById = (id) => {
  return fetch(`${URL}/products/${id}`).then((response) => response.json());
};

export const getFavorites = () => {
  return fetch(`${URL}/products/favorites`).then((response) => response.json());
};

export const editProduct = (id, body) => {
  return fetch(`${URL}/products/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  }).then((response) => response.json());
};
