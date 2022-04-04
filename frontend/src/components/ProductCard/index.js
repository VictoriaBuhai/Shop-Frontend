import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActions, Box } from "@mui/material";
import { Link } from "react-router-dom";
import "./styles.css";
import { OrderFunction } from "../../App";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { editProduct } from "../../api/api";
import PropTypes from "prop-types";

export default function ProductCard({ product, setProducts }) {
  const { addButton } = React.useContext(OrderFunction);

  const click = async (product) => {
    const newProduct = await editProduct(product._id, {
      isFavorite: !product.isFavorite,
    });

    setProducts((prev) =>
      prev.map((item) => {
        if (newProduct._id === item._id) {
          item = newProduct;
        }
        return item;
      })
    );
  };

  return (
    <Card sx={{ maxWidth: 500 }} className="product-card">
      <Box className="box">
        <CardMedia
          component="img"
          height="200"
          image={product.imagePath}
          alt="img"
        />
        <CardContent className="content">
          <div>
            <Typography gutterBottom variant="h5" component="div">
              {product.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {product.price}$
            </Typography>
          </div>
          {product.isFavorite ? (
            <FavoriteIcon className="heart" onClick={() => click(product)} />
          ) : (
            <FavoriteBorderIcon
              className="heart"
              onClick={() => click(product)}
            />
          )}
        </CardContent>
      </Box>
      <CardActions>
        <Button
          size="small"
          color="primary"
          className="add-button"
          onClick={() => addButton(product)}
        >
          Add to order
        </Button>
      </CardActions>
      <Link
        to={`/products/${product.slug}/${product._id}`}
        key={product._id}
        className="link"
      />
    </Card>
  );
}

export const productType = PropTypes.shape({
  name: PropTypes.string,
  information: PropTypes.string,
  price: PropTypes.number,
  imgPath: PropTypes.string,
  slug: PropTypes.string,
});

ProductCard.propTypes = {
  product: productType,
  setProducts: PropTypes.func,
};
