import { makeStyles } from "@mui/styles";

export const ProductCardStyles = makeStyles(() => ({
  addButton: {
    position: "relative",
    zIndex: "2",
  },

  box: {
    position: "relative",
  },
  heart: {
    position: "relative",
    cursor: "pointe",
    color: "crimson",

    zIndex: "2",
  },
  productCard: {
    position: "relative",
  },
  link: {
    position: "absolute",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    zIndex: "0",
    textDecoration: "none",
  },
  content: {
    display: "flex",
    justifyContent: "space-between",
  },
}));
