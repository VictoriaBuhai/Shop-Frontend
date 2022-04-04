import { Grid } from "@mui/material";
import ProductCard, { productType } from "../ProductCard";
import "./styles.css";
import PropTypes, { object } from "prop-types";

export const ProductsList = ({ products, setProducts }) => {
  return (
    <Grid container className="list">
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
