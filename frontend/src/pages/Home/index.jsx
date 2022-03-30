import { Button } from "@mui/material";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import "./styles.css";
import { useEffect, useState } from "react";
import { getProducts } from "../../api/api";
import { ProductsList } from "../../components/ProductsList";
//import { ProductsList } from "./components/ProductsList";

export const Home = ({ addButton }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const apiProducts = await getProducts();
      setProducts(apiProducts);
    })();
  }, []);

  return (
    <>
      <header>
        <div className="display">
          <Button>
            <HomeRoundedIcon />
          </Button>
          <h1>Products</h1>
          <ShoppingCartRoundedIcon />
        </div>
      </header>
      <div className="container">
        <ProductsList products={products} addButton={addButton} />
      </div>
    </>
  );
};
