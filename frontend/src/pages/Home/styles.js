import { makeStyles } from "@mui/styles";

export const HomeStyles = makeStyles(() => ({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "30px",
    marginBottom: "10px",
  },
  title: {
    fontFamily: "sans-serif",
    textTransform: "uppercase",
    color: "lightslategray",
    opacity: "0.5",
  },
}));
