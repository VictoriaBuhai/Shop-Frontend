import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActions, Box } from "@mui/material";
import { Link } from "react-router-dom";

export default function ProductCard({ product, addButton }) {
  return (
    <Card sx={{ maxWidth: 500 }}>
      <Box>
        <Link
          to={`/products/${product.slug}/${product._id}`}
          key={product._id}
          className="link"
        >
          <CardMedia
            component="img"
            height="200"
            image={product.imagePath}
            alt="img"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {product.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {product.price}$
            </Typography>
          </CardContent>
        </Link>
      </Box>
      <CardActions>
        <Button size="small" color="primary" onClick={() => addButton(product)}>
          Add to order
        </Button>
      </CardActions>
    </Card>
  );
}
