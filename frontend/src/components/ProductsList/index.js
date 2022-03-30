import { Grid } from "@mui/material";
import ProductCard from "../ProductCard";
import "./styles.css";

export const ProductsList = ({ products }) => {
  return (
    <Grid container className="list">
      {products.map((product) => {
        return (
          <Grid item xs={11} sm={5} md={3}>
            <ProductCard key={product._id} product={product} />
          </Grid>
        );
      })}
    </Grid>
  );
};
