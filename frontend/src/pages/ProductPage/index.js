import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../api/api";
import "./styles.css";

export const ProductPage = () => {
  const params = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {
    (async () => {
      const apiProduct = await getProductById(params.id);
      console.log(apiProduct);
      setProduct(apiProduct);
    })();
  });

  return (
    <>
      <div className="info">
        <img src={product.imagePath} alt="img" />
        <div className="text">
          <h1>
            {product.name} {product.price}$
          </h1>
          <p>{product.information}</p>
        </div>
      </div>
    </>
  );
};
