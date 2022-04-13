import { useCallback, useEffect, useState, useRef } from "react";
import { getProducts } from "../../api/api";
import { ProductsList } from "../../components/ProductsList";
import { HomeStyles } from "./styles";
//import { Button } from "@mui/material";

export const Home = () => {
  const [products, setProducts] = useState([]);
  const [counter, setCounter] = useState(3);
  const ref = useRef(null);
  const styles = HomeStyles();

  const handleObserver = useCallback((entries) => {
    const target = entries[0];
    //console.log(target);
    if (target.isIntersecting) {
      setCounter((prev) => prev + 3);
    }
  }, []);

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: "0px",
      threshold: 0,
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (ref.current) observer.observe(ref.current);
  }, [handleObserver]);

  //   const show = () => {
  //     setCounter((prev) => prev + 3);
  //   };

  useEffect(() => {
    (async () => {
      const apiProducts = await getProducts();
      console.log(apiProducts);
      setProducts(apiProducts);
    })();
  }, []);

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Home</h1>
        <ProductsList
          products={products.slice(0, counter)}
          setProducts={setProducts}
        />
        <div ref={ref} />
        {/* <Button onClick={() => show()} disabled={counter >= products.length}>
          Show more
        </Button> */}
      </div>
    </>
  );
};
