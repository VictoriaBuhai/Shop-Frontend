import { makeStyles } from "@mui/styles";

export const BascetStyles = makeStyles(() => ({
  order: {
    position: "relative",
    cursor: "pointer",
    "& svg": {
      transition: "all 0.3s",
    },
    "&:hover svg": {
      color: "darkgray",
    },
  },
  counter: {
    position: "absolute",
    borderRadius: "50%",
    backgroundColor: "lightslategray",
    color: "white",
    top: "-5px",
    right: "-5px",
    padding: "4px",
    width: "20px",
    height: "20px",
    fontSize: "10px",
    textAlign: "center",
  },
}));
