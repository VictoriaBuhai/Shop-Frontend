import { Grid } from "@mui/material";
import { ProductCard, productType } from "../ProductCard";

import PropTypes from "prop-types";
import { ProductListStyles } from "./styles";

export const ProductsList = ({ products, setProducts }) => {
  const styles = ProductListStyles();
  return (
    <Grid container className={styles.list}>
      {products.map((product) => {
        return (
          <Grid item xs={11} sm={5} md={3}>
            <ProductCard
              key={product._id}
              product={product}
              setProducts={setProducts}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

ProductsList.propTypes = {
  products: PropTypes.arrayOf(productType),
  setProducts: PropTypes.func,
};
