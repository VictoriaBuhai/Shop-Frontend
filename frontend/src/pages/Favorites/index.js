import { useEffect, useState } from "react";
import { getFavorites } from "../../api/api";
import { ProductsList } from "../../components/ProductsList";

export const Favorites = ({ products }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    (async () => {
      const apiFavorites = await getFavorites();
      setFavorites(apiFavorites);
    })();
  }, []);

  return (
    <>
      <h1 className="title">Favorites</h1>
      <ProductsList products={favorites} />;
    </>
  );
};
