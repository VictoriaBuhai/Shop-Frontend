import { makeStyles } from "@mui/styles";

export const ProductPageStyles = makeStyles((theme) => ({
  info: {
    maxWidth: "1280px",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    gap: "30px",
    marginBottom: "30px",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
}));
