import { makeStyles } from "@mui/styles";

export const AboutStyles = makeStyles((theme) => ({
  about: {
    display: "flex",
    gap: "20px",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
}));
