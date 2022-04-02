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

  return <ProductsList products={favorites} />;
};
