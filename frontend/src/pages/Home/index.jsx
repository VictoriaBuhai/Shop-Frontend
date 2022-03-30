import "./styles.css";
import { useEffect, useState } from "react";
import { getProducts } from "../../api/api";
import { ProductsList } from "../../components/ProductsList";
import { Button } from "@mui/material";

export const Home = () => {
  const [products, setProducts] = useState([]);
  const [counter, setCounter] = useState(3);

  const show = () => {
    setCounter((prev) => prev + 3);
  };

  useEffect(() => {
    (async () => {
      const apiProducts = await getProducts();
      setProducts(apiProducts);
    })();
  }, []);

  return (
    <>
      <div className="container">
        <ProductsList products={products.slice(0, counter)} />
        <Button onClick={() => show()} disabled={counter >= products.length}>
          Show more
        </Button>
      </div>
    </>
  );
};
