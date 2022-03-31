import { Button } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../api/api";
import { OrderFunction } from "../../App";
import "./styles.css";

export const ProductPage = () => {
  const params = useParams();

  const { addButton } = useContext(OrderFunction);

  const [product, setProduct] = useState({});

  useEffect(() => {
    (async () => {
      const apiProduct = await getProductById(params.id);
      setProduct(apiProduct);
    })();
  }, []);

  return (
    <>
      <div className="info">
        <img src={product.imagePath} alt="img" />
        <div className="text">
          <h1>{product.name}</h1>
          <h2>Price: {product.price}$</h2>
          <h3>Information</h3>
          <p>{product.information}</p>
          <Button onClick={() => addButton(product)}>Add to order</Button>
        </div>
      </div>
    </>
  );
};
